import { useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import { ROUTES } from "./constants";
import { useThemeContext } from "./themeContext";
function Navigation() {
  const { dark } = useThemeContext();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const links = ROUTES.map(({ to, label }) => {
    return (
      <NavLink strict exact to={to} key={to}>
        {label}
      </NavLink>
    );
  });

  return (
    <div className="nav-menu">
      <div className="nav-menu-hamburger">
        <HamburgerMenu
          isOpen={hamburgerOpen}
          menuClicked={() => setHamburgerOpen(!hamburgerOpen)}
          width={23}
          height={20}
          strokeWidth={2}
          rotate={0}
          color={dark ? "white" : "black"}
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
      <nav
        className="navigation-wrapper"
        id={hamburgerOpen ? "active" : "inactive"}
      >
        {links}
      </nav>
    </div>
  );
}

export default Navigation;
