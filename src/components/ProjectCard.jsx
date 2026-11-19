import { githubUrl } from '../data/profile'
import { GithubIcon } from './Icons'
import './ProjectCard.css'

export default function ProjectCard({ title, context, description, tags, status, highlight, repo }) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__context">{context}</p>
      {(status || highlight) && (
        <p className="project-card__badges">
          {status && <span className="project-card__badge">{status}</span>}
          {highlight && (
            <span className="project-card__badge project-card__badge--highlight">{highlight}</span>
          )}
        </p>
      )}
      <p className="project-card__description">{description}</p>
      <ul className="project-card__tags">
        {tags.map((tag) => (
          <li key={tag} className="project-card__tag">
            {tag}
          </li>
        ))}
      </ul>
      {repo && (
        <a
          className="project-card__link"
          href={`${githubUrl}/${repo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon /> GitHub'da incele
        </a>
      )}
    </article>
  )
}
