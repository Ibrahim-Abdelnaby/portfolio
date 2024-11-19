// Import CSS File
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero.css";
import { faDownload, faVideo } from "@fortawesome/free-solid-svg-icons";
import Video from "../Video/Video";
export const Hero = () => {
  return (
    <>
      <section id="hero" className="h-screen">
        <div className="container-all">
          {/* Hero Title */}
          <div className="hero-content opacity-0 translate-y-12 animate-hero-content">
            <p className="subtitle">
              👋 Hi, I&apos;m <em>Ibrahim Abdelnaby</em>
            </p>
            <h1>A UI/UX Designer & Junior React Frontend Developer</h1>

            {/* Call To Actions */}
            <div className="ctas">
              <button className="primary-btn">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download my CV
              </button>
              <button className="secondary-btn">
                <FontAwesomeIcon icon={faVideo} className="mr-2" />
                Book a Meeting
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Video */}
      <Video />
    </>
  );
};
