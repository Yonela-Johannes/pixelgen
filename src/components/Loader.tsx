import { motion } from 'framer-motion';
import styled from 'styled-components';
import logo from '../assets/loading.svg'
import pixelGen from '../assets/pixel.png'
import Logo from './Loading/Logo';

const Loader = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      transition={{ delay: 2 }}
      className='flex flex-col items-center gap-8 min-h-screen justify-center backdrop-lg'
    >
      <Logo />
      <div className='transform-origin-center'>
        <img src={pixelGen}
          className='w-[200px] h-[200px] object-contain relative'
        />
      </div>
    </motion.div>
  );
};

export default Loader;
