"use client";

import { useCallbackModal } from "@/components/CallbackModalProvider";

export function CallbackTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open } = useCallbackModal();

  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
