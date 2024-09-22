// Import CSS file
import "./social.css";
// Import font awesome icons
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social() {
  return (
    <>
      <div className="social">
        {/* Github */}
        <a href="#">
          <FontAwesomeIcon icon={faGithub} className="fa-fw fa-lg" />
        </a>
        {/* LinkedIn */}
        <a href="#">
          <FontAwesomeIcon icon={faLinkedinIn} className="fa-fw fa-lg" />
        </a>
        {/* Instagram */}
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} className="fa-fw fa-lg" />
        </a>
      </div>
    </>
  );
}

export default Social;
