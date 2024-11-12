// Import Logo Image
import logo from "../../../public/ibrahim_logo.svg";
// Import CSS File
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <header id="header" className="container mx-auto px-4">
        <div className="flex justify-between py-8">
          {/* Logo */}
          <div className="w-28">
            <a href="#">
              <img
                src={logo}
                alt="Ibrahim Abdelnaby's Logo"
                className="w-full"
              />
            </a>
          </div>
          {/* Links */}
          <nav>
            <ul className="flex gap-5">
              <li>
                <a href="#">About</a>
              </li>
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
          {/* CTA */}
          <button className="primary-btn">Book a Meeting</button>
        </div>
      </header>
    </>
  );
};
