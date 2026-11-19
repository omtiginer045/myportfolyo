import { profile } from '../data/profile'
import { iconMap, MailIcon } from './Icons'
import './SocialLinks.css'

export default function SocialLinks() {
  return (
    <ul className="social-links">
      {profile.links.map(({ label, href, icon }) => {
        const Icon = iconMap[icon]
        return (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          </li>
        )
      })}
      <li>
        <a href={`mailto:${profile.email}`} aria-label="E-posta">
          <MailIcon />
        </a>
      </li>
    </ul>
  )
}
