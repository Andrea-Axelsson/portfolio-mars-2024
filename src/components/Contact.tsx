// Import the scrollAnimation custom hook for adding scroll animations to components
import scrollAnimation from "./ScrollAnimation"

const Contact = () => {

  
  // Initialize the scroll animation for this component
  // The ref returned by scrollAnimation will be used to apply animations on scroll
  const ref = scrollAnimation()

// Renders the contact section of the website
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