"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  MapPin,
  Calendar,
  Send,
  Github,
  Linkedin,
  ExternalLink,
  User,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

const projectTypesDE = [
  "Webseiten-Entwicklung",
  "Mobile App-Entwicklung",
  "Full-Stack Entwicklung",
  "Chatbot-Integration",
  "Technische Beratung",
  "Code Review & Optimierung",
  "Teamzusammenarbeit",
  "Sonstiges",
];

const projectTypesEN = [
  "Website Development",
  "Mobile App Development",
  "Full-Stack Development",
  "Chatbot Integration",
  "Technical Consultation",
  "Code Review & Optimization",
  "Team Collaboration",
  "Other",
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/stenkjan",
    username: "@stenkjan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jan-stenk-46b820147/",
    username: "Jan Stenk",
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { language } = useLanguage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const projectTypes = language === 'de' ? projectTypesDE : projectTypesEN;

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'An error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "stenkjan@gmail.com",
      href: "mailto:stenkjan@gmail.com",
      description: language === 'de' ? "Schreiben Sie mir jederzeit" : "Send me an email anytime",
    },
    {
      icon: MapPin,
      label: language === 'de' ? "Standort" : "Location",
      value: "Germany",
      description: language === 'de' 
        ? "Verfügbar für Remote-Arbeit weltweit" 
        : "Available for remote work worldwide",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("contact.title", language)}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact.subtitle", language)}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Jan Stenk
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  Full-Stack Developer
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'de'
                    ? "Erfahrener React & Next.js Entwickler, spezialisiert auf moderne Webanwendungen und mobile Lösungen."
                    : "Experienced React & Next.js developer specializing in modern web applications and mobile solutions."}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-blue-600 hover:text-blue-700 transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                        <p className="text-sm text-gray-500 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === 'de' ? "Vernetzen Sie sich mit mir" : "Connect With Me"}
                </h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="font-medium">{social.label}</span>
                        <span className="text-sm text-gray-500">
                          {social.username}
                        </span>
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-gray-900">
                    {language === 'de' ? "Verfügbar für Projekte" : "Available for Projects"}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {language === 'de'
                    ? "Aktuell nehme ich neue Projekte an. Antwortzeit: Innerhalb von 24 Stunden."
                    : "Currently accepting new projects. Response time: Within 24 hours."}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {language === 'de' ? "Beginnen Sie ein Gespräch" : "Start a Conversation"}
                </h3>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900">
                      {language === 'de' ? "Nachricht gesendet!" : "Message Sent!"}
                    </h4>
                    <p className="text-sm text-green-700">
                      {language === 'de'
                        ? "Vielen Dank für Ihre Nachricht! Ich werde mich innerhalb von 24 Stunden bei Ihnen melden."
                        : "Thank you for your message! I'll get back to you within 24 hours."}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900">
                      {language === 'de' ? "Fehler" : "Error"}
                    </h4>
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {language === 'de' ? "Vollständiger Name *" : "Full Name *"}
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={language === 'de' ? "Ihr vollständiger Name" : "Your full name"}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {language === 'de' ? "E-Mail-Adresse *" : "Email Address *"}
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {language === 'de' ? "Firma/Organisation" : "Company/Organization"}
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder={language === 'de' ? "Ihr Firmenname (optional)" : "Your company name (optional)"}
                  />
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {language === 'de' ? "Projekttyp *" : "Project Type *"}
                    </label>
                    <select
                      {...register("projectType")}
                      id="projectType"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.projectType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">
                        {language === 'de' ? "Projekttyp auswählen" : "Select project type"}
                      </option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {language === 'de' ? "Zeitrahmen" : "Timeline"}
                    </label>
                    <select
                      {...register("timeline")}
                      id="timeline"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">
                        {language === 'de' ? "Zeitrahmen auswählen" : "Select timeline"}
                      </option>
                      <option value="asap">{language === 'de' ? "So bald wie möglich" : "ASAP"}</option>
                      <option value="1-2 weeks">{language === 'de' ? "1-2 Wochen" : "1-2 weeks"}</option>
                      <option value="1 month">{language === 'de' ? "1 Monat" : "1 month"}</option>
                      <option value="2-3 months">{language === 'de' ? "2-3 Monate" : "2-3 months"}</option>
                      <option value="3+ months">{language === 'de' ? "3+ Monate" : "3+ months"}</option>
                      <option value="flexible">{language === 'de' ? "Flexibel" : "Flexible"}</option>
                    </select>
                  </div>
                </div>

                {/* Meeting Scheduling */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">
                      {language === 'de' ? "Anruf vereinbaren (Optional)" : "Schedule a Call (Optional)"}
                    </h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {language === 'de' ? "Bevorzugtes Datum" : "Preferred Date"}
                      </label>
                      <input
                        {...register("preferredDate")}
                        type="date"
                        id="preferredDate"
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="preferredTime"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {language === 'de' ? "Bevorzugte Zeit (CET)" : "Preferred Time (CET)"}
                      </label>
                      <select
                        {...register("preferredTime")}
                        id="preferredTime"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">
                          {language === 'de' ? "Zeit auswählen" : "Select time"}
                        </option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {language === 'de' ? "Projektbeschreibung *" : "Project Description *"}
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={
                      language === 'de'
                        ? "Erzählen Sie mir von Ihrem Projekt, Ihren Zielen und wie ich Ihnen helfen kann..."
                        : "Tell me about your project, goals, and how I can help you achieve them..."
                    }
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-6">
                  <p className="text-sm text-gray-500">
                    {language === 'de'
                      ? "* Pflichtfelder. Ich antworte innerhalb von 24 Stunden."
                      : "* Required fields. I'll respond within 24 hours."}
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-8 py-3 font-medium rounded-lg transition-all duration-200 ${
                      isSubmitting
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin h-4 w-4 mr-2" />
                        <span>{language === 'de' ? "Wird gesendet..." : "Sending..."}</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        <span>{language === 'de' ? "Nachricht senden" : "Send Message"}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
