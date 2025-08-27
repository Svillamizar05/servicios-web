// src/components/Pricing.tsx
"use client";

import { PRICES, SITE } from "@/lib/site";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type PricePlan = {
  readonly name: string;
  readonly price: string;
  readonly features: readonly string[];
  readonly tag?: string;
  readonly featured?: boolean;
  readonly badge?: string;
};

const PLANS = PRICES as ReadonlyArray<PricePlan>;

export default function Pricing() {
  const FIXED_CARD_H = "md:h-[460px]";

  function buildEmailLinks(planName: string) {
    const to = SITE.email || "contacto@hexaweb.com";
    const subject = `Solicitud de cotización – ${planName}`;
    const body = `Hola HexaWeb,

Estoy interesado en el plan "${planName}". Por favor envíenme la cotización y tiempos de entrega.

Nombre:
Teléfono/WhatsApp:
Empresa (opcional):
Sitio actual (si aplica):
Comentarios:

Gracias.`;

    const enc = (s: string) => encodeURIComponent(s);
    const mailto = `mailto:${to}?subject=${enc(subject)}&body=${enc(body)}`;
    const gmail  = `https://mail.google.com/mail/?view=cm&to=${enc(to)}&su=${enc(subject)}&body=${enc(body)}`;
    return { mailto, gmail };
  }

  const SHRINK =
    "h-full transform-gpu will-change-transform transition-transform duration-200 ease-out hover:scale-[0.985] active:scale-[0.975]";

  return (
    <section className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3 items-stretch">
        {PLANS.map((plan) => {
          const isFeatured = !!plan.featured;
          const badge = plan.badge;

          const tagLines = String(plan.tag ?? "")
            .split(/\n|\/n/)
            .map((s) => s.trim())
            .filter(Boolean);

          const { mailto, gmail } = buildEmailLinks(plan.name);

          const CardInner = (
            <Card
              style={{ backgroundImage: "none" }}
              className={cn(
                "flex flex-col h-full",
                FIXED_CARD_H,
                "border bg-white text-slate-900 backdrop-blur-[2px]",
                "transition-[box-shadow] hover:shadow-md",
                isFeatured && "border-0"
              )}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-sm font-semibold tracking-tight">
                    {plan.name}
                  </CardTitle>
                  {badge && (
                    <span className="rounded-full border px-2 py-0.5 text-[11px] leading-none text-slate-700 bg-white/80">
                      {badge}
                    </span>
                  )}
                </div>
                <div className="mt-1 text-2xl font-bold tracking-tight">
                  {plan.price}
                </div>
                <CardDescription className="mt-2 text-[13px] text-slate-500 line-clamp-2">
                  {tagLines.join(" · ")}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm text-slate-700 md:max-h-[170px] md:overflow-hidden">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto pt-4">
                <button
                  type="button"
                  className="inline-flex w-full md:w-auto items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition"
                  onClick={() => {
                    try { window.open(gmail, "_blank", "noopener,noreferrer"); } catch {}
                    try { window.location.href = mailto; } catch {}
                  }}
                >
                  Solicitar cotización
                </button>
              </CardFooter>
            </Card>
          );

          return (
            <div key={plan.name} className="h-full">
              {isFeatured ? (
                <div
                  className={cn(
                    "rounded-[28px] p-[1px]",
                    "[background:linear-gradient(135deg,theme(colors.violet.500),theme(colors.fuchsia.400),theme(colors.violet.500))]",
                    "[background-size:200%_100%] animate-[border-pan_6s_linear_infinite]",
                    "transition-shadow hover:shadow-[0_25px_80px_-20px_rgba(139,92,246,0.45)]",
                    FIXED_CARD_H
                  )}
                >
                  <div className={SHRINK}>{CardInner}</div>
                </div>
              ) : (
                <div className={SHRINK}>{CardInner}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
