import { ProjectProps } from "./Interface"


const Projects = (props:ProjectProps) => {
  return (

    <section id="projects" className="projects-background">
      <h1 className="header header--light">Projects</h1>
    <section className="projects-container">
        {props.portfolioProject}
    </section>
    </section>
  )
}

export default Projects