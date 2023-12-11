import { Icons } from "@/components/icons";
import { icons } from "lucide-react";

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
