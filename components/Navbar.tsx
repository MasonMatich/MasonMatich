
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#about" className="text-sm font-black tracking-tighter text-neutral-200">
          MM.
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <a href="#experience" className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-200 transition-colors">Experience</a>
            <a href="#shiny" className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-200 transition-colors">Shiny Apps</a>
            <a href="#projects" className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-200 transition-colors">Projects</a>
            <a href="#skills" className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-200 transition-colors">Skills</a>
            <a href="#publications" className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-200 transition-colors">Research</a>
          </div>
            <a 
              href="assets/resume.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-300 text-neutral-900 text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:bg-neutral-400 transition-all duration-300"
            >
              <i className="fas fa-file-pdf"></i>
              CV
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;