"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HelloWorld = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("p-4 bg-blue-500 text-white rounded-lg shadow-lg", className)}
    >
      <h1 className="text-2xl font-bold">Hello World</h1>
      <p>This is a portfolio project setup with Next.js, Framer Motion, and Sentry.</p>
    </motion.div>
  );
};
