import React from "react";
import NeurexBlogPage from "@/components/NeurexBlogPage";

export const metadata = {
  title: "Blog 02 — Neurex & CyberShield Technologies",
  description: "Stay informed with our latest articles, insights, and engineering perspectives.",
  openGraph: {
    title: "Blog 02 — Stay Informed With Our Latest Articles",
    description: "Stay informed with our latest articles, insights, and engineering perspectives.",
    type: "website",
  },
};

export default function CaseStudiesToBlogPage() {
  return <NeurexBlogPage />;
}
