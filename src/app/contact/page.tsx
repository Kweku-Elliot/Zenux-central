
import { ContactForm } from '@/components/contact-form';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'elliot@zenux.com',
    href: 'mailto:elliot@zenux.com',
  },
  {
    icon: Send,
    title: 'Telegram',
    value: '@elliot_akpalu',
    href: 'https://t.me/elliot_akpalu',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'Kweku-Elliot',
    href: 'https://github.com/Kweku-Elliot',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'Elliot Akpalu',
    href: 'https://www.linkedin.com/in/elliot-akpalu/',
  },
];

export default function ContactPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-headline text-foreground">
            Get In Touch
          </h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {contactMethods.map((method) => (
                <div key={method.title} className="flex items-center gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full p-3">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-headline">{method.title}</h3>
                    <Link href={method.href || '#'} className="text-base text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                      {method.value}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 md:p-8 border rounded-lg bg-card text-card-foreground">
            <h2 className="text-xl md:text-2xl font-bold font-headline mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
