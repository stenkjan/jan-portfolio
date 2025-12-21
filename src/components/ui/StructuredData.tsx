export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jan Stenk",
    jobTitle: "Full-Stack Developer",
    description:
      "Experienced React web app developer, Next.js specialist, and Flutter developer. Expert in TypeScript, full-stack development, and AI chatbot integration.",
    url: "https://jan-stenk-portfolio.vercel.app",
    image: "https://jan-stenk-portfolio.vercel.app/favicon.svg",
    sameAs: [
      "https://github.com/stenkjan",
      "https://www.linkedin.com/in/jan-stenk-46b820147/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Flutter",
      "Full-Stack Development",
      "Web Development",
      "Mobile App Development",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Chatbot Development",
      "AI Integration",
      "SEO Optimization",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Germany",
      },
      skills: [
        "React Development",
        "Next.js Development",
        "TypeScript Programming",
        "Flutter Development",
        "Full-Stack Development",
        "Web Application Development",
        "Mobile App Development",
        "Chatbot Integration",
        "AI-Powered Websites",
        "SEO & Performance Optimization",
      ],
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
          description:
            "Professional web application development using React, Next.js, and TypeScript. Modern, scalable solutions optimized for performance and SEO.",
          provider: {
            "@type": "Person",
            name: "Jan Stenk",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description:
            "Cross-platform mobile application development with Flutter and Dart. Native performance on iOS and Android.",
          provider: {
            "@type": "Person",
            name: "Jan Stenk",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chatbot Integration",
          description:
            "AI-powered chatbot integration for websites. Enhance customer engagement with intelligent, context-aware assistants.",
          provider: {
            "@type": "Person",
            name: "Jan Stenk",
          },
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jan Stenk - Portfolio",
    url: "https://jan-stenk-portfolio.vercel.app",
    description:
      "Professional portfolio of Jan Stenk showcasing modern web applications, mobile solutions, and chatbot integration projects.",
    author: {
      "@type": "Person",
      name: "Jan Stenk",
    },
    inLanguage: ["de-DE", "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://jan-stenk-portfolio.vercel.app/#projects",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Jan Stenk",
      alternateName: "Jan Stenk Developer",
      description: "Full-Stack Developer specializing in React, Next.js, and Flutter",
    },
  };

  // Combine all schemas
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema, profilePageSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

