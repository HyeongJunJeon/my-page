"use client";

import { Skill } from "@/model/About";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function SkillCard({ icon, title }: Skill) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current || !overlayRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (-1 / 5) * x + 20;
    const rotateX = (4 / 30) * y - 20;

    overlayRef.current.style.backgroundPosition = `${x / 5}px`;
    overlayRef.current.style.filter = `opacity(${x / 200}) brightness(1.2)`;
    containerRef.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseOut = () => {
    if (!containerRef.current || !overlayRef.current) return;

    overlayRef.current.style.filter = "opacity(0)";
    containerRef.current.style.transform =
      "perspective(350px) rotateY(0deg) rotateX(0deg)";
  };

  useEffect(() => {
    if (!overlayRef.current) return;

    handleMouseOut();
    overlayRef.current.style.backgroundSize = "150% 150%";
    overlayRef.current.style.background =
      "linear-gradient(105deg, transparent 40%, rgba(255, 215, 0, 0.9) 45%, rgba(218, 165, 32, 0.85) 50%, transparent 54%)";
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      className="flex-center relative aspect-square cursor-pointer rounded-lg bg-white p-4 shadow-md transition-all duration-100 hover:scale-110"
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 rounded-lg opacity-50 mix-blend-overlay brightness-150 transition-all duration-100"
      ></div>
      <Image
        src={icon}
        alt={title}
        width={60}
        height={60}
        className="h-auto w-auto"
      />
      <span className="absolute right-3 top-3 text-sm font-bold">{title}</span>
    </div>
  );
}
