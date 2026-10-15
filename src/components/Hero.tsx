import { useEffect, useRef } from 'react'
import './Hero.css'

interface HeroProps {
  whatsappUrl: string | null
}

export default function Hero({ whatsappUrl }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="inicio" className="hero" ref={heroRef} aria-label="Apresentação Gleice Farias Estética Facial">
      {/* Background Decorativo Sutil */}
      <div className="hero__bg-ambient" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Coluna de Tipografia Editorial */}
        <div className="hero__content">
          <div className="hero__eyebrow-wrap animate-fade-up delay-1">
            <span className="eyebrow">
              GLEICE FARIAS · ESTÉTICA FACIAL · ANÁPOLIS — GO
            </span>
          </div>

          <h1 className="hero__title animate-fade-up delay-2">
            Sua pele merece um cuidado que vai <br className="hero__br-desktop" />
            <em>além do essencial.</em>
          </h1>

          <div className="gold-line animate-fade-up delay-3" />

          <p className="hero__description animate-fade-up delay-3">
            Cuidados faciais personalizados, com atenção aos detalhes e foco nas necessidades exclusivas da sua pele. Uma experiência acolhedora, precisa e voltada para a sua beleza natural.
          </p>

          <div className="hero__actions animate-fade-up delay-4">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hero__cta-main"
              >
                Agendar minha avaliação
              </a>
            ) : (
              <a
                href="#agendamento"
                className="btn-primary hero__cta-main"
              >
                Agendar minha avaliação
              </a>
            )}

            <a href="#tratamentos" className="btn-secondary hero__cta-sec">
              Conhecer os tratamentos
            </a>
          </div>

          {/* Selos Editoriais de Confiança e Localização */}
          <div className="hero__editorial-pills animate-fade-up delay-5">
            <div className="hero__pill">
              <span className="hero__pill-dot" />
              <span>Atendimento Individualizado</span>
            </div>
            <div className="hero__pill-separator" />
            <div className="hero__pill">
              <span className="hero__pill-dot" />
              <span>Anápolis — GO</span>
            </div>
          </div>
        </div>

        {/* Coluna da Fotografia Real de Gleice Farias */}
        <div className="hero__media-col animate-fade-up delay-2">
          <div className="hero__image-composition">
            {/* Moldura da Imagem */}
            <div className="hero__image-frame">
              <img
                src="/images/gleice-farias.png"
                alt="Gleice Farias — Especialista em Estética Facial em sua clínica em Anápolis, GO"
                className="hero__image"
                loading="eager"
                width="720"
                height="900"
              />
              {/* Efeito sutil de luz e gradiente editorial */}
              <div className="hero__image-gradient" aria-hidden="true" />
            </div>

            {/* Borda decorativa de luxo descentralizada */}
            <div className="hero__frame-accent" aria-hidden="true" />

            {/* Card Flutuante de Assinatura */}
            <div className="hero__card-floating" aria-hidden="true">
              <div className="hero__card-monogram">GF</div>
              <div className="hero__card-text">
                <strong>Gleice Farias</strong>
                <span>Estética Facial Personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Rolagem Minimalista */}
      <div className="hero__scroll" aria-hidden="true">
        <a href="#sobre" className="hero__scroll-link" aria-label="Rolar para a seção sobre">
          <span className="hero__scroll-text">ROLAR</span>
          <div className="hero__scroll-line">
            <div className="hero__scroll-ball" />
          </div>
        </a>
      </div>
    </section>
  )
}
