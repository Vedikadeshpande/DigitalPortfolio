import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store';
import { X, Download, FileText } from 'lucide-react';
import resumePdf from '../assets/Vedika Resume.pdf';

const ResumeModal = () => {
  const { setResumeOpen, setCursorVariant } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
    >
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-2xl"
        onClick={() => setResumeOpen(false)}
      />
      
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative z-10 w-[95vw] max-w-7xl h-[95vh] bg-surface/90 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col p-3 md:p-6 pt-20 md:pt-6"
      >
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50 flex items-center gap-3">
          <a href={resumePdf} download="Vedika_Deshpande_Resume.pdf">
            <button 
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className="px-5 py-2.5 bg-black/60 backdrop-blur-xl border border-white/20 hover:border-primary/50 hover:bg-black/80 rounded-full text-white font-medium flex items-center gap-2 transition-all shadow-xl"
            >
              <Download size={18} />
              <span className="hidden sm:inline">Download</span>
            </button>
          </a>
          <button
            onClick={() => setResumeOpen(false)}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-xl border border-white/20 hover:border-white/50 hover:bg-black/80 text-gray-300 hover:text-white transition-all shadow-xl"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 w-full h-full relative">
          {/* Actual resume PDF viewer */}
          <div 
            className="w-full h-full bg-black/50 border border-white/10 rounded-xl overflow-hidden shadow-inner relative"
            onMouseEnter={() => setCursorVariant('hidden')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <iframe 
              src={resumePdf} 
              className="w-full h-full border-none" 
              title="Vedika Resume"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResumeModal;
