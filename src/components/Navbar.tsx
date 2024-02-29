const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <ul className="navbar__ul">
                <li className="navbar__li">
                    Techstack
                </li>
                <li className="navbar__li">
                    About
                </li>
                <li className="navbar__li">
                    Projects
                </li>
                <li className="navbar__li">
                    Contact
                </li>
            </ul>

            {/* <section className="navbar__social-links">
                <a className="navbar__link" href="/html/">
                    <img src="./public/github.svg" alt="Github Logo"/>
                </a>
                <a className="navbar__link" href="/html/">
                    <img src="./public/linkedin.svg" alt="Linkedin Logo"/>
                </a>
                
            </section> */}
        </nav>
    </>
    
  )
}

export default Navbar