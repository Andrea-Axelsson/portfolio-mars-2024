import React from 'react'
import {Project} from '../components/Interface'

const PortfolioProject: React.FC<Project> = ({ id, projectTitle, projectImage, tags, bodyText, website, github }) => {

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
                            {tagElements}
                        </section>
                <p className="body-text body-text--white">
                {bodyText}
                </p>
                <section className="project__buttons">
                    <a className="button-tag" href={github}>
                            <article className="button-tag-info" >
                                <img className="button-tag-icon" src="/github.svg" alt="Github icon"/> 
                                <p className="body-text body-text--white">Code</p>
                            </article>
                    </a>
                        <a className="button-tag" href={website}>
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