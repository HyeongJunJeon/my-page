"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/model/Project";

interface ProjectFilterProps {
  initialProjects: Project[];
}

const CATEGORIES = ["ALL", "BLOCKO", "개인"];

export default function ProjectFilter({ initialProjects }: ProjectFilterProps) {
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(initialProjects);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    if (category === "ALL") {
      setFilteredProjects(initialProjects);
    } else {
      const filtered = initialProjects.filter((project) =>
        category === "개인"
          ? project.category === "personal"
          : project.category === category.toLowerCase(),
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <>
      <div className="mb-8 flex justify-center gap-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`rounded-full px-6 py-2 font-medium transition-colors ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            aria-label={`${category} 카테고리 필터`}
            tabIndex={0}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
}
