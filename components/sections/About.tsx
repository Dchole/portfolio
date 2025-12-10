import { Section, SectionTitle } from "@/components/Section";
import { FadeIn } from "@/components/AnimationWrapper";
import { personalInfo } from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="about"
      className="bg-neutral-50 dark:bg-neutral-900/30 -z-10 relative"
    >
      <FadeIn>
        <SectionTitle>About Me</SectionTitle>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {personalInfo.bio}
            </p>
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or sharing knowledge
              through technical writing and mentoring.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Location
                </p>
                <p className="mt-1 text-base font-medium">
                  {personalInfo.location}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="mt-1 block text-base font-medium hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800">
              {/* Placeholder for profile image */}
              <div className="flex h-full items-center justify-center text-neutral-400">
                <p className="text-center text-sm">
                  Add your photo to
                  <br />
                  /public/avatar.jpg
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
