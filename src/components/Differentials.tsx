import { useEffect, useRef } from 'react'
import './Differentials.css'

const differentials = [
  {
    number: '01',
    title: 'Atendimento Individualizado',
    subtitle: 'Cada pele tem uma história',
    description:
      'Sem atendimentos impessoais ou apressados. Cada sessão é reservada com tempo dedicado para ouvir você, analisar sua pele e entender seus objetivos com tranquilidade.',
  },
  {
    number: '02',
    title: 'Orientação Contínua',
    subtitle: 'Cuidado além da cabine',
    description:
      'Instruções claras e realistas sobre cuidados diários essenciais para o seu tipo de pele, garantindo que o cuidado se mantenha ativo e seguro na sua rotina em casa.',
  },
  {
    number: '03',
    title: 'Ambiente Acolhedor & Sereno',
    subtitle: 'Um momento só seu',
    description:
      'Espaço pensado para acolher com conforto, silêncio e calma em Anápolis–GO. Maca confortável, higiene rigorosa e uma atmosfera suave para o seu bem-estar.',
  },
  {
    number: '04',
    title: 'Atenção aos Detalhes',
    subtitle: 'Rigor técnico e delicadeza',
    description:
      'Cuidado minucioso em cada passo do procedimento: da higienização inicial, passando pela suavidade na extração, até a finalização com produtos de alta afinidade dérmica.',
  },
]

export default function Differentials() {
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
    <section id="diferenciais" className="differentials section section--ivory" ref={ref} aria-labelledby="differentials-heading">
      <div className="container">
        {/* Cabeçalho Editorial */}
        <div className="differentials__header">
          <span className="eyebrow">Diferenciais</span>
          <div className="gold-line gold-line--center" />
          <h2 id="differentials-heading" className="differentials__title">
            Cuidado nos detalhes. <br />
            <em>Atenção a você.</em>
          </h2>
          <p className="differentials__subtitle">
            Acreditamos que a verdadeira sofisticação na estética reside no respeito aos limites da sua pele e na dedicação genuína ao seu conforto.
          </p>
        </div>

        {/* Grade de 4 Pilares Editoriais */}
        <div className="differentials__grid">
          {differentials.map((item) => (
            <article key={item.number} className="differential-item">
              <div className="differential-item__top">
                <span className="differential-item__number">{item.number}</span>
                <div className="differential-item__line" aria-hidden="true" />
              </div>

              <h3 className="differential-item__title">{item.title}</h3>
              <span className="differential-item__subtitle">{item.subtitle}</span>

              <p className="differential-item__description">{item.description}</p>
            </article>
          ))}
        </div>

        {/* Citação Editorial de Marca */}
        <div className="differentials__quote-wrap">
          <blockquote className="differentials__quote">
            <span className="differentials__quote-mark" aria-hidden="true">“</span>
            <p className="differentials__quote-text">
              Mais do que realizar um procedimento, meu compromisso é acolher quem você é e cuidar da sua pele com a delicadeza e a excelência que ela merece.
            </p>
            <footer className="differentials__quote-author">
              <strong>Gleice Farias</strong>
              <span>Estética Facial · Anápolis, Goiás</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
