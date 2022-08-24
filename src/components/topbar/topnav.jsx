import Rocket from "../images/rocket.gif";
import "./topnav.css";
import { NavLink } from "react-router-dom";
export default function Topnav() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About me", path: "/aboutme" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <div className="topnavContainer">
      <div>
        <img src={Rocket} alt="this slowpoke moves" width="60" />
      </div>
      <nav>
        {links.map((link, index) => (
          <NavLink key={index} to={link.path} class="topnavLinks">
            <li>{link.name}</li>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
