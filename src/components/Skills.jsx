import { skills } from '../data/skills'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">
        Yetenekler
      </h2>
      <div className="skills__grid">
        {skills.map(({ category, items }) => (
          <div key={category} className="skills__card">
            <h3 className="skills__category">{category}</h3>
            <ul className="skills__tags">
              {items.map((item) => (
                <li key={item} className="skills__tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
