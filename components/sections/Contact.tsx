"use client";

import { useState } from "react";
import { Section, SectionTitle } from "@/components/Section";
import { FadeIn } from "@/components/AnimationWrapper";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Loader2 } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="bg-neutral-50 dark:bg-neutral-900/30">
      <FadeIn>
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-8 text-lg text-neutral-700 dark:text-neutral-300">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions. Feel free to reach
              out!
            </p>

            <div className="mb-8 space-y-4">
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg font-medium hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Location
                </p>
                <p className="text-lg font-medium">{personalInfo.location}</p>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map(link => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 transition-colors hover:bg-black hover:text-white dark:border-neutral-800 dark:hover:bg-white dark:hover:text-black"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 transition-colors focus:border-black focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 transition-colors focus:border-black focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 transition-colors focus:border-black focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:focus:border-white"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-black px-8 py-4 font-medium text-white transition-transform hover:scale-105 disabled:opacity-50 dark:bg-white dark:text-black"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {status === "success" && (
                <p className="text-center text-sm text-green-600 dark:text-green-400">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
