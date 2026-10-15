import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Treatments from './components/Treatments'
import Differentials from './components/Differentials'
import Results from './components/Results'
import Space from './components/Space'
import BookingCTA from './components/BookingCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import WhatsAppFloat from './components/WhatsAppFloat'
import config, { getWhatsAppUrl } from './config/business'

export interface LightboxImage {
  src: string
  alt: string
}

function App() {
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const whatsappUrl = getWhatsAppUrl(config)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openLightbox = (images: LightboxImage[], index: number) => {
    setLightbox({ images, index })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* Cabeçalho Fixo com Monograma GF e Blur Editorial */}
      <Header scrolled={scrolled} whatsappUrl={whatsappUrl} />

      <main id="main-content">
        {/* 1. Hero: Abertura com Retrato Real de Gleice e Tipografia Editorial */}
        <Hero whatsappUrl={whatsappUrl} />

        {/* 2. Apresentação da Profissional: "Beleza começa com cuidado." */}
        <About whatsappUrl={whatsappUrl} />

        {/* 3. Tratamentos Faciais Verificados em Cards de Alto Padrão */}
        <Treatments whatsappUrl={whatsappUrl} />

        {/* 4. Diferenciais: "Cuidado nos detalhes. Atenção a você." */}
        <Differentials />

        {/* 5. Casos e Resultados Reais com Marca d'Água @esteticagleicefarias */}
        <Results whatsappUrl={whatsappUrl} />

        {/* 6. O Espaço: Cabine de Atendimento e Biossegurança com Lightbox */}
        <Space onImageClick={openLightbox} />

        {/* 7. Seção de Agendamento: "Vamos conversar sobre o cuidado da sua pele?" */}
        <BookingCTA whatsappUrl={whatsappUrl} />

        {/* 8. Localização (Anápolis–GO) e Contato Direto */}
        <Contact />
      </main>

      {/* Rodapé Institucional */}
      <Footer whatsappUrl={whatsappUrl} />

      {/* Lightbox para Visualização Ampliada das Fotografias Reais */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}

      {/* Botão Flutuante do WhatsApp (quando configurado) */}
      {whatsappUrl && <WhatsAppFloat url={whatsappUrl} />}
    </>
  )
}

export default App
