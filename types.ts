
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  category: 'Transcriptomics' | 'Genomics' | 'Development' | 'Machine Learning';
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  doi: string;
  type: 'Paper' | 'Talk' | 'Poster';
}

export interface Skill {
  name: string;
  category: 'Computational' | 'Wet Lab' | 'Professional';
}

export interface Experience {
  id: string;
  institution: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  logoUrl?: string;
}