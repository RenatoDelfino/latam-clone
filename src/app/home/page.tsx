"use client";

import React, { useEffect, useState } from "react";

import Header from "@/components/header";
import HeroSection from "@/components/hero";
import CardPoints from "@/components/cardPoints";
import Cards from "@/components/cards";
import CardsImages from "@/components/cardsImages";
import CreditCard from "@/components/creditcard";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import InfoSection from "@/components/infosection";
import FooterInfo from "@/components/footerinfo";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1010);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <Header simple={!isMobile} />
      <HeroSection />
      <CardPoints />
      <Cards />
      <CardsImages />
      <CreditCard />

      <Separator className="w-[90%] opacity-75 mt-[100px] mx-auto" />
      <Footer />
      <InfoSection />
      <FooterInfo />
    </main>
  );
}
