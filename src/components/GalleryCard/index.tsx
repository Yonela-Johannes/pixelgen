import { motion, useScroll } from "framer-motion"
import { captionAnimation } from '../../utils/animations'
import { Caption, Figure } from './GalleryCard.styles'

const GalleryCard = ({ painting }) => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }} >
      <Figure>
        <img src={painting?.image} alt="" />
      </Figure>
    </motion.div>
  )
}

export default GalleryCard
