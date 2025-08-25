// src/components/Tilt.tsx
"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

type TiltProps = {
  children: React.ReactNode;
  /** Grados máximos de giro */
  max?: number;          // default 8
  /** Ganancia/sensibilidad del puntero (0.1 = muy suave, 1 = por defecto) */
  intensity?: number;    // default 0.5 (menos sensible)
  /** Perspectiva 3D (px) */
  perspective?: number;  // default 1000
  /** Escala al pasar el mouse (1 = sin zoom) */
  hoverScale?: number;   // default 1
};

export default function Tilt({
  children,
  max = 8,
  intensity = 0.5,
  perspective = 1000,
  hoverScale = 1,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);

  // Cuanto más pequeña sea intensity, más "lento/suave" el tilt.
  // En lugar de mapear [-0.5, 0.5] → usamos [-0.5*intensity, 0.5*intensity]
  const domain = 0.5 * Math.max(0.05, Math.min(intensity, 2)); // clamp de seguridad
  const rotateX = useTransform(mvY, [-domain, domain], [max, -max]);
  const rotateY = useTransform(mvX, [-domain, domain], [-max, max]);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;  // -0.5 .. 0.5
    const py = (e.clientY - r.top) / r.height - 0.5; // -0.5 .. 0.5
    mvX.set(px);
    mvY.set(py);
  }

  function reset() {
    mvX.set(0);
    mvY.set(0);
  }

  return (
    <div className="[perspective:var(--tilt-perspective,1000px)]" style={{ ["--tilt-perspective" as any]: `${perspective}px` }}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: hoverScale }}
        transition={{ type: "spring", stiffness: 200, damping: 16, mass: 0.25 }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
