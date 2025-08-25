// src/app/faq/page.tsx
import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Preguntas Frecuentes | DeX Web" };

export default function Page() {
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola, quiero una web")}`;
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent("Cotización sitio web")}`;

  const faqs = [
    {
      q: "¿Cómo funcionan los pagos?",
      a: "Usamos links de pago (Wompi/Mercado Pago). El dinero llega a tu cuenta del proveedor y luego a tu banco. Para proyectos fijos solemos pedir un anticipo y el saldo al entregar.",
    },
    {
      q: "¿Tiempo de entrega?",
      a: "Landing: 3–5 días. Sitio profesional (3–6 secciones): 1–2 semanas, según contenido y aprobaciones.",
    },
    {
      q: "¿Incluye dominio y hosting?",
      a: "Incluyo deploy y configuración. El dominio y el hosting se cotizan aparte; te asesoro para elegir la mejor opción calidad/precio.",
    },
    {
      q: "¿Puedo actualizar el contenido yo mismo?",
      a: "Sí. Opcionalmente integro un CMS ligero (blog/portafolio) o te dejo instrucciones claras para editar contenido.",
    },
    {
      q: "¿Qué incluye el SEO?",
      a: "SEO on-page básico: etiquetas meta, estructura semántica, performance, sitemap/robots y buenas prácticas para indexación.",
    },
    {
      q: "¿Hay garantía o soporte?",
      a: "Sí. Hay soporte post-lanzamiento para correcciones menores y dudas. Con el plan Growth tienes mantenimiento continuo.",
    },
    {
      q: "¿Qué pasa con seguridad?",
      a: "Buenas prácticas (dependencias, headers, validaciones) y si hay formularios, añado rate-limit y opciones como reCAPTCHA.",
    },
    {
      q: "¿Se puede integrar Analytics o Pixel?",
      a: "Sí, integro Google Analytics o el pixel que uses para campañas, cuidando performance y privacidad.",
    },
    {
      q: "¿Usan base de datos?",
      a: "Solo si la solución lo requiere (por ejemplo, leads o CMS). Para producción recomiendo Postgres gestionado y ORM con Prisma.",
    },
    {
      q: "Propiedad del código y entregables",
      a: "Tras el pago final, el código y los activos personalizados son del cliente. Entrego acceso al repositorio y documentación básica.",
    },
    {
      q: "Facturación y reembolsos",
      a: "Se factura por hitos o fases. Los reembolsos se evalúan según el avance del proyecto y lo pactado en la propuesta.",
    },
  ];

  return (
    <main className="relative">
      {/* fondo sutil para adornar */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_50%_at_50%_20%,black,transparent)]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.slate.200/25)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.200/25)_1px,transparent_1px)] bg-[size:16px_16px]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_350px_at_90%_-10%,theme(colors.sky.200/35),transparent),radial-gradient(600px_300px_at_-10%_10%,theme(colors.violet.200/30),transparent)]" />
      </div>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <BackButton fallback="/" />

        {/* encabezado con banda */}
        <div className="rounded-2xl border overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-sky-50 to-violet-50 p-6 md:p-8">
            <h1 className="text-3xl font-bold">Preguntas Frecuentes</h1>
            <p className="text-slate-600 mt-2">
              Respuestas claras sobre pagos, tiempos, soporte, seguridad y más.
            </p>
          </div>
        </div>

        {/* grid FAQ */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <Card key={f.q} className="rounded-2xl transition hover:shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{f.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">{f.a}</CardContent>
            </Card>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a href={mailto}>
            <Button className="h-11">Escríbeme por Email</Button>
          </a>
          <a href={wa} target="_blank" rel="noopener">
            <Button variant="outline" className="h-11">WhatsApp</Button>
          </a>
        </div>

        <p className="text-xs text-slate-500 mt-3">
          ¿Tienes otra pregunta? Respondo en &lt; 24 horas.
        </p>
      </section>
    </main>
  );
}
