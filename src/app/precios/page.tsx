// src/app/precios/page.tsx
import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import Pricing from "@/components/Pricing";
import BundleCard from "@/components/BundleCard";

export const metadata: Metadata = {
  title: "Precios | DeX Web",
  description: "Paquetes y tarifas claras para tu sitio web.",
};

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">Precios</h1>

      {/* Solo los 3 planes (Starter/Pro/Growth) */}
      <Pricing />

      {/* Un (1) único bundle abajo */}
      <div className="mt-6">
        <BundleCard
          proMonthly={3500000}
          growthMonthly={450000}
          months={3}
          currency="COP"
        />
      </div>
    </main>
  );
}
