
import { Project, Publication, Skill, Experience, ShinyApp } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Bulk RNA-seq Automated Workflow',
    description: 'A reproducible, automated workflow for differential gene expression analysis of bulk RNA-seq data using DESeq2, with comprehensive gene ontology enrichment analysis and interactive HTML reports.',
    tags: ['R', 'Bulk RNA-seq', 'PCA', 'C. elegans'],
    link: 'https://masonmatich.github.io/bulk_RNA_seq_workflow/#Inputs_Received',
    category: 'Transcriptomics'
  },
  {
    id: '2',
    title: 'Domestic Cattle Skin scRNA-seq Analysis',
    description: 'Reanalyzed scRNA-seq data from bovine skin to identify cell populations and gene expression patterns associated with hair follicle development.',
    tags: ['Seurat', 'scRNA-seq', 'Tissue Biology'],
    link: 'https://skinregeneration.org/dataset/domestic-cattle-skin/',
    category: 'Transcriptomics'
  },
  {
    id: '3',
    title: 'Systemic Sclerosis scRNA-seq Analysis',
    description: 'Conducted cell-type specific differential expression analysis and inferred cell-cell communication networks using CellChat for fibroblast-endothelial interactions.',
    tags: ['Seurat', 'CellChat', 'scRNA-seq', 'Pathology'],
    link: 'https://skinregeneration.org/dataset/systemic-sclerosis-skin-9de3b-1/',
    category: 'Transcriptomics'
  },
  {
    id: '4',
    title: 'Wound Healing Dynamics & Aging',
    description: 'Applied end-to-end Seurat pipelines to examine age-related transcriptional dynamics in murine skin wound healing models.',
    tags: ['Batch Correction', 'Data Integration', 'Transcriptomics'],
    link: 'https://skinregeneration.org/dataset/p5-unsorted-skin/',
    category: 'Transcriptomics'
  },
  {
    id: '5',
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
    period: 'May 2025 – Dec 2025',
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
    period: 'Aug 2023 – Dec 2025',
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
    pdfUrl: 'assets/sclerosisskinposter.pdf',
    type: 'Poster'
  },
  {
    id: 'pres3',
    title: 'Wound Healing Dynamics Through Development and Aging',
    journal: 'WSU College of Veterinary Medicine Research Symposium',
    year: 2024,
    doi: '#',
    pdfUrl: 'assets/woundhealingdynamicsposter.pdf',
    type: 'Poster'
  },
  {
    id: 'pres4',
    title: 'Dermal Lef1 Expression Regulates Skin and Whisker Development, Maturation, and Aging in the Face of Mice',
    journal: 'WSU Showcase for Undergraduate Research and Creative Activities',
    year: 2024,
    doi: '#',
    pdfUrl: 'assets/dermallef1poster.pdf',
    type: 'Poster'
  }
];

export const SHINY_APPS: ShinyApp[] = [
  {
    id: 'shiny1',
    title: 'PCA Visualizer',
    description: 'A Shiny application for visualizing Principal Component Analysis (PCA) results from RNA-seq or other high-dimensional datasets.',
    link: 'https://mwmatich.shinyapps.io/pca_visualizer/',
    imageUrl: 'assets/pca_vis.png'
  }
];

export const SKILLS: Skill[] = [
  { name: 'RNAseq', category: 'Modalities' },
  { name: 'scRNAseq', category: 'Modalities' },
  { name: 'Microarray', category: 'Modalities' },
  { name: 'Python', category: 'Languages' },
  { name: 'R', category: 'Languages' },
  { name: 'BASH', category: 'Languages' },
  { name: 'Nextflow', category: 'Tools' },
  { name: 'nf-core', category: 'Tools' },
  { name: 'command line', category: 'Tools' },
  { name: 'git/Github', category: 'Tools' },
  { name: 'Amazon Web Services', category: 'Platforms' },
  { name: 'Slurm', category: 'Platforms' } 
];