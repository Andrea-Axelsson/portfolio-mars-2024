import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <ul className="navbar__ul">
                <Link activeClass="active" smooth spy to="techstack">
                    <li className="navbar__li">
                        Techstack
                    </li>
                </Link>
                <Link activeClass="active" smooth spy to="about">
                    <li className="navbar__li">
                        About
                    </li>
                </Link>
                <Link activeClass="active" smooth spy to="projects">
                    <li className="navbar__li">
                        Projects
                    </li>
                </Link>
                <Link activeClass="active" smooth spy to="contact">
                    <li className="navbar__li">
                        Contact
                    </li>
                </Link>
            </ul>
        </nav>
    </>
    
  )
}

export default Navbar