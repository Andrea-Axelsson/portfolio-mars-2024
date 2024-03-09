import ProjectData from '../data/ProjectData'
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react";
import PortfolioProject from './PortfolioProject'

const HorizontalScrollCarousel = () => {

    const targetRef = useRef<HTMLDivElement | null>(null);

    /* This code is asking the computer to watch a specific part of a webpage (the part targetRef points to) and tell us how far down that part we've scrolled, from the top to the bottom, using a simple number from 0 to 1. This information is what we're calling scrollYProgress. */
  
    /* It basically checks how much we've scrolled on the targetRef element. */
    const { scrollYProgress } = useScroll({ target: targetRef})
  
  
    const isMobileVertical = window.innerWidth <= 600;
    const isPadVertical = window.innerWidth <= 810;
    const isPadHorizontal = window.innerWidth <= 1080;
    const x = useTransform(scrollYProgress, [0, 1], isMobileVertical ? ["44%", "44%"] : isPadVertical? ["43%", "43%"] : isPadHorizontal ? ["40%", "40%"] :  ["0%", "-70%"]);

  
    return (
      <section ref={targetRef} className="horizontal-scroll-container">
        <div className="horizontal-scroll-div">
          <motion.div style={{ x }} className="horizontal-scroll-motion-div">
            {ProjectData.map((data) => {
              return <PortfolioProject {...data} key={data.id} />
            })}
          </motion.div>
        </div>
      </section>
    )
  }

export default HorizontalScrollCarousel