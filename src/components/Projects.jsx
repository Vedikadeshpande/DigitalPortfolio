import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store';
import { Code, ExternalLink, X } from 'lucide-react';
import { image } from 'framer-motion/client';
import GrooveInImage from '../assets/vedika.jpeg';

const projectsData = [
  {
    id: 1,
    title: "GrooveIn",
    description: "Built an AI-powered emotion-based music recommender using TF-IDF and logistic regression on user text input.",
    details: "Implemented NLP-based sentiment analysis to map emotions to curated Spotify playlists via an interactive Streamlit UI, trained the model on 15,000+ labeled text samples (Kaggle dataset + custom inputs), achieving 85–90% accuracy",
    tech: ["Python", "NLP", "Streamlit", "Scikit-Learn"],
    color: "from-primary/40 to-black",
    liveUrl: "https://groovein.streamlit.app/",
    sourceUrl: "https://github.com/Vedikadeshpande/GrooveIn" 
  },
  {
    id: 2,
    title: "CLOUTWARE",
    description: "A full-stack AI ad generation platform that turns structured inputs into complete, industry-ready marketing campaigns in real time.",
    details: "A full-stack AI advertising platform that generates complete, industry-specific marketing strategies from scratch - hooks, and targeting logic included. Powered by Groq LLM APIs, it processes structured inputs through 9 industry templates and outputs real-time campaigns via a prompt-engineered pipeline, with the frontend on Vercel and backend on Render.",
    tech: ["React", "GenAI", "Groq API", "Vercel", "Render", "TailwindCSS"],
    color: "from-accent/40 to-black",
    liveUrl: "https://cloutware-kappa.vercel.app/",
    sourceUrl: "https://github.com/Vedikadeshpande/Cloutware"
  },
  {
    id: 3,
    title: "Academic OS",
    description: "An AI-powered learning ecosystem that turns your scattered study materials into an intelligent, interactive academic assistant.",
    details: "Centralizes PDFs, notes, and past papers into a unified workspace with RAG-based context-aware retrieval. Features a PYQ analyzer for exam trend detection, automated quiz and flashcard generation, mock exam generator using Bloom's Taxonomy, a personalized study planner, and a performance analytics dashboard.",
    tech: ["Python","FastAPI", "React.js", "RAG", "NLP", "LLMs", "Vector Embeddings", "TailwindCSS", "Framer Motion"],
    color: "from-purple-500/40 to-black",
    liveUrl: "https://academic-os-eta.vercel.app/",
    sourceUrl: "https://github.com/Vedikadeshpande/AcademicOS"
  }
];

const Projects = () => {
  const { setCursorVariant } = useStore();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="projects" className="relative w-full py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            I have made 3 projects. 2 of them are live and the 3rd one is in progress. I love working on new projects!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              layoutId={`project-container-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className="cursor-pointer group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-primary/50 transition-colors duration-500 min-h-[400px] flex flex-col justify-end p-8"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-20 group-hover:opacity-50 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <motion.h3 
                  layoutId={`project-title-${project.id}`}
                  className="text-2xl font-bold text-white mb-2"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  layoutId={`project-desc-${project.id}`}
                  className="text-gray-400 text-sm mb-4 line-clamp-2"
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-10"
          >
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setSelectedId(null)}
            />
            
            {projectsData.map(project => project.id === selectedId && (
              <motion.div
                layoutId={`project-container-${project.id}`}
                key="modal"
                className="relative z-10 w-full max-w-4xl bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 pointer-events-none`} />
                
                <div className="w-full md:w-1/2 min-h-[300px] bg-black/50 p-8 flex flex-col justify-end relative">
                   {/* Placeholder for actual image/video */}
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
                   <div className="relative z-10">
                     <motion.h3 
                        layoutId={`project-title-${project.id}`}
                        className="text-4xl font-bold text-white mb-4"
                     >
                        {project.title}
                     </motion.h3>
                     <motion.p 
                        layoutId={`project-desc-${project.id}`}
                        className="text-lg text-primary mb-0"
                     >
                        {project.description}
                     </motion.p>
                   </div>
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                    
                    <h4 className="text-white text-lg font-semibold mb-4">About the Project</h4>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      {project.details}
                    </p>
                    
                    <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 text-sm rounded-full border border-white/10 text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">
                        <Code size={18} /> Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
