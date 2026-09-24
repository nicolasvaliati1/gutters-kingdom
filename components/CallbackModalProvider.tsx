"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type CallbackModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const CallbackModalContext = createContext<CallbackModalContextValue | null>(null);

export function CallbackModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return <CallbackModalContext.Provider value={value}>{children}</CallbackModalContext.Provider>;
}

export function useCallbackModal() {
  const context = useContext(CallbackModalContext);
  if (!context) {
    throw new Error("useCallbackModal must be used within a CallbackModalProvider");
  }
  return context;
}
