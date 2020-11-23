import linkedin from ".././Components/Images/linkedin.png";
import github from ".././Components/Images/github.png";
import gitlab from ".././Components/Images/gitlab.png";

export default function Footer() {
  return (
    <footer className="nav-footer">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/devin-arnold-a7539a52/"
      >
        {" "}
        <img
          className="footer-icon"
          id="linkedin"
          src={linkedin}
          alt="LinkedIn Icon"
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/darnold001">
        <img
          className="footer-icon"
          id="github"
          src={github}
          alt="GitHub Icon"
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://gitlab.com/darnold001">
        <img
          className="footer-icon"
          id="gitlab"
          src={gitlab}
          alt="GitLab Icon"
        />
      </a>
    </footer>
  );
}
