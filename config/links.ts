import { Navigation } from "@/types";

export const dashboardLinks: Navigation = {
  data: [
    {
      title: "Notes",
      href: "/dashboard",
      icon: "note",
    },
    {
      title: "Premium",
      href: "/dashboard/activities",
      icon: "receipt",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
};
