
import {useRef, useEffect} from "react"

const Techstack = () => {


  const ref = useRef(null)

  useEffect(() => {
    if (ref.current){
      const observer = new IntersectionObserver((entries)=> {
        entries.forEach((entry) => {
          if (entry.isIntersecting){
            entry.target.classList.add('in-view-techstack')
          }else{
            entry.target.classList.remove('in-view-techstack')
          }
        })
      })

      observer.observe(ref.current)
      
      return () => {
        observer.disconnect()
      }

    }
  }, [ref])

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
          <img className="button-tag-icon" src="/html.svg" alt="Html logo"/> 
          <p className="body-text body-text--white">Html</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/html.svg" alt="Html logo"/> 
          <p className="body-text body-text--white">Html</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/html.svg" alt="Html logo"/> 
          <p className="body-text body-text--white">Html</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/html.svg" alt="Html logo"/> 
          <p className="body-text body-text--white">Html</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/html.svg" alt="Html logo"/> 
          <p className="body-text body-text--white">Html</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/html.svg" alt="Html logo"/> 
          <p className="body-text body-text--white">Html</p>
        </article>
      </article>
      <article className="button-tag">
        <article className="button-tag-info">
          <img className="button-tag-icon" src="/html.svg" alt="Html logo"/> 
          <p className="body-text body-text--white">Html</p>
        </article>
      </article>

      </section>

      
    </section>
  )
}

export default Techstack