"use client";

import { ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  url: string;
  launchDate: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "N of One Study Platform",
    url: "https://nofone.us",
    launchDate: "Jan 2026",
    description:
      "AI-powered platform for designing and conducting observational clinical studies with automated protocol generation.",
  },
  {
    name: "Life Transition Guide",
    url: "https://grief-guide-phi.vercel.app/",
    launchDate: "Jan 2026",
    description:
      "Compassionate app helping people navigate practical and emotional challenges after losing a parent.",
  },
  {
    name: "Automated Product Testing Platform",
    url: "https://epch-projects.vercel.app/",
    launchDate: "Jan 2026",
    description:
      "Agent-powered market testing system to autonomously test and launch B2C healthcare products.",
  },
  {
    name: "UltraHeavy Backpacking",
    url: "https://ultraheavy-backpacking.vercel.app/",
    launchDate: "Oct 2025",
    description:
      "You might know Ultralight backpacking, but this is Ultraheavy. More pounds and more laughs.",
  },
  {
    name: "Synthetic Patients for Research",
    url: "https://patient-agent-mg.vercel.app/",
    launchDate: "Oct 2025",
    description:
      "Learn from digital personas of patients with rare disease. Ask about their experiences and opinions.",
  },
  {
    name: "EMR Integration Demo",
    url: "https://laramic-healthie.vercel.app/",
    launchDate: "Sep 2025",
    description:
      "Demonstration of seamless electronic medical record integration capabilities.",
  },
  {
    name: "My Advisory Board",
    url: "https://board-picker.vercel.app/",
    launchDate: "Sep 2025",
    description:
      "Build and manage a personal advisory board for your questions and challenges.",
  },
  {
    name: "Reddit Rx",
    url: "https://redditrx.vercel.app/",
    launchDate: "Sep 2025",
    description:
      "Analyze Reddit discussions for insights into what interventions work for specific medical problems.",
  },
  {
    name: "SecondLook - Rare Disease Dx",
    url: "https://secondlook.vercel.app/",
    launchDate: "Aug 2025",
    description:
      "Advanced differential diagnosis tool to help you find your rare disease diagnosis.",
  },
  {
    name: "App Branding App",
    url: "https://appfactory-brander.vercel.app/",
    launchDate: "Jun 2025",
    description:
      "Create professional branding and visual identity for your mobile applications.",
  },
  {
    name: "Spanish Partner",
    url: "https://v0-openai-text-to-speech-bb.vercel.app/",
    launchDate: "May 2025",
    description:
      "AI-powered Spanish language partner for conversation practice and learning.",
  },
  {
    name: "Will Pharma Like Me?",
    url: "https://pharma-sales-analyzer.vercel.app",
    launchDate: "Feb 2025",
    description:
      "Enter your company URL and find out if you can partner with Pharma.",
  },
  {
    name: "What's That Disease?",
    url: "https://whatisthatdisease.vercel.app",
    launchDate: "Jan 2025",
    description:
      "Enter any disease name and get a detailed profile of that disease.",
  },
  {
    name: "My Future Health",
    url: "https://my-future-health-6b4o.vercel.app/",
    launchDate: "Dec 2024",
    description:
      "Answer a few basic health questions and see your future health at age 75.",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-interactive p-6 flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="card-title text-lg font-semibold text-[var(--primary-light)] transition-colors">
          {project.name}
        </h2>
        <ArrowUpRight className="w-5 h-5 text-[var(--text-tertiary)] flex-shrink-0" />
      </div>

      <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex items-center gap-2">
        <span
          className="text-label"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {project.launchDate}
        </span>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex-1 py-16 md:py-24">
      <div className="container-wide">
        {/* Header */}
        <header className="mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="heading-1 mb-4">Chris Hogg's Projects</h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
            A collection of AI-powered applications exploring healthcare,
            personal science, and consumer experiences.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
