import { SubscriptionPlan } from "@/types";

export const freePlan: SubscriptionPlan = {
  name: "Free",
  description:
    "The free plan is limited to 3 notes. Upgrade to the PRO plan for unlimited notes.",
  stripePriceId: "",
};

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description: "The PRO plan has unlimited notes.",
  stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
};
