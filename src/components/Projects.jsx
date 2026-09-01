import { projects } from '../data/portfolio'
import Icon from './Icons'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <SectionHead
          center
          eyebrow="Selected Work"
          title="Projects I've Built"
          sub="Academic and team projects where I worked through the requirements, the interface and the system behind it."
        />

        <div className="projects__list">
          {projects.map((project, i) => (
            <Reveal key={project.name} className="project" delay={(i % 2) * 90}>
              <div className="project__head">
                <span className="project__index">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <span className="project__kicker">{project.kicker}</span>
                  <h3 className="project__name">{project.name}</h3>
                </div>
              </div>

              <div className="project__body">
                <p className="project__summary">{project.summary}</p>

                <ul className="project__points">
                  {project.contributions.map((point) => (
                    <li key={point}>
                      <Icon name="check" size={16} />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="project__tech">
                  {project.tech.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.award && (
                  <p className="project__award">
                    <Icon name="trophy" size={18} />
                    {project.award}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
