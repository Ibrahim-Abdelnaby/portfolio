import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./portfolio.css";
import brandingImg1 from "../../../public/branding-1.webp";
import brandingImg2 from "../../../public/branding-2.webp";
import {
  faArrowUp,
  faLaptopCode,
  faPaintbrush,
  faPalette,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Portfolio = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section id="portfolio">
        <div className="container-all">
          <h2 className="title" style={{ margin: 20 }}>
            Explore My Projects
          </h2>
          <p className="text-center mb-24 paragraph">
            Each project reflects my passion for design and development
          </p>
          {/* Content Wrapper */}
          <div className="wrapper flex items-start gap-5">
            {/* Taps */}
            <div className="tabs-container">
              {/* Tap-1 */}
              <div
                className={toggleState === 1 ? "tap active-tap" : "tap"}
                onClick={() => toggleTab(1)}
              >
                <h3>
                  <FontAwesomeIcon icon={faPaintbrush} className="mr-2" />
                  Branding Identity
                </h3>
              </div>

              {/* Tap-2 */}
              <div
                className={toggleState === 2 ? "tap active-tap" : "tap"}
                onClick={() => toggleTab(2)}
              >
                <h3>
                  <FontAwesomeIcon icon={faPalette} className="mr-2" />
                  UI/UX Design
                </h3>
              </div>

              {/* Tap-3 */}
              <div
                className={toggleState === 3 ? "tap active-tap" : "tap"}
                onClick={() => toggleTab(3)}
              >
                <h3>
                  <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                  Frontend Development
                </h3>
              </div>
            </div>

            {/* Projects */}
            <div className="projects-container">
              {/* Branding Identity Projects */}
              <div className="projects-wrapper branding-projects">
                {/* Project-1 */}
                <div className="project">
                  <div className="project-image">
                    <img src={brandingImg1} alt="" />
                  </div>
                  <h4>Luxe Realty Branding</h4>
                  <div className="stars flex items-center gap-2 mb-5">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <small className="paragraph">(5/5)</small>
                  </div>
                  <p className="paragraph">
                    A premium branding package for Luxe Realty, featuring a bold
                    logo, refined typography, and a modern color palette to
                    represent elegance and trust in the real estate market.
                  </p>
                  <a href="#" className="tertiary-btn">
                    View on Behance{" "}
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="ml-1 rotate-45"
                    />
                  </a>
                </div>

                {/* Project-2 */}
                <div className="project">
                  <div className="project-image">
                    <img src={brandingImg2} alt="" />
                  </div>
                  <h4>Luxe Dental Branding</h4>
                  <div className="stars flex items-center gap-2 mb-5">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                    <small className="paragraph">
                      (4.<span className="text-sm">8</span>/5)
                    </small>
                  </div>
                  <p className="paragraph">
                    A sophisticated brand identity for Luxe Dental,
                    incorporating modern design principles to evoke trust and
                    professionalism. The project includes a logo, color palette,
                    typography, and stationery designs.
                  </p>
                  <a href="#" className="tertiary-btn">
                    View on Behance{" "}
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="ml-1 rotate-45"
                    />
                  </a>
                </div>
              </div>

              {/* UI/UX Design Projects */}
              <div className="projects-wrapper ui-projects">
                {/* Project-1 */}
                <div className="project">
                  <div className="project-image">
                    <img src={brandingImg1} alt="" />
                  </div>
                  <h4>Luxe Realty Branding</h4>
                  <div className="stars flex items-center gap-2 mb-5">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <small className="paragraph">(5/5)</small>
                  </div>
                  <p className="paragraph">
                    A premium branding package for Luxe Realty, featuring a bold
                    logo, refined typography, and a modern color palette to
                    represent elegance and trust in the real estate market.
                  </p>
                  <a href="#" className="tertiary-btn">
                    View on Behance{" "}
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="ml-1 rotate-45"
                    />
                  </a>
                </div>

                {/* Project-2 */}
                <div className="project">
                  <div className="project-image">
                    <img src={brandingImg2} alt="" />
                  </div>
                  <h4>Luxe Dental Branding</h4>
                  <div className="stars flex items-center gap-2 mb-5">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                    <small className="paragraph">
                      (4.<span className="text-sm">8</span>/5)
                    </small>
                  </div>
                  <p className="paragraph">
                    A sophisticated brand identity for Luxe Dental,
                    incorporating modern design principles to evoke trust and
                    professionalism. The project includes a logo, color palette,
                    typography, and stationery designs.
                  </p>
                  <a href="#" className="tertiary-btn">
                    View on Behance{" "}
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="ml-1 rotate-45"
                    />
                  </a>
                </div>
              </div>

              {/* UCoding Projects */}
              <div className="projects-wrapper coding-projects">
                {/* Project-1 */}
                <div className="project">
                  <div className="project-image">
                    <img src={brandingImg1} alt="" />
                  </div>
                  <h4>Luxe Realty Branding</h4>
                  <div className="stars flex items-center gap-2 mb-5">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <small className="paragraph">(5/5)</small>
                  </div>
                  <p className="paragraph">
                    A premium branding package for Luxe Realty, featuring a bold
                    logo, refined typography, and a modern color palette to
                    represent elegance and trust in the real estate market.
                  </p>
                  <a href="#" className="tertiary-btn">
                    View on Behance{" "}
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="ml-1 rotate-45"
                    />
                  </a>
                </div>

                {/* Project-2 */}
                <div className="project">
                  <div className="project-image">
                    <img src={brandingImg2} alt="" />
                  </div>
                  <h4>Luxe Dental Branding</h4>
                  <div className="stars flex items-center gap-2 mb-5">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                    <small className="paragraph">
                      (4.<span className="text-sm">8</span>/5)
                    </small>
                  </div>
                  <p className="paragraph">
                    A sophisticated brand identity for Luxe Dental,
                    incorporating modern design principles to evoke trust and
                    professionalism. The project includes a logo, color palette,
                    typography, and stationery designs.
                  </p>
                  <a href="#" className="tertiary-btn">
                    View on Behance{" "}
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="ml-1 rotate-45"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
