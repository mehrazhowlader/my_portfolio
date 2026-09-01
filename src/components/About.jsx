import { about, profile, links } from '../data/portfolio'
import Icon from './Icons'
import Reveal from './Reveal'
import './About.css'

export default function About({ onOpenLightbox }) {
  const handlePhotoClick = () => {
    if (profile.sidePhoto && onOpenLightbox) {
      onOpenLightbox({
        src: profile.sidePhoto,
        alt: `${profile.name} - Profile Portrait`,
        caption: `${profile.name} — Student Developer @ UIU`,
        badge: 'About Me'
      })
    }
  }

  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <Reveal className="about__visual">
          {profile.sidePhoto && (
            <div
              className="about__photo-card"
              onClick={handlePhotoClick}
              title="Click to view full portrait"
            >
              <div className="about__photo-wrapper">
                <img
                  src={profile.sidePhoto}
                  alt={profile.name}
                  className="about__photo"
                />
                <div className="about__photo-badge">
                  <i className="dot" />
                  <span>UIU CSE &apos;27</span>
                </div>
              </div>
            </div>
          )}

          <div className="about__frame">
            <span className="about__label">Currently</span>
            <p className="about__quote">
              Studying software engineering at UIU and building full-stack projects that turn
              real-world processes into working systems.
            </p>
            <ul className="about__meta">
              <li>
                <Icon name="cap" size={18} />
                CSE, United International University
              </li>
              <li>
                <Icon name="pin" size={18} />
                {profile.location}
              </li>
              <li>
                <Icon name="briefcase" size={18} />
                Undergraduate Assistant, DBMS Lab
              </li>
            </ul>
            <div className="about__socials">
              <a href={links.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                <Icon name="github" size={18} />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" size={18} />
              </a>
            </div>
          </div>
          <span className="about__accent" aria-hidden="true" />
        </Reveal>

        <Reveal className="about__copy" delay={100}>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="section-title">{about.title}</h2>
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 32)} className="about__para">
              {text}
            </p>
          ))}
          <ul className="about__tags">
            {about.highlights.map((item) => (
              <li key={item} className="tag tag--green">
                {item}
              </li>
            ))}
          </ul>
          <a className="btn btn--primary about__cta" href="#contact">
            Let&apos;s Talk
            <Icon name="arrow" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
