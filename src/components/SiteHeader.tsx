"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { SITE, NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-2xl bg-slate-900 grid place-items-center text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-semibold">{SITE.brand}</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover:text-slate-900",
                pathname === item.href ? "text-slate-900 font-medium" : "text-slate-600"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contacto" className="hidden md:inline-flex">
          <Button>Agenda una llamada</Button>
        </Link>
      </div>
    </header>
  );
}
