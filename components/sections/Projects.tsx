"use client";

import { Section, SectionTitle } from "@/components/Section";
import { FadeIn } from "@/components/AnimationWrapper";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects" className="bg-neutral-50 dark:bg-neutral-900/30">
      <FadeIn>
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-video bg-neutral-100 dark:bg-neutral-800 lg:aspect-auto">
                    <div className="flex h-full items-center justify-center p-8 text-center text-neutral-400">
                      <div>
                        <p className="text-sm">Add project screenshot to</p>
                        <p className="mt-1 text-xs font-mono">
                          {project.imageUrl}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-8 lg:p-12">
                    <div>
                      <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
                        {project.longDescription}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-neutral-600 dark:hover:text-neutral-400"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-neutral-600 dark:hover:text-neutral-400"
                        >
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
