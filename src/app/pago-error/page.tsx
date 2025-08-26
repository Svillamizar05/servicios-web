import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pago fallido | DeX Web",
  description: "El pago no se completó. Intenta nuevamente o contáctanos.",
};

export default function Page() {
  const whatsappMsg = "Hola, tuve un problema con el pago, ¿me puedes ayudar?";
  const whatsapp = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    whatsappMsg
  )}`;

  return (
    <main className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-2">No se completó el pago</h1>
      <p className="text-slate-600">
        Puedes intentarlo nuevamente o escribirme si necesitas ayuda.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/precios" className="inline-block">
          <Button>Intentar de nuevo</Button>
        </Link>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button variant="outline">Hablar por WhatsApp</Button>
        </a>
        <Link href="/contacto" className="inline-block">
          <Button variant="outline">Contacto</Button>
        </Link>
      </div>

      <p className="mt-6 text-xs text-slate-400">
        Si el cargo quedó pendiente en tu banco, debería reversarse
        automáticamente en poco tiempo.
      </p>
    </main>
  );
}
