import { experience, education } from '../data/portfolio'
import Icon from './Icons'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import './Journey.css'

function Timeline({ icon, label, entries }) {
  return (
    <div className="timeline">
      <h3 className="timeline__label">
        <span className="timeline__label-icon">
          <Icon name={icon} size={20} />
        </span>
        {label}
      </h3>

      <ul className="timeline__list">
        {entries.map((entry, i) => (
          <Reveal as="li" key={entry.role || entry.degree} className="entry" delay={i * 90}>
            <h4 className="entry__title">{entry.role || entry.degree}</h4>
            <p className="entry__org">{entry.org}</p>
            <span className="entry__meta">{entry.meta}</span>
            <ul className="entry__points">
              {entry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}

export default function Journey() {
  return (
    <section className="section section--soft journey" id="experience">
      <div className="container">
        <SectionHead
          center
          eyebrow="Experience & Education"
          title="My Academic Journey"
          sub="Where I study, and where I currently help others learn."
        />

        <div className="journey__grid">
          <Timeline icon="briefcase" label="Experience" entries={experience} />
          <Timeline icon="cap" label="Education" entries={education} />
        </div>
      </div>
    </section>
  )
}
