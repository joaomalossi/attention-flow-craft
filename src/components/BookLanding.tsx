import { useState, useEffect } from 'react';
import { ExternalLink, ChevronDown, Star, User, BookOpen, Target, TrendingUp } from 'lucide-react';
const BookLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const ctaUrl = "https://loja.uiclap.com/titulo/ua88955/";
  return <div className="min-h-screen bg-background text-foreground font-satoshi overflow-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/assets/logo-malossi.png" alt="Malossi Studio" className="h-8 w-auto" />
            <span className="font-medium text-foreground">Malossi Studio</span>
          </div>
          <a href={ctaUrl} className="glass-button-primary sheen-effect" target="_blank" rel="noopener noreferrer">
            Garanta seu exemplar
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 min-h-screen flex items-center">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Breaking the Funnel</span>
                <br />
                <span className="text-2xl md:text-3xl font-medium text-muted">
                  Branding + Performance na era da atenção
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                O livro que propõe o <strong className="text-accent">Wormhole Funnel</strong>: 
                integrar branding e performance na era da atenção.
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {["Como unir branding e performance sem perder dinheiro", "Estratégias para construir marca e vender ao mesmo tempo", "Como medir o que realmente importa no marketing moderno"].map((benefit, index) => <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-foreground">{benefit}</span>
                  </li>)}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={ctaUrl} className="glass-button-primary sheen-effect text-center" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-5 h-5 mr-2 inline" />
                Comprar agora — Envio imediato
              </a>
            </div>
          </div>

          {/* Right Content - Book Mockup */}
          <div className={`relative flex justify-center ${isVisible ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
            <div className="relative floating-element">
              <div className="glass-card p-8 max-w-sm">
                <img src="/assets/cover.jpg" alt="Breaking the Funnel - Capa do Livro" className="w-full h-auto rounded-lg shadow-2xl" />
              </div>
              
              {/* Price & Format Strip */}
              <div className="mt-6 glass-card p-4 text-center">
                <div className="space-y-2">
                  <p className="text-sm text-muted">Livro Físico</p>
                  <p className="text-2xl font-bold text-accent">De R$63 por R$49,90</p>
                  <a href={ctaUrl} className="block w-full glass-button-primary sheen-effect mt-3" target="_blank" rel="noopener noreferrer">Comprar Agora</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
            O que está acontecendo com o marketing hoje?
          </h2>
          
          <div className="glass-card p-8 mb-12">
            <p className="text-xl leading-relaxed mb-6">
              Vivemos na <strong className="text-accent">era da sobrecarga de informação</strong>. 
              Atenção é o ativo mais valioso, e o funil tradicional já não explica o comportamento das pessoas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[{
              icon: <Target className="w-8 h-8" />,
              text: "As pessoas não seguem mais uma jornada linear"
            }, {
              icon: <TrendingUp className="w-8 h-8" />,
              text: "O excesso de anúncios dilui o impacto"
            }, {
              icon: <User className="w-8 h-8" />,
              text: "As marcas que não entendem esse cenário perdem relevância"
            }].map((item, index) => <div key={index} className="glass-card p-6 text-center">
                  <div className="text-accent mb-4 flex justify-center">{item.icon}</div>
                  <p className="text-foreground">{item.text}</p>
                </div>)}
            </div>
          </div>

          <a href={ctaUrl} className="glass-button-primary sheen-effect inline-flex items-center" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-5 h-5 mr-2" />
            Descubra a solução
          </a>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 px-6 bg-background-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            O que você vai aprender
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {["Como funciona a nova lógica da atenção", "Estratégias para construir marca e vender ao mesmo tempo", "Como medir o que realmente importa", "Exemplos reais e frameworks para aplicar agora"].map((item, index) => <div key={index} className="glass-card p-6 sheen-effect">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl font-bold text-accent">{index + 1}</span>
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            O autor
          </h2>
          
          <div className="glass-card p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img src="/assets/author.jpg" alt="João - Autor do Breaking the Funnel" className="w-32 h-32 rounded-full object-cover border-2 border-accent/20" />
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">João Malossi</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Trabalho com <strong className="text-accent">business intelligence, marketing e design</strong>. 
                  Minha missão é conectar dados e criatividade para ajudar marcas a crescerem de verdade.
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  Este livro nasceu da prática: de erros, acertos e aprendizados reais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Comece hoje a entender como funciona a atenção na era digital
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Este livro é para você que quer entender como unir branding e performance sem perder dinheiro.
          </p>
          
          <div className="space-y-4">
            <a href={ctaUrl} className="glass-button-primary sheen-effect text-xl px-12 py-6 inline-flex items-center" target="_blank" rel="noopener noreferrer">
              <BookOpen className="w-6 h-6 mr-3" />
              Garanta seu exemplar agora
            </a>
            
            <p className="text-sm text-muted">Pagamento seguro via Uiclap</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="container mx-auto text-center">
          <p className="text-muted text-sm">
            © 2024 Malossi Studio. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Analytics Placeholders */}
      {/* <!-- INSERT GA4 HERE --> */}
      {/* <!-- INSERT META PIXEL HERE --> */}
    </div>;
};
export default BookLanding;