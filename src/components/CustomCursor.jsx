import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useStore } from '../store';

const CustomCursor = () => {
  const { cursorVariant } = useStore();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      height: 32,
      width: 32,
      x: "-50%",
      y: "-50%",
      backgroundColor: 'transparent',
      border: '2px solid rgba(168, 85, 247, 0.5)',
      mixBlendMode: 'difference',
    },
    hover: {
      height: 80,
      width: 80,
      x: "-50%",
      y: "-50%",
      backgroundColor: 'rgba(168, 85, 247, 0.2)',
      border: 'none',
      mixBlendMode: 'difference',
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-colors duration-300"
        style={{ left: mouseX, top: mouseY }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ left: mouseX, top: mouseY, x: "-50%", y: "-50%" }}
        animate={{ opacity: cursorVariant === 'hidden' ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
