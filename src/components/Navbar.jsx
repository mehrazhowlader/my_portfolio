import { useEffect, useState } from 'react'
import { nav, profile } from '../data/portfolio'
import Icon from './Icons'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(nav[0].href)

  // Solid bar once the hero is behind us.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link for whichever section is currently in view.
  useEffect(() => {
    const sections = nav
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)
    if (!sections.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const seen = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (seen) setActive(`#${seen.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.5] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock the page while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav${scrolled ? ' nav--solid' : ''}${open ? ' nav--open' : ''}`}>
      <div className="container nav__inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__text">{profile.shortName}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? 'is-active' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="btn btn--primary btn--sm nav__cta" href="#contact">
            Get In Touch
          </a>
          <button
            className="nav__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div className="nav__drawer" hidden={!open}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn btn--primary" href="#contact" onClick={() => setOpen(false)}>
          Get In Touch
        </a>
      </div>
    </header>
  )
}
