import {useRef, useEffect} from "react"

const Contact = () => {

  const ref = useRef(null)

  useEffect(() => {

    if (ref.current){
      const observer = new IntersectionObserver ((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting){
            entry.target.classList.add('in-view')
          }else{
            entry.target.classList.remove('in-view')
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
    <section id="contact" className="contact">
        <h2 className="header header--dark about__header--grid">Contact</h2>
        <section className="contact-info" ref={ref}>
                <h3 className="contact__header">Email</h3>
                <p className="body-text body-text--black">hello@andreaaxelsson.com</p>
                <h3 className="contact__header">Phone</h3>
                <p className="body-text body-text--black">+46 705 10 87 58</p>
        </section>
    </section>
  )
}

export default Contact