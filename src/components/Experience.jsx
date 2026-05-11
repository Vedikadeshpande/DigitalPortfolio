import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store';

const experiences = [
  {
    role: "Convenor, Manipal Innovation Hackathon 2026",
    company: "E-Cell, Manipal University Jaipur",
    period: "2026",
    desc: "Led a 50-member organizing team to execute a 200+ participant hackathon - from problem curation to judging workflows."
  },
  {
    role: "Creative Director",
    company: "International Student Cell",
    period: "2026 - Present",
    desc: "Driving media, marketing, and design strategy for the Directorate of International Collaborations (DoIC) as part of a 5-member executive committee."
  },
  {
    role: "HR Director",
    company: "AI ML Community",
    period: "2025 - Present",
    desc: "Building technical learning infrastructure for 400+ members through workshops, industry talks, and hackathons."
  },
  {
    role: "Creative Head",
    company: "International Student Cell, Manipal University Jaipur",
    period: "2024 - 2026",
    desc: "Spearheaded branding and outreach for 10+ events, including campus experiences for delegates from 50+ universities worldwide."
  }
];

const Experience = () => {
  const { setCursorVariant } = useStore();

  return (
    <section id="experience" className="relative w-full py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Professional <span className="text-primary italic font-light">Experiences</span>
          </h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 z-10">
                <div className="w-2 h-2 rounded-full bg-white group-hover:bg-primary transition-colors" />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl group-hover:border-primary/30 transition-colors"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-xl">{exp.role}</h3>
                  <span className="text-primary text-sm font-medium">{exp.period}</span>
                </div>
                <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-gray-400/80 text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
