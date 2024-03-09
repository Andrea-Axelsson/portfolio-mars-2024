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
        <p className="body-text about__body-text-grid body-text--black">Hi, glad you found my little corner of the internet!

My name is Andrea, studying to be a Front end developer and graduating in 2025.

I have always been eager to learn new things and call myself an 'online course junkie.' I love to constantly develop my skills and always have an online course that I immerse myself in when I have some spare time. That's one of the things I love most about programming - there's always something new to learn and explore.

When I'm not coding or exploring new web technologies, you can find me engrossed in some Ricky Gervais series, snuggling with the dog, or enjoying a winter bath, provided there is a sauna nearby.
        </p>
        <img src="/andrea-dog.jpg" alt="A picture of Andrea" className="about__image"/>
    </section>
    </section>
    
  )
}

export default About
