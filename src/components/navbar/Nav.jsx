import "./nav.css";
import logo from "/logo.svg";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="wrapper">
        <div className="logo">
          <img
            onClick={() => window.location.replace("/")}
            src={logo}
            width={60}
          />
        </div>
        <div className="menu"></div>
      </div>
    </div>
  );
};

export default Nav;
