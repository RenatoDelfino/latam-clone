"use client";

import React, { useEffect, useState } from "react";
import MainForm from "@/components/form";
import MainFormMobile from "@/components/formmobile";

interface HeroProps {}

const HeroSection: React.FC<HeroProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1010);
    };

    handleResize(); // Verificar a largura da janela na montagem do componente

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="max-w-[1360px] h-[510px] mx-auto relative center">
      <div className="hero-bg absolute top-0 left-0 w-full h-full z-[-1]"></div>
      {isMobile ? <MainFormMobile /> : <MainForm />}
    </div>
  );
};

export default HeroSection;
