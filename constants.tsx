
import { Project, Publication, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'LOTR-1 in Germline RNA Interference',
    description: 'Investigating the role of protein LOTR-1 in C. elegans. Developed R dashboards to visualize DEG trends and performed PCA meta-analysis across mutant strains.',
    tags: ['R', 'Bulk RNA-seq', 'PCA', 'C. elegans'],
    link: 'https://github.com/MasonMatich',
    category: 'Transcriptomics'
  },
  {
    id: '2',
    title: 'Systemic Sclerosis scRNA-seq Analysis',
    description: 'Conducted cell-type specific differential expression analysis and inferred cell-cell communication networks using CellChat for fibroblast-endothelial interactions.',
    tags: ['Seurat', 'CellChat', 'scRNA-seq', 'Pathology'],
    link: 'https://github.com/MasonMatich',
    category: 'Transcriptomics'
  },
  {
    id: '3',
    title: 'Wound Healing Dynamics & Aging',
    description: 'Applied end-to-end Seurat pipelines to examine age-related transcriptional dynamics in murine skin wound healing models.',
    tags: ['Batch Correction', 'Data Integration', 'Transcriptomics'],
    link: 'https://github.com/MasonMatich',
    category: 'Transcriptomics'
  },
  {
    id: '4',
    title: 'Dermal Lef1 & Computer Vision',
    description: 'Developed training datasets to optimize computer vision ML algorithms for high-throughput quantification of biological samples in skin development studies.',
    tags: ['Machine Learning', 'Computer Vision', 'Phenotyping'],
    link: 'https://github.com/MasonMatich',
    category: 'Machine Learning'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp0',
    institution: 'The Jackson Laboratory',
    role: 'Biomedical Data Science in Context Course',
    location: 'Bar Harbor, ME',
    period: 'Jan 2025',
    logoUrl: 'assets/jax.png',
    description: [
      'Applied Limma for Microarray data analysis, identifying genes relevant to scleroderma and sex-specific disease manifestation.'
    ]
  },
  {
    id: 'exp1',
    institution: 'MDI Biological Laboratory',
    role: 'NSF REU Summer Fellow',
    location: 'Bar Harbor, ME',
    period: 'Summer 2025',
    logoUrl: 'assets/mdibl.png',
    description: [
      'Investigated the molecular mechanisms of germline RNA interference using C. elegans models.',
      'Developed custom R scripts for bulk RNA-seq data analysis and high-throughput meta-analysis.',
      'Presented findings at the MDIBL Summer Symposium to a multidisciplinary audience.'
    ]
  },
  {
    id: 'exp2',
    institution: 'Washington State University',
    role: 'Undergraduate Research Assistant',
    location: 'Pullman, WA',
    period: 'Aug 2023 – Present',
    logoUrl: 'assets/wsu.png',
    description: [
      'Leading bioinformatics analysis for projects focused on systemic sclerosis and skin wound healing.',
      'Specializing in scRNA-seq pipelines using Seurat and CellChat for cell-cell communication modeling.',
      'Collaborating with wet-lab teams to integrate multi-omic datasets and validate computational predictions.'
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    title: 'Deep Hair Phenomics: Implications in Endocrinology, Development, and Aging',
    journal: 'Journal of Investigative Dermatology',
    year: 2024,
    doi: '10.1016/j.jid.2024.08.014',
    type: 'Paper'
  },
  {
    id: 'pres1',
    title: 'Investigating the Role of C.elegans Protein LOTR-1 in Germline RNA Interference',
    journal: 'MDI Biological Laboratory Summer Symposium',
    year: 2025,
    doi: '#',
    type: 'Talk'
  },
  {
    id: 'pres2',
    title: 'Fibroblast and Endothelial Cells Display CXCL12 Dysregulation in Systemic Sclerosis Skin',
    journal: 'WSU Showcase for Undergraduate Research and Creative Activities',
    year: 2025,
    doi: '#',
    type: 'Poster'
  },
  {
    id: 'pres3',
    title: 'Wound Healing Dynamics Through Development and Aging',
    journal: 'WSU College of Veterinary Medicine Research Symposium',
    year: 2024,
    doi: '#',
    type: 'Poster'
  },
  {
    id: 'pres4',
    title: 'Dermal Lef1 Expression Regulates Skin and Whisker Development, Maturation, and Aging in the Face of Mice',
    journal: 'WSU Showcase for Undergraduate Research and Creative Activities',
    year: 2024,
    doi: '#',
    type: 'Poster'
  }
];

export const SKILLS: Skill[] = [
  { name: 'R (Seurat, DESeq2, ggplot2)', category: 'Computational' },
  { name: 'Python (Pandas, NumPy)', category: 'Computational' },
  { name: 'Cell Ranger (Alignment)', category: 'Computational' },
  { name: 'Nextflow Pipelines', category: 'Computational' },
  { name: 'AWS (Storage/Compute)', category: 'Computational' },
  { name: 'HPC (Slurm)', category: 'Computational' },
  { name: 'Tissue Processing & Staining', category: 'Wet Lab' },
  { name: 'PCR & DNA/RNA Extraction', category: 'Wet Lab' },
  { name: 'Microtome Sectioning', category: 'Wet Lab' },
  { name: 'Scientific Communication', category: 'Professional' },
  { name: 'Project Management', category: 'Professional' }
];