// import CSS file
import "./hero.css";
// import header component
import Header from "../header/Header";
// import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faDownload } from "@fortawesome/free-solid-svg-icons";
// import floating text
import floatImg from "../../../public/images/floating-text.png";

function Hero() {
  return (
    <>
      <section id="hero">
        {/* header */}
        <Header />
        <div className="box">
          {/* hero content */}
          <div className="hero-text">
            <h5>👋🏻 Hi, I&lsquo;m Ibrahim Abdelnaby</h5>
            <h1 className="neue">
              A UI/UX Designer & Junior React Frontend Developer
            </h1>
            <div className="hero-btns">
              <button className="primary-btn">
                Download my CV{" "}
                <FontAwesomeIcon icon={faDownload} className="ml-2" />
              </button>
              <button className="secondary-btn">
                My work
                <FontAwesomeIcon icon={faAngleRight} className="fa-sm ml-3" />
              </button>
            </div>
          </div>
          {/* video */}
          <div className="hero-video">
            <div className="wrapper">
              <div className="float-text">
                <img src={floatImg} alt="See what's inside" />
              </div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1a2G-pGByXE?si=a2UcbDJQYX8ChpoS&amp;controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
