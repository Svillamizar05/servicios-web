// src/components/CheckoutButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function CheckoutButton({
  href,
  children,
  size = "sm",
}: {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "default" | "lg" | "icon";
}) {
  const disabled = !href || href === "#";

  useEffect(() => {
    if (disabled) {
      console.warn("[Checkout] Falta URL del checkout para este plan.");
    }
  }, [disabled]);

  if (disabled) {
    return (
      <Button size={size} variant="outline" disabled title="Pronto disponible">
        {children}
      </Button>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button size={size} variant="outline">{children}</Button>
    </a>
  );
}
