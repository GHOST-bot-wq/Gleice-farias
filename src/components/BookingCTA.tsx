import { useState } from 'react'
import config, { isPending } from '../config/business'
import './BookingCTA.css'

interface BookingCTAProps {
  whatsappUrl: string | null
}

export default function BookingCTA({ whatsappUrl }: BookingCTAProps) {
  const [showPendingModal, setShowPendingModal] = useState(false)
  const isWhatsAppConfigured = !isPending(config.whatsapp) && !!whatsappUrl

  const handleBookingClick = (e: React.MouseEvent) => {
    if (!isWhatsAppConfigured) {
      e.preventDefault()
      setShowPendingModal(true)
    }
  }

  return (
    <section id="agendamento" className="booking-cta section section--dark" aria-labelledby="booking-heading">
      <div className="booking-cta__ambient-glow" aria-hidden="true" />

      <div className="container booking-cta__inner">
        <div className="booking-cta__content">
          <span className="eyebrow eyebrow--light">Agendamento & Contato</span>
          <div className="gold-line gold-line--center" />

          <h2 id="booking-heading" className="booking-cta__title">
            Vamos conversar sobre o cuidado <br className="hide-mobile" />
            <em>da sua pele?</em>
          </h2>

          <p className="booking-cta__text">
            Entre em contato para conhecer os tratamentos e verificar os horários disponíveis em Anápolis–GO. Será um prazer acolher você e planejar uma rotina de cuidados ideal para o seu rosto.
          </p>

          <div className="booking-cta__actions">
            {isWhatsAppConfigured ? (
              <a
                href={whatsappUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold booking-cta__btn-main"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Agendar pelo WhatsApp</span>
              </a>
            ) : (
              <button
                type="button"
                className="btn-gold booking-cta__btn-main"
                onClick={handleBookingClick}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Agendar pelo WhatsApp</span>
              </button>
            )}

            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold booking-cta__btn-sec"
            >
              <span>Conversar pelo Instagram</span>
            </a>
          </div>

          {/* Destaques de Atendimento */}
          <div className="booking-cta__features">
            <div className="booking-cta__feature-item">
              <span className="booking-cta__feature-icon" aria-hidden="true">✦</span>
              <span>Atendimento com hora marcada</span>
            </div>
            <div className="booking-cta__feature-sep" aria-hidden="true" />
            <div className="booking-cta__feature-item">
              <span className="booking-cta__feature-icon" aria-hidden="true">✦</span>
              <span>Análise individual da pele</span>
            </div>
            <div className="booking-cta__feature-sep" aria-hidden="true" />
            <div className="booking-cta__feature-item">
              <span className="booking-cta__feature-icon" aria-hidden="true">✦</span>
              <span>Anápolis — Goiás</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Informativo Elegante para WhatsApp Pendente */}
      {showPendingModal && (
        <div className="booking-modal-overlay" onClick={() => setShowPendingModal(false)}>
          <div className="booking-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button
              type="button"
              className="booking-modal__close"
              onClick={() => setShowPendingModal(false)}
              aria-label="Fechar janela"
            >
              ×
            </button>

            <span className="eyebrow">Agendamento Exclusivo</span>
            <div className="gold-line" />

            <h3 id="modal-title" className="booking-modal__title">
              Fale diretamente com Gleice Farias
            </h3>

            <p className="booking-modal__desc">
              O canal direto via WhatsApp está em fase final de configuração. Enquanto isso, o atendimento e agendamento de horários estão acontecendo normalmente através do perfil oficial no Instagram:
            </p>

            <div className="booking-modal__highlight">
              <strong>{config.instagram}</strong>
              <span>Mensagens diretas respondidas com atenção</span>
            </div>

            <div className="booking-modal__actions">
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Abrir Instagram Oficial
              </a>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowPendingModal(false)}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
