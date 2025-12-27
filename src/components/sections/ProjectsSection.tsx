"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Database,
  Globe,
  Smartphone,
  Users,
  ArrowRight,
  Code2,
  Zap,
  Shield,
} from "lucide-react";

const projects = [
  {
    id: "nest-haus",
    title: "Nest-Haus",
    subtitle: "Modern House Configuration Platform",
    category: "Web Application",
    description:
      "A sophisticated Next.js application for house configuration and visualization. Features an interactive configurator, dynamic pricing system, and comprehensive property exploration.",
    longDescription:
      "Built with Next.js 15, TypeScript, and modern architecture patterns. Implements complex state management, real-time configuration updates, and responsive design for optimal user experience across all devices.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Prisma",
      "PostgreSQL",
    ],
    features: [
      "Interactive House Configurator",
      "Dynamic Pricing System",
      "Property Discovery Interface",
      "Responsive Design",
      "Real-time Updates",
      "Modern UI/UX",
    ],
    highlights: [
      { icon: Zap, text: "High Performance Architecture" },
      { icon: Shield, text: "Type-Safe Development" },
      { icon: Users, text: "Exceptional User Experience" },
    ],
    images: [
      "/content/screencapture-landingpage-nest-haus-vercel-app-2025-09-06-13_05_36.pdf",
      "/content/Screenshot Konfigurator nest-haus.png",
      "/content/screencapture-nest-haus-vercel-app-entdecken-2025-09-06-13_06_17.pdf",
    ],
    demoUrl: "https://nest-haus.vercel.app",
    githubUrl: "https://github.com/stenkjan/nest-haus",
    type: "showcase",
    priority: 1,
  },
  {
    id: "ks-database",
    title: "KS-Database",
    subtitle: "Enterprise Product Management System",
    category: "Full-Stack Application",
    description:
      "A comprehensive product database management system with advanced configuration capabilities, admin dashboard, and scalable architecture.",
    longDescription:
      "Designed for scalability and maintainability, this system showcases clean architecture principles, efficient database design, and intuitive user interfaces. Built with modern tools for optimal team collaboration and long-term maintenance.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Express",
      "Material-UI",
      "RESTful APIs",
    ],
    features: [
      "Product Configuration Management",
      "Admin Dashboard",
      "Advanced Search & Filtering",
      "Data Visualization",
      "User Role Management",
      "API Integration",
    ],
    highlights: [
      { icon: Database, text: "Scalable Database Design" },
      { icon: Code2, text: "Clean Architecture" },
      { icon: Users, text: "Team-Friendly Codebase" },
    ],
    images: [
      "/content/screencapture-produktdatenbank-298f60a21e50-herokuapp-dashboard-2025-09-06-13_04_17.pdf",
      "/content/screencapture-produktdatenbank-298f60a21e50-herokuapp-configurations-2025-09-06-13_04_30.pdf",
      "/content/screencapture-produktdatenbank-298f60a21e50-herokuapp-admin-2025-09-06-13_05_08.pdf",
    ],
    demoUrl: "https://produktdatenbank-298f60a21e50.herokuapp.com",
    githubUrl: "https://github.com/stenkjan/ks-database",
    type: "showcase",
    priority: 2,
  },
  {
    id: "event-platforms",
    title: "Event Registration Platforms",
    subtitle: "Streamlined Event Management Solutions",
    category: "Web Applications",
    description:
      "A suite of three event registration platforms designed for small companies and teams to easily create and manage event websites.",
    longDescription:
      "These platforms demonstrate how small organizations can quickly deploy professional event registration systems. Each solution provides customizable registration forms, participant management, and responsive design - perfect for companies that need efficient event management without complex setup.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Netlify",
      "Form Handling",
      "Responsive Design",
    ],
    features: [
      "Quick Event Setup",
      "Custom Registration Forms",
      "Participant Management",
      "Mobile-Friendly Design",
      "Easy Deployment",
      "Small Team Focused",
    ],
    highlights: [
      { icon: Zap, text: "Rapid Deployment" },
      { icon: Users, text: "Small Team Optimized" },
      { icon: Globe, text: "Professional Results" },
    ],
    projects: [
      { name: "Eule-Grngr", url: "https://github.com/stenkjan/eule-grngr" },
      { name: "NTGL-Events", url: "https://github.com/stenkjan/ntgl-events" },
      { name: "Eule-Event", url: "https://github.com/stenkjan/eule_event" },
    ],
    images: [
      "/content/screencapture-eule-grngr raveregistrierung-netlify-app-2025-09-06-13_10_47.pdf",
    ],
    type: "summary",
    priority: 3,
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    subtitle: "Flutter & Dart Development",
    category: "Mobile Development",
    description:
      "Native mobile applications built with Flutter, showcasing cross-platform development expertise and modern mobile UI/UX patterns.",
    longDescription:
      "Demonstrates proficiency in mobile development with Flutter and Dart, creating applications that work seamlessly across iOS and Android platforms with native performance and beautiful user interfaces.",
    technologies: [
      "Flutter",
      "Dart",
      "Mobile UI/UX",
      "Cross-Platform",
      "Native Performance",
    ],
    features: [
      "Cross-Platform Compatibility",
      "Native Performance",
      "Modern UI Design",
      "Offline Capabilities",
      "Push Notifications",
      "App Store Ready",
    ],
    highlights: [
      { icon: Smartphone, text: "Cross-Platform Excellence" },
      { icon: Zap, text: "Native Performance" },
      { icon: Users, text: "Intuitive User Experience" },
    ],
    projects: [
      { name: "COVID App", url: "https://github.com/stenkjan/covidapp" },
      {
        name: "Fuesse und Fusspflege CW",
        url: "https://github.com/stenkjan/fuesse_und_fusspflege_cw",
      },
    ],
    type: "summary",
    priority: 4,
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0].id);

  const activeProjectData =
    projects.find((p) => p.id === activeProject) || projects[0];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing modern web applications and mobile solutions built with
            cutting-edge technologies. Each project demonstrates technical
            expertise, scalable architecture, and exceptional user experience.
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeProject === project.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Project Info */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                  {activeProjectData.category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {activeProjectData.title}
                </h3>
                <p className="text-xl text-blue-600 font-medium mb-4">
                  {activeProjectData.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {activeProjectData.longDescription}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Highlights
                </h4>
                <div className="space-y-3">
                  {activeProjectData.highlights.map((highlight, index) => {
                    const IconComponent = highlight.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <IconComponent className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{highlight.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProjectData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                {activeProjectData.demoUrl && (
                  <a
                    href={activeProjectData.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors group"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    <span>View Live Demo</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
                {activeProjectData.githubUrl && (
                  <a
                    href={activeProjectData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    <span>View Code</span>
                  </a>
                )}
                {activeProjectData.projects && (
                  <div className="flex flex-wrap gap-2">
                    {activeProjectData.projects.map((proj, index) => (
                      <a
                        key={index}
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
                      >
                        <Github className="mr-2 h-3 w-3" />
                        <span>{proj.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Project Visual */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-md">
                {/* Placeholder for project screenshots */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-16 w-16 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {activeProjectData.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Screenshots and live demos available
                  </p>
                  <div className="text-xs text-gray-500">
                    * Visual assets will be integrated from provided screenshots
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Interested in working together on your next project?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors group"
          >
            <span>Let&apos;s Discuss Your Project</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
