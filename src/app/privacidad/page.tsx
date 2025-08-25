// File: src/app/privacidad/page.tsx
import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = { title: "Política de Privacidad | DeX Web" };

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 prose prose-slate">
       <BackButton fallback="/" />
      <h1>Política de Privacidad</h1>
      <p>Nos tomamos en serio tu privacidad. Esta página describe qué datos recopilamos y cómo los usamos.</p>
      <h2>Datos que recopilamos</h2>
      <ul>
        <li>Información de contacto (cuando nos escribes).</li>
        <li>Métricas anónimas de uso (analytics).</li>
      </ul>
      <h2>Uso de la información</h2>
      <p>Usamos los datos para responderte, mejorar el sitio y ofrecer nuestros servicios.</p>
      <p>Para ejercer tus derechos de acceso o eliminación, escríbenos a contacto@tumarca.com.</p>
    </main>
  );
}

