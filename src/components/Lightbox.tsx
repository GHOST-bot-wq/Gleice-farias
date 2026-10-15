import { useState, useEffect, useCallback } from 'react'
import { LightboxImage } from '../App'

interface LightboxProps {
  images: LightboxImage[]
  initialIndex: number
  onClose: () => void
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex)

  const prev = useCallback(() => {
    setIndex(i => (i === 0 ? images.length - 1 : i - 1))
  }, [images.length])

  const next = useCallback(() => {
    setIndex(i => (i === images.length - 1 ? 0 : i + 1))
  }, [images.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, prev, next])

  const current = images[index]

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada de imagem"
      onClick={onClose}
    >
      {/* Botão fechar */}
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Fechar visualização"
      >
        ×
      </button>

      {/* Navegação anterior */}
      {images.length > 1 && (
        <button
          className="lightbox-nav lightbox-prev"
          onClick={e => { e.stopPropagation(); prev() }}
          aria-label="Imagem anterior"
        >
          ‹
        </button>
      )}

      {/* Imagem */}
      <div onClick={e => e.stopPropagation()}>
        <img
          src={current.src}
          alt={current.alt}
          key={current.src}
        />
        {current.alt && (
          <p style={{
            color: 'rgba(250,247,243,0.6)',
            textAlign: 'center',
            fontSize: '0.78rem',
            marginTop: '12px',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.05em',
          }}>
            {current.alt}
          </p>
        )}
      </div>

      {/* Navegação próxima */}
      {images.length > 1 && (
        <button
          className="lightbox-nav lightbox-next"
          onClick={e => { e.stopPropagation(); next() }}
          aria-label="Próxima imagem"
        >
          ›
        </button>
      )}

      {/* Contador */}
      {images.length > 1 && (
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(250,247,243,0.5)',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          fontFamily: 'var(--font-sans)',
        }} aria-live="polite">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
