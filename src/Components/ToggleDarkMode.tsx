import { useThemeContext } from "./themeContext";
import Toggle from "react-toggle";
export const ToggleDarkMode = () => {
  const { dark, toggleDark } = useThemeContext();
  return (
    <div className="darkmode-toggle">
      <label>Light</label>
      <Toggle defaultChecked={dark} icons={false} onChange={toggleDark} />
      <label>Dark</label>
    </div>
  );
};
