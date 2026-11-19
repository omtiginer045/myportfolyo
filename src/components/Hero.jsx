import { profile } from '../data/profile'
import SocialLinks from './SocialLinks'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={profile.cvUrl} download>
            CV'yi İndir
          </a>
          <a className="btn btn--ghost" href="#contact">
            İletişime Geç
          </a>
        </div>
        <SocialLinks />
      </div>
    </section>
  )
}
