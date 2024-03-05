import ProjectData from '../data/ProjectData'
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react";
import PortfolioProject from './PortfolioProject'

const HorizontalScrollCarousel = () => {

    const targetRef = useRef<HTMLDivElement | null>(null);
  
    const { scrollYProgress } = useScroll({
  
      target: targetRef,
    })
  
  
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  
    return (
  
      <section ref={targetRef} className="horizontal-scroll-container">
        <div className="horizontal-scroll-div">
          <motion.div style={{ x }} className="horizontal-scroll-motion-div">
            {ProjectData.map((data) => {
              return <PortfolioProject {...data} key={data.id} />;
            })}
          </motion.div>
        </div>
      </section>
    )
  }

export default HorizontalScrollCarousel