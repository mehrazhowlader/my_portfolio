import { useState } from 'react'
import { profile, links } from '../data/portfolio'
import Icon from './Icons'
import './Hero.css'

const facts = [
  'CSE @ United International University',
  'Class of 2027',
  'Undergraduate Assistant — DBMS Lab',
]

export default function Hero({ onOpenLightbox }) {
  // No photo configured (or one that fails to load) falls back to the initials mark.
  const [photoOk, setPhotoOk] = useState(true)
  const showPhoto = Boolean(profile.photo) && photoOk

  const handlePortraitClick = () => {
    if (showPhoto && onOpenLightbox) {
      onOpenLightbox({
        src: profile.photo,
        alt: `${profile.name} - Profile Photo`,
        caption: `${profile.name} — ${profile.role}`,
        badge: 'Profile'
      })
    }
  }

  const handleCoverClick = () => {
    if (profile.coverPhoto && onOpenLightbox) {
      onOpenLightbox({
        src: profile.coverPhoto,
        alt: 'Cover Image',
        caption: 'Developer Workspace & Cover Banner',
        badge: 'Cover'
      })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        {profile.coverPhoto && (
          <div className="hero__cover-img-wrap" onClick={handleCoverClick} title="Click to view cover photo">
            <img src={profile.coverPhoto} alt="Hero Cover Backdrop" className="hero__cover-img" />
            <div className="hero__cover-overlay" />
          </div>
        )}
        <span className="hero__glow hero__glow--a" />
        <span className="hero__glow hero__glow--b" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__badge">
            <i className="dot" aria-hidden="true" />
            {profile.availability}
          </span>

          <h1 className="hero__title">
            {profile.headline.map((line, i) => (
              <span key={line}>
                {i === profile.headline.length - 1 ? (
                  <em>{line}</em>
                ) : (
                  line
                )}
                <br />
              </span>
            ))}
          </h1>

          <p className="hero__text">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View My Work
              <Icon name="arrow" />
            </a>
            <a
              className="btn btn--ghost"
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name="github" size={17} />
              GitHub Profile
            </a>
          </div>

          <ul className="hero__facts">
            {facts.map((fact) => (
              <li key={fact}>
                <Icon name="check" size={16} />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__portrait">
          <div
            className={`portrait ${showPhoto ? 'portrait--clickable' : ''}`}
            onClick={handlePortraitClick}
            title={showPhoto ? 'Click to expand photo' : ''}
          >
            {showPhoto ? (
              <>
                <img
                  src={profile.photo}
                  alt={profile.name}
                  onError={() => setPhotoOk(false)}
                />
                <span className="portrait__zoom-hint">
                  <Icon name="arrow" size={14} />
                </span>
              </>
            ) : (
              <span className="portrait__initials">{profile.initials}</span>
            )}
          </div>
          <div className="portrait__card">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
        Scroll
      </div>
    </section>
  )
}
