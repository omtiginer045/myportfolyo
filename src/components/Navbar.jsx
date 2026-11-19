import { useState } from 'react'
import { profile, sections } from '../data/profile'
import { MenuIcon } from './Icons'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top" onClick={() => setOpen(false)}>
          {profile.name}
        </a>
        <button
          type="button"
          className="navbar__toggle"
          aria-label="Menüyü aç/kapat"
          aria-controls="nav-links"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon />
        </button>
        <nav id="nav-links" className={`navbar__links${open ? ' is-open' : ''}`}>
          <ul>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
