import type React from "react";

// For links to the home page (the logos). On the home page itself a click does nothing by default
// (same URL), so scroll smoothly back to the top instead. Elsewhere the link navigates as usual and
// Next.js opens the home page at the top. Ctrl/Cmd/Shift-clicks (new tab/window) are left alone.
export function scrollToTopIfHome(e: React.MouseEvent) {
  if (window.location.pathname !== "/") return;
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  // Drop a leftover #section from the address bar (e.g. after a /#moments link)
  if (window.location.hash) window.history.replaceState(null, "", "/");
}
