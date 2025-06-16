"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ThinkBuild",
  description: "Insights and updates from ThinkBuild's team.",
};

export default function BlogPage() {
  return (
    <div className="container py-20 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Coming Soon</h1>
      <p className="text-lg text-foreground/70">
        We&apos;re working on some great articles. Stay tuned!
      </p>
    </div>
  );
}
