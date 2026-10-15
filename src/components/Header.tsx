import { useState, useEffect } from 'react'
import config from '../config/business'
import './Header.css'

interface HeaderProps {
  scrolled: boolean
  whatsappUrl: string | null
}

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#espaco', label: 'O Espaço' },
  { href: '#contato', label: 'Contato' },
]

export default function Header({ scrolled, whatsappUrl }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Fechar menu ao pressionar Esc
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Bloquear scroll ao abrir o menu mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      role="banner"
    >
      <div className="container header__inner">
        {/* Identidade Visual / Monograma GF */}
        <a
          href="#inicio"
          className="header__logo"
          aria-label="Gleice Farias · Estética Facial — Início"
          onClick={closeMenu}
        >
          <div className="header__brand">
            <span className="header__monogram" aria-hidden="true">GF</span>
            <div className="header__brand-divider" aria-hidden="true" />
            <div className="header__brand-text">
              <span className="header__brand-name">GLEICE FARIAS</span>
              <span className="header__brand-sub">ESTÉTICA FACIAL</span>
            </div>
          </div>
        </a>

        {/* Navegação Desktop */}
        <nav className="header__nav" aria-label="Navegação principal">
          <ul role="list" className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Desktop */}
        <div className="header__actions">
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary header__btn"
            >
              Agendar atendimento
            </a>
          ) : (
            <a
              href="#agendamento"
              className="btn-secondary header__btn"
            >
              Agendar atendimento
            </a>
          )}
        </div>

        {/* Botão Hamburger Mobile */}
        <button
          className={`header__hamburger ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobile-nav"
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__inner">
          <div className="mobile-menu__header">
            <div className="header__brand">
              <span className="header__monogram" aria-hidden="true">GF</span>
              <div className="header__brand-divider" aria-hidden="true" />
              <div className="header__brand-text">
                <span className="header__brand-name">GLEICE FARIAS</span>
                <span className="header__brand-sub">ESTÉTICA FACIAL · ANÁPOLIS</span>
              </div>
            </div>
          </div>

          <nav aria-label="Navegação mobile" className="mobile-menu__nav">
            <ul role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-menu__link"
                    onClick={closeMenu}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu__footer">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mobile-menu__btn"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                Agendar atendimento
              </a>
            ) : (
              <a
                href="#agendamento"
                className="btn-primary mobile-menu__btn"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                Agendar atendimento
              </a>
            )}

            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu__instagram"
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>Instagram:</span> {config.instagram}
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-menu__backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
