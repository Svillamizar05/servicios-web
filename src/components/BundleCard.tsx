// src/components/BundleCard.tsx
"use client";

import { useMemo } from "react";
import { Check } from "lucide-react";
import { formatCurrency } from "@/lib/money";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { SITE } from "@/lib/site";

type Props = {
  proMonthly: number;
  growthMonthly: number;
  months?: number;
  discountSuggested?: number;
  bundleTotalOverride?: number | null;
  currency?: "USD" | "COP";
};

export default function BundleCard({
  proMonthly,
  growthMonthly,
  months = 3,
  discountSuggested = 0.2,
  bundleTotalOverride = null,
  currency = "COP",
}: Props) {
  const originalTotal = useMemo(
    () => (proMonthly + growthMonthly) * months,
    [proMonthly, growthMonthly, months]
  );
  const bundleTotal = useMemo(
    () => bundleTotalOverride ?? Math.round(originalTotal * (1 - discountSuggested)),
    [bundleTotalOverride, originalTotal, discountSuggested]
  );
  const discountPct = Math.round((1 - bundleTotal / originalTotal) * 100);

  const SHRINK =
    "h-full transform-gpu will-change-transform transition-transform duration-200 ease-out hover:scale-[0.985] active:scale-[0.975]";

  function buildEmailLinks() {
    const to = SITE.email || "contacto@hexaweb.com";
    const subject = `Solicitud de cotización – Bundle ${months} meses`;
    const body = `Hola HexaWeb,

Estoy interesado en el bundle de ${months} meses (Pro + Growth).
Por favor envíenme la cotización y tiempos de entrega.

Nombre:
Teléfono/WhatsApp:
Empresa (opcional):
Comentarios:

Gracias.`;

    const enc = (s: string) => encodeURIComponent(s);
    const mailto = `mailto:${to}?subject=${enc(subject)}&body=${enc(body)}`;
    const gmail  = `https://mail.google.com/mail/?view=cm&to=${enc(to)}&su=${enc(subject)}&body=${enc(body)}`;
    return { mailto, gmail };
  }

  const { mailto, gmail } = buildEmailLinks();

  return (
    <div className="h-full">
      <div
        className="rounded-[28px] p-[1px]
                   [background:linear-gradient(135deg,theme(colors.violet.500),theme(colors.fuchsia.400),theme(colors.violet.500))]
                   [background-size:200%_100%] animate-[border-pan_6s_linear_infinite]
                   transition-shadow hover:shadow-[0_25px_80px_-20px_rgba(139,92,246,0.45)]"
      >
        <div className={SHRINK}>
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

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-violet-700 hover:bg-white/90 transition"
                onClick={() => {
                  try { window.open(gmail, "_blank", "noopener,noreferrer"); } catch {}
                  try { window.location.href = mailto; } catch {}
                }}
              >
                Solicitar cotización
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
