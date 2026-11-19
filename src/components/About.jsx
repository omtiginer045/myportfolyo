import { about } from '../data/profile'
import photo from '../assets/ben.jpg'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">
        Hakkımda
      </h2>
      <div className="about">
        <img className="about__photo" src={photo} alt="Ömer Coşkun" width={682} height={1186} />
        <div className="about__text">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
