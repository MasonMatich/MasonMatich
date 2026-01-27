
import React from 'react';
import Navbar from './components/Navbar';
import { PROJECTS, PUBLICATIONS, SKILLS, EXPERIENCE } from './constants';

const App: React.FC = () => {
  const publications = PUBLICATIONS.filter(pub => pub.type === 'Paper');
  const talksAndPosters = PUBLICATIONS.filter(pub => pub.type === 'Talk' || pub.type === 'Poster');

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-400 selection:bg-zinc-700 selection:text-zinc-100 font-light">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-32">
        {/* Header/Hero Section */}
        <section id="about" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
            {/* Name Header */}
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-200 leading-[0.95]">
              Mason W.<br />Matich
            </h1>
            
            {/* Headshot Area - Updated to use headshot.jpg */}
            <div className="shrink-0 pt-2 group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-zinc-800 overflow-hidden border border-zinc-700 shadow-xl relative transition-transform duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                  <i className="fas fa-user text-4xl"></i>
                </div>
                <img 
                  src="assets/headshot.jpg"
                  alt="Mason W. Matich" 
                  className="w-full h-full object-cover relative z-10 brightness-95 contrast-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
            <p>
              B.S. Genetics and Cell Biology student at Washington State University and NSF REU Summer Fellow at MDI Biological Laboratory.
            </p>
            <p>
              Focusing on <span className="text-zinc-300 font-medium border-b border-zinc-700">single-cell transcriptomics</span> and the molecular dynamics of <span className="text-zinc-300 font-medium border-b border-zinc-700">skin development</span>.
            </p>
          </div>
          
          <div className="mt-12 space-y-8">
            <div className="flex flex-wrap gap-8 items-center text-xs md:text-sm font-black uppercase tracking-[0.2em]">
              <a href="mailto:masonmatich@gmail.com" className="text-zinc-500 hover:text-zinc-200 transition-colors flex items-center gap-2">
                Email
              </a>
              <span className="text-zinc-800">/</span>
              <a href="https://www.github.com/MasonMatich" className="text-zinc-500 hover:text-zinc-200 transition-colors flex items-center gap-2">
                GitHub
              </a>
              <span className="text-zinc-800">/</span>
              <a href="https://www.linkedin.com/in/mason-w-matich" className="text-zinc-500 hover:text-zinc-200 transition-colors flex items-center gap-2">
                LinkedIn
              </a>
            </div>

            <div className="pt-2">
              <a 
                href="assets/resume.pdf"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-300 text-zinc-900 text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:bg-zinc-400 transition-all duration-300"
              >
                <i className="fas fa-file-pdf"></i>
                View Curriculum Vitae
              </a>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="mb-24">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-12 flex items-center gap-4">
            Experience
            <span className="h-px bg-zinc-800 grow"></span>
          </h2>
          <div className="space-y-20">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="group transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    {exp.logoUrl && (
                      <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden shrink-0 transition-colors group-hover:border-zinc-600">
                        <img src={exp.logoUrl} alt={`${exp.institution} logo`} className="max-w-[70%] max-h-[70%] object-contain grayscale invert opacity-30" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-zinc-200 group-hover:text-zinc-100 transition-colors tracking-tight">
                        {exp.institution}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm font-bold text-zinc-500">{exp.role}</span>
                        <span className="text-zinc-800 text-[10px]">•</span>
                        <span className="text-sm text-zinc-600 uppercase tracking-widest">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 whitespace-nowrap bg-zinc-800/40 px-3 py-1.5 rounded-sm border border-zinc-800/60">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section id="projects" className="mb-24">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-12 flex items-center gap-4">
            Research
            <span className="h-px bg-zinc-800 grow"></span>
          </h2>
          <div className="grid grid-cols-1 gap-16">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative pl-8 transition-all duration-500">
                {/* Vertical Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 group-hover:bg-zinc-400 group-hover:scale-y-105 transition-all duration-500 origin-center"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-4">
                  <h3 className="text-2xl md:text-3xl font-black text-zinc-200 group-hover:text-zinc-100 transition-colors tracking-tight">
                    <a href={project.link} className="flex items-center gap-4">
                      {project.title}
                      <i className="fas fa-arrow-up-right text-sm opacity-10 group-hover:opacity-100 transition-opacity"></i>
                    </a>
                  </h3>
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 bg-zinc-800 px-3 py-1 rounded-sm border border-zinc-700">{project.category}</span>
                </div>
                <p className="text-lg text-zinc-500 leading-relaxed mb-6 max-w-2xl font-normal">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-[0.15em] text-zinc-600 border border-zinc-800 px-2.5 py-1 rounded-sm transition-colors hover:text-zinc-400 hover:border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Proficiency */}
        <section id="skills" className="mb-24">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-12 flex items-center gap-4">
            Skills
            <span className="h-px bg-zinc-800 grow"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {['Computational', 'Wet Lab', 'Professional'].map((cat) => (
              <div key={cat} className="space-y-6">
                <h4 className="text-sm font-black text-zinc-200 uppercase tracking-widest border-b border-zinc-800 pb-2 inline-block">{cat}</h4>
                <ul className="space-y-3">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <li key={skill.name} className="text-sm text-zinc-500 font-medium hover:text-zinc-200 transition-colors">
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="mb-24">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-12 flex items-center gap-4">
            Papers
            <span className="h-px bg-zinc-800 grow"></span>
          </h2>
          <div className="space-y-16">
            {publications.map((pub) => (
              <div key={pub.id} className="group relative pl-8 transition-all duration-500">
                {/* Vertical Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 group-hover:bg-zinc-400 group-hover:scale-y-105 transition-all duration-500 origin-center"></div>

                <div className="text-[10px] font-black text-zinc-600 mb-2 uppercase tracking-[0.2em]">{pub.year}</div>
                <h3 className="text-2xl md:text-3xl font-black text-zinc-200 group-hover:text-zinc-100 leading-tight mb-3 transition-colors tracking-tight">
                  {pub.doi !== '#' ? (
                    <a href={pub.doi.startsWith('10.') ? `https://doi.org/${pub.doi}` : pub.doi} className="flex items-center gap-4">
                      {pub.title}
                      <i className="fas fa-arrow-up-right text-xs opacity-10 group-hover:opacity-100 transition-opacity"></i>
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-lg text-zinc-500 italic font-light">{pub.journal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Presentations: Talks & Posters */}
        <section id="presentations" className="mb-24">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-12 flex items-center gap-4">
            Talks & Posters
            <span className="h-px bg-zinc-800 grow"></span>
          </h2>
          <div className="space-y-16">
            {talksAndPosters.map((pub) => (
              <div key={pub.id} className="group relative pl-8 transition-all duration-500">
                {/* Vertical Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 group-hover:bg-zinc-400 group-hover:scale-y-105 transition-all duration-500 origin-center"></div>

                <div className="flex items-center gap-3 text-[10px] font-black text-zinc-600 mb-2 uppercase tracking-[0.2em]">
                  <i className={`fas ${pub.type === 'Talk' ? 'fa-microphone-lines' : 'fa-scroll'} opacity-50`}></i>
                  <span>{pub.type} • {pub.year}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-zinc-200 group-hover:text-zinc-100 leading-tight mb-3 transition-colors tracking-tight">
                   {pub.doi !== '#' ? (
                    <a href={pub.doi.startsWith('10.') ? `https://doi.org/${pub.doi}` : pub.doi} className="flex items-center gap-4">
                      {pub.title}
                      <i className="fas fa-arrow-up-right text-xs opacity-10 group-hover:opacity-100 transition-opacity"></i>
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-lg text-zinc-500 italic font-light">{pub.journal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Honors */}
        <section id="honors" className="mb-24">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-12 flex items-center gap-4">
            Honors
            <span className="h-px bg-zinc-800 grow"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "NSF REU Fellowship (2025)",
              "President's Honor Roll (5x)",
              "University Achievement Award",
              "Blair Mollola King Scholarship"
            ].map((award, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <span className="w-px h-4 bg-zinc-800 group-hover:bg-zinc-400 transition-colors"></span>
                <span className="text-lg text-zinc-500 font-medium group-hover:text-zinc-200 transition-colors tracking-tight">
                  {award}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Softened Dark Footer */}
        <footer className="pt-16 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} Mason W. Matich
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">
            <span>Pullman, WA</span>
            <span className="hidden md:inline text-zinc-800">/</span>
            <span>Genetics & Cell Biology</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
