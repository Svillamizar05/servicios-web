// src/app/contacto/page.tsx
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = { title: "Contacto | DeX Web" };

export default function Page() {
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent("Cotización sitio web")}`;
  const whatsapp = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola, quiero una web")}`;

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <BackButton fallback="/" />
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>

      <p className="text-slate-600 mb-6">Cuéntame tu idea y te respondo en &lt;24h.</p>

      <div className="flex gap-3">
        <a href={mailto}><Button>Escríbeme por Email</Button></a>
        <a href={whatsapp} target="_blank" rel="noopener">
          <Button variant="outline">WhatsApp</Button>
        </a>
      </div>

      <div className="mt-6 text-slate-600 space-y-1">
        <div><b>Email:</b> {SITE.email}</div>
        <div><b>WhatsApp:</b> +{SITE.whatsapp}</div>
        <div><b>Ubicación:</b> {SITE.location}</div>
      </div>
    </main>
  );
}
