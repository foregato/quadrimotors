import { MessageCircle, Instagram, Facebook, MapPin } from 'lucide-react'
import WhatsAppButton, { linkWhatsapp } from '../components/WhatsAppButton'

export default function Contato() {
  return (
    <section className="container-app pt-28 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Contato</h1>
      <p className="text-secondary max-w-xl mb-12">
        Fale com a nossa equipe e tire suas dúvidas sobre qualquer modelo do catálogo.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-8 flex flex-col items-start gap-4">
          <div className="bg-accent/10 p-3 rounded-xl"><MessageCircle size={24} className="text-accent" /></div>
          <h2 className="font-semibold text-lg normal-case">WhatsApp</h2>
          <p className="text-secondary text-sm">Atendimento rápido e direto com nossa equipe de vendas.</p>
          <WhatsAppButton />
        </div>

        <div className="card p-8 flex flex-col items-start gap-4">
          <div className="bg-accent/10 p-3 rounded-xl"><MapPin size={24} className="text-accent" /></div>
          <h2 className="font-semibold text-lg normal-case">Localização</h2>
          <p className="text-secondary text-sm">Atendimento presencial mediante agendamento. Entre em contato para mais detalhes.</p>
        </div>

        <div className="card p-8 flex flex-col items-start gap-4">
          <div className="bg-accent/10 p-3 rounded-xl"><Instagram size={24} className="text-accent" /></div>
          <h2 className="font-semibold text-lg normal-case">Redes sociais</h2>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-secondary hover:text-accent"><Instagram size={22} /></a>
            <a href="#" aria-label="Facebook" className="text-secondary hover:text-accent"><Facebook size={22} /></a>
          </div>
        </div>
      </div>

      <a
        href={linkWhatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        className="sr-only"
      >
        Falar no WhatsApp
      </a>
    </section>
  )
}
