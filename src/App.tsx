/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { HeroSection } from "./components/HeroSection";
import { MarqueeSection } from "./components/MarqueeSection";
import { WhoIsItForSection } from "./components/WhoIsItForSection";
import { BonusesSection } from "./components/BonusesSection";
import { PricingSection } from "./components/PricingSection";
import { HowToReceiveSection } from "./components/HowToReceiveSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FaqSection } from "./components/FaqSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  const scrollToCompletePlan = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement =
      document.getElementById("mais-completo") ||
      document.getElementById("plano-completo");
    if (targetElement) {
      const yOffset = -24;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      const plansElement = document.getElementById("planos");
      if (plansElement) {
        plansElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] w-full overflow-x-hidden">
      <AnnouncementBar />
      <HeroSection onCtaClick={scrollToCompletePlan} />
      <MarqueeSection />
      <WhoIsItForSection onCtaClick={scrollToCompletePlan} />
      <BonusesSection />
      <PricingSection />
      <HowToReceiveSection />
      <div className="content-auto">
        <GuaranteeSection />
      </div>
      <div className="content-auto">
        <FaqSection onCtaClick={scrollToCompletePlan} />
      </div>
      <div className="content-auto">
        <FooterSection />
      </div>
    </main>
  );
}
