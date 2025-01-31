import { PositivusLogo } from "../../assets";
import "./nav.css";

function NavBar() {
  const links = [
    { label: "About Us", src: "#" },
    { label: "Services", src: "#" },
    { label: "Use Cases", src: "#" },
    { label: "Pricing", src: "#" },
    { label: "Blog", src: "#" },
  ];

  return (
    <div className="nav-root">
      <div className="main-logo">
        <img src={PositivusLogo} className="main-logo-image" />
      </div>
      <div className="navbar-links">
        {links?.map((link) => (
          <a href={link?.src} className="navbar-link">
            {link?.label}
          </a>
        ))}
        <div className="req-quote">Request A Quote</div>
      </div>
    </div>
  );
}

export default NavBar;
