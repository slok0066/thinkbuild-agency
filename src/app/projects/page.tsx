import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | ThinkBuild",
  description: "A showcase of ThinkBuild's recent projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="container py-20 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects Coming Soon</h1>
      <p className="text-lg text-foreground/70">
        We&apos;re curating our best work. Check back shortly!
      </p>
    </div>
  );
}
