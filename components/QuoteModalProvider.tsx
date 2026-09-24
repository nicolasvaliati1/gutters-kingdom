"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type QuoteModalContextValue = {
  isOpen: boolean;
  source: string;
  defaultService: string;
  open: (options?: { source?: string; defaultService?: string }) => void;
  close: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("");
  const [defaultService, setDefaultService] = useState("");

  const open = useCallback((options?: { source?: string; defaultService?: string }) => {
    setSource(options?.source ?? "");
    setDefaultService(options?.defaultService ?? "");
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, source, defaultService, open, close }),
    [isOpen, source, defaultService, open, close]
  );

  return <QuoteModalContext.Provider value={value}>{children}</QuoteModalContext.Provider>;
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
