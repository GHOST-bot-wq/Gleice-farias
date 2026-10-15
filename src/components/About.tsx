import { useEffect, useRef } from 'react'
import config from '../config/business'
import './About.css'

interface AboutProps {
  whatsappUrl: string | null
}

export default function About({ whatsappUrl }: AboutProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('is-visible')
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" className="about section section--ivory" ref={ref} aria-labelledby="about-heading">
      <div className="container about__inner">
        {/* Coluna Visual com Retrato Real de Gleice */}
        <div className="about__image-col">
          <div className="about__image-wrapper">
            <div className="about__image-frame">
              <img
                src="/images/gleice-farias.png"
                alt="Gleice Farias — Especialista em Estética Facial em Anápolis–GO"
                className="about__img"
                loading="lazy"
              />
              <div className="about__image-tint" aria-hidden="true" />
            </div>

            {/* Elemento Decorativo Geométrico Sutil */}
            <div className="about__frame-backdrop" aria-hidden="true" />

            {/* Tag Flutuante Editorial */}
            <div className="about__badge-signature" aria-label="Dedicação e cuidado">
              <span className="about__badge-sparkle" aria-hidden="true">✦</span>
              <div className="about__badge-text">
                <span className="about__badge-title">Gleice Farias</span>
                <span className="about__badge-sub">Estética Facial · Anápolis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Editorial de Conteúdo */}
        <div className="about__content">
          <div className="about__eyebrow-box">
            <span className="eyebrow">A Profissional</span>
            <div className="gold-line" />
          </div>

          <h2 id="about-heading" className="about__title">
            Beleza começa <br />
            <em>com cuidado.</em>
          </h2>

          <div className="about__text">
            <p className="about__lead">
              Gleice Farias atua com estética facial dedicada em Anápolis–GO, oferecendo uma experiência que une atenção técnica, delicadeza e escuta sensível para cada pessoa que confia em suas mãos.
            </p>
            <p>
              Entendendo que nenhuma pele é igual à outra, cada procedimento é precedido por uma análise detalhada. O foco é valorizar a saúde da pele, equilibrar sua textura, purificar e restaurar o viço natural com respeito à sua individualidade.
            </p>
            <p>
              No consultório, você encontra um ambiente sereno, criteriosamente higienizado e acolhedor, onde seu momento de autocuidado é respeitado do início ao fim.
            </p>
          </div>

          {/* Pilares Editoriais de Atendimento */}
          <div className="about__pillars">
            <div className="about__pillar-item">
              <span className="about__pillar-num">01</span>
              <div>
                <h3 className="about__pillar-title">Escuta & Análise</h3>
                <p className="about__pillar-desc">Avaliação atenta das características e do momento atual da sua pele.</p>
              </div>
            </div>

            <div className="about__pillar-item">
              <span className="about__pillar-num">02</span>
              <div>
                <h3 className="about__pillar-title">Precisão & Higiene</h3>
                <p className="about__pillar-desc">Ambiente e materiais com rigor em biossegurança e conforto.</p>
              </div>
            </div>

            <div className="about__pillar-item">
              <span className="about__pillar-num">03</span>
              <div>
                <h3 className="about__pillar-title">Beleza Natural</h3>
                <p className="about__pillar-desc">Tratamentos que exaltam a luminosidade e a saúde natural do seu rosto.</p>
              </div>
            </div>
          </div>

          {/* Informações Profissionais Confirmadas / Campo para Atualização */}
          <div className="about__bio-placeholder">
            <div className="about__bio-icon" aria-hidden="true">ℹ</div>
            <p className="about__bio-note">
              Atendimento exclusivo em Anápolis–GO. Para dúvidas sobre indicações específicas para a sua pele, consulte diretamente pelo WhatsApp ou Instagram oficial.
            </p>
          </div>

          {/* Ações */}
          <div className="about__actions">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Falar com Gleice
              </a>
            ) : (
              <a href="#agendamento" className="btn-primary">
                Falar com Gleice
              </a>
            )}

            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              Conhecer no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
