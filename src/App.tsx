/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { HeroSection } from "./components/HeroSection";
import { MarqueeSection } from "./components/MarqueeSection";
import { TargetAudienceSection } from "./components/TargetAudienceSection";
import { WhoIsItForSection } from "./components/WhoIsItForSection";
import { ContentSection } from "./components/ContentSection";
import { BonusesSection } from "./components/BonusesSection";
import { PricingSection } from "./components/PricingSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FaqSection } from "./components/FaqSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  const scrollToPlans = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const plansElement = document.getElementById("planos");
    if (plansElement) {
      plansElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <AnnouncementBar />
      <HeroSection onCtaClick={scrollToPlans} />
      <MarqueeSection />
      <WhoIsItForSection onCtaClick={scrollToPlans} />
      <TargetAudienceSection />
      <ContentSection />
      <BonusesSection />
      <PricingSection />
      <div className="content-auto">
        <GuaranteeSection />
      </div>
      <div className="content-auto">
        <FaqSection />
      </div>
      <div className="content-auto">
        <FooterSection />
      </div>
    </main>
  );
}
