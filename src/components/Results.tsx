import { useEffect, useRef } from 'react'
import config from '../config/business'
import './Results.css'

interface ResultsProps {
  whatsappUrl: string | null
}

export default function Results({ whatsappUrl }: ResultsProps) {
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
    <section id="resultados" className="results section section--sand" ref={ref} aria-labelledby="results-heading">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="results__header">
          <div className="results__header-left">
            <span className="eyebrow">Resultados & Casos Reais</span>
            <div className="gold-line" />
            <h2 id="results-heading" className="results__title">
              A experiência de quem <br />
              <em>confia no cuidado.</em>
            </h2>
          </div>
          <div className="results__header-right">
            <p className="results__intro-text">
              Registros reais de atendimentos realizados por Gleice Farias em Anápolis–GO. Cada protocolo é único, planejado para respeitar a fisiologia cutânea de cada cliente com ética, delicadeza e segurança.
            </p>
          </div>
        </div>

        {/* Grade de Casos Clínicos Reais */}
        <div className="results__grid">
          {/* Caso 1: Tratamento de Manchas / Melasma */}
          <article className="result-card">
            <div className="result-card__image-box">
              <img
                src="/images/resultado-facial-1.png"
                alt="Registro de atendimento de clareamento facial e melasma com marca d'água @esteticagleicefarias"
                className="result-card__image"
                loading="lazy"
              />
              <div className="result-card__tag">
                <span>Registro Autorizado · @esteticagleicefarias</span>
              </div>
            </div>

            <div className="result-card__body">
              <span className="result-card__category">Uniformização & Textura</span>
              <h3 className="result-card__title">Cuidado de Manchas & Melasma</h3>
              <p className="result-card__desc">
                Acompanhamento facial focado no clareamento gradual de hipercromias e restauração do viço saudável da pele, sem descamações agressivas ou danos à barreira de proteção.
              </p>
              <div className="result-card__meta">
                <span>Protocolo individualizado conduzido em cabine e apoiado por cuidados diários em casa.</span>
              </div>
            </div>
          </article>

          {/* Caso 2: Limpeza de Pele Profunda e Poros */}
          <article className="result-card">
            <div className="result-card__image-box">
              <img
                src="/images/resultado-limpeza.png"
                alt="Registro de limpeza de pele profunda com extração delicada de cravos e desobstrução de poros"
                className="result-card__image"
                loading="lazy"
              />
              <div className="result-card__tag">
                <span>Registro Autorizado · Atendimento em Cabine</span>
              </div>
            </div>

            <div className="result-card__body">
              <span className="result-card__category">Purificação & Desobstrução</span>
              <h3 className="result-card__title">Limpeza de Pele Profunda</h3>
              <p className="result-card__desc">
                Extração meticulosa de comedões e desobstrução dos folículos com técnica suave e emoliente adequado, minimizando vermelhidão e devolvendo o toque sedoso à região.
              </p>
              <div className="result-card__meta">
                <span>Higiene profunda com finalização calmante e restauradora para o tecido facial.</span>
              </div>
            </div>
          </article>
        </div>

        {/* Bloco de Transparência e Responsabilidade */}
        <div className="results__notice-box">
          <div className="results__notice-inner">
            <div className="results__notice-icon" aria-hidden="true">✦</div>
            <div className="results__notice-content">
              <h4>Transparência & Ética Profissional</h4>
              <p>
                As imagens exibidas correspondem a procedimentos reais realizados pela profissional e foram autorizadas para fins informativos. A resposta biológica, o tempo de recuperação e a quantidade de sessões são individuais e variam para cada pessoa. Nenhum resultado idêntico é prometido ou garantido.
              </p>
            </div>
          </div>
        </div>

        {/* Ação para Ver Mais no Instagram */}
        <div className="results__footer-cta">
          <p>
            Para acompanhar a rotina diária de atendimentos, orientações sobre cuidados com a pele e novos registros:
          </p>
          <div className="results__cta-btns">
            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              Acompanhar {config.instagram}
            </a>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar minha avaliação
              </a>
            ) : (
              <a href="#agendamento" className="btn-primary">
                Agendar minha avaliação
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
