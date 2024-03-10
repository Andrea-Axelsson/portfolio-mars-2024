import ProjectData from '../data/ProjectData'
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react";
import PortfolioProject from './PortfolioProject'

// Defines the HorizontalScrollCarousel component
const HorizontalScrollCarousel = () => {

    // Create a ref to track the section of the page we want to apply scroll effects to
    const targetRef = useRef<HTMLDivElement | null>(null);

    // useScroll hook to monitor the scroll progress within the targetRef element
    const { scrollYProgress } = useScroll({ target: targetRef})
  
    // Determine the device layout to adjust the horizontal scroll effect
    const isMobileVertical = window.innerWidth <= 600;
    const isPadVertical = window.innerWidth <= 810;
    const isPadHorizontal = window.innerWidth <= 1080;
    
    // Adjust the horizontal scroll distance based on the device size
    const x = useTransform(scrollYProgress, [0, 1], isMobileVertical ? ["44%", "44%"] : isPadVertical ? ["43%", "43%"] : isPadHorizontal ? ["40%", "40%"] :  ["0%", "-70%"]);

    // Renders the horizontal scrolling section with project data
    return (
      // Section that tracks the scrolling
      <section ref={targetRef} className="horizontal-scroll-container">
        <div className="horizontal-scroll-div">
          {/* Applies the motion effect to the div that will be scrolling horizontally */}
          <motion.div style={{ x }} className="horizontal-scroll-motion-div">
            {/* Maps through the ProjectData to render each project as a PortfolioProject component */}
            {ProjectData.map((data) => {
              return <PortfolioProject {...data} key={data.id} />
            })}
          </motion.div>
        </div>
      </section>
    )
  }

export default HorizontalScrollCarousel
