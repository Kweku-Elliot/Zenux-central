export type Project = {
  name: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  category: 'Web' | 'Blockchain' | 'Game' | 'Mobile';
  links: {
    view?: string;
    github?: string;
    live?: string;
  };
  aiHint: string;
};
