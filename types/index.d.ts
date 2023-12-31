import { Icons } from "@/components/icons";
import { icons } from "lucide-react";
import type { Icon } from "lucide-react";

export type SidebarItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type Navigation = {
  data: NavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
    stripeCurrentPeriodEnd: number;
    isPro: boolean;
  };

// export type SiteConfig = {
//   name: string;
//   description: string;
//   url: string;
//   ogImage: string;
//   links: {
//     github: string;
//     twitter: string;
//     linkedin: string;
//   };
// };
