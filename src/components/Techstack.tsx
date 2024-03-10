
// Imports the custom hook scrollAnimation from the relative path "./ScrollAnimation"
import scrollAnimation from "./ScrollAnimation"

// Defines the Techstack component
const Techstack = () => {
  // Calls the scrollAnimation hook to get a ref object.
  // This ref should be attached to the element we want to animate on scroll.
  const ref = scrollAnimation()

  return (
    <section className="techstack" id="techstack">
      <h1 className="header header--light">Techstack</h1>
      <section className="techstack__tag-group" ref={ref}>
      
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/html.svg" alt="Html logo"/> 
          <p className="body-text body-text--white">Html</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/css.svg" alt="Css logo"/> 
          <p className="body-text body-text--white">Css</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/javascript.svg" alt="Javascript logo"/> 
          <p className="body-text body-text--white">Javascript</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/typescript.svg" alt="Typescript logo"/> 
          <p className="body-text body-text--white">Typescript</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/api.png" alt="API logo"/> 
          <p className="body-text body-text--white">Rest API</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/react.svg" alt="React logo"/> 
          <p className="body-text body-text--white">React</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="sql.png" alt="Firebase logo"/> 
          <p className="body-text body-text--white">Databases</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/figma.svg" alt="Figma logo"/> 
          <p className="body-text body-text--white">Figma</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/creative-cloud.svg" alt="Creative cloud logo"/> 
          <p className="body-text body-text--white">Creative Cloud</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/git.svg" alt="git logo"/> 
          <p className="body-text body-text--white">Git</p>
        </article>
      </article>

      </section>
    </section>
  )
}

export default Techstack