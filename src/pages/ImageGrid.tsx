import styled from 'styled-components'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import queries from '../styles/breakpoints'
import { pageAnimation } from '../utils/animations'
import Card from '../components/Card'
import { motion, useInView } from "framer-motion";

import image from '../assets/Insta Layout0002.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/Insta Layout0004.jpg'
import image4 from '../assets/image17_2.png'
import { useRef } from 'react'

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      ease: 'easeOut',
      delayChildren: 1.5,
    },
  },
};

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  @media ${queries.tabletUp} {
    padding-top: 2.5rem;
  }
`

const data = [
  {
    name: 'Nkosinati',
    image: image,
  },
  {
    name: 'Nkosinati',
    image: image2,
  },
  {
    name: 'Nkosinati',
    image: image3,
  },
  {
    name: 'Nkosinati',
    image: image4,
  },
]

const ImageGrid = () => {
  const ref = useRef();

  return (
    <Wrapper ref={ref} variants={variants} initial="initial" animate="animate">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 6 }}
      >
        <Masonry>
          {data?.map((card, index) => {
            return (
              <Card
                key={index}
                image={card.image}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </Wrapper>
  )
}

export default ImageGrid
