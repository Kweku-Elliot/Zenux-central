import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Code, Rocket, Handshake } from 'lucide-react';

const skills = [
  'Web Development',
  'Blockchain',
  'Robotic Process Automation',
  'AI Integration',
  'Mobile Development',
  'Network Engineering',
];

const timeline = [
  { year: '2018', event: 'Started journey into software development.' },
  { year: '2020', event: 'Launched first major open-source project.' },
  { year: '2022', event: 'Ventured into blockchain and Web3 development.' },
  { year: '2024', event: 'Founded Zenux Central to build practical software solutions.' },
];

export default function AboutPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4 border-4 border-accent">
            <AvatarImage src="https://placehold.co/200x200.png" alt="Elliot Akpalu" data-ai-hint="man portrait"/>
            <AvatarFallback>EA</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl md:text-5xl font-bold font-headline text-foreground">
            👋 I'm Elliot Akpalu.
          </h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            A passionate developer building tools that solve real problems for real people.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-lg md:text-xl">
                <Globe className="text-accent" /> From Ghana, Building Globally
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                My journey in technology started in Ghana and has since expanded to a global stage. I believe in the power of technology to bridge gaps and create opportunities for everyone, regardless of their location.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-lg md:text-xl">
                <Rocket className="text-accent" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To democratize technology and help others thrive with accessible, high-quality software. We focus on building practical tools that make a tangible impact on individuals and businesses.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center font-headline mb-8">
            <Code className="inline-block mr-2 text-accent" />
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {skills.map((skill) => (
              <div key={skill} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 text-xs md:text-sm font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16">
           <h2 className="text-2xl md:text-3xl font-bold text-center font-headline mb-10">
            <Handshake className="inline-block mr-2 text-accent" />
            Timeline of Growth
          </h2>
          <div className="relative pl-4 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-0">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-6 py-4 group">
                <div className="absolute w-3 h-3 bg-background border-2 border-accent rounded-full -left-[7px] top-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:scale-125"></div>
                <p className="font-bold font-headline text-md md:text-lg text-accent">{item.year}</p>
                <p className="mt-1 text-sm md:text-base text-muted-foreground">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
