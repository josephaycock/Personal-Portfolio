import "./Projects.css"
import ProjectCards from "./ProjectCards"

const projects = [
  {
  title: "Place holder",
  description: "placeholder paragraph",
  github: "###",
  },
];

function Projects() {
  return (
    <section className="projects">
      <div className="projects-grid">
        {projects.map((project, index) =>(
          <ProjectCards key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
