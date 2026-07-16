import { Instagram, Phone, MapPin } from 'lucide-react'
import ButtonWhatsapp from '../components/ButtonWhatsapp'

// Dados de contato da empresa - edite aqui (telefone, instagram e endereço)
const contatos = [
  { icon: Phone, titulo: 'Telefone', valor: '(19) 99407-5246', href: 'tel:+5519994075246' },
  { icon: Instagram, titulo: 'Instagram', valor: '@quadrimotors', href: 'https://instagram.com' },
  { icon: MapPin, titulo: 'Endereço', valor: 'Rua Cairi, 213 - Vila Aeroporto - Campinas, SP', href: null },
]

export default function Contato() {
  return (
    <section className="container-app pt-28 pb-32">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Contato</h1>
      <p className="text-secondary mb-10">Fale com a gente pelo canal que preferir.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {contatos.map(({ icon: Icon, titulo, valor, href }) => (
          <div key={titulo} className="card p-6 flex items-center gap-4">
            <div className="bg-accent/10 p-3 rounded-xl">
              <Icon size={24} className="text-accent" />
            </div>
            <div>
              <p className="text-secondary text-sm">{titulo}</p>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent transition duration-300">
                  {valor}
                </a>
              ) : (
                <p className="font-medium">{valor}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <ButtonWhatsapp texto="Chamar no WhatsApp" />
      </div>

      {/* Mapa Google - troque o endereço na query do "q=" abaixo */}
      <div className="mt-12 rounded-2xl overflow-hidden aspect-video">
  <iframe
    title="Localização Quadrimotors & Cia"
    className="w-full h-full border-0"
    loading="lazy"
    src="https://www.google.com/maps?q=Rua+Cairi,+213,+Vila+Aeroporto,+Campinas,+SP&output=embed"
  />
</div>
    </section>
  )
}
