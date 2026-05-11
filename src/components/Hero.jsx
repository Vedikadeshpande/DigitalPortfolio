import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStore } from '../store';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';
import vedikaImage from '../assets/vedika.jpeg';

const Hero = () => {
  const { setCursorVariant, setResumeOpen } = useStore();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y          = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity    = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgParallax = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      id="home"
      ref={targetRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Ambient background orbs ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25], rotate: [0, 80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30%] -left-[15%] w-[55vw] h-[55vw] bg-[#a855f7]/20 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.35, 0.15], rotate: [0, -60, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-[50%] -right-[5%] w-[45vw] h-[45vw] bg-[#3b82f6]/20 rounded-full blur-[140px]"
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── CONTENT WRAPPER ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8 pt-24 md:pt-0"
      >

        {/* ════════════════════ LEFT — TEXT ════════════════════ */}
        <div className="flex-1 flex flex-col items-start space-y-7 text-left max-w-xl">

          {/* Status chip */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 text-[#c084fc] text-sm font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse shadow-[0_0_8px_#a855f7]" />
            Looking for new opportunities
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-8xl md:text-6xl xl:text-6xl font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500"
          >
            VEDIKA AMOL DESHPANDE
          </motion.h1>

          {/* Role line */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg font-mono text-[#3b82f6] tracking-widest uppercase"
          >
            AI/ML Enthusiast &nbsp;·&nbsp; 4th Year Student
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            I'm Vedika, a final year AI & ML student at Manipal University, Jaipur. I build things that think and more importantly, things that work. I like creating applications where AI does something useful for a real person. Currently hunting for opportunities in AI/ML and related fields where the problems are hard and the impact is real.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_24px_rgba(255,255,255,0.25)]"
            >
              Explore Projects
            </a>
            <button
              onClick={() => setResumeOpen(true)}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className="px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur text-white font-semibold hover:bg-white/10 transition-colors duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
            >
              View Resume
            </button>
          </motion.div>


        </div>

        {/* ════════════════════ RIGHT — PORTRAIT ════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 relative w-[340px] md:w-[400px] xl:w-[460px] max-h-[75vh]"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#a855f7]/20 via-transparent to-[#3b82f6]/20 blur-2xl pointer-events-none" />

          {/* Portrait card */}
          <motion.div
            style={{ y: imgParallax }}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.12)] group"
          >
            {/* Photo */}
            <img
              src={vedikaImage}
              alt="Vedika — AI/ML Engineer"
              className="w-full aspect-[3/4] object-cover object-[20%_15%]"
            />

            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

            

            {/* Name label at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white font-bold text-xl tracking-tight">Vedika</p>
              <p className="text-[#a855f7] text-sm font-mono mt-0.5">AI/ML Enthusiast · 4th Year Student</p>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-gray-600"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
