"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ fallback = "/" }: { fallback?: string }) {
  const router = useRouter();

  return (
    <div className="mb-6">
      <Button
        variant="outline"
        className="h-9 gap-2"
        onClick={() => {
          if (typeof window !== "undefined" && window.history.length > 1) {
            router.back();
          } else {
            window.location.href = fallback;
          }
        }}
      >
        <ArrowLeft className="h-4 w-4" />
        Volver
      </Button>
    </div>
  );
}
