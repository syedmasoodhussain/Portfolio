export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  longDescription: string;
  image: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  company?: string;
  location: string;
  description: string[];
}