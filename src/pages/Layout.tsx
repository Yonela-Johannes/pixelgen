import { useScroll, motion, useSpring } from 'framer-motion';
import React, { useRef } from 'react'

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
      rotate: '360'
    },
  },
};

const Layout = ({ children }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='relative' ref={ref}>
      <div className="fixed bg-bg_primary right-1 left-1 rounded-md top-0  z-50">
        <motion.div style={{ scaleX }} className="h-[4px] md:h-4 rounded-md bg-light"></motion.div>
      </div>
      <motion.div
        className="slidingTextContainer font-acumin text-sm pt-2 animate-pulse"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Graphic Designer //Photographer //Videographer
      </motion.div>
      {children}
    </div>
  )
}

export default Layout
