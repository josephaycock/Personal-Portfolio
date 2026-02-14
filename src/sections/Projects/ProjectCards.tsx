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
            <a href={github} target="_blank" rel="noopener norefrrer">
                Github
            </a>
        )}
    </div>
  )
}

export default ProjectCards
