"use client";

import { useActionState, useEffect } from "react";
import { Section, SectionTitle } from "@/components/Section";
import { FadeIn } from "@/components/AnimationWrapper";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { Github, Linkedin, Loader2Icon, Twitter } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter
};

type FormState = {
  success: boolean;
  message?: string;
  error?: string;
} | null;

export function Contact() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    async (_prevState, formData) => {
      return await submitContactForm(formData);
    },
    null
  );

  useEffect(() => {
    if (state?.success) {
      // Reset form on success
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
    }
  }, [state]);

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
            <form id="contact-form" action={formAction} className="space-y-6">
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
                  name="name"
                  required
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
                  name="email"
                  required
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
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 transition-colors focus:border-black focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:focus:border-white"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full rounded-full bg-black px-8 py-4 font-medium text-white transition-transform hover:scale-105 disabled:opacity-50 dark:bg-white dark:text-black"
              >
                {isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2Icon className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {state?.success && (
                <p className="text-center text-sm text-green-600 dark:text-green-400">
                  {state.message}
                </p>
              )}
              {state?.error && (
                <p className="text-center text-sm text-red-600 dark:text-red-400">
                  {state.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
