import { useState, useEffect, useRef } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: 'Como agendar uma avaliação?',
    answer: 'Para agendar, entre em contato pelo WhatsApp ou pelo Instagram @gs_esteticaavancadaa. Nossa equipe irá verificar a disponibilidade e confirmar o horário mais conveniente para você.',
  },
  {
    question: 'Quais tratamentos estão disponíveis?',
    answer: 'Oferecemos depilação a laser, tratamentos faciais personalizados, protocolos corporais, criolipólise, contorno corporal e detox corporal. Para conhecer todos os protocolos disponíveis e suas indicações, entre em contato com a nossa equipe.',
  },
  {
    question: 'Como saber qual tratamento é adequado para mim?',
    answer: 'A indicação de tratamento é feita mediante avaliação individual com a profissional responsável. Cada protocolo é escolhido de acordo com as necessidades, objetivos e características de cada cliente.',
  },
  {
    question: 'Onde fica a clínica?',
    answer: 'O endereço completo será divulgado em breve. Para informações sobre localização, entre em contato pelo WhatsApp ou Instagram.',
  },
  {
    question: 'Como consultar valores e disponibilidade?',
    answer: 'Os valores e a disponibilidade de horários são informados diretamente por meio do nosso canal de atendimento. Entre em contato pelo WhatsApp ou Instagram para receber todas as informações.',
  },
  {
    question: 'Quais são os horários de atendimento?',
    answer: 'Os horários de funcionamento serão divulgados em breve nesta página. Para consultar disponibilidade atual, entre em contato pelo Instagram @gs_esteticaavancadaa.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
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

  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i))

  return (
    <section className="faq section section--mauve" ref={ref} aria-labelledby="faq-heading">
      <div className="container faq__inner">
        <div className="faq__header">
          <span className="eyebrow">Perguntas frequentes</span>
          <div className="gold-line" />
          <h2 id="faq-heading" className="faq__title">
            Tire suas dúvidas<br />
            <em>antes de agendar.</em>
          </h2>
          <p className="faq__subtitle">
            Não encontrou o que procura? Entre em contato — nossa equipe responde com prazer.
          </p>
        </div>

        <div className="faq__list" role="list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'is-open' : ''}`}
              role="listitem"
              style={{ '--delay': `${i * 0.08}s` } as React.CSSProperties}
            >
              <button
                className="faq-item__question"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-btn-${i}`}
              >
                <span>{item.question}</span>
                <span className="faq-item__icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${i}`}
                className="faq-item__answer"
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                hidden={open !== i}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
