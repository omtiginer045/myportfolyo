import { profile } from '../data/profile'
import SocialLinks from './SocialLinks'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
