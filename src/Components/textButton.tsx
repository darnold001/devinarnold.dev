import { NavLink } from "react-router-dom";

export default function TextButton({
  text,
  link,
}: {
  text: string;
  link?: string;
}) {
  function linkSelector(text: string, link?: string) {
    if (link)
      return (
        <NavLink strict exact to={link} key={link}>
          {text}
        </NavLink>
      );
    return text;
  }
  return <button>{linkSelector(text, link)}</button>;
}
