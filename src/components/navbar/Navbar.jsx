// import CSS file
import "./navbar.css";
function Navbar() {
  return (
    <>
      <nav id="navbar">
        <ul className="nav-list">
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
