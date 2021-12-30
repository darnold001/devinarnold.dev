import { LOGO_URL_Black, LOGO_URL_White } from "./constants";
import Navigation from "./navigation";
import { useThemeContext } from "./themeContext";

const NavHeader = () => {
  const { dark } = useThemeContext();
  return (
    <div className="header-wrapper">
      <div className="header-logo">
        <img
          src={dark ? LOGO_URL_White : LOGO_URL_Black}
          alt="Devin Arnold Logo"
        />
      </div>
      <Navigation />
    </div>
  );
};

export default NavHeader;
