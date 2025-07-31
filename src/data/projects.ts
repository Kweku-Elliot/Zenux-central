
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    name: 'Github Checker',
    description: 'A tool to analyze and gain insights from GitHub repositories.',
    thumbnail: 'https://placehold.co/600x400.png',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Web',
    links: {
      live: 'https://github-analyzer-lake.vercel.app/',
      github: '#',
    },
    aiHint: 'github analytics',
  },
  {
    name: 'Invoice Maker',
    description: 'A simple, mobile-first tool designed for freelancers to generate and manage invoices on the go.',
    thumbnail: 'https://placehold.co/600x400.png',
    techStack: ['React', 'Firebase', 'PWA'],
    category: 'Web',
    links: {
      live: 'https://invoicejet.vercel.app/',
      github: '#',
    },
    aiHint: 'invoice app',
  },
  {
    name: 'Zenux Wallet',
    description: 'A self-custodial multichain wallet with cross-chain interoperability.',
    thumbnail: 'https://placehold.co/600x400.png',
    techStack: ['Blockchain', 'React Native', 'Solidity'],
    category: 'Blockchain',
    links: {
      live: 'https://zenux-wallet-vorr.vercel.app/',
      github: '#',
    },
    aiHint: 'crypto wallet',
  },
  {
    name: 'Roamly AI',
    description: 'An AI-powered travel planner that generates personalized itineraries.',
    thumbnail: 'https://placehold.co/600x400.png',
    techStack: ['Next.js', 'Genkit', 'Tailwind CSS'],
    category: 'Web',
    links: {
      live: 'https://roamly-ai-iota.vercel.app/',
      github: '#',
    },
    aiHint: 'travel itinerary',
  },
  {
    name: 'Idea Flow',
    description: 'An AI-powered site to generate ideas for projects.',
    thumbnail: 'https://placehold.co/600x400.png',
    techStack: ['Next.js', 'Genkit', 'Tailwind CSS'],
    category: 'Web',
    links: {
      live: 'https://idea-flow-ten.vercel.app/',
      github: '#',
    },
    aiHint: 'project ideas',
  },
  {
    name: 'Stillness Mobile App',
    description: 'A mobile app designed to help you calm your mind and find stillness.',
    thumbnail: 'https://placehold.co/600x400.png',
    techStack: ['React Native', 'Expo', 'Meditation API'],
    category: 'Mobile',
    links: {
      github: '#',
    },
    aiHint: 'meditation app',
  },
  {
    name: 'Notes/Tasks App',
    description: 'A lightning-fast, offline-first notes and tasks app with optional AI-powered features.',
    thumbnail: 'https://placehold.co/600x400.png',
    techStack: ['JavaScript', 'localStorage', 'PWA'],
    category: 'Web',
    links: {
      github: '#',
    },
    aiHint: 'notes app',
  },
  {
    name: 'Form Tool',
    description: 'Easy form builder for quick surveys and data collection. Works offline, supports PDF export, and integrates with WhatsApp/SMS for notifications.',
    thumbnail: 'https://placehold.co/600x400.png',
    techStack: ['React', 'Local Storage', 'CSV Export'],
    category: 'Web',
    links: {
      github: '#',
    },
    aiHint: 'form builder',
  },
];
