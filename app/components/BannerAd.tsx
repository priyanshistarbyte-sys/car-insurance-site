"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    googletag: {
      cmd: Array<() => void>;
      defineSlot: (adUnitPath: string, size: number[], divId: string) => { addService: (service: unknown) => void } | null;
      pubads: () => unknown;
      enableServices: () => void;
      display: (divId: string) => void;
      destroySlots: (slots?: unknown[]) => void;
      pubadsReady?: boolean;
    };
  }
}

interface BannerAdProps {
  slotId?: string;
  adUnit?: string;
  size?: [number, number];
}

export default function BannerAd({
  slotId = "banner-ad",
  adUnit = "/6355419/Travel/Europe/France/Paris",
  size = [300, 250],
}: BannerAdProps) {
  const slotRef = useRef<unknown>(null);

  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] };

    if (!document.getElementById("gpt-script")) {
      const script = document.createElement("script");
      script.id = "gpt-script";
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    window.googletag.cmd.push(() => {
      const slot = window.googletag.defineSlot(adUnit, size, slotId);
      if (!slot) return;
      slot.addService(window.googletag.pubads());
      slotRef.current = slot;
      window.googletag.enableServices();
      window.googletag.display(slotId);
    });

    return () => {
      window.googletag = window.googletag || { cmd: [] };
      window.googletag.cmd.push(() => {
        if (slotRef.current) {
          window.googletag.destroySlots([slotRef.current]);
          slotRef.current = null;
        }
      });
    };
  }, [slotId, adUnit, size]);

  return (
    <div
      id={slotId}
      style={{ minHeight: "250px", textAlign: "center", margin: "20px 0" }}
    />
  );
}
