// File: src/app/portafolio/page.tsx
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = { title: "Portafolio | DeX Web" };

const projects = [
  { title: "Clínica Nova", desc: "Landing médica con reservas.", year: "2025" },
  { title: "FitUp", desc: "Sitio de membresías y blog.", year: "2025" },
  { title: "Café Sierra", desc: "Tienda simple con checkout externo.", year: "2024" },
];

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <BackButton fallback="/" />
      <h1 className="text-3xl font-bold mb-6">Portafolio</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="rounded-2xl">
            <CardHeader><CardTitle>{p.title}</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              <div className="mb-2 text-slate-500">{p.year}</div>
              <p>{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
