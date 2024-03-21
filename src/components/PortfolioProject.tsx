// Imports the React library for creating the component
import React from 'react'
// Imports the Project interface for TypeScript type checking
import {Project} from '../components/Interface'

// Defines the PortfolioProject component with props conforming to the Project interface
const PortfolioProject: React.FC<Project> = ({projectTitle, projectImage, tags, bodyText, website, github }) => {

    // Creates tag elements from the tags object. Each tag is represented by an image.
    const tagElements = Object.values(tags).map((tag, index)=> (
        <img className="project__skill-logo" src={tag} key={index} alt="Tech logo"/> 
    ))

    return (
        <>
        <section className="project">
                <h2 className="project__header">{projectTitle}</h2>
                <article >
                <img className="project__image" src={projectImage} alt="Project Image"/> 
                </article>
                        <section className="project__skill-tag-group">
                            {tagElements} {/* Renders the tag images */}
                        </section>
                <p className="body-text body-text--white project-text">
                {bodyText}
                </p>
                <section className="project__buttons">
                    <a className="button-tag" href={github} target="_blank">
                            <article className="button-tag-info" >
                                <img className="button-tag-icon" src="/github.svg" alt="Github icon"/> 
                                <p className="body-text body-text--white">Code</p>
                            </article>
                    </a>
                        <a className="button-tag" href={website} target="_blank">
                            <article className="button-tag-info">
                                <img className="button-tag-icon" src="/link.png" alt="Link icon"/> 
                                <p className="body-text body-text--white">Live</p>
                            </article>
                        </a>
                </section>

            </section>
        </>
  )
}

export default PortfolioProject