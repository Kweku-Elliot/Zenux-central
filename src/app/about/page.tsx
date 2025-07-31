
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Code, Rocket, Handshake, Users, Building } from 'lucide-react';

const skills = [
  'Web Development',
  'Blockchain',
  'Robotic Process Automation',
  'AI Integration',
  'Mobile Development',
  'Network Engineering',
];

const timeline = [
  { year: '2020', event: 'Started journey into software development.' },
  { year: '2023', event: 'Launched first major open-source project.' },
  { year: '2025', event: 'A continuous flow of many new projects and innovations.' },
];

const teamMembers = [
    {
        name: 'Osborn Nkansah',
        role: 'Founder, Ostech Templates',
        skills: 'Web Dev | Cyber Security | Graphic Design | Mobile Dev',
        avatar: 'https://placehold.co/200x200.png',
        fallback: 'ON'
    },
    {
        name: 'Ernest Ohene',
        role: 'Co-Founder, Ostech Templates',
        skills: 'Web Dev | Cyber Security | AI Developer',
        avatar: 'https://placehold.co/200x200.png',
        fallback: 'EO'
    }
]

export default function AboutPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4 border-4 border-accent">
            <AvatarImage src="https://placehold.co/200x200.png" alt="Elliot Akpalu" data-ai-hint="man portrait"/>
            <AvatarFallback>EA</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl md:text-5xl font-bold font-headline text-foreground">
            👋 I'm Elliot Akpalu.
          </h1>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold text-accent">Founder, Zenux Central</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-center font-headline mb-2">
            <Building className="inline-block mr-2 text-accent" />
            Zenux Central Leadership
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4 border-4 border-accent">
                <AvatarImage src="https://placehold.co/200x200.png" alt="Elliot Akpalu" data-ai-hint="man portrait"/>
                <AvatarFallback>EA</AvatarFallback>
              </Avatar>
              <h3 className="font-bold font-headline text-lg md:text-xl text-foreground">Elliot Akpalu</h3>
              <p className="text-base font-semibold text-accent">Founder</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4 border-4 border-accent">
                <AvatarImage src="https://placehold.co/200x200.png" alt="Harrison Kanor" data-ai-hint="man portrait"/>
                <AvatarFallback>HK</AvatarFallback>
              </Avatar>
              <h3 className="font-bold font-headline text-lg md:text-xl text-foreground">Harrison Kanor</h3>
              <p className="text-base font-semibold text-accent">Co-Founder, Marketing Specialist</p>
              <p className="text-sm text-muted-foreground mt-1">Marketing Strategy | Cybersecurity | Negotiation</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16">
           <h2 className="text-2xl md:text-3xl font-bold text-center font-headline mb-2">
            <Users className="inline-block mr-2 text-accent" />
            Our Development Team
          </h2>
          <div className='text-center mb-10'>
            <div className='inline-flex items-center gap-2'>
              <Avatar className="w-8 h-8">
                  <AvatarImage src='https://i.ibb.co/Ldv5k0L/logo.png' alt="Ostech Templates" />
                  <AvatarFallback>OT</AvatarFallback>
              </Avatar>
              <h3 className="text-xl md:text-2xl font-bold font-headline text-foreground">Ostech Templates</h3>
            </div>
            <div className="mt-2 text-muted-foreground">
                Personal blog | 📸Photography | Web development|👁️ Cyber security | Graphic design
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center max-w-[200px]">
                <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4 border-4 border-accent">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint="team member" />
                    <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold font-headline text-lg md:text-xl text-foreground">{member.name}</h3>
                <p className="text-base font-semibold text-accent">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-1">{member.skills}</p>
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
