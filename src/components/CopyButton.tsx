//sr/components/CopyButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CopyButton({
  value,
  label = "Copiar",
  copiedLabel = "¡Copiado!",
  size = "sm",
}: {
  value: string;
  label?: string;
  copiedLabel?: string;
  size?: "sm" | "default" | "lg" | "icon";
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.warn("No se pudo copiar:", e);
    }
  }

  return (
    <Button size={size} variant="outline" onClick={onCopy}>
      {copied ? copiedLabel : label}
    </Button>
  );
}
