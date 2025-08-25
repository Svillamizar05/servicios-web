// src/lib/site.ts
export const SITE = {
  brand: "DeX Web",
  email: "contacto@tumarca.com",
  whatsapp: "573173551586",
  whatsappDisplay: "57 3173551586",
  city: "Medellín, Colombia",
};

export const NAV = [
  { label: "Servicios", href: "/servicios" },
  { label: "Precios", href: "/precios" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
] as const;

// Números para cálculos del bundle
export const PRICE_NUMBERS = {
  Starter: 1500000,
  Pro: 3500000,
  GrowthMonthly: 450000,
} as const;

// 👇 SOLO los 3 planes. (Quitamos "Bundle 3 meses")
export const PRICES = [
  {
    name: "Starter",
    price: "$1.500.000 COP",
    tag: "Entrega en 3–5 días según disponibilidad y requisitos del usuario",
    features: ["1 página", "Formulario de contacto", "SEO base", "Deploy incluido"],
    featured: true,                 // no destacado
  },
  {
    name: "Pro",
    price: "$3.500.000 COP",
    tag: "Sitio 3–6 secciones\nEntrega en 10–30 días según requisitos",
    features: [
      "Servicios + Portafolio + Blog",
      "Integraciones (Analytics/WhatsApp)",
      "Optimización de velocidad",
      "Accesibilidad básica",
    ],
    featured: true,                  // destacado
    badge: "Más popular",
  },
  {
    name: "Growth",
    price: "$450.000 COP/mes",
    tag: "Mejoras y soporte continuo\nContrato mínimo 3 meses",
    features: ["Actualizaciones mensuales", "Reportes", "A/B testing", "Prioridad de soporte"],
    featured: true,                 // no destacado
  },
] as const;

// Links de pasarela (Wompi/MercadoPago, etc.)
export const CHECKOUT = {
  Starter: process.env.NEXT_PUBLIC_CHECKOUT_STARTER_URL || "#",
  Pro: process.env.NEXT_PUBLIC_CHECKOUT_PRO_URL || "#",
  Growth: process.env.NEXT_PUBLIC_CHECKOUT_GROWTH_URL || "#",
  // Bundle abajo usa su propia env; soporta dos nombres por si cambiaste
  Bundle3M:
    process.env.NEXT_PUBLIC_CHECKOUT_BUNDLE3M_URL ||
    process.env.NEXT_PUBLIC_CHECKOUT_BUNDLE_URL ||
    "#",
};
