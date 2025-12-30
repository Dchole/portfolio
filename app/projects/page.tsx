"use client";

import { useEffect } from "react";

export default function ProjectsRedirect() {
  useEffect(() => {
    window.location.replace("/#projects");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-neutral-600 dark:text-neutral-400">Redirecting...</p>
    </div>
  );
}
