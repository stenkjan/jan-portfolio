"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Code2,
  Smartphone,
  Database,
  Globe,
} from "lucide-react";

const skills = [
  { icon: Code2, label: "React & Next.js", delay: 0 },
  { icon: Smartphone, label: "Flutter", delay: 100 },
  { icon: Database, label: "Full-Stack", delay: 200 },
  { icon: Globe, label: "TypeScript", delay: 300 },
];

const roles = [
  "React Web App Developer",
  "Next.js Developer",
  "Flutter Developer",
  "Full-Stack Developer",
  "TypeScript Expert",
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Greeting */}
            <div className="mb-6">
              <p className="text-blue-600 font-medium text-lg mb-2">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                Jan Stenk
              </h1>
              <div className="h-16 sm:h-20">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 leading-tight">
                  <span className="inline-block transition-all duration-500 ease-in-out">
                    {roles[currentRole]}
                  </span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              I create modern, scalable web applications and mobile solutions
              using cutting-edge technologies. Specializing in React ecosystems,
              TypeScript, and full-stack development with a focus on clean
              architecture and exceptional user experiences.
            </p>

            {/* Skills Icons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.label}
                    className={`flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-md hover:scale-105 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${skill.delay}ms` }}
                  >
                    <IconComponent className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {skill.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg group"
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-md group"
              >
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                <span>Download CV</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  6+
                </div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  4+
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  10+
                </div>
                <div className="text-sm text-gray-600 mt-1">Technologies</div>
              </div>
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
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50"></div>

                {/* Profile Image Placeholder */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Code2 className="h-24 w-24 text-white" />
                  </div>

                  {/* Tech Stack */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Tech Stack
                    </h3>
                    <div className="grid grid-cols-2 gap-3 text-sm font-medium">
                      <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg">
                        React
                      </div>
                      <div className="bg-indigo-100 text-indigo-800 px-3 py-2 rounded-lg">
                        Next.js
                      </div>
                      <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg">
                        TypeScript
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg">
                        Node.js
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg">
                        Flutter
                      </div>
                      <div className="bg-red-100 text-red-800 px-3 py-2 rounded-lg">
                        PostgreSQL
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500 rounded-full opacity-10 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
