import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">
        Projeler
      </h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
