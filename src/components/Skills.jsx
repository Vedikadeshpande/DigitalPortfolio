import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useStore } from '../store';

const skillsList = [
  { name: "Python", category: "Core" },
  { name: "C/C++ (Basic)", category: "Core" },
  { name: "React.js", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML/CSS", category:"Frontend"},
  { name: "Machine Learning", category: "AI/ML" },
  { name: "Deep Learning", category: "AI/ML" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Keras", category: "AI/ML" },
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "OpenCV (Basic)", category: "Core" },
  { name: "NLP", category: "Core" },
  { name: "Pandas", category: "Data" },
  { name: "NumPy", category: "Data" },
  { name: "Matplotlib/Seaborn", category: "Data" },
  { name: "Flask", category: "Backend" },
  { name: "Vercel", category: "Web Dev" },
  { name: "Render", category: "Web Dev" },
  { name: "Power BI", category: "Data" },
  { name: "SQL", category: "Data" },
  { name: "Git/GitHub", category: "Core" },
];

const groupedSkills = skillsList.reduce((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});

const Skills = () => {
  const { setCursorVariant } = useStore();
  const containerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const chunk = Math.ceil(skillsList.length / 3);
  const row1 = skillsList.slice(0, chunk);
  const row2 = skillsList.slice(chunk, chunk * 2);
  const row3 = skillsList.slice(chunk * 2);

  return (
    <section id="skills" ref={containerRef} className="relative w-full py-32 overflow-hidden bg-background min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[80vw] h-[80vw] rounded-full border-[1px] border-white/5 absolute" />
        <div className="w-[60vw] h-[60vw] rounded-full border-[1px] border-white/10 absolute" />
        <div className="w-[40vw] h-[40vw] rounded-full border-[1px] border-primary/20 absolute" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Technological <span className="text-primary font-light italic">Skills</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          I pick up tools fast. Here's what I'm fluent in right now.
        </p>
        <button 
          onClick={() => setShowAll(!showAll)}
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
          className="px-8 py-3 rounded-full border border-white/20 glass text-white text-sm font-semibold hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          {showAll ? "Switch to Animated View" : "View All Skills Grid"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!showAll ? (
          <motion.div 
            key="animated" 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full flex flex-col gap-8"
          >
            <motion.div style={{ x: x1 }} className="flex gap-6 whitespace-nowrap px-10">
              {row1.map((skill, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-white/10 hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  <span className="text-xl font-medium text-white">{skill.name}</span>
                </div>
              ))}
            </motion.div>

            <motion.div style={{ x: x2 }} className="flex gap-6 whitespace-nowrap px-10 ml-20">
              {row2.map((skill, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-white/10 hover:border-accent/50 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <span className="text-xl font-medium text-white">{skill.name}</span>
                </div>
              ))}
            </motion.div>

            <motion.div style={{ x: x3 }} className="flex gap-6 whitespace-nowrap px-10 ml-10">
              {row3.map((skill, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-white/10 hover:border-purple-400/50 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
                  <span className="text-xl font-medium text-white">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="grid" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            {Object.entries(groupedSkills).map(([category, skills], index) => (
              <motion.div 
                key={category} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(168,85,247,0)] group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 bg-black/40 border border-white/5 text-gray-300 rounded-full text-sm font-medium hover:text-white hover:border-white/20 transition-colors cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
