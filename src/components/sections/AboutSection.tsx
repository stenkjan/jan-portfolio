"use client";

import {
  Code2,
  Smartphone,
  Database,
  Globe,
  Users,
  Zap,
  Award,
  Target,
} from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React & Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript (ES6+)", level: 92 },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 80 },
      { name: "Cross-Platform", level: 88 },
      { name: "Mobile UI/UX", level: 82 },
    ],
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Prisma ORM", level: 88 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: Globe,
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Vercel/Netlify", level: 85 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

const values = [
  {
    icon: Zap,
    title: "Performance First",
    description:
      "I prioritize creating fast, optimized applications that provide exceptional user experiences across all devices.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Strong focus on clean, maintainable code that enables effective collaboration within development teams.",
  },
  {
    icon: Target,
    title: "Solution Oriented",
    description:
      "I approach every project with a problem-solving mindset, delivering tailored solutions that meet specific business needs.",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description:
      "Committed to delivering high-quality code with proper testing, documentation, and adherence to best practices.",
  },
];

const experience = [
  {
    period: "2020 - Present",
    title: "Self-Employed Developer",
    company: "Freelance & Contract Work",
    description:
      "Developing modern web applications and mobile solutions for various clients, specializing in React ecosystems and full-stack development.",
    achievements: [
      "Built 6+ production applications",
      "Specialized in Next.js and TypeScript",
      "Delivered scalable, maintainable solutions",
      "Collaborated with diverse teams and clients",
    ],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with expertise in modern web technologies and
            mobile development. I create scalable, user-focused solutions that
            drive business success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info & Values */}
          <div>
            {/* Personal Introduction */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                My Approach
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  As a <strong>React web app developer</strong> and{" "}
                  <strong>Next.js specialist</strong>, I focus on creating
                  modern, scalable applications that provide exceptional user
                  experiences. My expertise spans across frontend and backend
                  development, with a particular strength in
                  <strong> TypeScript</strong> and modern JavaScript frameworks.
                </p>
                <p>
                  My experience as a <strong>Flutter developer</strong>{" "}
                  complements my web development skills, allowing me to create
                  comprehensive digital solutions that work seamlessly across
                  platforms. I believe in writing clean, maintainable code that
                  enables effective team collaboration and long-term project
                  success.
                </p>
                <p>
                  Whether working on complex full-stack applications or
                  streamlined mobile solutions, I prioritize performance,
                  scalability, and user experience in every project I undertake.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <IconComponent className="h-5 w-5 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {value.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Experience
              </h3>
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-600 pl-6 pb-8"
                >
                  <div className="mb-2">
                    <span className="text-sm text-blue-600 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-8">
              {skills.map((skillCategory, index) => {
                const IconComponent = skillCategory.icon;
                return (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {skillCategory.category}
                      </h4>
                    </div>
                    <div className="space-y-4">
                      {skillCategory.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Why Work With Me?
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm">
                    4+ years of professional development experience
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm">
                    Specialized in modern React and Next.js ecosystems
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm">
                    Strong focus on code quality and team collaboration
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm">
                    Experience with both web and mobile development
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm">
                    Proven track record of delivering scalable solutions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

