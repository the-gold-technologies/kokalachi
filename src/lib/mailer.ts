import nodemailer from "nodemailer"

// ─── Transporter ─────────────────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587 (STARTTLS)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  // Force IPv4 — some SMTP hosts resolve to IPv6 which may be unreachable
  family: 4,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
} as any)

// ─── Types ───────────────────────────────────────────────────────────────────

interface BookingEmailData {
  name: string
  email: string
  phone: string
  guests: number
  tripId: string
  tripName: string
  departureDate?: string
  totalAmount: number
  specialRequests?: string
}

// ─── Shared wrapper ───────────────────────────────────────────────────────────

function emailWrapper(content: string) {
  const year = new Date().getFullYear()
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
</head>
<body style="margin:0;padding:0;background:#F7F3EC;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F3EC;padding:48px 20px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:4px;overflow:hidden;">
        ${content}
        <tr>
          <td style="padding:28px 48px;border-top:1px solid #EDE8DF;">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Kokalachi Travel</p>
            <p style="margin:4px 0 0;font-family:Arial,sans-serif;font-size:11px;color:#C4BDB5;">&copy; ${year} Kokalachi. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim()
}

// Reservations for trips without an announced price are saved with a 0 total
function formatAmount(amount: number) {
  return amount > 0 ? `₹${amount.toLocaleString("en-IN")}` : "To be confirmed"
}

function departureLine(booking: BookingEmailData) {
  if (!booking.departureDate) return ""
  return `<p style="margin:4px 0 0;font-size:14px;color:#0E5A60;font-weight:600;font-family:Arial,sans-serif;">${booking.departureDate}</p>`
}

// ─── Admin Lead Alert ────────────────────────────────────────────────────────

export async function sendAdminLeadAlert(booking: BookingEmailData) {
  const adminEmail = process.env.ADMIN_EMAIL
  if (!adminEmail) {
    console.warn("[mailer] ADMIN_EMAIL not set — skipping admin alert")
    return
  }

  const formattedAmount = formatAmount(booking.totalAmount)
  const receivedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  const specialRequestsRow = booking.specialRequests
    ? `<tr>
        <td style="padding:24px 48px 0;">
          <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Special Requests</p>
          <p style="margin:0;font-size:15px;color:#5C5449;font-style:italic;line-height:1.6;">${booking.specialRequests}</p>
        </td>
      </tr>`
    : ""

  const content = `
    <tr><td style="background:#0E5A60;height:4px;font-size:0;line-height:0;">&nbsp;</td></tr>

    <tr>
      <td style="padding:48px 48px 32px;">
        <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:11px;color:#0E5A60;letter-spacing:2px;text-transform:uppercase;font-weight:600;">New Booking Lead</p>
        <h1 style="margin:0;font-size:28px;color:#0B2A3D;font-weight:600;line-height:1.3;font-family:Arial,sans-serif;">${booking.name}</h1>
        <p style="margin:8px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#A89F93;">${receivedAt} IST</p>
      </td>
    </tr>

    <tr><td style="padding:0 48px;"><div style="border-top:1px solid #EDE8DF;"></div></td></tr>

    <tr>
      <td style="padding:32px 48px 0;">
        <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Journey</p>
        <p style="margin:0;font-size:16px;color:#0B2A3D;line-height:1.5;font-family:Arial,sans-serif;">${booking.tripName}</p>
        ${departureLine(booking)}
      </td>
    </tr>

    <tr>
      <td style="padding:24px 48px 0;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:50%;vertical-align:top;padding-right:16px;">
              <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Group Size</p>
              <p style="margin:0;font-size:15px;color:#0B2A3D;font-family:Arial,sans-serif;">${booking.guests} Guest${booking.guests > 1 ? "s" : ""}</p>
            </td>
            <td style="width:50%;vertical-align:top;">
              <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Quote</p>
              <p style="margin:0;font-size:20px;color:#D96C2C;font-weight:700;font-family:Arial,sans-serif;">${formattedAmount}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding:24px 48px 0;">
        <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Contact</p>
        <p style="margin:0;font-size:14px;color:#0B2A3D;line-height:2;font-family:Arial,sans-serif;">
          <a href="mailto:${booking.email}" style="color:#0E5A60;text-decoration:none;">${booking.email}</a><br/>
          <a href="tel:${booking.phone}" style="color:#0B2A3D;text-decoration:none;">${booking.phone}</a>
        </p>
      </td>
    </tr>

    ${specialRequestsRow}

    <tr>
      <td style="padding:40px 48px;">
        <a href="mailto:${booking.email}?subject=Your%20${encodeURIComponent(booking.tripName)}%20Booking%20with%20Kokalachi"
           style="display:inline-block;background:#0E5A60;color:#ffffff;text-decoration:none;padding:14px 32px;font-family:Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.5px;border-radius:2px;">
          Reply to ${booking.name.split(" ")[0]} \u2192
        </a>
      </td>
    </tr>
  `

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: adminEmail,
    subject: `New Lead: ${booking.name} \u2014 ${booking.tripName}`,
    html: emailWrapper(content),
  })
}

// ─── Customer Confirmation ───────────────────────────────────────────────────

export async function sendCustomerConfirmation(booking: BookingEmailData) {
  const firstName = booking.name.split(" ")[0]

  const content = `
    <tr><td style="background:#0E5A60;height:4px;font-size:0;line-height:0;">&nbsp;</td></tr>

    <tr>
      <td style="padding:48px 48px 32px;">
        <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:11px;color:#0E5A60;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Kokalachi Travel</p>
        <h1 style="margin:0;font-size:26px;color:#0B2A3D;font-weight:600;line-height:1.4;font-family:Arial,sans-serif;">We've received your request, ${firstName}.</h1>
        <p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:15px;color:#5C5449;line-height:1.7;">
          Thank you for choosing Kokalachi. Our team will review your booking and be in touch within <strong style="color:#0B2A3D;">24 hours</strong> to confirm all the details.
        </p>
      </td>
    </tr>

    <tr><td style="padding:0 48px;"><div style="border-top:1px solid #EDE8DF;"></div></td></tr>

    <tr>
      <td style="padding:32px 48px 0;">
        <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Your Journey</p>
        <p style="margin:0;font-size:16px;color:#0B2A3D;line-height:1.5;font-family:Arial,sans-serif;">${booking.tripName}</p>
        ${departureLine(booking)}
      </td>
    </tr>

    <tr>
      <td style="padding:24px 48px 0;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:50%;vertical-align:top;padding-right:16px;">
              <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Guests</p>
              <p style="margin:0;font-size:15px;color:#0B2A3D;font-family:Arial,sans-serif;">${booking.guests} Person${booking.guests > 1 ? "s" : ""}</p>
            </td>
            <td style="width:50%;vertical-align:top;">
              <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Estimated Total</p>
              <p style="margin:0;font-size:20px;color:#D96C2C;font-weight:700;font-family:Arial,sans-serif;">${formatAmount(booking.totalAmount)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr><td style="padding:40px 48px 0;"><div style="border-top:1px solid #EDE8DF;"></div></td></tr>

    <tr>
      <td style="padding:32px 48px;">
        <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:13px;color:#A89F93;letter-spacing:0.5px;">Questions? We're here.</p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#0B2A3D;line-height:2.2;">
          <a href="tel:+919876543210" style="color:#0E5A60;text-decoration:none;">+91 98765 43210</a><br/>
          <a href="mailto:hello@kokalachi.com" style="color:#0E5A60;text-decoration:none;">hello@kokalachi.com</a>
        </p>
      </td>
    </tr>
  `

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: booking.email,
    subject: `Your ${booking.tripName} booking \u2014 Kokalachi`,
    html: emailWrapper(content),
  })
}

// ─── Contact Enquiry ──────────────────────────────────────────────────────────

export interface ContactEnquiryData {
  name: string
  email: string
  phone: string
  journey?: string
  travelDate?: string
  groupSize?: string
  message: string
  hearAboutUs?: string
}

const journeyLabels: Record<string, string> = {
  kashmir:   "The Houseboat Diaries (Kashmir)",
  meghalaya: "Roots & Rainbows (Meghalaya)",
  kerala:    "Tides & Tea Gardens (Kerala)",
  bhutan:    "The Thunder Dragon Trail (Bhutan)",
  help:      "Not sure yet — help me pick",
  other:     "Something else entirely",
}

const hearAboutLabels: Record<string, string> = {
  instagram: "Instagram",
  friend:    "A friend",
  google:    "Google Search",
  traveller: "Kokalachi Traveller",
  other:     "Other",
}

function formatDate(raw?: string) {
  if (!raw) return undefined
  try {
    return new Date(raw).toLocaleDateString("en-IN", {
      day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
    })
  } catch {
    return raw
  }
}

function cell(label: string, value: string) {
  return `<td style="width:50%;vertical-align:top;padding-right:12px;">
    <p style="margin:0 0 3px;font-family:Arial,sans-serif;font-size:10px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">${label}</p>
    <p style="margin:0;font-size:14px;color:#0B2A3D;font-family:Arial,sans-serif;">${value}</p>
  </td>`
}

export async function sendContactEnquiry(data: ContactEnquiryData) {
  const adminEmail = process.env.ADMIN_EMAIL
  if (!adminEmail) {
    console.warn("[mailer] ADMIN_EMAIL not set — skipping contact enquiry")
    return
  }

  const receivedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  })

  const journey    = data.journey    ? (journeyLabels[data.journey]    ?? data.journey)    : undefined
  const hearAbout  = data.hearAboutUs ? (hearAboutLabels[data.hearAboutUs] ?? data.hearAboutUs) : undefined
  const travelDate = formatDate(data.travelDate)

  const row2 = (a: [string, string | undefined], b: [string, string | undefined]) => {
    if (!a[1] && !b[1]) return ""
    return `<tr><td style="padding:16px 48px 0;">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        ${a[1] ? cell(a[0], a[1]) : '<td style="width:50%;"></td>'}
        ${b[1] ? cell(b[0], b[1]) : '<td style="width:50%;"></td>'}
      </tr></table>
    </td></tr>`
  }

  const enquiryContent = `
    <tr><td style="background:#0E5A60;height:4px;font-size:0;line-height:0;">&nbsp;</td></tr>

    <tr>
      <td style="padding:36px 48px 24px;">
        <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:11px;color:#0E5A60;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Contact Enquiry</p>
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td style="vertical-align:top;">
            <h1 style="margin:0;font-size:24px;color:#0B2A3D;font-weight:600;line-height:1.3;font-family:Arial,sans-serif;">${data.name}</h1>
            <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#A89F93;">${receivedAt} IST</p>
          </td>
        </tr></table>
      </td>
    </tr>

    <tr><td style="padding:0 48px;"><div style="border-top:1px solid #EDE8DF;"></div></td></tr>

    <tr>
      <td style="padding:20px 48px 0;">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td style="width:50%;vertical-align:top;padding-right:12px;">
            <p style="margin:0 0 3px;font-family:Arial,sans-serif;font-size:10px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Email</p>
            <a href="mailto:${data.email}" style="color:#0E5A60;text-decoration:none;font-size:14px;font-family:Arial,sans-serif;">${data.email}</a>
          </td>
          <td style="width:50%;vertical-align:top;">
            <p style="margin:0 0 3px;font-family:Arial,sans-serif;font-size:10px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Phone</p>
            <a href="tel:${data.phone}" style="color:#0B2A3D;text-decoration:none;font-size:14px;font-family:Arial,sans-serif;">${data.phone}</a>
          </td>
        </tr></table>
      </td>
    </tr>

    ${row2(["Journey", journey], ["Travel Date", travelDate])}
    ${row2(["Group Size", data.groupSize], ["Heard About Us", hearAbout])}

    ${data.message ? `<tr>
      <td style="padding:16px 48px 0;">
        <p style="margin:0 0 3px;font-family:Arial,sans-serif;font-size:10px;color:#A89F93;letter-spacing:1px;text-transform:uppercase;">Message</p>
        <p style="margin:0;font-size:14px;color:#5C5449;font-family:Arial,sans-serif;line-height:1.6;font-style:italic;">${data.message}</p>
      </td>
    </tr>` : ""}

    <tr>
      <td style="padding:28px 48px 36px;">
        <a href="mailto:${data.email}?subject=Re:%20Your%20Kokalachi%20Enquiry"
           style="display:inline-block;background:#0E5A60;color:#ffffff;text-decoration:none;padding:12px 28px;font-family:Arial,sans-serif;font-size:13px;font-weight:600;border-radius:2px;">
          Reply to ${data.name.split(" ")[0]} →
        </a>
      </td>
    </tr>
  `

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: adminEmail,
    subject: `Enquiry: ${data.name} — ${journey ?? "General"}`,
    html: emailWrapper(enquiryContent),
  })
}
