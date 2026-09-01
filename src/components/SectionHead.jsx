import Reveal from './Reveal'

/** Shared eyebrow + title + optional subtitle block used by every section. */
export default function SectionHead({ eyebrow, title, sub, center = false }) {
  return (
    <Reveal className={`section-head${center ? ' section-head--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  )
}
