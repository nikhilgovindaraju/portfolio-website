"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
interface FadeInProps { children: React.ReactNode; className?: string; delay?: number; direction?: "up"|"left"|"right"|"none"; }
export function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const dirs = { up:{y:30,x:0}, left:{y:0,x:30}, right:{y:0,x:-30}, none:{y:0,x:0} };
  const {x,y} = dirs[direction];
  return (
    <motion.div ref={ref} initial={{opacity:0,x,y}} animate={inView?{opacity:1,x:0,y:0}:{}}
      transition={{duration:0.65,delay,ease:[0.22,1,0.36,1]}} className={cn(className)}>
      {children}
    </motion.div>
  );
}
