"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjectImages } from "@/lib/blobStorage";
import { t } from "@/lib/i18n";

interface Project {
  id: string;
  title: { de: string; en: string };
  subtitle: { de: string; en: string };
  category: { de: string; en: string };
  description: { de: string; en: string };
  longDescription: { de: string; en: string };
  technologies: string[];
  features: { de: string[]; en: string[] };
  imageLayout: "main-hero" | "grid" | "showcase" | "mobile-feature";
  demoUrl?: string;
  githubUrl?: string;
  projects?: { name: string; url: string }[];
  priority: number;
}

const projects: Project[] = [
  {
    id: "nest-haus",
    title: { de: "Da Hoam (Nest-Haus)", en: "Da Hoam (Nest-Haus)" },
    subtitle: {
      de: "Moderne Hauskonfigurations-Plattform",
      en: "Modern House Configuration Platform",
    },
    category: { de: "Webanwendung", en: "Web Application" },
    description: {
      de: "Eine hochmoderne Next.js-Anwendung für Hauskonfiguration und Visualisierung mit interaktivem Konfigurator, dynamischem Preissystem und umfassender Immobilienexploration.",
      en: "A sophisticated Next.js application for house configuration and visualization with interactive configurator, dynamic pricing system, and comprehensive property exploration.",
    },
    longDescription: {
      de: "Entwickelt mit Next.js 15, TypeScript und modernen Architekturmustern. Implementiert komplexes State Management, Echtzeit-Konfigurationsupdates und responsives Design für optimale Benutzererfahrung auf allen Geräten. Dieses Projekt zeigt meine Expertise in modernem Web-Design, fortgeschrittenem State Management mit Zustand und skalierbarer Architektur.",
      en: "Built with Next.js 15, TypeScript, and modern architecture patterns. Implements complex state management, real-time configuration updates, and responsive design for optimal user experience across all devices. This project showcases my expertise in modern web design, advanced state management with Zustand, and scalable architecture.",
    },
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Prisma",
      "PostgreSQL",
    ],
    features: {
      de: [
        "Interaktiver Hauskonfigurator",
        "Dynamisches Preissystem",
        "Immobilien-Entdeckungsschnittstelle",
        "Responsives Design",
        "Echtzeit-Updates",
        "Modernes UI/UX",
      ],
      en: [
        "Interactive House Configurator",
        "Dynamic Pricing System",
        "Property Discovery Interface",
        "Responsive Design",
        "Real-time Updates",
        "Modern UI/UX",
      ],
    },
    imageLayout: "main-hero",
    demoUrl: "https://nest-haus.vercel.app",
    githubUrl: "https://github.com/stenkjan/nest-haus",
    priority: 1,
  },
  {
    id: "ks-database",
    title: {
      de: "SSC Railtec Produktdatenbank",
      en: "SSC Railtec Product Database",
    },
    subtitle: {
      de: "Enterprise-Produktmanagementsystem",
      en: "Enterprise Product Management System",
    },
    category: { de: "Full-Stack-Anwendung", en: "Full-Stack Application" },
    description: {
      de: "Ein umfassendes Produktdatenbank-Managementsystem mit erweiterten Konfigurationsmöglichkeiten, Admin-Dashboard und skalierbarer Architektur.",
      en: "A comprehensive product database management system with advanced configuration capabilities, admin dashboard, and scalable architecture.",
    },
    longDescription: {
      de: "Entwickelt für Skalierbarkeit und Wartbarkeit zeigt dieses System Prinzipien sauberer Architektur, effizientes Datenbankdesign und intuitive Benutzeroberflächen. Das System umfasst Authentifizierung, Produktregistrierung, Konfigurationsverwaltung und umfassende Administrationswerkzeuge.",
      en: "Designed for scalability and maintainability, this system showcases clean architecture principles, efficient database design, and intuitive user interfaces. The system includes authentication, product registration, configuration management, and comprehensive administration tools.",
    },
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Express",
      "Material-UI",
      "RESTful APIs",
    ],
    features: {
      de: [
        "Benutzerauthentifizierung",
        "Produktregistrierung & -verwaltung",
        "Konfigurationssystem",
        "Admin-Dashboard",
        "Erweiterte Suche & Filterung",
        "Datenvisualisierung",
      ],
      en: [
        "User Authentication",
        "Product Registration & Management",
        "Configuration System",
        "Admin Dashboard",
        "Advanced Search & Filtering",
        "Data Visualization",
      ],
    },
    imageLayout: "showcase",
    demoUrl: "https://produktdatenbank-298f60a21e50.herokuapp.com",
    priority: 2,
  },
  {
    id: "fusspflege-app",
    title: {
      de: "Fußpflege Kundenverwaltung",
      en: "Foot Care Patient Management",
    },
    subtitle: {
      de: "Mobile Patientenverwaltungs-App",
      en: "Mobile Patient Management App",
    },
    category: { de: "Flutter Mobile App", en: "Flutter Mobile App" },
    description: {
      de: "Eine professionelle Flutter-App für Patientenregistrierung und -verwaltung. Enthält umfassende Kundenliste, Teilen-Funktion für Datenexport und benutzerfreundliches Registrierungsformular.",
      en: "A professional Flutter app for patient registration and management. Features comprehensive customer list, sharing functionality for data export, and user-friendly registration form.",
    },
    longDescription: {
      de: "Diese Flutter-App demonstriert Cross-Platform-Entwicklungsexpertise mit nativem Look & Feel. Die App verwendet moderne Flutter-Widgets und State Management für eine flüssige Benutzererfahrung. Perfekt für kleine Praxen zur Verwaltung ihrer Kundendaten mit Offline-First-Ansatz.",
      en: "This Flutter app demonstrates cross-platform development expertise with native look & feel. The app uses modern Flutter widgets and state management for a smooth user experience. Perfect for small practices to manage their customer data with an offline-first approach.",
    },
    technologies: [
      "Flutter",
      "Dart",
      "SQLite",
      "Provider State Management",
      "Material Design",
    ],
    features: {
      de: [
        "Kundenliste mit Suchfunktion",
        "Patientenregistrierung",
        "Datenexport & Teilen",
        "Offline-First Architektur",
        "Sichere Datenverwaltung",
        "Modernes UI Design",
      ],
      en: [
        "Customer List with Search",
        "Patient Registration",
        "Data Export & Sharing",
        "Offline-First Architecture",
        "Secure Data Management",
        "Modern UI Design",
      ],
    },
    imageLayout: "mobile-feature",
    priority: 3,
  },
  {
    id: "longcovid-app",
    title: { de: "Long COVID Tracking App", en: "Long COVID Tracking App" },
    subtitle: {
      de: "Medizinische Symptomverfolgung",
      en: "Medical Symptom Tracking",
    },
    category: { de: "Flutter Mobile App", en: "Flutter Mobile App" },
    description: {
      de: "Eine Flutter-App zur Verfolgung und Verwaltung von Long-COVID-Symptomen, entwickelt als Teil meiner Masterarbeit. Bietet umfassende Funktionen für medizinische Dokumentation und Patientenverwaltung.",
      en: "A Flutter app for tracking and managing Long COVID symptoms, developed as part of my master's thesis. Provides comprehensive features for medical documentation and patient management.",
    },
    longDescription: {
      de: "Diese App wurde im Rahmen meiner Masterarbeit entwickelt und zeigt meine Fähigkeit, komplexe medizinische Anwendungen zu erstellen. Sie umfasst Symptomverfolgung, Datenvisualisierung und sichere Datenverwaltung für medizinische Zwecke.",
      en: "This app was developed as part of my master's thesis and demonstrates my ability to create complex medical applications. It includes symptom tracking, data visualization, and secure data management for medical purposes.",
    },
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Charts & Visualization",
      "Healthcare Standards",
    ],
    features: {
      de: [
        "Symptomverfolgung",
        "Datenvisualisierung",
        "Patientenverwaltung",
        "Medizinische Dokumentation",
        "Sichere Datenspeicherung",
        "Export-Funktionen",
      ],
      en: [
        "Symptom Tracking",
        "Data Visualization",
        "Patient Management",
        "Medical Documentation",
        "Secure Data Storage",
        "Export Functions",
      ],
    },
    imageLayout: "showcase",
    priority: 4,
  },
  {
    id: "ntgl-events",
    title: {
      de: "NTGL Event-Registrierung",
      en: "NTGL Event Registration",
    },
    subtitle: {
      de: "Event-Management-Website",
      en: "Event Management Website",
    },
    category: { de: "Next.js Webanwendung", en: "Next.js Web Application" },
    description: {
      de: "Eine Next.js Event-Registrierungswebsite mit Flyer-Anzeige, Event-Vorschau und benutzerfreundlichem Registrierungsformular. Optimiert für schnelle Ladezeiten und mobile Geräte.",
      en: "A Next.js event registration website with flyer display, event preview, and user-friendly registration form. Optimized for fast loading times and mobile devices.",
    },
    longDescription: {
      de: "Diese Website zeigt, wie kleine Unternehmen und Teams schnell professionelle Event-Registrierungssysteme einsetzen können. Bietet anpassbare Registrierungsformulare, Teilnehmerverwaltung und responsives Design - perfekt für Unternehmen, die effizientes Event-Management ohne komplexe Einrichtung benötigen.",
      en: "This website demonstrates how small businesses and teams can quickly deploy professional event registration systems. Features customizable registration forms, participant management, and responsive design - perfect for companies needing efficient event management without complex setup.",
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Form Handling",
    ],
    features: {
      de: [
        "Schnelle Event-Einrichtung",
        "Benutzerdefinierte Formulare",
        "Flyer-Integration",
        "Teilnehmerverwaltung",
        "Mobiles Design",
        "SEO-optimiert",
      ],
      en: [
        "Quick Event Setup",
        "Custom Forms",
        "Flyer Integration",
        "Participant Management",
        "Mobile Design",
        "SEO Optimized",
      ],
    },
    imageLayout: "showcase",
    priority: 5,
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useLanguage();

  const activeProjectData =
    projects.find((p) => p.id === activeProject) || projects[0];

  const projectImages = getProjectImages(activeProject);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  const renderImageGallery = () => {
    if (projectImages.length === 0) {
      return (
        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-8 h-full flex items-center justify-center">
          <p className="text-gray-600 text-center">
            {language === "de"
              ? "Bilder werden bald verfügbar sein"
              : "Images coming soon"}
          </p>
        </div>
      );
    }

    switch (activeProjectData.imageLayout) {
      case "main-hero":
        // Da Hoam: Main landing page at top, grid of 4 images below
        return (
          <div className="space-y-4">
            {/* Main Hero Image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={projectImages[0]}
                alt={`${activeProjectData.title[language]} - Landingpage`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Grid of 4 images */}
            {projectImages.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {projectImages.slice(1, 5).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-48 rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={img}
                      alt={`${activeProjectData.title[language]} - Feature ${idx + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "showcase":
        // SSC Railtec: Main product screenshot, then smaller detail windows
        return (
          <div className="space-y-4">
            {/* Main Screenshot with menu bar */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
              <Image
                src={projectImages[0]}
                alt={`${activeProjectData.title[language]} - Hauptansicht`}
                fill
                className="object-contain bg-white"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Smaller detail windows */}
            {projectImages.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {projectImages.slice(1).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-32 rounded-lg overflow-hidden shadow-md border border-gray-200"
                  >
                    <Image
                      src={img}
                      alt={`${activeProjectData.title[language]} - Detail ${idx + 1}`}
                      fill
                      className="object-contain bg-gray-50 hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 33vw, 16vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "mobile-feature":
        // Fusspflege: Mobile screenshots in phone frames
        return (
          <div className="flex justify-center items-center space-x-4">
            {projectImages.slice(0, 3).map((img, idx) => (
              <div key={idx} className="relative">
                {/* Phone frame */}
                <div className="relative w-48 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`${activeProjectData.title[language]} - Screen ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        // Carousel for other projects
        return (
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={projectImages[currentImageIndex]}
                alt={`${activeProjectData.title[language]} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain bg-gray-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {projectImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {projectImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImageIndex
                          ? "bg-white w-6"
                          : "bg-white/50"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("projects.title", language)}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("projects.subtitle", language)}
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects
            .sort((a, b) => a.priority - b.priority)
            .map((project) => (
              <button
                key={project.id}
                onClick={() => {
                  setActiveProject(project.id);
                  setCurrentImageIndex(0);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeProject === project.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                }`}
              >
                {project.title[language]}
              </button>
            ))}
        </div>

        {/* Active Project Display */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Project Info */}
            <div className="p-8 lg:p-12 order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                  {activeProjectData.category[language]}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {activeProjectData.title[language]}
                </h3>
                <p className="text-xl text-blue-600 font-medium mb-4">
                  {activeProjectData.subtitle[language]}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {activeProjectData.longDescription[language]}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("projects.technologies", language)}
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
                  {t("projects.features", language)}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProjectData.features[language].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
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
                    <span>{t("projects.viewDemo", language)}</span>
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
                    <span>{t("projects.viewCode", language)}</span>
                  </a>
                )}
                {activeProjectData.projects && (
                  <div className="flex flex-wrap gap-2 w-full">
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 lg:p-12 order-1 lg:order-2">
              {renderImageGallery()}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            {t("projects.interestedCta", language)}
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors group"
          >
            <span>{t("projects.discussProject", language)}</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
