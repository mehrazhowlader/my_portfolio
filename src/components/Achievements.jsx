import { achievements, certifications } from '../data/portfolio'
import Icon from './Icons'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import './Achievements.css'

export default function Achievements({ onOpenLightbox }) {
  const handleAwardClick = (item) => {
    if (item.image && onOpenLightbox) {
      onOpenLightbox({
        src: item.image,
        alt: `${item.title} - ${item.event}`,
        caption: item.caption || `${item.title}: ${item.project}`,
        badge: item.badge || item.title
      })
    }
  }

  return (
    <section className="section section--dark achievements" id="achievements">
      <div className="container">
        <SectionHead
          center
          eyebrow="Recognition"
          title="Achievements"
          sub="Results from the UIU CSE Project Showcase, where our team projects were presented and judged."
        />

        <div className="achievements__grid">
          {achievements.map((item, i) => (
            <Reveal key={item.title + item.project} className="award" delay={i * 100}>
              {item.image ? (
                <div
                  className="award__img-wrap"
                  onClick={() => handleAwardClick(item)}
                  title="Click to view high-res award photo"
                >
                  <img src={item.image} alt={item.title} className="award__img" />
                  <div className="award__img-overlay">
                    <span className="award__badge">{item.badge || item.title}</span>
                    <span className="award__zoom-icon">🔍 Click to View</span>
                  </div>
                </div>
              ) : (
                <span className="award__icon">
                  <Icon name="trophy" size={26} />
                </span>
              )}

              <div className="award__content">
                <div className="award__header">
                  <span className="award__icon-small">
                    <Icon name="trophy" size={18} />
                  </span>
                  <h3 className="award__title">{item.title}</h3>
                </div>
                <p className="award__event">{item.event}</p>
                <p className="award__project">{item.project}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="certs">
          <span className="certs__icon">
            <Icon name="badge" size={24} />
          </span>
          <div>
            <h3 className="certs__title">Certifications</h3>
            {certifications.length ? (
              <ul className="certs__list">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <strong>{cert.name}</strong>
                    <span>
                      {cert.issuer}
                      {cert.year ? ` · ${cert.year}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="certs__empty">
                No certifications listed yet — this space is reserved for coursework and
                professional certificates as I complete them.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
