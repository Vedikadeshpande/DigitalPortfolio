import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store';
import { Mail, Code, Briefcase, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { setCursorVariant } = useStore();

  return (
    <section id="contact" className="relative w-full py-32 bg-surface flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-primary/10 blur-[150px] rounded-[100%]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'm always eager to work on new and exciting things!
          </p>

          <a 
            href="mailto:vedikadeshpande002@gmail.com"
            className="inline-block px-10 py-5 bg-white text-black font-semibold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-16"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-8">
            {[
              { icon: <Code size={24} />, href: "https://github.com/Vedikadeshpande", tooltip: "GitHub" },
              { icon: <Briefcase size={24} />, href: "https://www.linkedin.com/in/vedika-amol-deshpande-02ab2435b", tooltip: "LinkedIn" },
              { icon: <MessageSquare size={24} />, href: "tel:+918368864911", tooltip: "+91 8368864911" },
              { icon: <Mail size={24} />, href: "mailto:vedikadeshpande002@gmail.com", tooltip: "Email" }
            ].map((social, idx) => (
              <div key={idx} className="relative group">
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {social.icon}
                </a>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl translate-y-1 group-hover:translate-y-0">
                  {social.tooltip}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Vedika. Engineered with precision.
      </div>
    </section>
  );
};

export default Contact;
