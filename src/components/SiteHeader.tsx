// src/components/SiteHeader.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Cierra el menú al cambiar de ruta
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* === LOGO === */}
        <Logo
          href="/"
          variant="full"
          className="text-slate-900"
          subscript="Developers"
        />

        {/* === NAV DESKTOP === */}
        <nav className="hidden md:flex gap-6 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover:text-slate-900",
                pathname === item.href
                  ? "text-slate-900 font-medium"
                  : "text-slate-600"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* === CTA DESKTOP === */}
        <Link href="/contacto" className="hidden md:inline-flex">
          <Button>Agenda una llamada</Button>
        </Link>

        {/* === TOGGLE MÓVIL === */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 bg-white/80 px-3 py-2 text-slate-700 hover:bg-white transition"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Ícono hamburguesa simple */}
          <span className="relative block w-5 h-3.5">
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-0.5 bg-slate-700 transition-transform",
                open && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 top-[7px] h-0.5 bg-slate-700 transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-0.5 bg-slate-700 transition-transform",
                open && "-translate-y-[7px] -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      {/* === PANEL MÓVIL === */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden transition-[max-height,opacity] duration-200 ease-out overflow-hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 pb-3">
          <nav className="flex flex-col gap-2 py-2 text-sm">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 hover:bg-slate-100",
                  pathname === item.href
                    ? "text-slate-900 font-medium"
                    : "text-slate-700"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA móvil */}
            <Link href="/contacto" onClick={() => setOpen(false)}>
              <Button className="mt-2 w-full">Agenda una llamada</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
