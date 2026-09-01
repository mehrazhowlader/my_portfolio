import { skillGroups } from '../data/portfolio'
import Icon from './Icons'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section section--soft skills" id="skills">
      <div className="container">
        <SectionHead
          center
          eyebrow="What I Work With"
          title="Skills & Technologies"
          sub="The languages, frameworks and tools I use to plan, build and ship the projects below."
        />

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} className="card skill" delay={(i % 3) * 90}>
              <div className="card-icon">
                <Icon name={group.icon} size={34} />
              </div>
              <h3 className="card-title">{group.title}</h3>
              <p className="card-text">{group.description}</p>
              <ul className="skill__list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
