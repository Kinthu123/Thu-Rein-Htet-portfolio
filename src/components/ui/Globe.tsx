"use client";

import createGlobe from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1] as [number, number, number],
  markerColor: [251 / 255, 100 / 255, 21 / 255] as [number, number, number],
  glowColor: [139 / 255, 92 / 255, 246 / 255] as [number, number, number],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 }, // Philippines
    { location: [51.5074, -0.1278], size: 0.1 }, // London
    { location: [40.7128, -74.006], size: 0.1 }, // New York
    { location: [13.7563, 100.5018], size: 0.05 }, // Bangkok
    { location: [48.8566, 2.3522], size: 0.03 }, // Paris
    { location: [50.1109, 8.6821], size: 0.03 }, // Germany
    { location: [37.7749, -122.4194], size: 0.05 }, // San Francisco
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
  scale = 1,
}: {
  className?: string;
  config?: typeof GLOBE_CONFIG;
  scale?: number;
}) {
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onRender = useCallback(
    (state: Record<string, number>) => {
      // Auto-rotate the globe
      phiRef.current += 0.005;
      state.phi = phiRef.current;
      state.width = widthRef.current * 2;
      state.height = widthRef.current * 2;
    },
    []
  );

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

  const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });
    
    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [config, onRender, onResize]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px] transition-transform duration-700 ease-out",
        className
      )}
      style={{ transform: `scale(${scale})` }}
    >
      <canvas
        className={cn(
          "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
      />
    </div>
  );
}
