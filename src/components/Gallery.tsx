import { useEffect, useRef } from 'react'
import { LightboxImage } from '../App'
import './Gallery.css'

interface GalleryProps {
  onImageClick: (images: LightboxImage[], index: number) => void
}

const galleryImages: LightboxImage[] = [
  { src: '/images/gabrielly-sampaio.png', alt: 'Gabrielly Sampaio — Retrato profissional na clínica' },
  { src: '/images/gabrielly-laser.png', alt: 'Gabrielly Sampaio realizando procedimento de depilação a laser' },
  { src: '/images/resultado-corporal-1.png', alt: 'Resultado de protocolo corporal' },
  { src: '/images/resultado-antes-depois.png', alt: 'Resultado de protocolo corporal — antes e depois' },
  { src: '/images/resultado-corporal-2.png', alt: 'Resultado de tratamento corporal — protocolo de contorno' },
]

// Layout assimétrico editorial: [grande, pequeno, pequeno, grande, pequeno]
const layout = ['tall', 'normal', 'normal', 'tall', 'normal'] as const

export default function Gallery({ onImageClick }: GalleryProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible') },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="galeria" className="gallery section" ref={ref} aria-labelledby="gallery-heading">
      <div className="container">
        <div className="gallery__header">
          <span className="eyebrow">Galeria</span>
          <div className="gold-line" />
          <h2 id="gallery-heading" className="gallery__title">
            Uma janela para<br />
            <em>o nosso espaço.</em>
          </h2>
        </div>

        <div className="gallery__grid" role="list">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              className={`gallery__item gallery__item--${layout[i] || 'normal'}`}
              style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}
              onClick={() => onImageClick(galleryImages, i)}
              aria-label={`Ampliar imagem: ${img.alt}`}
              role="listitem"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery__img"
                loading="lazy"
                onError={(e) => {
                  const btn = (e.target as HTMLImageElement).closest('button')
                  if (btn) btn.style.display = 'none'
                }}
              />
              <div className="gallery__item-overlay" aria-hidden="true">
                <span className="gallery__item-zoom">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>

        <p className="gallery__note">
          Mais imagens disponíveis no Instagram{' '}
          <a
            href="https://www.instagram.com/gs_esteticaavancadaa"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery__instagram-link"
          >
            @gs_esteticaavancadaa
          </a>
        </p>
      </div>
    </section>
  )
}
