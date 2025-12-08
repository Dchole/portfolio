"use client";

import { Section, SectionTitle } from "@/components/Section";
import { FadeIn, SlideIn } from "@/components/AnimationWrapper";
import { experience } from "@/data/portfolio";
import { formatDate } from "@/lib/utils";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience">
      <FadeIn>
        <SectionTitle>Experience</SectionTitle>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-neutral-200 dark:bg-neutral-800 md:left-8" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <SlideIn key={exp.id} delay={index * 0.1} direction="left">
                <div className="relative pl-12 md:pl-24">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-black dark:border-black dark:bg-white md:left-0">
                    <Briefcase className="h-6 w-6 text-white dark:text-black" />
                  </div>

                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold">{exp.position}</h3>
                      <p className="mt-2 text-lg font-medium text-neutral-700 dark:text-neutral-300">
                        {exp.company}
                      </p>
                      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                        {exp.location} • {formatDate(exp.startDate)} -{" "}
                        {exp.endDate ? formatDate(exp.endDate) : "Present"}
                      </p>
                    </div>

                    <ul className="mb-6 space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-neutral-700 dark:text-neutral-300"
                        >
                          <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black dark:bg-white" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span
                          key={tech}
                          className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
