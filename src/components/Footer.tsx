import config, { isPending } from '../config/business'
import './Footer.css'

interface FooterProps {
  whatsappUrl: string | null
}

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'A Profissional' },
  { href: '#tratamentos', label: 'Tratamentos Faciais' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#resultados', label: 'Casos & Resultados' },
  { href: '#espaco', label: 'O Espaço' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer({ whatsappUrl }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          {/* Marca / Monograma GF */}
          <div className="footer__brand-col">
            <a href="#inicio" className="footer__brand" aria-label="Gleice Farias · Estética Facial — Voltar ao início">
              <span className="footer__monogram">GF</span>
              <div className="footer__brand-text">
                <span className="footer__brand-name">GLEICE FARIAS</span>
                <span className="footer__brand-sub">ESTÉTICA FACIAL</span>
              </div>
            </a>
            <p className="footer__tagline">
              Cuidados faciais personalizados com precisão, respeito à biologia cutânea e atendimento exclusivo em Anápolis, Goiás.
            </p>
            <div className="footer__location-pill">
              <span className="footer__pill-dot" />
              <span>Anápolis — Goiás · Brasil</span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <nav className="footer__nav-col" aria-label="Navegação do rodapé">
            <h3 className="footer__col-title">Navegação</h3>
            <ul role="list" className="footer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Procedimentos em Destaque */}
          <div className="footer__procedures-col">
            <h3 className="footer__col-title">Procedimentos</h3>
            <ul role="list" className="footer__links">
              <li><a href="#tratamentos" className="footer__link">Limpeza de Pele Profunda</a></li>
              <li><a href="#tratamentos" className="footer__link">Tratamento de Manchas & Melasma</a></li>
              <li><a href="#tratamentos" className="footer__link">Peelings Químicos & Enzimáticos</a></li>
              <li><a href="#tratamentos" className="footer__link">Microagulhamento Facial</a></li>
              <li><a href="#tratamentos" className="footer__link">Controle de Acne & Oleosidade</a></li>
              <li><a href="#tratamentos" className="footer__link">Revitalização & Nutrição Cutânea</a></li>
            </ul>
          </div>

          {/* Atendimento & Redes */}
          <div className="footer__contact-col">
            <h3 className="footer__col-title">Atendimento</h3>
            <div className="footer__contact-items">
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-link"
              >
                <span className="footer__contact-icon">✦</span>
                <div>
                  <strong>Instagram Oficial</strong>
                  <span>{config.instagram}</span>
                </div>
              </a>

              {!isPending(config.whatsapp) && whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__contact-link"
                >
                  <span className="footer__contact-icon">✦</span>
                  <div>
                    <strong>WhatsApp Oficial</strong>
                    <span>Conversar diretamente</span>
                  </div>
                </a>
              ) : (
                <div className="footer__contact-link footer__contact-link--pending">
                  <span className="footer__contact-icon">✦</span>
                  <div>
                    <strong>Atendimento com hora marcada</strong>
                    <span>Agendamentos via Direct no Instagram</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Barra Inferior */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Gleice Farias · Estética Facial. Todos os direitos reservados.
          </p>

          <p className="footer__disclaimer">
            As imagens e registros exibidos são de atendimentos reais autorizados. Respostas biológicas são estritamente individuais. Nenhum resultado específico é garantido.
          </p>
        </div>
      </div>
    </footer>
  )
}
