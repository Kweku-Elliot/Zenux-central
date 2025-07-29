'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

const categories = ['All', 'Web', 'Mobile', 'Blockchain', 'Game'] as const;
type Category = (typeof categories)[number];

export function ProjectsList() {
  const [filter, setFilter] = useState<Category>('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project: Project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
       {filteredProjects.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground">
            No projects found in this category.
          </div>
        )}
    </>
  );
}
