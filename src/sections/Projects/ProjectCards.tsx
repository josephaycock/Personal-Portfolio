import "./ProjectCards.css"

type ProjectCardProps = {
    title:  string;
    description: string;
    github?: string;
};

function ProjectCards({title, description, github}: ProjectCardProps) {
  return (
    <div className="project-cards">
        <h3>
            {title}
        </h3>
        <p>
            {description}
        </p>

        {github && (
            <a href={github} className="project-link" target="_blank" rel="noopener noreferrer">
                Github
            </a>
        )}
    </div>
  )
}

export default ProjectCards
