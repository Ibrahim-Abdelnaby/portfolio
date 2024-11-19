// Import Logo Image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../public/ibrahim_logo.svg";
// Import CSS File
import "./navbar.css";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
export const Navbar = () => {
  return (
    <>
      <header id="header" className="absolute w-full">
        <div className="container-all">
          <div className="wrapper">
            {/* Logo */}
            <div className="w-28">
              <a href="#">
                <img src={logo} alt="Ibrahim Abdelnaby's Logo" />
              </a>
            </div>

            {/* Links */}
            <nav>
              <ul className="flex gap-8">
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>

            {/* Social Links */}
            <div className="social">
              <a href="#">
                <FontAwesomeIcon icon={faGithub} className="fa-lg" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} className="fa-lg" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="fa-lg" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
