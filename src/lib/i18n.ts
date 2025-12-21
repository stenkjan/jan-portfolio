// Internationalization utilities for German/English support

export type Language = 'de' | 'en';

export interface Translation {
  de: string;
  en: string;
}

export const translations = {
  // Navigation
  nav: {
    home: { de: 'Startseite', en: 'Home' },
    about: { de: 'Über mich', en: 'About' },
    projects: { de: 'Projekte', en: 'Projects' },
    skills: { de: 'Fähigkeiten', en: 'Skills' },
    contact: { de: 'Kontakt', en: 'Contact' },
    getInTouch: { de: 'Kontakt aufnehmen', en: 'Get in Touch' },
  },

  // Hero Section
  hero: {
    greeting: { de: 'Hallo, ich bin', en: 'Hello, I\'m' },
    title: { de: 'Jan Stenk', en: 'Jan Stenk' },
    roles: {
      react: { de: 'React Web App Entwickler', en: 'React Web App Developer' },
      nextjs: { de: 'Next.js Spezialist', en: 'Next.js Specialist' },
      flutter: { de: 'Flutter Entwickler', en: 'Flutter Developer' },
      fullstack: { de: 'Full-Stack TypeScript Experte', en: 'Full-Stack TypeScript Expert' },
    },
    description: {
      de: 'Ich entwickle moderne, skalierbare Webanwendungen und mobile Lösungen mit modernsten Technologien. Spezialisiert auf React, Next.js und Flutter.',
      en: 'I create modern, scalable web applications and mobile solutions with cutting-edge technologies. Specialized in React, Next.js, and Flutter.',
    },
    cta: {
      viewProjects: { de: 'Projekte ansehen', en: 'View Projects' },
      contactMe: { de: 'Kontakt aufnehmen', en: 'Contact Me' },
    },
  },

  // About Section
  about: {
    title: { de: 'Über mich', en: 'About Me' },
    subtitle: {
      de: 'Leidenschaftlicher Entwickler mit Fokus auf moderne Web- und Mobile-Technologien',
      en: 'Passionate developer focused on modern web and mobile technologies',
    },
  },

  // Projects Section
  projects: {
    title: { de: 'Ausgewählte Projekte', en: 'Featured Projects' },
    subtitle: {
      de: 'Moderne Webanwendungen und mobile Lösungen mit modernsten Technologien. Jedes Projekt zeigt technische Expertise, skalierbare Architektur und außergewöhnliche Benutzererfahrung.',
      en: 'Modern web applications and mobile solutions built with cutting-edge technologies. Each project demonstrates technical expertise, scalable architecture, and exceptional user experience.',
    },
    viewDemo: { de: 'Live Demo ansehen', en: 'View Live Demo' },
    viewCode: { de: 'Code ansehen', en: 'View Code' },
    technologies: { de: 'Verwendete Technologien', en: 'Technologies Used' },
    features: { de: 'Hauptfunktionen', en: 'Key Features' },
    highlights: { de: 'Highlights', en: 'Key Highlights' },
    interestedCta: {
      de: 'Interessiert an einer Zusammenarbeit für Ihr nächstes Projekt?',
      en: 'Interested in working together on your next project?',
    },
    discussProject: { de: 'Lassen Sie uns über Ihr Projekt sprechen', en: 'Let\'s Discuss Your Project' },
  },

  // Contact Section
  contact: {
    title: { de: 'Kontakt aufnehmen', en: 'Get in Touch' },
    subtitle: {
      de: 'Bereit, Ihr nächstes Projekt zu starten? Lassen Sie uns sprechen!',
      en: 'Ready to start your next project? Let\'s talk!',
    },
    name: { de: 'Name', en: 'Name' },
    email: { de: 'E-Mail', en: 'Email' },
    message: { de: 'Nachricht', en: 'Message' },
    send: { de: 'Nachricht senden', en: 'Send Message' },
  },

  // Chatbot
  chatbot: {
    title: { de: 'Frag mich!', en: 'Ask Me!' },
    subtitle: {
      de: 'Ihr KI-Assistent für Projektanfragen',
      en: 'Your AI Assistant for Project Inquiries',
    },
    placeholder: {
      de: 'Fragen Sie mich nach Projekten, Fähigkeiten oder Zusammenarbeit...',
      en: 'Ask me about projects, skills, or collaboration...',
    },
    send: { de: 'Senden', en: 'Send' },
    greeting: {
      de: 'Hallo! 👋 Ich bin Jans KI-Assistent. Ich helfe Ihnen gerne, mehr über seine Projekte und Fähigkeiten zu erfahren. Was möchten Sie wissen?',
      en: 'Hello! 👋 I\'m Jan\'s AI assistant. I\'m here to help you learn more about his projects and skills. What would you like to know?',
    },
  },

  // Footer
  footer: {
    rights: { de: 'Alle Rechte vorbehalten', en: 'All rights reserved' },
    builtWith: { de: 'Entwickelt mit', en: 'Built with' },
  },
};

export function t(key: string, lang: Language): string {
  const keys = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations;

  for (const k of keys) {
    value = value?.[k];
    if (!value) return key;
  }

  return value[lang] || value['en'] || key;
}

export function getTranslation(translation: Translation, lang: Language): string {
  return translation[lang] || translation.en;
}
