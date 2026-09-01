import { contact, links, profile } from '../data/portfolio'
import Icon from './Icons'
import Reveal from './Reveal'
import './Contact.css'

const channels = [
  {
    icon: 'github',
    label: 'GitHub',
    value: 'github.com/mehrazhowlader',
    href: links.github,
    action: 'View repositories',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'md-mehraz-howlader',
    href: links.linkedin,
    action: 'Connect with me',
  },
]

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <Reveal className="contact__copy">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 className="section-title">{contact.title}</h2>
          <p className="section-sub">{contact.text}</p>
          <p className="contact__location">
            <Icon name="pin" size={18} />
            {profile.location}
          </p>
        </Reveal>

        <div className="contact__channels">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 100}>
              <a
                className="channel"
                href={channel.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="channel__icon">
                  <Icon name={channel.icon} size={22} />
                </span>
                <span className="channel__body">
                  <strong>{channel.label}</strong>
                  <span className="channel__value">{channel.value}</span>
                </span>
                <span className="channel__action">
                  {channel.action}
                  <Icon name="arrow" size={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
