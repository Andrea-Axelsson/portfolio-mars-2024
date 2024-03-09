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
    
    <section className="projects-container">
        <HorizontalScrollCarousel/>
    </section>
    </section>
  )
}

export default Projects