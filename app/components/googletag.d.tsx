declare global {
  interface Window {
    googletag: {
      cmd: Array<() => void>;
      // Banner ad
      defineSlot: (
        adUnitPath: string,
        size: number[],
        divId: string
      ) => { addService: (service: unknown) => void } | null;
      // Rewarded ad
      defineOutOfPageSlot: (
        adUnitPath: string,
        format: unknown
      ) => unknown | null;
      pubads: () => {
        addEventListener: (event: string, handler: (e: unknown) => void) => void;
      };
      enableServices: () => void;
      display: (slotOrId: unknown) => void;
      destroySlots: (slots?: unknown[]) => void;
      enums: { OutOfPageFormat: { REWARDED: unknown } };
      pubadsReady?: boolean;
    };
  }
}

export {};
