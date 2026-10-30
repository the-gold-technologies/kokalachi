"use client";

import { useEffect } from "react";

// "Custom Header / Footer Scripts" from CMS → SEO → Global, added once per visit.
// HTML set through innerHTML never runs its <script> tags; a contextual fragment does.
let injected = false;

export function CustomScripts({ head, footer }: { head: string | null; footer: string | null }) {
  useEffect(() => {
    if (injected) return;
    injected = true;
    const range = document.createRange();
    if (head?.trim()) document.head.appendChild(range.createContextualFragment(head));
    if (footer?.trim()) document.body.appendChild(range.createContextualFragment(footer));
  }, [head, footer]);

  return null;
}
