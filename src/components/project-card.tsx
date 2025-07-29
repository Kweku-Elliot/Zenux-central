import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Github, ExternalLink, Eye } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            className="object-cover"
            data-ai-hint={project.aiHint}
          />
        </div>
      </CardHeader>
      <div className="flex flex-col flex-grow p-6">
        <CardTitle className="font-headline text-xl mb-2">{project.name}</CardTitle>
        <CardDescription className="flex-grow">{project.description}</CardDescription>
        <CardContent className="p-0 pt-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-6 pt-0 mt-auto">
        <div className="flex w-full gap-2">
          {project.links.live && (
            <Button asChild className="flex-1">
              <Link href={project.links.live}>
                <ExternalLink />
                Live
              </Link>
            </Button>
          )}
          {project.links.view && (
            <Button asChild className="flex-1">
              <Link href={project.links.view}>
                <Eye />
                View Project
              </Link>
            </Button>
          )}
          {project.links.github && (
            <Button variant="outline" asChild className="flex-1">
              <Link href={project.links.github}>
                <Github />
                GitHub
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
