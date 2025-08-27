// src/components/Logo.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // si no tienes cn, reemplaza por className directo

type LogoVariant = "mark" | "full" | "compact";

export function Logo({
  variant = "full",
  className,
  href = "/",
  title = "HexaWeb Developers",
  subscript = "Developers", // 👈 Texto subíndice
}: {
  variant?: LogoVariant;
  className?: string;
  href?: string;
  title?: string;
  subscript?: string;
}) {
  const Mark = (
    <span className="relative inline-block align-middle text-primary">
      <svg
        aria-hidden="true"
        viewBox="0 0 96 96"
        className="h-10 w-10"
        role="img"
      >
        {/* Hexágono */}
        <path
          d="M48 4 86 26v44L48 92 10 70V26L48 4Z"
          className="fill-current"
          opacity="0.10"
        />
        {/* H estilizada */}
        <path
          d="M32 24v48h8V52h16v20h8V24h-8v20H40V24h-8Z"
          className="fill-current"
        />
        {/* chispa decorativa */}
        <circle cx="72" cy="20" r="6" className="fill-current" opacity="0.9" />
      </svg>

      {/* Subíndice fuera del hexágono (borde inferior derecho) */}
      {subscript ? (
        <span className="absolute bottom-1 -right-20 text-[10px] font-medium opacity-80">
          {subscript}
        </span>
      ) : null}
    </span>
  );

  const Word = (
    <div className="flex items-center gap-2 leading-none">
      <span className="text-xl font-extrabold tracking-tight relative -top-2">
        HexaWeb
      </span>
    </div>
  );

  const CompactWord = (
    <span className="text-lg font-bold tracking-tight leading-none">
      HexaWeb
    </span>
  );

  return (
    <Link
      href={href}
      aria-label={title}
      className={cn(
        // un solo chunk clickeable
        "group inline-flex items-center p-1 -m-1",
        className
      )}
    >
      {/* Wrapper que escala TODO en hover */}
      <span
        className={cn(
          "inline-flex items-center gap-2 text-foreground",
          "transition-transform duration-200 ease-out origin-left",
          "group-hover:scale-[1.06]"
        )}
      >
        {Mark}

        {variant === "full" ? (
          Word
        ) : variant === "compact" ? (
          CompactWord
        ) : null}
      </span>
    </Link>
  );
}
