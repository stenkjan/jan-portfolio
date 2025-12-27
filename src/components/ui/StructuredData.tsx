export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jan Stenk",
    jobTitle: "Full-Stack Developer",
    description:
      "Experienced React web app developer, Next.js specialist, and Flutter developer. Expert in TypeScript, full-stack development with modern tools.",
    url: "https://jan-stenk-portfolio.vercel.app",
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
      ],
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web Development Services",
        description:
          "Professional web application development, mobile app development, and full-stack solutions using modern technologies like React, Next.js, TypeScript, and Flutter.",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

