// Import the scrollAnimation hook for animating elements on scroll
import scrollAnimation from "./ScrollAnimation";

const About = () => {
  // Calls the scrollAnimation hook and assigns its return value to ref
  // This ref will be used to apply animations to the component on scroll events
  const ref = scrollAnimation();

  // The component renders an about section with personal and professional information
  return (
    <section id="about">
      <h2 className="header header--dark about__header--grid">About me</h2>
      <section className="about" ref={ref}>
        <h2 className="about__sub-header">Frontend developer in Gothenburg</h2>
        <p className="body-text about__body-text-grid body-text--black">
          Hello! My name is Andrea, studying to be a Front end developer and
          graduating in 2025.
          <br></br>
          <br></br>
          With my background in graphic design I find great joy in combining
          aesthetics with function, and have a good eye for detail.
          <br></br>
          <br></br>I call myself an 'online course junkie', because I love to
          constantly develop my skills and always have an online course that I
          immerse myself in when I have some spare time.
          <br></br>
          <br></br>
          When I'm not coding you can find me snuggling with my dog, enjoying a
          hike in nature or watching a favorite tv-show.
        </p>
        <img
          src="/andrea-dog.jpg"
          alt="A picture of Andrea"
          className="about__image"
        />
      </section>
    </section>
  );
};

export default About;
