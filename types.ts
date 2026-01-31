
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
  pdfUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Modalities' | 'Languages' | 'Tools' | 'Platforms';
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

export interface ShinyApp {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
}