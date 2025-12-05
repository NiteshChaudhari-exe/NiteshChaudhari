"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

function GoogleAnalyticsContent() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize GA when component mounts
  useEffect(() => {
    if (!gaId) return;

    // Add Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);
  }, [gaId]);

  // Track page views on route change
  useEffect(() => {
    if (!gaId || typeof window.gtag === "undefined") return;

    const url = `${pathname}${searchParams ? `?${searchParams}` : ""}`;
    window.gtag("config", gaId, {
      page_path: url,
    });
  }, [pathname, searchParams, gaId]);

  return null;
}

export function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsContent />
    </Suspense>
  );
}
