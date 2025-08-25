// File: src/app/servicios/page.tsx
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Servicios | DeX Web",
  description: "Detalle de paquetes, proceso, entregables y garantías.",
};

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <BackButton fallback="/" />
      <h1 className="text-3xl font-bold mb-6">Servicios</h1>
      <p className="text-slate-600 mb-8">Construyo sitios claros, rápidos y optimizados para conversión. Elige el paquete o solicita uno a medida.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl">
          <CardHeader><CardTitle>Landing express</CardTitle></CardHeader>
          <CardContent className="text-sm text-slate-600 space-y-2">
            <p>Una página de alto impacto para captar leads.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hero + servicios + contacto</li>
              <li>WhatsApp y Email integrados</li>
              <li>SEO base y deploy</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardHeader><CardTitle>Sitio profesional</CardTitle></CardHeader>
          <CardContent className="text-sm text-slate-600 space-y-2">
            <p>3–6 secciones con CMS ligero.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Inicio, Servicios, Portafolio, Contacto</li>
              <li>Analytics, Accesibilidad y rendimiento</li>
              <li>Optimización de velocidad</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardHeader><CardTitle>Mantenimiento & Growth</CardTitle></CardHeader>
          <CardContent className="text-sm text-slate-600 space-y-2">
            <p>Mejoras continuas y soporte.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Actualizaciones mensuales</li>
              <li>Reportes y A/B testing</li>
              <li>Soporte prioritario</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8"><a href="/precios"><Button>Ver precios</Button></a></div>
    </main>
  );
}

