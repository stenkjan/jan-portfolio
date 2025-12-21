import { NextRequest, NextResponse } from 'next/server';

interface ChatRequest {
  message: string;
  language: 'de' | 'en';
}

// Project knowledge base
const projectKnowledge = {
  de: {
    introduction: 'Hallo! Ich bin der KI-Assistent von Jan Stenk, einem erfahrenen Full-Stack-Entwickler, der sich auf React, Next.js und Flutter spezialisiert hat.',
    
    projects: {
      'nest-haus': {
        name: 'Da Hoam (Nest-Haus)',
        description: 'Eine moderne Next.js-Plattform für Hauskonfiguration mit interaktivem Konfigurator, dynamischem Preissystem und responsivem Design. Entwickelt mit Next.js 15, TypeScript, Tailwind CSS, Zustand und PostgreSQL.',
        features: 'Interaktiver Hauskonfigurator, dynamisches Preissystem, Immobilien-Entdeckungsschnittstelle, Echtzeit-Updates, modernes UI/UX.',
      },
      'ks-database': {
        name: 'SSC Railtec Produktdatenbank',
        description: 'Ein umfassendes Produktdatenbank-Managementsystem für Unternehmen mit erweiterten Konfigurationsmöglichkeiten, Admin-Dashboard und skalierbarer Architektur.',
        features: 'Produktkonfigurationsverwaltung, Admin-Dashboard, erweiterte Suche und Filterung, Datenvisualisierung, Benutzerverwaltung.',
      },
      'fusspflege-app': {
        name: 'Fußpflege Kundenverwaltung',
        description: 'Eine Flutter-App für Patientenregistrierung und -verwaltung. Enthält Kundenliste, Teilen-Funktion und Registrierungsformular.',
        features: 'Kundenliste, Datenaustausch, Patientenregistrierung, sichere Datenverwaltung.',
      },
      'longcovid-app': {
        name: 'Long COVID Tracking App',
        description: 'Eine Flutter-App zur Verfolgung und Verwaltung von Long-COVID-Symptomen, entwickelt als Teil meiner Masterarbeit.',
        features: 'Symptomverfolgung, Datenvisualisierung, Patientenverwaltung, medizinische Dokumentation.',
      },
      'ntgl-events': {
        name: 'NTGL Event-Registrierung',
        description: 'Eine Next.js Event-Registrierungswebsite mit Flyer-Anzeige, Event-Vorschau und Registrierungsformular.',
        features: 'Schnelle Event-Einrichtung, benutzerdefinierte Registrierungsformulare, Teilnehmerverwaltung, mobiles Design.',
      },
    },

    skills: {
      frontend: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Responsive Design',
      backend: 'Node.js, Express, PostgreSQL, Prisma, RESTful APIs',
      mobile: 'Flutter, Dart, Cross-Platform-Entwicklung',
      tools: 'Git, GitHub, Vercel, Azure, CI/CD, ESLint, Prettier',
    },

    services: {
      webDevelopment: 'Ich entwickle moderne, skalierbare Webanwendungen mit React und Next.js, optimiert für Performance und SEO.',
      mobileDevelopment: 'Cross-Platform mobile Apps mit Flutter für iOS und Android mit nativer Performance.',
      consulting: 'Technische Beratung für Architektur, Code-Qualität und Best Practices.',
      chatbotIntegration: 'Integration von KI-gestützten Chatbots in Websites für besseren Kundenservice.',
    },

    personality: {
      helpful: 'Ich bin hier, um Ihnen zu helfen! Fragen Sie mich alles über Jans Projekte, Fähigkeiten oder wie er Ihnen helfen kann.',
      honest: 'Ich gebe ehrliche Einschätzungen darüber, was möglich ist und was nicht.',
      witty: 'Ich versuche, hilfreich und unterhaltsam zu sein, aber immer professionell.',
    },
  },

  en: {
    introduction: 'Hello! I\'m Jan Stenk\'s AI assistant, supporting an experienced full-stack developer specialized in React, Next.js, and Flutter.',
    
    projects: {
      'nest-haus': {
        name: 'Da Hoam (Nest-Haus)',
        description: 'A modern Next.js platform for house configuration with interactive configurator, dynamic pricing system, and responsive design. Built with Next.js 15, TypeScript, Tailwind CSS, Zustand, and PostgreSQL.',
        features: 'Interactive house configurator, dynamic pricing system, property discovery interface, real-time updates, modern UI/UX.',
      },
      'ks-database': {
        name: 'SSC Railtec Product Database',
        description: 'A comprehensive enterprise product database management system with advanced configuration capabilities, admin dashboard, and scalable architecture.',
        features: 'Product configuration management, admin dashboard, advanced search and filtering, data visualization, user management.',
      },
      'fusspflege-app': {
        name: 'Foot Care Patient Management',
        description: 'A Flutter app for patient registration and management. Includes customer list, sharing functionality, and registration form.',
        features: 'Customer list, data sharing, patient registration, secure data management.',
      },
      'longcovid-app': {
        name: 'Long COVID Tracking App',
        description: 'A Flutter app for tracking and managing Long COVID symptoms, developed as part of my master\'s thesis.',
        features: 'Symptom tracking, data visualization, patient management, medical documentation.',
      },
      'ntgl-events': {
        name: 'NTGL Event Registration',
        description: 'A Next.js event registration website with flyer display, event preview, and registration form.',
        features: 'Quick event setup, custom registration forms, participant management, mobile design.',
      },
    },

    skills: {
      frontend: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Responsive Design',
      backend: 'Node.js, Express, PostgreSQL, Prisma, RESTful APIs',
      mobile: 'Flutter, Dart, Cross-Platform Development',
      tools: 'Git, GitHub, Vercel, Azure, CI/CD, ESLint, Prettier',
    },

    services: {
      webDevelopment: 'I develop modern, scalable web applications with React and Next.js, optimized for performance and SEO.',
      mobileDevelopment: 'Cross-platform mobile apps with Flutter for iOS and Android with native performance.',
      consulting: 'Technical consulting for architecture, code quality, and best practices.',
      chatbotIntegration: 'Integration of AI-powered chatbots into websites for better customer service.',
    },

    personality: {
      helpful: 'I\'m here to help! Ask me anything about Jan\'s projects, skills, or how he can help you.',
      honest: 'I give honest assessments of what\'s possible and what\'s not.',
      witty: 'I try to be helpful and entertaining, but always professional.',
    },
  },
};

// Simple response generation based on keywords
function generateResponse(message: string, language: 'de' | 'en'): string {
  const lowerMessage = message.toLowerCase();
  const kb = projectKnowledge[language];

  // Greetings
  if (/(hallo|hi|hey|guten tag|servus)/i.test(lowerMessage) && language === 'de') {
    return `${kb.introduction}\n\nIch kann Ihnen Informationen über:\n• Jans Projekte (Da Hoam, SSC Railtec, Flutter-Apps)\n• Seine technischen Fähigkeiten\n• Dienstleistungen, die er anbietet\n• Mögliche Zusammenarbeit\n\nWas interessiert Sie?`;
  }
  if (/(hello|hi|hey|good morning|good day)/i.test(lowerMessage) && language === 'en') {
    return `${kb.introduction}\n\nI can provide information about:\n• Jan's projects (Da Hoam, SSC Railtec, Flutter apps)\n• His technical skills\n• Services he offers\n• Potential collaboration\n\nWhat interests you?`;
  }

  // Projects
  if (/(projekt|project|da hoam|nest-haus|nest haus)/i.test(lowerMessage)) {
    const project = kb.projects['nest-haus'];
    return language === 'de'
      ? `**${project.name}** ist Jans aktuellstes und umfangreichstes Projekt!\n\n${project.description}\n\n**Hauptfunktionen:**\n${project.features}\n\nDieses Projekt zeigt Jans Expertise in modernem Web-Design, State Management und skalierbarer Architektur. Möchten Sie mehr über die technischen Details erfahren?`
      : `**${project.name}** is Jan's most recent and comprehensive project!\n\n${project.description}\n\n**Key Features:**\n${project.features}\n\nThis project showcases Jan's expertise in modern web design, state management, and scalable architecture. Would you like to know more about the technical details?`;
  }

  if (/(produktdatenbank|product database|ks-database|railtec)/i.test(lowerMessage)) {
    const project = kb.projects['ks-database'];
    return language === 'de'
      ? `**${project.name}** - Ein Enterprise-System!\n\n${project.description}\n\n**Features:**\n${project.features}\n\nEin großartiges Beispiel für Jans Fähigkeit, komplexe Unternehmenssysteme zu entwickeln.`
      : `**${project.name}** - An enterprise system!\n\n${project.description}\n\n**Features:**\n${project.features}\n\nA great example of Jan's ability to build complex enterprise systems.`;
  }

  if (/(fusspflege|fußpflege|foot care|flutter app|mobile app)/i.test(lowerMessage)) {
    const project = kb.projects['fusspflege-app'];
    return language === 'de'
      ? `**${project.name}** ist eine professionelle Flutter-App:\n\n${project.description}\n\n**Features:** ${project.features}\n\nJan entwickelt auch Cross-Platform-Apps mit Flutter für iOS und Android!`
      : `**${project.name}** is a professional Flutter app:\n\n${project.description}\n\n**Features:** ${project.features}\n\nJan also develops cross-platform apps with Flutter for iOS and Android!`;
  }

  // Skills
  if (/(fähigkeit|skill|technologie|technology|stack|können)/i.test(lowerMessage)) {
    return language === 'de'
      ? `**Jans technische Fähigkeiten:**\n\n🎨 **Frontend:** ${kb.skills.frontend}\n\n⚙️ **Backend:** ${kb.skills.backend}\n\n📱 **Mobile:** ${kb.skills.mobile}\n\n🛠️ **Tools:** ${kb.skills.tools}\n\nJan bleibt immer auf dem neuesten Stand mit modernen Technologien und Best Practices!`
      : `**Jan's Technical Skills:**\n\n🎨 **Frontend:** ${kb.skills.frontend}\n\n⚙️ **Backend:** ${kb.skills.backend}\n\n📱 **Mobile:** ${kb.skills.mobile}\n\n🛠️ **Tools:** ${kb.skills.tools}\n\nJan always stays up-to-date with modern technologies and best practices!`;
  }

  // Services
  if (/(dienstleistung|service|angebot|offer|zusammenarbeit|collaboration|help)/i.test(lowerMessage)) {
    return language === 'de'
      ? `**Jans Dienstleistungen:**\n\n💻 **Web-Entwicklung:** ${kb.services.webDevelopment}\n\n📱 **Mobile Entwicklung:** ${kb.services.mobileDevelopment}\n\n🤖 **Chatbot-Integration:** ${kb.services.chatbotIntegration}\n\n💡 **Beratung:** ${kb.services.consulting}\n\nMöchten Sie über ein konkretes Projekt sprechen? Nutzen Sie das Kontaktformular auf dieser Seite!`
      : `**Jan's Services:**\n\n💻 **Web Development:** ${kb.services.webDevelopment}\n\n📱 **Mobile Development:** ${kb.services.mobileDevelopment}\n\n🤖 **Chatbot Integration:** ${kb.services.chatbotIntegration}\n\n💡 **Consulting:** ${kb.services.consulting}\n\nWould you like to discuss a specific project? Use the contact form on this page!`;
  }

  // Chatbot / AI
  if (/(chatbot|ki|ai|künstliche intelligenz|artificial intelligence)/i.test(lowerMessage)) {
    return language === 'de'
      ? `Genau wie ich! 🤖✨\n\nJan ist spezialisiert auf die Integration von KI-gestützten Chatbots in Websites. Er kann intelligente Assistenten entwickeln, die:\n\n• Kundenanfragen beantworten\n• Produkte empfehlen\n• Termine vereinbaren\n• Mehrsprachig kommunizieren\n• In Ihre bestehende Website integriert werden\n\nMöchten Sie einen Chatbot für Ihr Unternehmen? Lassen Sie uns darüber sprechen!`
      : `Just like me! 🤖✨\n\nJan specializes in integrating AI-powered chatbots into websites. He can develop intelligent assistants that:\n\n• Answer customer inquiries\n• Recommend products\n• Schedule appointments\n• Communicate multilingually\n• Integrate into your existing website\n\nWould you like a chatbot for your business? Let's talk about it!`;
  }

  // Contact
  if (/(kontakt|contact|email|reach|erreich)/i.test(lowerMessage)) {
    return language === 'de'
      ? `Großartig! Sie können Jan ganz einfach erreichen:\n\n📧 Nutzen Sie das Kontaktformular unten auf dieser Seite\n💼 LinkedIn: linkedin.com/in/jan-stenk-46b820147/\n💻 GitHub: github.com/stenkjan\n\nJan antwortet normalerweise innerhalb von 24 Stunden!`
      : `Great! You can easily reach Jan:\n\n📧 Use the contact form at the bottom of this page\n💼 LinkedIn: linkedin.com/in/jan-stenk-46b820147/\n💻 GitHub: github.com/stenkjan\n\nJan usually responds within 24 hours!`;
  }

  // Price / Cost
  if (/(preis|price|cost|kosten|budget)/i.test(lowerMessage)) {
    return language === 'de'
      ? `Jedes Projekt ist einzigartig! 💡\n\nDie Kosten hängen von verschiedenen Faktoren ab:\n• Projektumfang und Komplexität\n• Zeitrahmen\n• Benötigte Features\n• Laufende Wartung\n\nJan erstellt gerne ein maßgeschneidertes Angebot für Ihr Projekt. Nutzen Sie das Kontaktformular, um mehr zu erfahren!`
      : `Every project is unique! 💡\n\nCosts depend on various factors:\n• Project scope and complexity\n• Timeline\n• Required features\n• Ongoing maintenance\n\nJan is happy to create a custom quote for your project. Use the contact form to learn more!`;
  }

  // Timeline
  if (/(zeit|time|dauer|duration|wie lange|how long)/i.test(lowerMessage)) {
    return language === 'de'
      ? `Die Projektdauer variiert je nach Umfang:\n\n⚡ **Kleine Projekte:** 1-2 Wochen\n📦 **Mittlere Projekte:** 1-2 Monate\n🏗️ **Große Projekte:** 2-6 Monate\n\nJan arbeitet agil und liefert regelmäßig Updates. Möchten Sie über Ihr Projekt sprechen?`
      : `Project duration varies by scope:\n\n⚡ **Small Projects:** 1-2 weeks\n📦 **Medium Projects:** 1-2 months\n🏗️ **Large Projects:** 2-6 months\n\nJan works agile and delivers regular updates. Would you like to discuss your project?`;
  }

  // Limitations
  if (/(nicht|not|can't|cannot|unable|limitation)/i.test(lowerMessage)) {
    return language === 'de'
      ? `Ich schätze Ihre Ehrlichkeit! 😊\n\nJan ist transparent über seine Expertise. Er fokussiert sich auf:\n✅ React & Next.js Web-Apps\n✅ Flutter Mobile Apps\n✅ TypeScript Full-Stack\n✅ Moderne UI/UX\n\nWenn Ihr Projekt andere Technologien benötigt, kann Jan oft mit seinem Netzwerk aushelfen. Was genau planen Sie?`
      : `I appreciate your honesty! 😊\n\nJan is transparent about his expertise. He focuses on:\n✅ React & Next.js web apps\n✅ Flutter mobile apps\n✅ TypeScript full-stack\n✅ Modern UI/UX\n\nIf your project needs other technologies, Jan can often help through his network. What exactly are you planning?`;
  }

  // Default response
  return language === 'de'
    ? `Interessante Frage! 🤔\n\nIch kann Ihnen am besten helfen bei Fragen zu:\n• Jans Projekten (Da Hoam, SSC Railtec, Flutter-Apps, etc.)\n• Seinen technischen Fähigkeiten (React, Next.js, Flutter)\n• Möglichen Dienstleistungen\n• Wie Sie mit Jan in Kontakt treten können\n\nWas möchten Sie genauer wissen?`
    : `Interesting question! 🤔\n\nI can best help you with questions about:\n• Jan's projects (Da Hoam, SSC Railtec, Flutter apps, etc.)\n• His technical skills (React, Next.js, Flutter)\n• Possible services\n• How to get in touch with Jan\n\nWhat would you like to know more about?`;
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { message, language } = body;

    if (!message || !language) {
      return NextResponse.json(
        { error: 'Message and language are required' },
        { status: 400 }
      );
    }

    const response = generateResponse(message, language);

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
