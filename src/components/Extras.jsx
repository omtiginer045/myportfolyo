import { extras } from '../data/extras'
import './Extras.css'

const groups = [
  { title: 'Sertifikalar', items: extras.certificates, detail: 'issuer' },
  { title: 'Topluluk', items: extras.communities, detail: 'role' },
  { title: 'Diller', items: extras.languages, detail: 'level' },
]

export default function Extras() {
  return (
    <section id="extras" className="section" aria-labelledby="extras-title">
      <h2 id="extras-title" className="section-title">
        Sertifikalar, Topluluk ve Diller
      </h2>
      <div className="extras__grid">
        {groups.map(({ title, items, detail }) => (
          <article key={title} className="extras__card">
            <h3 className="extras__title">{title}</h3>
            <ul className="extras__list">
              {items.map((item) => (
                <li key={item.name} className="extras__item">
                  <span className="extras__name">{item.name}</span>
                  <span className="extras__detail">{item[detail]}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
