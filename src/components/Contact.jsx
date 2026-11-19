import { profile, contactText } from '../data/profile'
import { iconMap, MailIcon } from './Icons'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">
        İletişim
      </h2>
      <div className="contact">
        <p className="contact__text">{contactText}</p>
        <a className="contact__button" href={`mailto:${profile.email}`}>
          <MailIcon /> {profile.email}
        </a>
        <ul className="contact__links">
          {profile.links.map(({ label, href, icon }) => {
            const Icon = iconMap[icon]
            return (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon /> {label}
                </a>
              </li>
            )
          })}
        </ul>
        <p className="contact__location">{profile.location}</p>
      </div>
    </section>
  )
}
