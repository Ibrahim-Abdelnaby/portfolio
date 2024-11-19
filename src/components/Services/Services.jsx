import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./services.css";
import {
  faLaptopCode,
  faPaintbrush,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <>
      <section id="services">
        <div className="container-all">
          <h2 className="title">What Services that I Provide?</h2>

          {/* Services Card */}
          <div className="services">
            <div className="service-card">
              <h3>
                <FontAwesomeIcon icon={faPaintbrush} className="mr-2" />
                Branding Identity
              </h3>
              <p className="paragraph">
                I craft cohesive and memorable brand identities that resonate
                with your audience. From logos to color schemes, I ensure your
                brand stands out and tells a compelling story.
              </p>
            </div>
            <div className="service-card active">
              <h3>
                <FontAwesomeIcon icon={faPalette} className="mr-2" />
                UI/UX Design
              </h3>
              <p className="paragraph">
                I design user-centered interfaces that are intuitive and
                visually engaging. My focus is on enhancing user experience
                through seamless navigation and creative layouts.
              </p>
            </div>
            <div className="service-card">
              <h3>
                <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                Frontend Development
              </h3>
              <p className="paragraph">
                I bring designs to life with responsive, optimized, and
                accessible code. Using modern technologies, I ensure your
                website is fast, functional, and visually stunning across all
                devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
