(()=>{var a={};a.id=276,a.ids=[276],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3022:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>C,patchFetch:()=>B,routeModule:()=>x,serverHooks:()=>A,workAsyncStorage:()=>y,workUnitAsyncStorage:()=>z});var d={};c.r(d),c.d(d,{POST:()=>w});var e=c(5736),f=c(9117),g=c(4044),h=c(9326),i=c(2324),j=c(261),k=c(4290),l=c(5328),m=c(8928),n=c(6595),o=c(3421),p=c(7679),q=c(1681),r=c(3446),s=c(6439),t=c(1356),u=c(641);let v={de:{introduction:"Hallo! Ich bin der KI-Assistent von Jan Stenk, einem erfahrenen Full-Stack-Entwickler, der sich auf React, Next.js und Flutter spezialisiert hat.",projects:{"nest-haus":{name:"Da Hoam (Nest-Haus)",description:"Eine moderne Next.js-Plattform f\xfcr Hauskonfiguration mit interaktivem Konfigurator, dynamischem Preissystem und responsivem Design. Entwickelt mit Next.js 15, TypeScript, Tailwind CSS, Zustand und PostgreSQL.",features:"Interaktiver Hauskonfigurator, dynamisches Preissystem, Immobilien-Entdeckungsschnittstelle, Echtzeit-Updates, modernes UI/UX."},"ks-database":{name:"SSC Railtec Produktdatenbank",description:"Ein umfassendes Produktdatenbank-Managementsystem f\xfcr Unternehmen mit erweiterten Konfigurationsm\xf6glichkeiten, Admin-Dashboard und skalierbarer Architektur.",features:"Produktkonfigurationsverwaltung, Admin-Dashboard, erweiterte Suche und Filterung, Datenvisualisierung, Benutzerverwaltung."},"fusspflege-app":{name:"Fu\xdfpflege Kundenverwaltung",description:"Eine Flutter-App f\xfcr Patientenregistrierung und -verwaltung. Enth\xe4lt Kundenliste, Teilen-Funktion und Registrierungsformular.",features:"Kundenliste, Datenaustausch, Patientenregistrierung, sichere Datenverwaltung."},"longcovid-app":{name:"Long COVID Tracking App",description:"Eine Flutter-App zur Verfolgung und Verwaltung von Long-COVID-Symptomen, entwickelt als Teil meiner Masterarbeit.",features:"Symptomverfolgung, Datenvisualisierung, Patientenverwaltung, medizinische Dokumentation."},"ntgl-events":{name:"NTGL Event-Registrierung",description:"Eine Next.js Event-Registrierungswebsite mit Flyer-Anzeige, Event-Vorschau und Registrierungsformular.",features:"Schnelle Event-Einrichtung, benutzerdefinierte Registrierungsformulare, Teilnehmerverwaltung, mobiles Design."}},skills:{frontend:"React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Responsive Design",backend:"Node.js, Express, PostgreSQL, Prisma, RESTful APIs",mobile:"Flutter, Dart, Cross-Platform-Entwicklung",tools:"Git, GitHub, Vercel, Azure, CI/CD, ESLint, Prettier"},services:{webDevelopment:"Ich entwickle moderne, skalierbare Webanwendungen mit React und Next.js, optimiert f\xfcr Performance und SEO.",mobileDevelopment:"Cross-Platform mobile Apps mit Flutter f\xfcr iOS und Android mit nativer Performance.",consulting:"Technische Beratung f\xfcr Architektur, Code-Qualit\xe4t und Best Practices.",chatbotIntegration:"Integration von KI-gest\xfctzten Chatbots in Websites f\xfcr besseren Kundenservice."},personality:{helpful:"Ich bin hier, um Ihnen zu helfen! Fragen Sie mich alles \xfcber Jans Projekte, F\xe4higkeiten oder wie er Ihnen helfen kann.",honest:"Ich gebe ehrliche Einsch\xe4tzungen dar\xfcber, was m\xf6glich ist und was nicht.",witty:"Ich versuche, hilfreich und unterhaltsam zu sein, aber immer professionell."}},en:{introduction:"Hello! I'm Jan Stenk's AI assistant, supporting an experienced full-stack developer specialized in React, Next.js, and Flutter.",projects:{"nest-haus":{name:"Da Hoam (Nest-Haus)",description:"A modern Next.js platform for house configuration with interactive configurator, dynamic pricing system, and responsive design. Built with Next.js 15, TypeScript, Tailwind CSS, Zustand, and PostgreSQL.",features:"Interactive house configurator, dynamic pricing system, property discovery interface, real-time updates, modern UI/UX."},"ks-database":{name:"SSC Railtec Product Database",description:"A comprehensive enterprise product database management system with advanced configuration capabilities, admin dashboard, and scalable architecture.",features:"Product configuration management, admin dashboard, advanced search and filtering, data visualization, user management."},"fusspflege-app":{name:"Foot Care Patient Management",description:"A Flutter app for patient registration and management. Includes customer list, sharing functionality, and registration form.",features:"Customer list, data sharing, patient registration, secure data management."},"longcovid-app":{name:"Long COVID Tracking App",description:"A Flutter app for tracking and managing Long COVID symptoms, developed as part of my master's thesis.",features:"Symptom tracking, data visualization, patient management, medical documentation."},"ntgl-events":{name:"NTGL Event Registration",description:"A Next.js event registration website with flyer display, event preview, and registration form.",features:"Quick event setup, custom registration forms, participant management, mobile design."}},skills:{frontend:"React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Responsive Design",backend:"Node.js, Express, PostgreSQL, Prisma, RESTful APIs",mobile:"Flutter, Dart, Cross-Platform Development",tools:"Git, GitHub, Vercel, Azure, CI/CD, ESLint, Prettier"},services:{webDevelopment:"I develop modern, scalable web applications with React and Next.js, optimized for performance and SEO.",mobileDevelopment:"Cross-platform mobile apps with Flutter for iOS and Android with native performance.",consulting:"Technical consulting for architecture, code quality, and best practices.",chatbotIntegration:"Integration of AI-powered chatbots into websites for better customer service."},personality:{helpful:"I'm here to help! Ask me anything about Jan's projects, skills, or how he can help you.",honest:"I give honest assessments of what's possible and what's not.",witty:"I try to be helpful and entertaining, but always professional."}}};async function w(a){try{let{message:b,language:c}=await a.json();if(!b||!c)return u.NextResponse.json({error:"Message and language are required"},{status:400});let d=function(a,b){let c=a.toLowerCase(),d=v[b];if(/(hallo|hi|hey|guten tag|servus)/i.test(c)&&"de"===b)return`${d.introduction}

Ich kann Ihnen Informationen \xfcber:
• Jans Projekte (Da Hoam, SSC Railtec, Flutter-Apps)
• Seine technischen F\xe4higkeiten
• Dienstleistungen, die er anbietet
• M\xf6gliche Zusammenarbeit

Was interessiert Sie?`;if(/(hello|hi|hey|good morning|good day)/i.test(c)&&"en"===b)return`${d.introduction}

I can provide information about:
• Jan's projects (Da Hoam, SSC Railtec, Flutter apps)
• His technical skills
• Services he offers
• Potential collaboration

What interests you?`;if(/(projekt|project|da hoam|nest-haus|nest haus)/i.test(c)){let a=d.projects["nest-haus"];return"de"===b?`**${a.name}** ist Jans aktuellstes und umfangreichstes Projekt!

${a.description}

**Hauptfunktionen:**
${a.features}

Dieses Projekt zeigt Jans Expertise in modernem Web-Design, State Management und skalierbarer Architektur. M\xf6chten Sie mehr \xfcber die technischen Details erfahren?`:`**${a.name}** is Jan's most recent and comprehensive project!

${a.description}

**Key Features:**
${a.features}

This project showcases Jan's expertise in modern web design, state management, and scalable architecture. Would you like to know more about the technical details?`}if(/(produktdatenbank|product database|ks-database|railtec)/i.test(c)){let a=d.projects["ks-database"];return"de"===b?`**${a.name}** - Ein Enterprise-System!

${a.description}

**Features:**
${a.features}

Ein gro\xdfartiges Beispiel f\xfcr Jans F\xe4higkeit, komplexe Unternehmenssysteme zu entwickeln.`:`**${a.name}** - An enterprise system!

${a.description}

**Features:**
${a.features}

A great example of Jan's ability to build complex enterprise systems.`}if(/(fusspflege|fußpflege|foot care|flutter app|mobile app)/i.test(c)){let a=d.projects["fusspflege-app"];return"de"===b?`**${a.name}** ist eine professionelle Flutter-App:

${a.description}

**Features:** ${a.features}

Jan entwickelt auch Cross-Platform-Apps mit Flutter f\xfcr iOS und Android!`:`**${a.name}** is a professional Flutter app:

${a.description}

**Features:** ${a.features}

Jan also develops cross-platform apps with Flutter for iOS and Android!`}return/(fähigkeit|skill|technologie|technology|stack|können)/i.test(c)?"de"===b?`**Jans technische F\xe4higkeiten:**

🎨 **Frontend:** ${d.skills.frontend}

⚙️ **Backend:** ${d.skills.backend}

📱 **Mobile:** ${d.skills.mobile}

🛠️ **Tools:** ${d.skills.tools}

Jan bleibt immer auf dem neuesten Stand mit modernen Technologien und Best Practices!`:`**Jan's Technical Skills:**

🎨 **Frontend:** ${d.skills.frontend}

⚙️ **Backend:** ${d.skills.backend}

📱 **Mobile:** ${d.skills.mobile}

🛠️ **Tools:** ${d.skills.tools}

Jan always stays up-to-date with modern technologies and best practices!`:/(dienstleistung|service|angebot|offer|zusammenarbeit|collaboration|help)/i.test(c)?"de"===b?`**Jans Dienstleistungen:**

💻 **Web-Entwicklung:** ${d.services.webDevelopment}

📱 **Mobile Entwicklung:** ${d.services.mobileDevelopment}

🤖 **Chatbot-Integration:** ${d.services.chatbotIntegration}

💡 **Beratung:** ${d.services.consulting}

M\xf6chten Sie \xfcber ein konkretes Projekt sprechen? Nutzen Sie das Kontaktformular auf dieser Seite!`:`**Jan's Services:**

💻 **Web Development:** ${d.services.webDevelopment}

📱 **Mobile Development:** ${d.services.mobileDevelopment}

🤖 **Chatbot Integration:** ${d.services.chatbotIntegration}

💡 **Consulting:** ${d.services.consulting}

Would you like to discuss a specific project? Use the contact form on this page!`:/(chatbot|ki|ai|künstliche intelligenz|artificial intelligence)/i.test(c)?"de"===b?`Genau wie ich! 🤖✨

Jan ist spezialisiert auf die Integration von KI-gest\xfctzten Chatbots in Websites. Er kann intelligente Assistenten entwickeln, die:

• Kundenanfragen beantworten
• Produkte empfehlen
• Termine vereinbaren
• Mehrsprachig kommunizieren
• In Ihre bestehende Website integriert werden

M\xf6chten Sie einen Chatbot f\xfcr Ihr Unternehmen? Lassen Sie uns dar\xfcber sprechen!`:`Just like me! 🤖✨

Jan specializes in integrating AI-powered chatbots into websites. He can develop intelligent assistants that:

• Answer customer inquiries
• Recommend products
• Schedule appointments
• Communicate multilingually
• Integrate into your existing website

Would you like a chatbot for your business? Let's talk about it!`:/(kontakt|contact|email|reach|erreich)/i.test(c)?"de"===b?`Gro\xdfartig! Sie k\xf6nnen Jan ganz einfach erreichen:

📧 Nutzen Sie das Kontaktformular unten auf dieser Seite
💼 LinkedIn: linkedin.com/in/jan-stenk-46b820147/
💻 GitHub: github.com/stenkjan

Jan antwortet normalerweise innerhalb von 24 Stunden!`:`Great! You can easily reach Jan:

📧 Use the contact form at the bottom of this page
💼 LinkedIn: linkedin.com/in/jan-stenk-46b820147/
💻 GitHub: github.com/stenkjan

Jan usually responds within 24 hours!`:/(preis|price|cost|kosten|budget)/i.test(c)?"de"===b?`Jedes Projekt ist einzigartig! 💡

Die Kosten h\xe4ngen von verschiedenen Faktoren ab:
• Projektumfang und Komplexit\xe4t
• Zeitrahmen
• Ben\xf6tigte Features
• Laufende Wartung

Jan erstellt gerne ein ma\xdfgeschneidertes Angebot f\xfcr Ihr Projekt. Nutzen Sie das Kontaktformular, um mehr zu erfahren!`:`Every project is unique! 💡

Costs depend on various factors:
• Project scope and complexity
• Timeline
• Required features
• Ongoing maintenance

Jan is happy to create a custom quote for your project. Use the contact form to learn more!`:/(zeit|time|dauer|duration|wie lange|how long)/i.test(c)?"de"===b?`Die Projektdauer variiert je nach Umfang:

⚡ **Kleine Projekte:** 1-2 Wochen
📦 **Mittlere Projekte:** 1-2 Monate
🏗️ **Gro\xdfe Projekte:** 2-6 Monate

Jan arbeitet agil und liefert regelm\xe4\xdfig Updates. M\xf6chten Sie \xfcber Ihr Projekt sprechen?`:`Project duration varies by scope:

⚡ **Small Projects:** 1-2 weeks
📦 **Medium Projects:** 1-2 months
🏗️ **Large Projects:** 2-6 months

Jan works agile and delivers regular updates. Would you like to discuss your project?`:/(nicht|not|can't|cannot|unable|limitation)/i.test(c)?"de"===b?`Ich sch\xe4tze Ihre Ehrlichkeit! 😊

Jan ist transparent \xfcber seine Expertise. Er fokussiert sich auf:
✅ React & Next.js Web-Apps
✅ Flutter Mobile Apps
✅ TypeScript Full-Stack
✅ Moderne UI/UX

Wenn Ihr Projekt andere Technologien ben\xf6tigt, kann Jan oft mit seinem Netzwerk aushelfen. Was genau planen Sie?`:`I appreciate your honesty! 😊

Jan is transparent about his expertise. He focuses on:
✅ React & Next.js web apps
✅ Flutter mobile apps
✅ TypeScript full-stack
✅ Modern UI/UX

If your project needs other technologies, Jan can often help through his network. What exactly are you planning?`:"de"===b?`Interessante Frage! 🤔

Ich kann Ihnen am besten helfen bei Fragen zu:
• Jans Projekten (Da Hoam, SSC Railtec, Flutter-Apps, etc.)
• Seinen technischen F\xe4higkeiten (React, Next.js, Flutter)
• M\xf6glichen Dienstleistungen
• Wie Sie mit Jan in Kontakt treten k\xf6nnen

Was m\xf6chten Sie genauer wissen?`:`Interesting question! 🤔

I can best help you with questions about:
• Jan's projects (Da Hoam, SSC Railtec, Flutter apps, etc.)
• His technical skills (React, Next.js, Flutter)
• Possible services
• How to get in touch with Jan

What would you like to know more about?`}(b,c);return u.NextResponse.json({message:d})}catch(a){return console.error("Chat API error:",a),u.NextResponse.json({error:"Internal server error"},{status:500})}}let x=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},distDir:".next",relativeProjectDir:"",resolvedPagePath:"/workspace/src/app/api/chat/route.ts",nextConfigOutput:"",userland:d}),{workAsyncStorage:y,workUnitAsyncStorage:z,serverHooks:A}=x;function B(){return(0,g.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:z})}async function C(a,b,c){var d;let e="/api/chat/route";"/index"===e&&(e="/");let g=await x.prepare(a,b,{srcPage:e,multiZoneDraftMode:!1});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:w,isDraftMode:y,prerenderManifest:z,routerServerContext:A,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,resolvedPathname:D}=g,E=(0,j.normalizeAppPath)(e),F=!!(z.dynamicRoutes[E]||z.routes[D]);if(F&&!y){let a=!!z.routes[D],b=z.dynamicRoutes[E];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let G=null;!F||x.isDev||y||(G="/index"===(G=D)?"/":G);let H=!0===x.isDev||!F,I=F&&!H,J=a.method||"GET",K=(0,i.getTracer)(),L=K.getActiveScopeSpan(),M={params:v,prerenderManifest:z,renderOpts:{experimental:{cacheComponents:!!w.experimental.cacheComponents,authInterrupts:!!w.experimental.authInterrupts},supportsDynamicResponse:H,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=w.experimental)?void 0:d.cacheLife,isRevalidate:I,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>x.onRequestError(a,b,d,A)},sharedContext:{buildId:u}},N=new k.NodeNextRequest(a),O=new k.NodeNextResponse(b),P=l.NextRequestAdapter.fromNodeNextRequest(N,(0,l.signalFromNodeResponse)(b));try{let d=async c=>x.handle(P,M).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=K.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${J} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${J} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&B&&C&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=M.renderOpts.collectedTags;if(!F)return await (0,o.I)(N,O,e,M.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,d=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await x.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})},A),b}},l=await x.handleResponse({req:a,nextConfig:w,cacheKey:G,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:z,isRoutePPREnabled:!1,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,responseGenerator:k,waitUntil:c.waitUntil});if(!F)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",B?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),y&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&F||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(N,O,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};L?await g(L):await K.withPropagatedContext(a.headers,()=>K.trace(m.BaseServerSpan.handleRequest,{spanName:`${J} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":J,"http.target":a.url}},g))}catch(b){if(b instanceof s.NoFallbackError||await x.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})}),F)throw b;return await (0,o.I)(N,O,new Response(null,{status:500})),null}}},3033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},4870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},6487:()=>{},8335:()=>{},9121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[586,692],()=>b(b.s=3022));module.exports=c})();