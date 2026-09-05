import { LucideIcon } from "lucide-react";

export interface DrillExample {
  title: string;
  category: string;
  focus: string;
  diagramInfo: string;
}

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ModuleItem {
  iconName?: string;
  title: string;
  desc: string;
}

export interface BonusItem {
  n: number;
  title: string;
  desc: string;
  originalPrice: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PlanFeature {
  text: string;
  isBonus: boolean;
}

export interface CarouselSlide {
  image: string;
  alt: string;
}

