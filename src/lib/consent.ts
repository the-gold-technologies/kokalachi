"use client";

import { useSyncExternalStore } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// The visitor's choice about advertising cookies (the Meta Pixel), saved in their browser.
// "pending" is only seen during server rendering/hydration, before the browser has been read.
export type AdConsent = "granted" | "denied" | "unset" | "pending";

const STORAGE_KEY = "kokalachi-ad-consent";
const CHANGE_EVENT = "kokalachi:consent-change";
const OPEN_SETTINGS_EVENT = "kokalachi:open-cookie-settings";

function readConsent(): AdConsent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : "unset";
  } catch {
    return "unset";
  }
}

export function setAdConsent(value: "granted" | "denied") {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage blocked (e.g. private mode): the choice still applies for this page view
  }

  // If the pixel already loaded this visit, tell Meta about the change too
  window.fbq?.("consent", value === "granted" ? "grant" : "revoke");
  if (value === "denied") clearMetaCookies();

  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: value }));
}

// Remove Meta's first-party cookies when someone says no
function clearMetaCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const name of ["_fbp", "_fbc"]) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange); // choice made in another tab
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useAdConsent(): AdConsent {
  return useSyncExternalStore(subscribe, readConsent, () => "pending");
}

// "Cookie settings" in the footer reopens the banner from any page
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

export function onOpenCookieSettings(handler: () => void) {
  window.addEventListener(OPEN_SETTINGS_EVENT, handler);
  return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handler);
}
