import { useEffect, useRef } from 'react'
import './Treatments.css'

interface TreatmentsProps {
  whatsappUrl: string | null
}

interface TreatmentItem {
  id: string
  number: string
  title: string
  category: string
  image?: string
  description: string
  benefits: string[]
  note: string
}

const treatments: TreatmentItem[] = [
  {
    id: 'limpeza-de-pele',
    number: '01',
    title: 'Limpeza de Pele Profunda',
    category: 'Purificação & Higiene',
    image: '/images/resultado-limpeza.png',
    description:
      'Higienização completa, desobstrução de poros e extração meticulosa de cravos e impurezas, preservando a integridade da barreira cutânea.',
    benefits: [
      'Remoção delicada de impurezas e comedões',
      'Refinamento imediato do relevo da pele',
      'Revitalização e sensação de frescor duradouro',
    ],
    note: 'Indicado para todos os tipos de pele mediante avaliação.',
  },
  {
    id: 'clareamento-melasma',
    number: '02',
    title: 'Tratamento de Manchas & Melasma',
    category: 'Uniformização & Viço',
    image: '/images/resultado-facial-1.png',
    description:
      'Protocolos despigmentantes e uniformizadores pensados para atenuar hipercromias, manchas solares e marcas pós-inflamatórias com segurança.',
    benefits: [
      'Estímulo à uniformização da tonalidade cutânea',
      'Atenuação gradual de manchas superficiais',
      'Devolução do viço e da radiância natural',
    ],
    note: 'Protocolo personalizado com orientação de fotoproteção diária.',
  },
  {
    id: 'peeling-facial',
    number: '03',
    title: 'Peelings Químicos & Enzimáticos',
    category: 'Renovação Celular',
    description:
      'Aplicação de ativos selecionados para promover esfoliação controlada, acelerar a renovação e suavizar a textura áspera da pele.',
    benefits: [
      'Renovação suave das camadas superficiais',
      'Aparência mais luminosa e viçosa',
      'Melhor absorção dos cosméticos de rotina',
    ],
    note: 'Intensidade e ativos definidos conforme a tolerância da sua pele.',
  },
  {
    id: 'microagulhamento',
    number: '04',
    title: 'Microagulhamento Facial',
    category: 'Estímulo de Colágeno',
    description:
      'Microperfurações precisas que induzem o processo natural de cicatrização e regeneração dérmica, associado ao drug delivery de ativos biocompatíveis.',
    benefits: [
      'Estímulo à síntese de colágeno e elastina',
      'Auxílio no refinamento de poros dilatados',
      'Melhora da densidade e da firmeza da pele',
    ],
    note: 'Procedimento com materiais estéreis descartáveis e rigor técnico.',
  },
  {
    id: 'acne-e-poros',
    number: '05',
    title: 'Controle de Acne & Oleosidade',
    category: 'Equilíbrio Cutâneo',
    description:
      'Cuidado voltado para peles oleosas e com tendência a acne, atuando na modulação sebácea, redução do aspecto inflamatório e desobstrução.',
    benefits: [
      'Regulação da sensação de oleosidade excessiva',
      'Acalmamento de regiões irritadas e avermelhadas',
      'Apoio na prevenção de novas lesões acneicas',
    ],
    note: 'Abordagem que prioriza o equilíbrio sem ressecamento agressivo.',
  },
  {
    id: 'hidratacao-revitalizacao',
    number: '06',
    title: 'Revitalização & Nutrição Cutânea',
    category: 'Hidratação Profunda',
    description:
      'Protocolo enriquecido com vitaminas, antioxidantes e máscaras oclusivas de alta performance para recuperar peles ressecadas, opacas ou desvitalizadas.',
    benefits: [
      'Restauração do manto hidrolipídico protetor',
      'Suavidade ao toque e acabamento acetinado',
      'Luminosidade instantânea com aspecto descansado',
    ],
    note: 'Excelente opção pré-eventos ou recuperação pós-exposição climática.',
  },
]

export default function Treatments({ whatsappUrl }: TreatmentsProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('is-visible')
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tratamentos" className="treatments section section--sand" ref={ref} aria-labelledby="treatments-heading">
      <div className="container">
        {/* Cabeçalho Editorial da Seção */}
        <div className="treatments__header">
          <div className="treatments__header-main">
            <span className="eyebrow">Tratamentos Faciais</span>
            <div className="gold-line" />
            <h2 id="treatments-heading" className="treatments__title">
              Um cuidado pensado <br />
              <em>para a sua pele.</em>
            </h2>
          </div>
          <p className="treatments__subtitle">
            Cada pele tem suas particularidades. Conheça as possibilidades de cuidado e descubra, com orientação profissional, o que faz sentido para você.
          </p>
        </div>

        {/* Grade de Cards Editoriais */}
        <div className="treatments__grid">
          {treatments.map((item) => (
            <article
              key={item.id}
              className={`treatment-card ${item.image ? 'treatment-card--with-photo' : 'treatment-card--minimal'}`}
              aria-label={`Tratamento: ${item.title}`}
            >
              {/* Foto real com contexto editorial (quando disponível) */}
              {item.image && (
                <div className="treatment-card__image-container">
                  <img
                    src={item.image}
                    alt={`Atendimento real de ${item.title} — Gleice Farias Estética`}
                    className="treatment-card__img"
                    loading="lazy"
                  />
                  <div className="treatment-card__image-badge">
                    <span>Atendimento Real</span>
                  </div>
                </div>
              )}

              <div className="treatment-card__content">
                <div className="treatment-card__top">
                  <span className="treatment-card__number">{item.number}</span>
                  <span className="treatment-card__category">{item.category}</span>
                </div>

                <h3 className="treatment-card__title">{item.title}</h3>
                <p className="treatment-card__description">{item.description}</p>

                {/* Benefícios */}
                <div className="treatment-card__benefits">
                  <span className="treatment-card__benefits-label">Benefícios em foco:</span>
                  <ul>
                    {item.benefits.map((b, i) => (
                      <li key={i}>
                        <span className="treatment-card__bullet" aria-hidden="true">✦</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="treatment-card__note">
                  <span aria-hidden="true">▫</span>
                  <small>{item.note}</small>
                </div>

                {/* Botão de Agendamento do Procedimento */}
                <div className="treatment-card__footer">
                  {whatsappUrl ? (
                    <a
                      href={`${whatsappUrl}%20Gostaria%20de%20saber%20mais%20sobre%20o%20tratamento%20de%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="treatment-card__link"
                      aria-label={`Consultar disponibilidade para ${item.title} pelo WhatsApp`}
                    >
                      <span>Consultar este procedimento</span>
                      <span className="treatment-card__arrow" aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <a
                      href="#agendamento"
                      className="treatment-card__link"
                      aria-label={`Consultar disponibilidade para ${item.title}`}
                    >
                      <span>Consultar este procedimento</span>
                      <span className="treatment-card__arrow" aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Rodapé da Seção com Nota Ética */}
        <div className="treatments__disclaimer">
          <p>
            * Todos os procedimentos são precedidos por avaliação estética prévia. Indicações, número de sessões e cuidados complementares variam conforme a resposta biológica de cada organismo.
          </p>
        </div>
      </div>
    </section>
  )
}
