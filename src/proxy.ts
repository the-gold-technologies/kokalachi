import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const adminSession = request.cookies.get('admin_session')?.value
  
  // Protect all /admin routes except /admin/login
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    if (adminSession !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Redirect logged-in admins away from the login page
  if (request.nextUrl.pathname.startsWith('/admin/login')) {
    if (adminSession === 'authenticated') {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
