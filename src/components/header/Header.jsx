// Import CSS File
import "./header.css";
// import Logo Component
import Logo from "../logo/Logo";
// import Navbar Component
import Navbar from "../navbar/Navbar";
import Social from "../social/Social";
function Header() {
  return (
    <>
      <header>
        {/* container */}
        <div className="box">
          {/* wrapper */}
          <div className="wrapper">
            {/* logo */}
            <Logo />
            {/* navbar */}
            <Navbar />
            {/* social media */}
            <Social />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
