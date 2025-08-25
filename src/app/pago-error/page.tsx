import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pago no completado | DeX Web",
  description: "Hubo un problema al procesar el pago.",
};

export default function Page() {
  const whatsappMsg = "Hola, tuve un problema al pagar. ¿Me ayudas?";
  const whatsapp = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <main className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-2">No se completó el pago</h1>
      <p className="text-slate-600">
        Puedes intentarlo nuevamente o escribirme si necesitas ayuda.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="/precios">
          <Button>Intentar de nuevo</Button>
        </a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          <Button variant="outline">Hablar por WhatsApp</Button>
        </a>
        <a href="/contacto">
          <Button variant="outline">Contacto</Button>
        </a>
      </div>

      <p className="mt-6 text-xs text-slate-400">
        Si el cargo quedó pendiente en tu banco, debería reversarse automáticamente en poco tiempo.
      </p>
    </main>
  );
}
