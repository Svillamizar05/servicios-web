"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  MonitorSmartphone,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function ServicesLanding() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Ajusta tus datos
  const EMAIL = "contacto@tumarca.com";
  const WHATSAPP = "573000000000"; // formato internacional

  const handleMailTo = () => {
    const subject = encodeURIComponent("Cotización sitio web");
    const body = encodeURIComponent(
      `Hola, soy ${form.name || "[tu nombre]"} (Email: ${form.email || "[tu email]"}).

Quiero un sitio web y estos son los detalles: 
${form.message || "[escribe aquí]"}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* === Decorative background (ligero y minimal) === */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(60%_50%_at_50%_20%,black,transparent)]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.slate.200/30)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.200/30)_1px,transparent_1px)] bg-[size:16px_16px]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_-10%,theme(colors.sky.200/40),transparent),radial-gradient(600px_300px_at_-10%_10%,theme(colors.violet.200/35),transparent)]" />
      </div>

      {/* === Hero === */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600 bg-white/70">
              <Sparkles className="h-3.5 w-3.5" /> Sitios que cargan &lt;1s y convierten
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Presencia web minimalista, rápida y lista para vender
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Diseño y desarrollo web profesional. SEO base, performance y soporte post‑lanzamiento incluidos.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button className="h-11" onClick={handleMailTo}>
                Pide una cotización <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="/precios"><Button variant="outline" className="h-11">Ver precios</Button></a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4"/>Entrega en días</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4"/>SEO base incluido</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4"/>Soporte post‑lanzamiento</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-white/60 rounded-3xl blur-xl" />
              <Card className="relative rounded-3xl shadow-xl">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-2xl bg-slate-900/90 flex items-center justify-center">
                    <span className="text-slate-200 font-mono text-sm">Previsualización de tu landing</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-4 text-xs text-slate-600">
                    <div className="p-3 rounded-xl bg-slate-50 border">Velocidad</div>
                    <div className="p-3 rounded-xl bg-slate-50 border">SEO</div>
                    <div className="p-3 rounded-xl bg-slate-50 border">Analytics</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Services (cards con borde sutil + hover) === */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <p className="text-slate-600 text-sm">Planes flexibles según tus objetivos</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            icon: <MonitorSmartphone className="h-5 w-5"/>,
            title: "Landing express",
            text: "Una página de alto impacto, responsive y optimizada para conversión.",
          },{
            icon: <Code2 className="h-5 w-5"/>,
            title: "Sitio profesional",
            text: "3–6 secciones con CMS ligero, formularios e integraciones.",
          },{
            icon: <Rocket className="h-5 w-5"/>,
            title: "Mantenimiento & Growth",
            text: "Optimización continua, reportes y experimentos de conversión.",
          }].map((s) => (
            <Card key={s.title} className="relative rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">{s.icon} {s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                {s.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* === CTA stripe === */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border overflow-hidden">
          <div className="bg-gradient-to-r from-sky-50 to-violet-50 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">¿Listo para empezar?</h3>
                <p className="text-slate-600">Agenda una llamada y cotizamos en el mismo día.</p>
              </div>
              <div className="flex gap-2">
                <a href="/contacto"><Button className="h-11">Contactar</Button></a>
                <a href="/precios"><Button variant="outline" className="h-11">Ver precios</Button></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Proceso === */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Proceso de trabajo</h2>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {["Descubrimiento","Diseño","Desarrollo","Lanzamiento"].map((step, i) => (
            <Card key={step} className="rounded-2xl transition-transform duration-300 hover:scale-[1.01]">
              <CardContent className="p-4">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white text-sm">{String(i+1).padStart(2,'0')}</div>
                <div className="font-semibold mt-3">{step}</div>
                <p className="text-slate-600 mt-1">
                  {i===0 && "Definimos objetivos, audiencia y contenido."}
                  {i===1 && "Creamos wireframes y estilo visual."}
                  {i===2 && "Implementación con buenas prácticas y pruebas."}
                  {i===3 && "Deploy, analítica y training básico."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* === Contacto === */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-2xl font-bold">Hablemos de tu proyecto</h2>
            <p className="text-slate-600 mt-2">Cuéntame qué necesitas y te respondo en menos de 24h.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> {EMAIL}</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> +57 {WHATSAPP.replace("57", "").replace(/^0+/, "")}</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Medellín, Colombia</div>
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <Input placeholder="Nombre" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} />
              <Input placeholder="Email" type="email" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} />
              <Textarea placeholder="Cuéntame sobre tu proyecto" value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} />
              <div className="grid grid-cols-2 gap-2">
                <Button className="h-11" onClick={handleMailTo}>Enviar por email</Button>
                <a
                  className="h-11 inline-flex items-center justify-center rounded-md border px-4 font-medium"
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, quiero una web. Detalles: "+form.message)}`}
                  target="_blank"
                  rel="noopener"
                >WhatsApp</a>
              </div>
              <p className="text-xs text-slate-500">Este formulario es de demostración.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* === Footer === */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} DeX Web. Todos los derechos reservados.</div>
          <div className="flex gap-4">
            <a href="/privacidad" className="hover:text-slate-800">Privacidad</a>
            <a href="/terminos" className="hover:text-slate-800">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
