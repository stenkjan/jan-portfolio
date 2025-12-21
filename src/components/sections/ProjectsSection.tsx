"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Code2,
  Zap,
  Shield,
  Users,
  Database,
  Globe,
  Smartphone,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";
import { projectImages } from "@/lib/imageStorage";

// Project data with German and English content
const projects = [
  {
    id: "nest-haus",
    title: { de: "Da Hoam (Nest-Haus)", en: "Da Hoam (Nest-Haus)" },
    subtitle: {
      de: "Moderne Hauskonfigurations-Plattform",
      en: "Modern House Configuration Platform",
    },
    category: { de: "Webanwendung", en: "Web Application" },
    description: {
      de: "Eine hochmoderne Next.js-Anwendung für Hauskonfiguration und -visualisierung. Mit interaktivem Konfigurator, dynamischem Preissystem und umfassender Immobiliensuche.",
      en: "A sophisticated Next.js application for house configuration and visualization. Features an interactive configurator, dynamic pricing system, and comprehensive property exploration.",
    },
    longDescription: {
      de: "Entwickelt mit Next.js 15, TypeScript und modernen Architekturmustern. Implementiert komplexes State Management, Echtzeit-Konfigurationsupdates und responsives Design für optimale Benutzererfahrung auf allen Geräten. Zeigt modernste Web-Entwicklungspraktiken und skalierbare Architektur.",
      en: "Built with Next.js 15, TypeScript, and modern architecture patterns. Implements complex state management, real-time configuration updates, and responsive design for optimal user experience across all devices. Demonstrates cutting-edge web development practices and scalable architecture.",
    },
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Prisma",
      "PostgreSQL",
      "Vercel Blob",
    ],
    features: {
      de: [
        "Interaktiver Hauskonfigurator",
        "Dynamisches Preissystem",
        "Immobilien-Entdeckungs-Interface",
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
    highlights: [
      { icon: Zap, text: { de: "Hochperformante Architektur", en: "High Performance Architecture" } },
      { icon: Shield, text: { de: "Typ-sichere Entwicklung", en: "Type-Safe Development" } },
      { icon: Users, text: { de: "Außergewöhnliche UX", en: "Exceptional User Experience" } },
    ],
    images: [
      { url: projectImages.da_hoam_landingpage, alt: "Da Hoam Landing Page", featured: true },
      { url: projectImages.da_hoam_konfigurator, alt: "Interactive House Configurator", featured: true },
      { url: projectImages.da_hoam_konzeptcheck, alt: "Concept Check", featured: false },
      { url: projectImages.da_hoam_warumwir, alt: "Why Us Section", featured: false },
      { url: projectImages.da_hoam_kontakt, alt: "Contact Section", featured: false },
    ],
    demoUrl: "https://nest-haus.vercel.app",
    githubUrl: "https://github.com/stenkjan/nest-haus",
    type: "showcase",
    priority: 1,
  },
  {
    id: "ks-database",
    title: { de: "SSC Railtec Produktdatenbank", en: "SSC Railtec Product Database" },
    subtitle: {
      de: "Enterprise Produktverwaltungssystem",
      en: "Enterprise Product Management System",
    },
    category: { de: "Full-Stack Anwendung", en: "Full-Stack Application" },
    description: {
      de: "Ein umfassendes Produktdatenbank-Managementsystem mit erweiterten Konfigurationsmöglichkeiten, Admin-Dashboard und skalierbarer Architektur.",
      en: "A comprehensive product database management system with advanced configuration capabilities, admin dashboard, and scalable architecture.",
    },
    longDescription: {
      de: "Entworfen für Skalierbarkeit und Wartbarkeit, demonstriert dieses System Clean-Architecture-Prinzipien, effizientes Datenbankdesign und intuitive Benutzeroberflächen. Entwickelt mit modernen Tools für optimale Teamzusammenarbeit und langfristige Wartung.",
      en: "Designed for scalability and maintainability, this system showcases clean architecture principles, efficient database design, and intuitive user interfaces. Built with modern tools for optimal team collaboration and long-term maintenance.",
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
        "Produktkonfigurationsverwaltung",
        "Admin Dashboard",
        "Erweiterte Suche & Filterung",
        "Datenvisualisierung",
        "Benutzerverwaltung",
        "API-Integration",
      ],
      en: [
        "Product Configuration Management",
        "Admin Dashboard",
        "Advanced Search & Filtering",
        "Data Visualization",
        "User Role Management",
        "API Integration",
      ],
    },
    highlights: [
      { icon: Database, text: { de: "Skalierbares Datenbankdesign", en: "Scalable Database Design" } },
      { icon: Code2, text: { de: "Clean Architecture", en: "Clean Architecture" } },
      { icon: Users, text: { de: "Teamfreundliche Codebasis", en: "Team-Friendly Codebase" } },
    ],
    images: [
      { url: projectImages.produktdatenbank_produkt, alt: "Product Registration Form", featured: true },
      { url: projectImages.produktdatenbank_konfigurationen, alt: "Configuration Management", featured: false },
      { url: projectImages.produktdatenbank_verwaltung, alt: "Admin Panel", featured: false },
      { url: projectImages.produktdatenbank_signing, alt: "Authentication", featured: false },
    ],
    demoUrl: "https://produktdatenbank-298f60a21e50.herokuapp.com",
    githubUrl: "https://github.com/stenkjan/ks-database",
    type: "showcase",
    priority: 2,
  },
  {
    id: "fusspflege-app",
    title: { de: "Fußpflege Kundenverwaltung", en: "Foot Care Patient Management" },
    subtitle: {
      de: "Flutter Patienten-Management-App",
      en: "Flutter Patient Management App",
    },
    category: { de: "Mobile Entwicklung", en: "Mobile Development" },
    description: {
      de: "Eine professionelle Flutter-App für Patientenregistrierung und -verwaltung in der Fußpflege. Enthält Kundenliste, Datenaustausch und Registrierungsformular.",
      en: "A professional Flutter app for patient registration and management in foot care. Includes customer list, data sharing, and registration form.",
    },
    longDescription: {
      de: "Entwickelt mit Flutter für native Performance auf iOS und Android. Demonstriert moderne mobile UI/UX-Patterns, sichere Datenverwaltung und intuitive Bedienung für medizinisches Personal.",
      en: "Built with Flutter for native performance on iOS and Android. Demonstrates modern mobile UI/UX patterns, secure data management, and intuitive operation for medical staff.",
    },
    technologies: ["Flutter", "Dart", "Mobile UI/UX", "Local Storage", "Cross-Platform"],
    features: {
      de: [
        "Kundenliste mit Suchfunktion",
        "Datenaustausch zwischen Geräten",
        "Patientenregistrierung",
        "Sichere Datenverwaltung",
        "Offline-Fähigkeiten",
        "Native Performance",
      ],
      en: [
        "Customer List with Search",
        "Data Sharing Between Devices",
        "Patient Registration",
        "Secure Data Management",
        "Offline Capabilities",
        "Native Performance",
      ],
    },
    highlights: [
      { icon: Smartphone, text: { de: "Cross-Platform Exzellenz", en: "Cross-Platform Excellence" } },
      { icon: Zap, text: { de: "Native Performance", en: "Native Performance" } },
      { icon: Shield, text: { de: "Sichere Datenverwaltung", en: "Secure Data Management" } },
    ],
    images: [
      { url: projectImages.fusspflege_kundenliste, alt: "Customer List View", featured: true },
      { url: projectImages.fusspflege_teilen, alt: "Data Sharing", featured: false },
      { url: projectImages.fusspflege_registrierung, alt: "Registration Form", featured: false },
    ],
    githubUrl: "https://github.com/stenkjan/fuesse_und_fusspflege_cw",
    type: "showcase",
    priority: 3,
  },
  {
    id: "longcovid-app",
    title: { de: "Long COVID Tracking App", en: "Long COVID Tracking App" },
    subtitle: {
      de: "Medizinische Flutter-App (Masterarbeit)",
      en: "Medical Flutter App (Master's Thesis)",
    },
    category: { de: "Mobile Entwicklung", en: "Mobile Development" },
    description: {
      de: "Eine Flutter-App zur Verfolgung und Verwaltung von Long-COVID-Symptomen, entwickelt als Teil meiner Masterarbeit. Bietet umfassende Symptomverfolgung und medizinische Dokumentation.",
      en: "A Flutter app for tracking and managing Long COVID symptoms, developed as part of my master's thesis. Provides comprehensive symptom tracking and medical documentation.",
    },
    longDescription: {
      de: "Diese App wurde im Rahmen meiner Masterarbeit entwickelt und demonstriert die Anwendung moderner Mobile-Technologien im medizinischen Bereich. Fokus auf Benutzerfreundlichkeit und Datenschutz.",
      en: "This app was developed as part of my master's thesis and demonstrates the application of modern mobile technologies in the medical field. Focus on user-friendliness and data privacy.",
    },
    technologies: ["Flutter", "Dart", "Medical Data", "Data Visualization", "Privacy-First"],
    features: {
      de: [
        "Symptomverfolgung",
        "Datenvisualisierung",
        "Patientenverwaltung",
        "Medizinische Dokumentation",
        "Datenschutz-konform",
        "Benutzerfreundliches Interface",
      ],
      en: [
        "Symptom Tracking",
        "Data Visualization",
        "Patient Management",
        "Medical Documentation",
        "Privacy Compliant",
        "User-Friendly Interface",
      ],
    },
    highlights: [
      { icon: Smartphone, text: { de: "Medizinische Präzision", en: "Medical Precision" } },
      { icon: Shield, text: { de: "Datenschutz-konform", en: "Privacy Compliant" } },
      { icon: Users, text: { de: "Patient-orientiert", en: "Patient-Oriented" } },
    ],
    images: [
      { url: projectImages.masterarbeit_longcovidapp, alt: "Long COVID App Overview", featured: true },
    ],
    githubUrl: "https://github.com/stenkjan/covidapp",
    type: "showcase",
    priority: 4,
  },
  {
    id: "ntgl-events",
    title: { de: "NTGL Event-Registrierung", en: "NTGL Event Registration" },
    subtitle: {
      de: "Next.js Event-Plattform",
      en: "Next.js Event Platform",
    },
    category: { de: "Webanwendung", en: "Web Application" },
    description: {
      de: "Eine moderne Next.js Event-Registrierungswebsite mit Flyer-Anzeige, Event-Vorschau und Registrierungsformular. Optimiert für schnelle Einrichtung und einfache Verwaltung.",
      en: "A modern Next.js event registration website with flyer display, event preview, and registration form. Optimized for quick setup and easy management.",
    },
    longDescription: {
      de: "Diese Plattform demonstriert, wie kleine Organisationen schnell professionelle Event-Registrierungssysteme einsetzen können. Jede Lösung bietet anpassbare Registrierungsformulare und responsives Design.",
      en: "This platform demonstrates how small organizations can quickly deploy professional event registration systems. Each solution provides customizable registration forms and responsive design.",
    },
    technologies: ["React", "Next.js", "TypeScript", "Netlify", "Form Handling"],
    features: {
      de: [
        "Schnelle Event-Einrichtung",
        "Benutzerdefinierte Formulare",
        "Teilnehmerverwaltung",
        "Mobiles Design",
        "Einfache Bereitstellung",
        "Kleine Teams optimiert",
      ],
      en: [
        "Quick Event Setup",
        "Custom Registration Forms",
        "Participant Management",
        "Mobile-Friendly Design",
        "Easy Deployment",
        "Small Team Optimized",
      ],
    },
    highlights: [
      { icon: Zap, text: { de: "Schnelle Bereitstellung", en: "Rapid Deployment" } },
      { icon: Users, text: { de: "Kleine Teams optimiert", en: "Small Team Optimized" } },
      { icon: Globe, text: { de: "Professionelle Ergebnisse", en: "Professional Results" } },
    ],
    images: [
      { url: projectImages.ntgl_eventseite, alt: "NTGL Event Website", featured: true },
    ],
    githubUrl: "https://github.com/stenkjan/ntgl-events",
    type: "showcase",
    priority: 5,
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [imageIndex, setImageIndex] = useState<Record<string, number>>({});
  const { language } = useLanguage();

  const activeProjectData = projects.find((p) => p.id === activeProject) || projects[0];

  const handleNextImage = (projectId: string, maxIndex: number) => {
    setImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % maxIndex,
    }));
  };

  const handlePrevImage = (projectId: string, maxIndex: number) => {
    setImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + maxIndex) % maxIndex,
    }));
  };

  const currentImageIndex = imageIndex[activeProject] || 0;
  const currentImage = activeProjectData.images[currentImageIndex];

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

              {/* Key Highlights */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("projects.highlights", language)}
                </h4>
                <div className="space-y-3">
                  {activeProjectData.highlights.map((highlight, index) => {
                    const IconComponent = highlight.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <IconComponent className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{highlight.text[language]}</span>
                      </div>
                    );
                  })}
                </div>
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
              </div>
            </div>

            {/* Project Visual with Image Carousel */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2 relative">
              <div className="w-full max-w-lg relative">
                {/* Image Display */}
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative aspect-video">
                  <Image
                    src={currentImage.url}
                    alt={currentImage.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={activeProjectData.priority === 1}
                  />
                </div>

                {/* Image Navigation */}
                {activeProjectData.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        handlePrevImage(activeProject, activeProjectData.images.length)
                      }
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-800" />
                    </button>
                    <button
                      onClick={() =>
                        handleNextImage(activeProject, activeProjectData.images.length)
                      }
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6 text-gray-800" />
                    </button>

                    {/* Image Indicators */}
                    <div className="flex justify-center mt-4 space-x-2">
                      {activeProjectData.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            setImageIndex((prev) => ({ ...prev, [activeProject]: idx }))
                          }
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "bg-blue-600 w-8"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
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
