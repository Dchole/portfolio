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
              With 5 years of experience, I&apos;ve built diverse applications
              from AI-powered SaaS products to marketplace platforms. My
              experience spans agency work with 10+ client projects, co-founding
              a food delivery startup, and freelance automation systems. I love
              planning solutions thoroughly before writing code, ensuring both
              clean architecture and exceptional user experiences.
            </p>
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              Beyond web development, I&apos;m exploring game development with
              Unreal Engine and UEFN. I&apos;m constantly experimenting with new
              technologies, building side projects, and diving deep into AI
              integration and system design. I learn by reading documentation
              first, then building hands-on demos to master new concepts.
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
