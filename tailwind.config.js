/** Configuração do Tailwind CSS
 * Todas as cores da identidade visual da Quadrimotors ficam centralizadas aqui.
 * Para alterar o tema, basta editar os valores hexadecimais abaixo.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bgdark: '#111111',      // fundo principal
        card: '#1C1C1C',        // fundo dos cards
        accent: '#FF7A00',      // laranja - botões, ícones, destaques
        secondary: '#D9D9D9',   // textos secundários
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}
