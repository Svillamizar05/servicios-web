// src/components/BundleCard.tsx
"use client";

import { useMemo } from "react";
import { Check } from "lucide-react";
import { formatCurrency } from "@/lib/money";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import CheckoutButton from "@/components/CheckoutButton";

type Props = {
  proMonthly: number;
  growthMonthly: number;
  months?: number;
  discountSuggested?: number;
  bundleTotalOverride?: number | null;
  currency?: "USD" | "COP";
  ctaHref?: string; // si no se pasa, usa la env
};

function withUtm(url: string, plan = "bundle3m") {
  if (!url) return "#";
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}utm_source=web&utm_medium=pricing&utm_campaign=checkout&plan=${encodeURIComponent(plan)}`;
}

export default function BundleCard({
  proMonthly,
  growthMonthly,
  months = 3,
  discountSuggested = 0.2,
  bundleTotalOverride = null,
  currency = "COP",
  ctaHref = (process.env.NEXT_PUBLIC_CHECKOUT_BUNDLE3M_URL as string) ||
            (process.env.NEXT_PUBLIC_CHECKOUT_BUNDLE_URL as string) || "#",
}: Props) {
  const originalTotal = useMemo(() => (proMonthly + growthMonthly) * months, [proMonthly, growthMonthly, months]);
  const bundleTotal = useMemo(() => bundleTotalOverride ?? Math.round(originalTotal * (1 - discountSuggested)), [bundleTotalOverride, originalTotal, discountSuggested]);
  const discountPct = Math.round((1 - bundleTotal / originalTotal) * 100);
  const checkoutUrl = withUtm(ctaHref, "bundle3m");

  const SHRINK =
    "h-full transform-gpu will-change-transform transition-transform duration-200 ease-out hover:scale-[0.985] active:scale-[0.975]";

  return (
    <div className="h-full">
      {/* Borde exterior gradiente animado */}
      <div className="rounded-[28px] p-[1px]
                      [background:linear-gradient(135deg,theme(colors.violet.500),theme(colors.fuchsia.400),theme(colors.violet.500))]
                      [background-size:200%_100%] animate-[border-pan_6s_linear_infinite]
                      transition-shadow hover:shadow-[0_25px_80px_-20px_rgba(139,92,246,0.45)]">
        <div className={SHRINK}>
          {/* Box con gradiente interior (solo bundle) */}
          <Card
            className="
              h-full flex flex-col border-0 rounded-[26px]
              text-white
              bg-[linear-gradient(135deg,theme(colors.violet.600),theme(colors.fuchsia.500))]
              shadow-md
            "
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-base md:text-lg font-semibold tracking-tight">
                  Bundle {months} meses
                </CardTitle>
                <span
                  className="rounded-full border border-white/30 px-2 py-0.5 text-[11px] leading-none text-white/90 bg-white/10"
                  title={`Ahorro vs. ${formatCurrency(originalTotal, currency)}`}
                >
                  -{discountPct}% OFF
                </span>
              </div>
              <CardDescription className="mt-1 text-[13px] text-white/85">
                Incluye el sitio Pro + {months} meses de Growth. Pago único con descuento aplicado.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-[2px] text-white" /> Sitio Pro completo</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-[2px] text-white" /> {months} meses de mejoras (Growth)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-[2px] text-white" /> Soporte y optimización continua</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-[2px] text-white" /> Ahorro sobre pagar por separado</li>
              </ul>
            </CardContent>

            <CardFooter className="mt-auto flex items-end justify-between gap-4 pt-4">
              <div>
                <div className="text-xl md:text-2xl font-bold">{formatCurrency(bundleTotal, currency)}</div>
                <div className="text-xs text-white/80 line-through">{formatCurrency(originalTotal, currency)}</div>
                <div className="text-[11px] text-white/80 mt-1">Equivale a {months} meses de Pro + Growth</div>
              </div>

              {/* ⬇️ Aquí usamos el nuevo CheckoutButton */}
              <CheckoutButton href={checkoutUrl}>
                Empezar ahora
              </CheckoutButton>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
