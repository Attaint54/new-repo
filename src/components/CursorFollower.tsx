"use client";

import { useEffect, useState } from "react";

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-[100%] h-[140%] z-30 transition duration-500 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-torch hidden lg:block"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
