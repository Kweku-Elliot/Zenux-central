import Link from 'next/link';
import { ArrowRight, Zap, Code, Puzzle, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/data/projects';

export default function Home() {
  const highlightedProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline tracking-tight text-foreground">
            We Build Practical Software for Real-World Needs.
          </h1>
          <p className="mt-4 text-md sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tools that empower individuals, businesses, and communities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                Explore Projects <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 border-t">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
              Our Services
            </h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
              From simple landing pages to full-featured e-commerce stores, we offer a range of web solutions tailored to your business needs. We are committed to delivering high-quality, user-centric products.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-lg">
              <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
                <Code className="h-8 w-8 md:h-10 md:w-10 mx-auto text-accent" />
              </div>
              <h3 className="mt-4 text-xl font-bold font-headline">Custom Websites</h3>
              <p className="mt-2 text-muted-foreground">
                Crafting responsive and performant websites and applications for businesses and individuals.
              </p>
            </div>
            <div className="p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-lg">
              <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
                <Layers className="h-8 w-8 md:h-10 md:w-10 mx-auto text-accent" />
              </div>
              <h3 className="mt-4 text-xl font-bold font-headline">E-commerce Solutions</h3>
              <p className="mt-2 text-muted-foreground">
                Building secure and scalable online stores to help you sell your products and services.
              </p>
            </div>
            <div className="p-6 rounded-lg transition-all duration-300 hover:bg-card hover:shadow-lg">
               <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
                 <Puzzle className="h-8 w-8 md:h-10 md:w-10 mx-auto text-accent" />
               </div>
              <h3 className="mt-4 text-xl font-bold font-headline">Mobile & Game Dev</h3>
              <p className="mt-2 text-muted-foreground">
                Developing engaging mobile apps and games that delight users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Projects Section */}
      <section className="py-16 md:py-24 bg-secondary/30 border-t">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
              Highlighted Projects
            </h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground">
              A glimpse into some of the solutions we've crafted.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {highlightedProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
