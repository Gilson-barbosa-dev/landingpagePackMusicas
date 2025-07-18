import React, { useState, useEffect } from 'react';
import { Music, Download, Shield, Clock, Star, ChevronDown, Check, Headphones, Smartphone, Car, Zap, TrendingUp, Users, Volume2, Play, Disc3 } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Organizadas por Gênero",
      description: "Todas as músicas separadas em pastas por estilo musical"
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Qualidade Premium",
      description: "Áudio de excelente qualidade para a melhor experiência"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Recebimento Imediato",
      description: "Acesso instantâneo após confirmação do pagamento"
    }
  ];

  const devices = [
    { icon: <Car className="w-6 h-6" />, name: "Carro" },
    { icon: <Smartphone className="w-6 h-6" />, name: "Celular" },
    { icon: <Headphones className="w-6 h-6" />, name: "Fones" }
  ];

  const faqs = [
    {
      question: "Preciso ter internet pra ouvir as músicas?",
      answer: "Não precisa. Após o download, você pode ouvir offline em qualquer dispositivo."
    },
    {
      question: "Preciso instalar algum aplicativo?",
      answer: "Não precisa. As músicas vêm em formato MP3 compatível com qualquer player."
    },
    {
      question: "Em quanto tempo eu recebo o acesso?",
      answer: "Após o pagamento você recebe imediatamente no seu email."
    },
    {
      question: "Como eu recebo as atualizações do pacote premium?",
      answer: "Todo mês adicionamos as músicas atualizadas no mesmo pack que você comprou."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        
        {/* Subtle Musical Notes */}
        <div className="absolute top-1/4 left-1/4 text-green-500/10 text-2xl">♪</div>
        <div className="absolute top-1/3 right-1/4 text-green-500/10 text-3xl">♫</div>
        <div className="absolute bottom-1/3 left-1/5 text-green-500/10 text-xl">♪</div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-4">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Urgency Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
            <Zap className="w-4 h-4 text-red-400" />
            <span className="text-xs md:text-sm font-bold text-red-400">🔥 LANÇAMENTO JULHO 2025 - OFERTA LIMITADA</span>
          </div>

          {/* Impact Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 md:mb-6 leading-tight">
            <span className="text-white">
              PACK EXPLOSIVO
            </span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-7xl text-green-400">
              +10.500 HITS
            </span>
          </h1>

          {/* Power Subheadline */}
          <div className="mb-8 md:mb-10">
            <p className="text-xl sm:text-2xl md:text-4xl font-bold text-green-400 mb-3">
              🎵 SERTANEJO • PAGODE • FUNK • TRAP
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
              Todos os ritmos atualizados • Lançamentos de Julho 2025
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8 md:mb-10">
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold text-gray-200">+50.000 clientes</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold text-gray-200">Top #1 em vendas</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-200">5.0 ⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          {/* Device Compatibility */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-10 md:mb-12">
            <span className="text-green-400 text-base md:text-lg font-semibold w-full md:w-auto">🎧 Ouça em qualquer lugar:</span>
            <div className="flex items-center space-x-4 md:space-x-6">
              {devices.map((device, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-gray-700/50 transition-all border border-gray-700">
                  <span className="text-green-400">{device.icon}</span>
                  <span className="text-sm md:text-base font-medium text-gray-200">{device.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mega CTA Button */}
          <div className="space-y-4">
            <button className="group relative inline-flex items-center space-x-4 bg-green-500 hover:bg-green-400 px-10 md:px-16 py-5 md:py-6 rounded-full font-black text-xl md:text-2xl text-black transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/30">
              <Play className="w-7 h-7" />
              <span>QUERO MEU PACK AGORA!</span>
              <ChevronDown className="w-7 h-7 group-hover:translate-y-1 transition-transform" />
            </button>
            <p className="text-base md:text-lg text-green-400 font-semibold">
              ⚡ Receba IMEDIATAMENTE no seu email!
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-green-400" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">
            Por que nosso pack é <span className="text-green-400">IRRESISTÍVEL?</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-black">{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-400">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">
            Escolha seu Pacote <span className="text-green-400">EXPLOSIVO</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Package */}
            <div className="relative group">
              <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Pacote Básico</h3>
                  <p className="text-gray-400 mb-6">Ideal para iniciantes</p>
                  <div className="text-4xl font-black mb-2 text-green-400">R$ 9,90</div>
                  <p className="text-gray-400">Pagamento único</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="font-semibold text-gray-200">1.500 músicas atualizadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Pack de Julho 2025</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Organizadas por gênero</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Qualidade premium</span>
                  </li>
                </ul>
                
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border border-gray-600">
                  Comprar Básico
                </button>
              </div>
            </div>

            {/* Premium Package */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-gray-800/70 backdrop-blur-lg border border-green-500/50 rounded-2xl p-8 hover:bg-gray-700/70 transition-all duration-300 transform hover:-translate-y-2">
                {/* Popular Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-black whitespace-nowrap">
                    🔥 MAIS POPULAR
                  </span>
                </div>
                
                <div className="text-center mb-8 mt-4">
                  <h3 className="text-2xl font-bold mb-2 text-white">Pacote Premium</h3>
                  <p className="text-gray-300 mb-6">A escolha dos profissionais</p>
                  <div className="text-4xl font-black mb-2 text-green-400">R$ 19,90</div>
                  <p className="text-gray-300">Pagamento único + atualizações vitalícias</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-green-400">+10.500 músicas atualizadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Pack de Julho 2025</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-green-400">Atualizações vitalícias</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Músicas mensais novas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Suporte prioritário</span>
                  </li>
                </ul>
                
                <button className="w-full bg-green-500 hover:bg-green-400 text-black py-4 rounded-xl font-black text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30">
                  🚀 COMPRAR PREMIUM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Instructions */}
      <section className="py-16 md:py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-black text-center mb-12 text-white">
              Como Receber seu Pack <span className="text-green-400">EXPLOSIVO</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-xl font-bold mb-4 text-black">1</div>
                <h3 className="text-lg font-bold mb-2 text-green-400">Preencha os dados</h3>
                <p className="text-gray-300">Escolha seu pacote e informe seus dados</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-xl font-bold mb-4 text-black">2</div>
                <h3 className="text-lg font-bold mb-2 text-green-400">Faça o pagamento PIX</h3>
                <p className="text-gray-300">Pague via PIX no seu banco</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-xl font-bold mb-4 text-black">3</div>
                <h3 className="text-lg font-bold mb-2 text-green-400">Receba imediatamente</h3>
                <p className="text-gray-300">Pack enviado direto no seu email</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-green-400">Garantia de 7 dias</h3>
            <p className="text-gray-300">Compra 100% segura. Se não ficar satisfeito, devolvemos seu dinheiro.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">
            Perguntas <span className="text-green-400">Frequentes</span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-bold text-green-400">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-green-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-32 pb-4' : 'max-h-0'}`}>
                  <div className="px-6 text-gray-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Disc3 className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-black text-white">
              Music Pack
            </span>
          </div>
          <p className="text-gray-400">© 2025 Music Pack. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;