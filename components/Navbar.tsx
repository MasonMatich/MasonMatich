
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#about" className="text-sm font-black tracking-tighter text-zinc-200">
          MM.
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <a href="#experience" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-200 transition-colors">Experience</a>
            <a href="#projects" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-200 transition-colors">Projects</a>
            <a href="#skills" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-200 transition-colors">Skills</a>
            <a href="#publications" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-200 transition-colors">Research</a>
          </div>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-black uppercase tracking-[0.2em] bg-zinc-300 text-zinc-900 px-4 py-1.5 rounded-sm hover:bg-zinc-400 transition-all flex items-center gap-2"
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