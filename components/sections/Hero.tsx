"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-400">
            Hi, I&apos;m
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            {personalInfo.name}
          </h1>
          <h2 className="mb-6 text-2xl font-medium text-neutral-700 dark:text-neutral-300 md:text-3xl lg:text-4xl">
            {personalInfo.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
            {personalInfo.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-black px-8 py-4 text-sm font-medium transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
      </motion.button>
    </section>
  );
}
