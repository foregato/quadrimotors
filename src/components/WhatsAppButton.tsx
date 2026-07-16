import { MessageCircle } from 'lucide-react'

export const WHATSAPP_NUMBER = '5519994075246'

export function linkWhatsapp(mensagem = 'Olá, gostaria de mais informações sobre os quadriciclos.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
}

interface Props {
  mensagem?: string
  texto?: string
  className?: string
  flutuante?: boolean
}

export default function WhatsAppButton({ mensagem, texto = 'Falar com Vendedor', className, flutuante }: Props) {
  if (flutuante) {
    return (
      <a
        href={linkWhatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-accent text-base p-4 rounded-full shadow-soft hover:scale-105 active:scale-95 transition-transform"
      >
        <MessageCircle size={26} />
      </a>
    )
  }

  return (
    <a
      href={linkWhatsapp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? 'btn-primary'}
    >
      <MessageCircle size={20} />
      {texto}
    </a>
  )
}
