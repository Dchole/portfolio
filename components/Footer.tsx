import { personalInfo, socialLinks } from "@/data/portfolio";
import { Github, Linkedin, Twitter } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
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
                  className="text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
