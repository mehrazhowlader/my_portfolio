import { useEffect } from 'react'
import Icon from './Icons'
import './Lightbox.css'

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close image preview"
        >
          ✕
        </button>
        <div className="lightbox__image-wrap">
          <img src={image.src} alt={image.alt || image.caption || 'Image preview'} />
        </div>
        {(image.caption || image.alt) && (
          <div className="lightbox__caption">
            {image.badge && <span className="lightbox__badge">{image.badge}</span>}
            <p>{image.caption || image.alt}</p>
          </div>
        )}
      </div>
    </div>
  )
}
