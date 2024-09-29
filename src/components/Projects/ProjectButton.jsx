
import "./Projectbutton.css"

// eslint-disable-next-line react/prop-types
const ProjectButton = ({ projectLink }) => {
  return (
    projectLink && (
      <a className="pButton" href={projectLink} target="_blank" rel="noopener noreferrer">
        <button className="Pbutton">
          View Project
        </button>
      </a>
    )
  );
};

export default ProjectButton;
