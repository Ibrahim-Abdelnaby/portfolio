// import logo image
import logo from "../../../public/images/Ibrahim-Abdelnaby-logo.svg";
function Logo() {
  return (
    <>
      <div className="logo w-11">
        <a href="#">
          <img src={logo} alt="" className="w-full" />
        </a>
      </div>
    </>
  );
}

export default Logo;
