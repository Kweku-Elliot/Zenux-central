import { ProjectsList } from '@/components/projects-list';

export default function ProjectsPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-headline text-foreground">
            Our Work
          </h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of software solutions, thoughtfully designed and
            developed to meet diverse needs.
          </p>
        </div>
        <ProjectsList />
      </div>
    </section>
  );
}
