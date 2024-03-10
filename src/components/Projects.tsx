
// Imports the HorizontalScrollCarousel component, which is responsible for displaying the projects in a horizontally scrolling format.
import HorizontalScrollCarousel from './HorizontalScrollCarousel'


const Projects = () => {
  return (

    <section id="projects" className="projects-background">
    
    <article className='projects__header-arrow'>
      <h1 className="header header--light">Projects</h1>
      <div className='scroll-arrow'>
        <p className='body-text body-text--white'>scroll</p>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
      
    </article>
    {/* Section container for the HorizontalScrollCarousel component */}
    <section className="projects-container">
        <HorizontalScrollCarousel/> {/* Renders the horizontal scroll carousel with project details */}
    </section>
    </section>
  )
}

export default Projects