import Navbar from './components/Navbar'
import Techstack from './components/Techstack'
import Start from './components/Start'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'



const App = () => {

/* const portfolioProject = ProjectData.map(project => {
  return (
    <PortfolioProject
    key={project.id}
    id={project.id}
    projectTitle={project.projectTitle}
    projectImage={project.projectImage}
    tags={project.tags}
    bodyText={project.bodyText}
    website={project.website}
    github={project.github}
    />
  )
}) */


  return (
    <>
      <Navbar/>
      <Start/>
      <Techstack/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
    
  )
}

export default App