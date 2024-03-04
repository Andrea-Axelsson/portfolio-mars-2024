import {ProjectProps} from '../components/Interface'


const Projects = ({portfolioProject}: ProjectProps) => {
  return (

    <section className="projects-background">
    <h1 className="header header--light">Projects</h1>
    <section className="projects-container">
        {portfolioProject}
    </section>
    </section>
  )
}

export default Projects