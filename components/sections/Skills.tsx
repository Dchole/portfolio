import { Section, SectionTitle } from "@/components/Section";
import { FadeIn, SlideIn } from "@/components/AnimationWrapper";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills">
      <FadeIn>
        <SectionTitle>Skills & Technologies</SectionTitle>
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <SlideIn key={skillGroup.category} delay={index * 0.1}>
              <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="mb-6 text-xl font-semibold">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map(skill => (
                    <li
                      key={skill}
                      className="flex items-center text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-black dark:bg-white" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
