// File: src/app/terminos/page.tsx
import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = { title: "Términos y Condiciones | DeX Web" };

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 prose prose-slate">
      <BackButton fallback="/" />
      <h1>Términos y Condiciones</h1>
      <p>Al contratar nuestros servicios, aceptas estas condiciones.</p>
      <h2>Alcance</h2>
      <p>El alcance, tiempos y entregables se acuerdan por escrito en cada proyecto.</p>
      <h2>Pagos</h2>
      <p>Los pagos se realizan por los medios habilitados (Wompi, Mercado Pago). No iniciamos sin anticipo.</p>
      <h2>Propiedad intelectual</h2>
      <p>Tras el pago final, el código y los activos personalizados se transfieren al cliente.</p>
    </main>
  );
}

