import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/CopyButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pago recibido | DeX Web",
  description: "Gracias por tu pago. En breve nos pondremos en contacto.",
};

function getTxId(searchParams: Record<string, string | string[] | undefined>): string {
  // Cubrimos distintos proveedores
  const keys = [
    "tx", "transaction_id", "transactionId", "id", "reference",
    "collection_id", "payment_id", "preference_id", "ref"
  ];
  for (const k of keys) {
    const v = searchParams[k];
    if (typeof v === "string" && v) return v;
    if (Array.isArray(v) && v[0]) return v[0];
  }
  return "";
}

export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const tx = getTxId(searchParams);
  const isTest = process.env.NEXT_PUBLIC_PAYMENTS_TEST_MODE === "1";

  const whatsappMsg = `Hola, ya realicé el pago. Mi referencia es: ${tx || "(sin ref)"}`;
  const whatsapp = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <main className="max-w-2xl mx-auto px-4 py-20">
      <div className="mb-3 flex items-center gap-2">
        <h1 className="text-3xl font-bold">¡Pago recibido!</h1>
        {isTest && (
          <span className="rounded bg-amber-100 px-2 py-0.5 text-[11px] text-amber-800">
            Modo prueba
          </span>
        )}
      </div>

      <p className="text-slate-600">
        Gracias por tu compra. Te escribiré muy pronto para empezar tu proyecto. 🙌
      </p>

      {tx && (
        <div className="mt-6 rounded-xl border bg-white p-4 text-sm text-slate-600">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-slate-400">Referencia/ID de transacción</div>
              <div className="font-mono text-slate-800">{tx}</div>
            </div>
            <CopyButton value={tx} />
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="inline-block">
          <Button>Volver al inicio</Button>
        </Link>
        <Link href="/precios" className="inline-block">
          <Button variant="outline">Ver planes</Button>
        </Link>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button variant="outline">Confirmar por WhatsApp</Button>
        </a>
      </div>

      <p className="mt-6 text-xs text-slate-400">
        Si no ves el cargo en tu banco aún, podría tardar unos minutos. Guarda la referencia para cualquier consulta.
      </p>
    </main>
  );
}