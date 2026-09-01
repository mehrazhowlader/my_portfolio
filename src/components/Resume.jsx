import { profile } from '../data/portfolio'
import Icon from './Icons'
import Reveal from './Reveal'
import './Resume.css'

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <Reveal className="resume__band">
          <span className="resume__icon">
            <Icon name="file" size={26} />
          </span>
          <div className="resume__copy">
            <h2 className="resume__title">Prefer the one-page version?</h2>
            <p className="resume__text">
              My résumé covers the same education, projects and skills in a printable format.
            </p>
          </div>
          <a
            className="btn btn--primary"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon name="download" size={18} />
            Download Résumé
          </a>
        </Reveal>
      </div>
    </section>
  )
}
