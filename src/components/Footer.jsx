import { nav, links, profile } from '../data/portfolio'
import Icon from './Icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="brand" href="#home">
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__text">{profile.shortName}</span>
          </a>
          <p className="footer__blurb">
            {profile.role} · CSE undergraduate at United International University, building
            full-stack and backend projects.
          </p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <h3>Sections</h3>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <h3>Elsewhere</h3>
          <a href={links.github} target="_blank" rel="noreferrer noopener">
            <Icon name="github" size={17} />
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer noopener">
            <Icon name="linkedin" size={17} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}
