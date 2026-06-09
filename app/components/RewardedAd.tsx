"use client";
import { useEffect, useRef, useState } from "react";

interface RewardedAdProps {
  onClose: () => void;
}

type ModalType = "" | "reward" | "grant";

export default function RewardedAd({ onClose }: RewardedAdProps) {
  const slotRef = useRef<unknown>(null);
  const makeVisibleRef = useRef<(() => void) | null>(null);
  const rewardPayloadRef = useRef<{ amount: number; type: string } | null>(null);
  const [modalType, setModalType] = useState<ModalType>("");
  const [modalMessage, setModalMessage] = useState("");

  const destroySlot = () => {
    if (slotRef.current) {
      window.googletag?.cmd.push(() => {
        window.googletag.destroySlots([slotRef.current]);
        slotRef.current = null;
      });
    }
  };

  const dismissRewardedAd = () => {
    if (rewardPayloadRef.current) {
      setModalMessage(`You have been rewarded ${rewardPayloadRef.current.amount} ${rewardPayloadRef.current.type}!`);
      setModalType("grant");
      rewardPayloadRef.current = null;
    } else {
      setModalType("");
      destroySlot();
      onClose();
    }
    destroySlot();
  };

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
      const slot = window.googletag.defineOutOfPageSlot(
        "/22639388115/rewarded_web_example",
        window.googletag.enums.OutOfPageFormat.REWARDED
      );

      if (!slot) {
        onClose();
        return;
      }

      slotRef.current = slot;
      (slot as { addService: (s: unknown) => void }).addService(window.googletag.pubads());

      window.googletag.pubads().addEventListener("rewardedSlotReady", (event) => {
        const e = event as { makeRewardedVisible: () => void };
        makeVisibleRef.current = e.makeRewardedVisible;
        setModalMessage("Watch an ad to receive a special reward?");
        setModalType("reward");
      });

      window.googletag.pubads().addEventListener("rewardedSlotVideoCompleted", () => {});

      window.googletag.pubads().addEventListener("rewardedSlotClosed", dismissRewardedAd);

      window.googletag.pubads().addEventListener("rewardedSlotGranted", (event) => {
        const e = event as { payload: { amount: number; type: string } };
        rewardPayloadRef.current = e.payload;
      });

      window.googletag.pubads().addEventListener("slotRenderEnded", (event) => {
        const e = event as { slot: unknown; isEmpty: boolean };
        if (e.slot === slotRef.current && e.isEmpty) {
          onClose();
        }
      });

      window.googletag.enableServices();
      window.googletag.display(slot);
    });

    return () => { destroySlot(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!modalType) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white text-gray-900 rounded-lg p-8 text-center max-w-sm w-full mx-4 shadow-2xl">
        <p className="mb-6 text-base font-medium">{modalMessage}</p>

        {/* reward buttons - watch ad prompt */}
        {modalType === "reward" && (
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                makeVisibleRef.current?.();
                setModalType("");
              }}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-colors"
            >
              Watch Ad
            </button>
            <button
              onClick={() => { setModalType(""); destroySlot(); onClose(); }}
              className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded font-semibold transition-colors"
            >
              No Thanks
            </button>
          </div>
        )}

        {/* grant buttons - reward received */}
        {modalType === "grant" && (
          <button
            onClick={() => { setModalType(""); onClose(); }}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-colors"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
