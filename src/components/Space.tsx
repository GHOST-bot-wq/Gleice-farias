import { useEffect, useRef } from 'react'
import { LightboxImage } from '../App'
import config from '../config/business'
import './Space.css'

interface SpaceProps {
  onImageClick: (images: LightboxImage[], index: number) => void
}

const spaceImages: LightboxImage[] = [
  {
    src: '/images/gleice-farias.png',
    alt: 'Ambiente de atendimento de Gleice Farias em Anápolis–GO com maca ergonômica e equipamentos de estética facial',
  },
  {
    src: '/images/resultado-limpeza.png',
    alt: 'Cabine de procedimentos faciais — precisão e cuidado em cada etapa',
  },
  {
    src: '/images/resultado-facial-1.png',
    alt: 'Atendimento facial em cabine com foco na saúde e renovação da pele',
  },
]

export default function Space({ onImageClick }: SpaceProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('is-visible')
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="espaco" className="space section section--ivory" ref={ref} aria-labelledby="space-heading">
      <div className="container">
        {/* Cabeçalho */}
        <div className="space__header">
          <span className="eyebrow">O Espaço</span>
          <div className="gold-line gold-line--center" />
          <h2 id="space-heading" className="space__title">
            Um espaço dedicado <br />
            <em>ao seu cuidado.</em>
          </h2>
          <p className="space__subtitle">
            Um ambiente pensado para receber você com atenção e tranquilidade em Anápolis–GO. Silêncio, higiene rigorosa e a serenidade necessária para o seu momento de renovação.
          </p>
        </div>

        {/* Galeria Editorial Assimétrica */}
        <div className="space__gallery">
          {/* Imagem Principal de Destaque */}
          <div className="space__card space__card--large">
            <button
              type="button"
              className="space__image-btn"
              onClick={() => onImageClick(spaceImages, 0)}
              aria-label="Ampliar foto do espaço de atendimento de Gleice Farias"
            >
              <div className="space__img-box">
                <img
                  src={spaceImages[0].src}
                  alt={spaceImages[0].alt}
                  className="space__img"
                  loading="lazy"
                />
                <div className="space__overlay">
                  <span className="space__zoom-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
                    </svg>
                  </span>
                  <span className="space__overlay-text">Consultório & Atendimento</span>
                </div>
              </div>
            </button>
            <div className="space__card-caption">
              <strong>Cabine de Atendimento Facial</strong>
              <span>Anápolis — Goiás</span>
            </div>
          </div>

          {/* Coluna Lateral com Imagens de Atendimento e Detalhes */}
          <div className="space__side-col">
            <div className="space__card space__card--medium">
              <button
                type="button"
                className="space__image-btn"
                onClick={() => onImageClick(spaceImages, 1)}
                aria-label="Ampliar detalhe de atendimento em cabine"
              >
                <div className="space__img-box">
                  <img
                    src={spaceImages[1].src}
                    alt={spaceImages[1].alt}
                    className="space__img"
                    loading="lazy"
                  />
                  <div className="space__overlay">
                    <span className="space__zoom-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
                      </svg>
                    </span>
                    <span className="space__overlay-text">Detalhamento Técnico</span>
                  </div>
                </div>
              </button>
              <div className="space__card-caption">
                <strong>Higiene & Biossegurança</strong>
                <span>Materiais rigorosamente higienizados e descartáveis</span>
              </div>
            </div>

            <div className="space__card space__card--medium">
              <button
                type="button"
                className="space__image-btn"
                onClick={() => onImageClick(spaceImages, 2)}
                aria-label="Ampliar cuidado com a pele"
              >
                <div className="space__img-box">
                  <img
                    src={spaceImages[2].src}
                    alt={spaceImages[2].alt}
                    className="space__img"
                    loading="lazy"
                  />
                  <div className="space__overlay">
                    <span className="space__zoom-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
                      </svg>
                    </span>
                    <span className="space__overlay-text">Conforto em Cada Sessão</span>
                  </div>
                </div>
              </button>
              <div className="space__card-caption">
                <strong>Atmosfera Relaxante</strong>
                <span>Privacidade e tranquilidade para o seu autocuidado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé com Link do Instagram */}
        <div className="space__footer-note">
          <p>
            Novas fotografias e registros do espaço físico são compartilhados regularmente no perfil{' '}
            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="space__insta-link"
            >
              {config.instagram}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
