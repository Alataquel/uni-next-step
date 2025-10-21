import { LucideIcon } from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  position: "left" | "right";
  comingSoon?: boolean;
}

export interface TrustItem {
  icon: LucideIcon;
  text: string;
}
