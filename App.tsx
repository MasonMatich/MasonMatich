
import React from 'react';
import Navbar from './components/Navbar';
import { PROJECTS, PUBLICATIONS, SKILLS, EXPERIENCE, SHINY_APPS } from './constants';

const App: React.FC = () => {
  const publications = PUBLICATIONS.filter(pub => pub.type === 'Paper');
  const talksAndPosters = PUBLICATIONS.filter(pub => pub.type === 'Talk' || pub.type === 'Poster');

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-400 selection:bg-neutral-700 selection:text-neutral-100 font-light">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-32">
        {/* Header/Hero Section */}
        <section id="about" className="mb-24">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* LEFT: Text content */}
            <div className="flex-1">
              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-200 leading-[0.95] mb-8">
                Mason W.<br />Matich
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-12">
                Bioinformatics. Turning complex datasets into tools that empower domain experts.
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-4 items-center text-xs md:text-sm font-black uppercase tracking-[0.2em] mb-10">
                <a href="mailto:masonmatich@gmail.com" className="text-neutral-500 hover:text-neutral-200 transition-colors">
                  Email
                </a>
                <span className="text-neutral-800">/</span>
                <a href="https://www.github.com/MasonMatich" className="text-neutral-500 hover:text-neutral-200 transition-colors">
                  GitHub
                </a>
                <span className="text-neutral-800">/</span>
                <a href="https://www.linkedin.com/in/mason-w-matich" className="text-neutral-500 hover:text-neutral-200 transition-colors">
                  LinkedIn
                </a>
              </div>

              {/* CV Button */}
              <a 
                href="assets/curriculumvitae.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-300 text-neutral-900 text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:bg-neutral-400 transition-all duration-300"
              >
                <i className="fas fa-file-pdf"></i>
                View Curriculum Vitae
              </a>
            </div>

            {/* RIGHT: Headshot */}
            <div className="shrink-0 md:w-[240px] lg:w-[280px]">
              <div className="aspect-square rounded-md bg-neutral-800 overflow-hidden border border-neutral-700 shadow-xl">
                <img
                  src="assets/headshot.jpg"
                  alt="Mason W. Matich"
                  className="w-full h-full object-cover brightness-95 contrast-105 neutralscale transition-all duration-500 opacity-75"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="mb-24">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-neutral-600 mb-12 flex items-center gap-4">
            Experience
            <span className="h-px bg-neutral-800 grow"></span>
          </h2>
          <div className="space-y-20">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="group transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    {exp.logoUrl && (
                      <div className="w-12 h-12 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden shrink-0 transition-colors group-hover:border-neutral-600">
                        <img src={exp.logoUrl} alt={`${exp.institution} logo`} className="max-w-[70%] max-h-[70%] object-contain neutralscale opacity-55" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-neutral-200 group-hover:text-neutral-100 transition-colors tracking-tight">
                        {exp.institution}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm font-bold text-neutral-500">{exp.role}</span>
                        <span className="text-neutral-800 text-[10px]">•</span>
                        <span className="text-sm text-neutral-600 uppercase tracking-widest">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600 whitespace-nowrap bg-neutral-800/40 px-3 py-1.5 rounded-sm border border-neutral-800/60">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* R Shiny Visualizations */}
        <section id="shiny" className="mb-24">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-neutral-600 mb-12 flex items-center gap-4">
            R Shiny Visualizations
            <span className="h-px bg-neutral-800 grow"></span>
          </h2>
          <div className="grid grid-cols-1 gap-16">
            {SHINY_APPS.map((app) => (
              <div key={app.id} className="group relative pl-8 transition-all duration-500">
                {/* Vertical Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800 group-hover:bg-neutral-400 group-hover:scale-y-105 transition-all duration-500 origin-center"></div>

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Preview Image */}
                  {app.imageUrl && (
                    <a href={app.link} target="_blank" rel="noopener noreferrer" className="shrink-0 md:w-48 lg:w-56 invert-colors">
                      <div className="aspect-video rounded-md bg-neutral-800 overflow-hidden border border-neutral-700 group-hover:border-neutral-600 transition-colors">
                        <img
                          src={app.imageUrl}
                          alt={`${app.title} preview`}
                          className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity invert"
                        />
                      </div>
                    </a>
                  )}

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-neutral-200 group-hover:text-neutral-100 transition-colors tracking-tight mb-4">
                      <a href={app.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                        {app.title}
                        <i className="fas fa-arrow-up-right text-sm opacity-10 group-hover:opacity-100 transition-opacity"></i>
                      </a>
                    </h3>
                    <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl font-normal">
                      {app.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section id="projects" className="mb-24">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-neutral-600 mb-12 flex items-center gap-4">
            Project Showcase
            <span className="h-px bg-neutral-800 grow"></span>
          </h2>
          <div className="grid grid-cols-1 gap-16">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative pl-8 transition-all duration-500">
                {/* Vertical Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800 group-hover:bg-neutral-400 group-hover:scale-y-105 transition-all duration-500 origin-center"></div>

                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-4">
                  <h3 className="text-2xl md:text-3xl font-black text-neutral-200 group-hover:text-neutral-100 transition-colors tracking-tight">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                      {project.title}
                      <i className="fas fa-arrow-up-right text-sm opacity-10 group-hover:opacity-100 transition-opacity"></i>
                    </a>
                  </h3>
                  <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 bg-neutral-800 px-3 py-1 rounded-sm border border-neutral-700">{project.category}</span>
                </div>
                <p className="text-lg text-neutral-500 leading-relaxed mb-6 max-w-2xl font-normal">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-[0.15em] text-neutral-600 border border-neutral-800 px-2.5 py-1 rounded-sm transition-colors hover:text-neutral-400 hover:border-neutral-700">
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
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-neutral-600 mb-12 flex items-center gap-4">
            Skills
            <span className="h-px bg-neutral-800 grow"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {['Modalities', 'Languages', 'Tools', 'Platforms'].map((cat) => (
              <div key={cat} className="space-y-6">
                <h4 className="text-sm font-black text-neutral-200 uppercase tracking-widest border-b border-neutral-800 pb-2 inline-block">{cat}</h4>
                <ul className="space-y-3">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <li key={skill.name} className="text-sm text-neutral-500 font-medium hover:text-neutral-200 transition-colors">
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
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-neutral-600 mb-12 flex items-center gap-4">
            Papers
            <span className="h-px bg-neutral-800 grow"></span>
          </h2>
          <div className="space-y-16">
            {publications.map((pub) => (
              <div key={pub.id} className="group relative pl-8 transition-all duration-500">
                {/* Vertical Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800 group-hover:bg-neutral-400 group-hover:scale-y-105 transition-all duration-500 origin-center"></div>

                <div className="text-[10px] font-black text-neutral-600 mb-2 uppercase tracking-[0.2em]">{pub.year}</div>
                <h3 className="text-2xl md:text-3xl font-black text-neutral-200 group-hover:text-neutral-100 leading-tight mb-3 transition-colors tracking-tight">
                  {pub.doi !== '#' ? (
                    <a href={pub.doi.startsWith('10.') ? `https://doi.org/${pub.doi}` : pub.doi} className="flex items-center gap-4">
                      {pub.title}
                      <i className="fas fa-arrow-up-right text-xs opacity-10 group-hover:opacity-100 transition-opacity"></i>
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-lg text-neutral-500 italic font-light">{pub.journal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Presentations: Talks & Posters */}
        <section id="presentations" className="mb-24">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-neutral-600 mb-12 flex items-center gap-4">
            Talks & Posters
            <span className="h-px bg-neutral-800 grow"></span>
          </h2>
          <div className="space-y-16">
            {talksAndPosters.map((pub) => (
              <div key={pub.id} className="group relative pl-8 transition-all duration-500">
                {/* Vertical Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800 group-hover:bg-neutral-400 group-hover:scale-y-105 transition-all duration-500 origin-center"></div>

                <div className="flex items-center gap-3 text-[10px] font-black text-neutral-600 mb-2 uppercase tracking-[0.2em]">
                  <i className={`fas ${pub.type === 'Talk' ? 'fa-microphone-lines' : 'fa-scroll'} opacity-50`}></i>
                  <span>{pub.type} • {pub.year}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-neutral-200 group-hover:text-neutral-100 leading-tight mb-3 transition-colors tracking-tight">
                   {pub.pdfUrl ? (
                    <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                      {pub.title}
                      <i className="fas fa-file-pdf text-xs opacity-10 group-hover:opacity-100 transition-opacity"></i>
                    </a>
                  ) : pub.doi !== '#' ? (
                    <a href={pub.doi.startsWith('10.') ? `https://doi.org/${pub.doi}` : pub.doi} className="flex items-center gap-4">
                      {pub.title}
                      <i className="fas fa-arrow-up-right text-xs opacity-10 group-hover:opacity-100 transition-opacity"></i>
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-lg text-neutral-500 italic font-light">{pub.journal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Honors */}
        <section id="honors" className="mb-24">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-neutral-600 mb-12 flex items-center gap-4">
            Honors
            <span className="h-px bg-neutral-800 grow"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "NSF REU Fellowship (2025)",
              "President's Honor Roll (5x)",
              "University Achievement Award",
              "Blair Mollola King Scholarship"
            ].map((award, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <span className="w-px h-4 bg-neutral-800 group-hover:bg-neutral-400 transition-colors"></span>
                <span className="text-lg text-neutral-500 font-medium group-hover:text-neutral-200 transition-colors tracking-tight">
                  {award}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Softened Dark Footer */}
        <footer className="pt-16 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-neutral-600 font-black uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} Mason W. Matich
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700">
            <span>Seattle, WA</span>
            <span className="hidden md:inline text-neutral-800">/</span>
            <span>Bioinformatics</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
