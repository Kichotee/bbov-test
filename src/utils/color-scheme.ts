import { LeadStatus } from "@/types";

export const getColorScheme = (title:LeadStatus) => {
    // eslint-disable-next-line default-case
    switch (title) {
      case "Application Submitted":
        return "bg-purple-600 text-purple-200";

      case "Completed":
        return "bg-green-600 text-green-200";
      case "Deal Finalized":
        return "bg-cyan-600 text-cyan-200";
      case "Application Under Review":
        return "bg-yellow-600 text-yellow-200";
      case "Contacted":
        return "bg-fuchsia-600 text-fuchsia-200";
      case "Lead Generated":
        return "bg-sky-600 text-sky-200";
      case "Lost":
        return "bg-red-600 text-red-200";
      case "Payment Confirmed":
        return "bg-indigo-600 text-indigo-200";
    }
  };