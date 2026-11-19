import { experience } from '../data/experience'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <h2 id="experience-title" className="section-title">
        Deneyim ve Eğitim
      </h2>
      <ol className="timeline">
        {experience.map(({ type, title, org, period, location, bullets }) => (
          <li key={`${org}-${title}`} className="timeline__item">
            <span className="timeline__badge">{type}</span>
            <h3 className="timeline__title">{title}</h3>
            <p className="timeline__org">{org}</p>
            <p className="timeline__meta">{location ? `${period} · ${location}` : period}</p>
            {bullets && (
              <ul className="timeline__bullets">
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
