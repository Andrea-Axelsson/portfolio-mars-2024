import {useRef, useEffect} from "react"

const About = () => {

  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            } else {
              entry.target.classList.remove('in-view');
            }
            console.log('entryyy', entry)
            console.log('Target', entry.target);
            console.log('Is intersecting', entry.isIntersecting);
          });
        },
      );

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  return (
    <section id="about">
    <h2 className="header header--dark about__header--grid">About me</h2>
    <section className="about" ref={ref}>
        
        <h2 className="about__sub-header">Front end developer in Gothenburg</h2>
        <p className="body-text about__body-text-grid body-text--black">Lorem ipsum dolor sit amet consectetur. Metus turpis pellentesque volutpat odio aliquam. Tortor ultrices facilisi ac in scelerisque. Tortor elit tincidunt lacus ultrices dictumst. Cursus odio euismod volutpat quam fusce nisi enim. Pretium nunc nullam nibh sit quisque pellentesque. 
        Placerat erat pellentesque lacus sollicitudin enim potenti gravida aliquet. Amet amet ut id  
        <br></br>
        <br></br>
        Metus turpis pellentesque volutpat odio aliquam. Tortor ultrices facilisi ac in scelerisque. Tortor elit tincidunt lacus ultrices dictumst. Cursus odio euismod volutpat quam fusce nisi enim. Pretium nunc nullam nibh sit quisque pellentesque. 
        Placerat erat pellentesque lacus sollicitudin enim potenti gravida aliquet. Amet amet ut id
        </p>
        <img src="/andrea-2024.jpeg" alt="A picture of Andrea" className="about__image"/>
    </section>
    </section>
    
  )
}

export default About
