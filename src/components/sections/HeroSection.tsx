"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Database,
  Globe,
  Sparkles,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";

const skills = [
  { icon: Code2, label: { de: "React & Next.js", en: "React & Next.js" }, delay: 0, color: "from-blue-500 to-blue-600" },
  { icon: Smartphone, label: { de: "Flutter", en: "Flutter" }, delay: 100, color: "from-purple-500 to-purple-600" },
  { icon: Database, label: { de: "Full-Stack", en: "Full-Stack" }, delay: 200, color: "from-green-500 to-green-600" },
  { icon: Globe, label: { de: "TypeScript", en: "TypeScript" }, delay: 300, color: "from-indigo-500 to-indigo-600" },
];

const roles = {
  de: [
    "React Web App Entwickler",
    "Next.js Entwickler",
    "Flutter Entwickler",
    "Full-Stack Entwickler",
    "TypeScript Experte",
  ],
  en: [
    "React Web App Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Full-Stack Developer",
    "TypeScript Expert",
  ],
};

const achievements = [
  { icon: TrendingUp, value: "6+", label: { de: "Projekte", en: "Projects" } },
  { icon: Award, value: "4+", label: { de: "Jahre Erfahrung", en: "Years Experience" } },
  { icon: Zap, value: "10+", label: { de: "Technologien", en: "Technologies" } },
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  const currentRoles = roles[language];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % currentRoles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentRoles.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Greeting with Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  {language === 'de' ? "Verfügbar für neue Projekte" : "Available for new projects"}
                </span>
              </div>
              <p className="text-blue-600 font-medium text-lg mb-2">
                {t("hero.greeting", language)}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                {t("hero.title", language)}
              </h1>
              <div className="h-16 sm:h-20">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                  <span className="inline-block transition-all duration-500 ease-in-out">
                    {currentRoles[currentRole]}
                  </span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              {t("hero.description", language)}
            </p>

            {/* Skills Icons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.label.en}
                    className={`flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100 transition-all duration-500 hover:shadow-lg hover:scale-105 group ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${skill.delay}ms` }}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {skill.label[language]}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 hover:scale-105 hover:shadow-xl group"
              >
                <span>{language === 'de' ? "Meine Arbeit ansehen" : "View My Work"}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200 hover:scale-105 hover:shadow-md group"
              >
                <span>{language === 'de' ? "Kontakt aufnehmen" : "Get in Touch"}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center group cursor-default">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {achievement.label[language]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Main Card with 3D Effect */}
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8 relative overflow-hidden backdrop-blur-sm border border-gray-100">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Code2 className="h-24 w-24 text-white" />
                  </div>

                  {/* Tech Stack Grid */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {language === 'de' ? "Tech Stack" : "Tech Stack"}
                    </h3>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      {['React', 'Next.js', 'TypeScript', 'Flutter', 'Node.js', 'PostgreSQL'].map((tech, index) => (
                        <div
                          key={tech}
                          className="px-4 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600"
                          style={{
                            animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                          }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="w-full mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <p className="text-sm text-gray-700 text-center">
                      <span className="font-semibold text-blue-600">
                        {language === 'de' ? "Spezialisiert auf:" : "Specialized in:"}
                      </span>
                      <br />
                      {language === 'de'
                        ? "Web-Apps, Chatbot-Integration & Mobile Development"
                        : "Web Apps, Chatbot Integration & Mobile Development"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-10 animate-ping animation-delay-1000"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500 rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes (add to globals.css) */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

