import React, { useState } from 'react';
import { 
  Gamepad2, 
  Palette, 
  Video, 
  Gift, 
  Users, 
  Star, 
  ArrowRight,
  Zap,
  Trophy,
  Target,
  Sparkles,
  Mail,
  MessageCircle,
  ArrowLeft
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  price: string;
  desc: string;
  category: 'graphics' | 'video' | 'coaching';
  featured?: boolean;
  fullDescription: string;
}

const services: Service[] = [
  // Graphics Services
  { id: 'banner', name: 'Banner', price: '3€', desc: 'Design personalizzato', category: 'graphics', fullDescription: 'Banner personalizzato con design unico e professionale. Perfetto per canali social, siti web o uso personale.' },
  { id: 'banner-rp', name: 'Banner Server RP', price: '6€', desc: 'Specializzato per RP', category: 'graphics', fullDescription: 'Banner specificamente progettato per server Roleplay, con elementi tematici e design immersivo.' },
  { id: 'banner-pvp', name: 'Banner Server PVP', price: '5€', desc: 'Ottimizzato per PVP', category: 'graphics', fullDescription: 'Banner dinamico e aggressivo, perfetto per server PVP con elementi di combattimento e competizione.' },
  { id: 'logo-static', name: 'Logo Statico', price: '4€', desc: 'Uso personale', category: 'graphics', fullDescription: 'Logo statico professionale per uso personale, brand o progetti individuali.' },
  { id: 'logo-rp', name: 'Logo Server RP', price: '5€', desc: 'Professionale RP', category: 'graphics', fullDescription: 'Logo professionale per server Roleplay, con design elegante e tematico.' },
  { id: 'logo-pvp', name: 'Logo Server PVP', price: '5,50€', desc: 'Professionale PVP', category: 'graphics', fullDescription: 'Logo dinamico per server PVP, con elementi di combattimento e design accattivante.' },
  { id: 'logo-360', name: 'Logo 360°', price: '2€', desc: 'Solo con logo esistente', category: 'graphics', fullDescription: 'Animazione 360° del tuo logo esistente, perfetta per intro e presentazioni.' },
  { id: 'gif-animated', name: 'GIF Animata', price: '5€', desc: 'Animazione personalizzata', category: 'graphics', fullDescription: 'GIF animata personalizzata con effetti e transizioni professionali.' },
  { id: 'gif-rp', name: 'GIF Server RP', price: '6€', desc: 'Animata per RP', category: 'graphics', fullDescription: 'GIF animata tematica per server Roleplay, con elementi immersivi e atmosferici.' },
  { id: 'gif-pvp', name: 'GIF Server PVP', price: '6,50€', desc: 'Animata per PVP', category: 'graphics', fullDescription: 'GIF animata dinamica per server PVP, con effetti di combattimento e azione.' },
  { id: 'complete-package', name: 'Pacchetto Completo', price: '15€', desc: 'Banner + Logo + GIF', category: 'graphics', featured: true, fullDescription: 'Pacchetto completo che include Banner, Logo e GIF coordinati per un brand coerente e professionale.' },
  
  // Video Services
  { id: 'editing-basic', name: 'Editing Base', price: '5€', desc: 'Tagli e transizioni base', category: 'video', fullDescription: 'Editing video base con tagli puliti, transizioni semplici e correzioni di base.' },
  { id: 'editing-medium', name: 'Editing Medio', price: '8€', desc: 'Effetti e color grading', category: 'video', fullDescription: 'Editing video intermedio con effetti speciali, color grading e audio migliorato.' },
  { id: 'editing-advanced', name: 'Editing Avanzato', price: '15€', desc: 'Editing professionale completo', category: 'video', featured: true, fullDescription: 'Editing video professionale completo con effetti avanzati, motion graphics, color grading professionale e audio mastering.' },
  { id: 'intro-custom', name: 'Intro Personalizzata', price: '4€', desc: 'Intro brandizzata', category: 'video', fullDescription: 'Intro personalizzata per i tuoi video con il tuo brand, logo e stile unico.' },
  
  // Coaching
  { id: 'coaching-pvp', name: 'Coaching PVP', price: '4,50€/h', desc: 'Migliora le tue skill PVP', category: 'coaching', fullDescription: 'Sessioni di coaching personalizzate per migliorare le tue abilità PVP in Minecraft. Prima ora scontata a 4€!' }
];

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'service' | 'partnership' | 'gift'>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedPartnership, setSelectedPartnership] = useState<'rp' | 'pvp' | 'general' | null>(null);

  const handleTicketClick = () => {
    window.open('https://discord.gg/evfXVQDnRz', '_blank');
  };

  const handleDiscordJoin = () => {
    window.open('https://discord.gg/evfXVQDnRz', '_blank');
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setCurrentView('service');
  };

  const handlePartnershipClick = (type: 'rp' | 'pvp' | 'general') => {
    setSelectedPartnership(type);
    setCurrentView('partnership');
  };

  const handleGiftClick = () => {
    setCurrentView('gift');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedService(null);
    setSelectedPartnership(null);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Gift Voucher View
  if (currentView === 'gift') {
    return (
      <div className="bg-black min-h-screen text-white relative overflow-hidden">
        {/* Purple Lightning Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-purple-800/20"></div>
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250" 
                    stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" opacity="0.6">
                <animate attributeName="d" 
                         values="M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250;
                                 M100,250 Q200,150 300,200 T500,300 Q600,200 700,250 T900,200;
                                 M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250"
                         dur="4s" repeatCount="indefinite"/>
              </path>
              <path d="M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450" 
                    stroke="#A855F7" strokeWidth="1.5" fill="none" filter="url(#glow)" opacity="0.4">
                <animate attributeName="d" 
                         values="M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450;
                                 M50,450 Q150,350 250,400 T450,500 Q550,400 650,450 T850,400;
                                 M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450"
                         dur="6s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <header className="bg-black/80 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <button 
                  onClick={handleBackToHome}
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                  <ArrowLeft className="h-6 w-6 text-purple-300" />
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/25">
                      <img 
                        src="/public/DISCORD UFFICIALE.png" 
                        alt="XP SHOP Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                      XP SHOP
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </header>

          {/* Gift Voucher Detail */}
          <section className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 border bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-400/30">
                  <Gift className="h-5 w-5 text-pink-300 mr-2" />
                  <span className="font-semibold text-pink-300">BUONI REGALO</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-purple-100 bg-clip-text text-transparent">
                  Buoni Regalo
                </h1>
                
                <p className="text-xl text-gray-200 mb-8">
                  Regala creatività con i nostri buoni regalo!
                </p>
              </div>

              <div className="bg-black/60 border border-pink-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
                <h2 className="text-2xl font-bold mb-6 text-pink-100">Buoni Disponibili</h2>
                
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                  {['5€', '10€', '15€', '20€', '25€', '30€', '35€', '40€', '45€', '50€', '100€'].map((amount) => (
                    <div key={amount} className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 px-4 py-6 rounded-lg text-center hover:from-pink-500/30 hover:to-purple-500/30 transition-all cursor-pointer backdrop-blur-sm">
                      <span className="text-pink-300 font-bold text-lg">{amount}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-pink-200">Come acquistare:</h3>
                  <ol className="text-gray-200 space-y-2">
                    <li className="flex items-start">
                      <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      Entra nel nostro server Discord
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      Apri un ticket specificando l'importo del buono regalo
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      Completa il pagamento
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      Ricevi il codice del buono regalo da regalare!
                    </li>
                  </ol>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 border border-pink-400/30 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-pink-100">Vuoi acquistare un buono regalo?</h3>
                  <p className="text-gray-200 mb-6">
                    Entra nel nostro Discord e apri un ticket per acquistare il tuo buono regalo!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={handleTicketClick}
                      className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center shadow-lg shadow-pink-500/25"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Apri un Ticket
                    </button>
                    <button 
                      onClick={handleDiscordJoin}
                      className="border border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Unisciti al nostro Discord
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Partnership View
  if (currentView === 'partnership' && selectedPartnership) {
    const partnershipData = {
      rp: {
        title: 'Partnership Server RP',
        color: 'red',
        discount: '20%',
        services: services.filter(s => s.id.includes('rp') || s.id === 'complete-package')
      },
      pvp: {
        title: 'Partnership Server PVP',
        color: 'blue',
        discount: '20%',
        services: services.filter(s => s.id.includes('pvp') || s.id === 'complete-package')
      },
      general: {
        title: 'Partnership Generali',
        color: 'green',
        discount: '10%',
        services: services.filter(s => s.category === 'graphics')
      }
    };

    const data = partnershipData[selectedPartnership];
    const colorClasses = {
      red: {
        gradient: 'from-red-500/20 to-purple-500/20',
        border: 'border-red-400/30',
        text: 'text-red-300',
        bg: 'bg-red-500/20',
        button: 'from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 shadow-red-500/25'
      },
      blue: {
        gradient: 'from-blue-500/20 to-purple-500/20',
        border: 'border-blue-400/30',
        text: 'text-blue-300',
        bg: 'bg-blue-500/20',
        button: 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-blue-500/25'
      },
      green: {
        gradient: 'from-green-500/20 to-purple-500/20',
        border: 'border-green-400/30',
        text: 'text-green-300',
        bg: 'bg-green-500/20',
        button: 'from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700 shadow-green-500/25'
      }
    };

    const colors = colorClasses[data.color as keyof typeof colorClasses];

    return (
      <div className="bg-black min-h-screen text-white relative overflow-hidden">
        {/* Purple Lightning Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-purple-800/20"></div>
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250" 
                    stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" opacity="0.6">
                <animate attributeName="d" 
                         values="M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250;
                                 M100,250 Q200,150 300,200 T500,300 Q600,200 700,250 T900,200;
                                 M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250"
                         dur="4s" repeatCount="indefinite"/>
              </path>
              <path d="M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450" 
                    stroke="#A855F7" strokeWidth="1.5" fill="none" filter="url(#glow)" opacity="0.4">
                <animate attributeName="d" 
                         values="M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450;
                                 M50,450 Q150,350 250,400 T450,500 Q550,400 650,450 T850,400;
                                 M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450"
                         dur="6s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <header className="bg-black/80 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <button 
                  onClick={handleBackToHome}
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                  <ArrowLeft className="h-6 w-6 text-purple-300" />
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/25">
                      <img 
                        src="/public/DISCORD UFFICIALE.png" 
                        alt="XP SHOP Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                      XP SHOP
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </header>

          {/* Partnership Detail */}
          <section className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 border bg-gradient-to-r ${colors.gradient} ${colors.border}`}>
                  <Users className={`h-5 w-5 ${colors.text} mr-2`} />
                  <span className={`font-semibold ${colors.text}`}>PARTNERSHIP</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                  {data.title}
                </h1>
                
                <div className={`text-4xl md:text-5xl font-bold mb-8 ${colors.text}`}>
                  -{data.discount} SCONTO
                </div>
              </div>

              <div className={`bg-black/60 border ${colors.border} rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12`}>
                <h2 className="text-2xl font-bold mb-6 text-purple-100">Servizi Inclusi nella Partnership</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {data.services.map((service) => (
                    <div key={service.id} className={`bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-xl p-6 backdrop-blur-sm`}>
                      <h3 className="text-lg font-bold mb-2 text-purple-100">{service.name}</h3>
                      <p className="text-gray-300 mb-3">{service.desc}</p>
                      <div className={`text-2xl font-bold ${colors.text}`}>{service.price}</div>
                    </div>
                  ))}
                </div>
                
                <div className={`bg-gradient-to-r ${colors.gradient} border ${colors.border} rounded-xl p-6`}>
                  <h3 className="text-xl font-bold mb-4 text-purple-200">Come ottenere la partnership:</h3>
                  <ol className="text-gray-200 space-y-2">
                    <li className="flex items-start">
                      <span className={`${colors.bg} text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5`}>1</span>
                      Entra nel nostro server Discord
                    </li>
                    <li className="flex items-start">
                      <span className={`${colors.bg} text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5`}>2</span>
                      Apri un ticket specificando che vuoi una partnership
                    </li>
                    <li className="flex items-start">
                      <span className={`${colors.bg} text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5`}>3</span>
                      Fornisci informazioni sul tuo server/progetto
                    </li>
                    <li className="flex items-start">
                      <span className={`${colors.bg} text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5`}>4</span>
                      Ottieni il tuo sconto partnership!
                    </li>
                  </ol>
                </div>
              </div>

              <div className="text-center">
                <div className={`bg-gradient-to-r ${colors.gradient} border ${colors.border} rounded-2xl p-8 mb-8`}>
                  <h3 className="text-2xl font-bold mb-4 text-purple-100">Interessato alla partnership?</h3>
                  <p className="text-gray-200 mb-6">
                    Entra nel nostro Discord e apri un ticket per richiedere questa partnership!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={handleTicketClick}
                      className={`bg-gradient-to-r ${colors.button} px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center`}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Apri un Ticket
                    </button>
                    <button 
                      onClick={handleDiscordJoin}
                      className={`border ${colors.border} ${colors.text} hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center`}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Unisciti al nostro Discord
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Service Detail View
  if (currentView === 'service' && selectedService) {
    return (
      <div className="bg-black min-h-screen text-white relative overflow-hidden">
        {/* Purple Lightning Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-purple-800/20"></div>
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250" 
                    stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" opacity="0.6">
                <animate attributeName="d" 
                         values="M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250;
                                 M100,250 Q200,150 300,200 T500,300 Q600,200 700,250 T900,200;
                                 M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250"
                         dur="4s" repeatCount="indefinite"/>
              </path>
              <path d="M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450" 
                    stroke="#A855F7" strokeWidth="1.5" fill="none" filter="url(#glow)" opacity="0.4">
                <animate attributeName="d" 
                         values="M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450;
                                 M50,450 Q150,350 250,400 T450,500 Q550,400 650,450 T850,400;
                                 M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450"
                         dur="6s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <header className="bg-black/80 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <button 
                  onClick={handleBackToHome}
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                  <ArrowLeft className="h-6 w-6 text-purple-300" />
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/25">
                      <img 
                        src="/public/DISCORD UFFICIALE.png" 
                        alt="XP SHOP Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                      XP SHOP
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </header>

          {/* Service Detail */}
          <section className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 border ${
                  selectedService.category === 'graphics' 
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30' 
                    : selectedService.category === 'video'
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30'
                    : 'bg-gradient-to-r from-green-500/20 to-purple-500/20 border-green-400/30'
                }`}>
                  {selectedService.category === 'graphics' && <Palette className="h-5 w-5 text-purple-300 mr-2" />}
                  {selectedService.category === 'video' && <Video className="h-5 w-5 text-blue-300 mr-2" />}
                  {selectedService.category === 'coaching' && <Gamepad2 className="h-5 w-5 text-green-300 mr-2" />}
                  <span className={`font-semibold ${
                    selectedService.category === 'graphics' 
                      ? 'text-purple-300' 
                      : selectedService.category === 'video'
                      ? 'text-blue-300'
                      : 'text-green-300'
                  }`}>
                    {selectedService.category === 'graphics' ? 'SERVIZIO GRAFICO' : 
                     selectedService.category === 'video' ? 'VIDEO EDITING' : 'MINECRAFT COACHING'}
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                  {selectedService.name}
                </h1>
                
                <div className={`text-4xl md:text-5xl font-bold mb-8 ${
                  selectedService.category === 'graphics' 
                    ? 'text-purple-300' 
                    : selectedService.category === 'video'
                    ? 'text-blue-300'
                    : 'text-green-300'
                }`}>
                  {selectedService.price}
                </div>

                {selectedService.featured && (
                  <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <Sparkles className="h-4 w-4 mr-2" />
                    {selectedService.category === 'video' ? 'SERVIZIO PRO' : 'PIÙ POPOLARE'}
                  </div>
                )}
              </div>

              <div className="bg-black/60 border border-purple-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
                <h2 className="text-2xl font-bold mb-6 text-purple-100">Descrizione del Servizio</h2>
                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                  {selectedService.fullDescription}
                </p>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-200">Come procedere:</h3>
                  <ol className="text-gray-200 space-y-2">
                    <li className="flex items-start">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      Entra nel nostro server Discord
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      Apri un ticket specificando il servizio desiderato
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      Fornisci tutti i dettagli e le tue preferenze
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      Ricevi il tuo lavoro personalizzato!
                    </li>
                  </ol>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-400/30 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-purple-100">Pronto per iniziare?</h3>
                  <p className="text-gray-200 mb-6">
                    Entra nel nostro Discord e apri un ticket per richiedere questo servizio!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={handleTicketClick}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center shadow-lg shadow-purple-500/25"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Apri un Ticket
                    </button>
                    <button 
                      onClick={handleDiscordJoin}
                      className="border border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Unisciti al nostro Discord
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* Purple Lightning Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-purple-800/20"></div>
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path d="M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250" 
                  stroke="#8B5CF6" strokeWidth="2" fill="none" filter="url(#glow)" opacity="0.6">
              <animate attributeName="d" 
                       values="M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250;
                               M100,250 Q200,150 300,200 T500,300 Q600,200 700,250 T900,200;
                               M100,200 Q200,100 300,250 T500,200 Q600,150 700,300 T900,250"
                       dur="4s" repeatCount="indefinite"/>
            </path>
            <path d="M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450" 
                  stroke="#A855F7" strokeWidth="1.5" fill="none" filter="url(#glow)" opacity="0.4">
              <animate attributeName="d" 
                       values="M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450;
                               M50,450 Q150,350 250,400 T450,500 Q550,400 650,450 T850,400;
                               M50,400 Q150,300 250,450 T450,400 Q550,350 650,500 T850,450"
                       dur="6s" repeatCount="indefinite"/>
            </path>
            <path d="M200,600 Q300,500 400,650 T600,600 Q700,550 800,700 T1000,650" 
                  stroke="#9333EA" strokeWidth="1" fill="none" filter="url(#glow)" opacity="0.3">
              <animate attributeName="d" 
                       values="M200,600 Q300,500 400,650 T600,600 Q700,550 800,700 T1000,650;
                               M200,650 Q300,550 400,600 T600,700 Q700,600 800,650 T1000,600;
                               M200,600 Q300,500 400,650 T600,600 Q700,550 800,700 T1000,650"
                       dur="5s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
        {/* Animated lightning bolts */}
        <div className="absolute top-20 left-10 w-1 h-32 bg-gradient-to-b from-purple-400 to-transparent opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-24 bg-gradient-to-b from-purple-500 to-transparent opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-28 bg-gradient-to-b from-purple-400 to-transparent opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-20 bg-gradient-to-b from-purple-500 to-transparent opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black/80 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/25">
                  <img 
                    src="/public/DISCORD UFFICIALE.png" 
                    alt="XP SHOP Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                  XP SHOP
                </span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#services" className="text-gray-300 hover:text-purple-300 transition-colors">Servizi</a>
                <a href="#partnership" className="text-gray-300 hover:text-purple-300 transition-colors">Partnership</a>
                <a href="#pricing" className="text-gray-300 hover:text-purple-300 transition-colors">Prezzi</a>
                <a href="#contact" className="text-gray-300 hover:text-purple-300 transition-colors">Contatti</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-purple-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                XP SHOP
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Il tuo punto di riferimento per <span className="text-purple-300 font-semibold">servizi grafici personalizzati</span>, 
                <span className="text-purple-200 font-semibold"> editing video professionale</span> e 
                <span className="text-purple-100 font-semibold"> coaching Minecraft</span>
              </p>
              <p className="text-lg text-gray-300 mb-12">
                Soluzioni rapide, su misura e adatte a ogni esigenza — per server RP, PVP o uso personale
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToServices}
                  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center shadow-lg shadow-purple-500/25"
                >
                  Scopri i Servizi
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section id="partnership" className="py-16 px-6 bg-black/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-purple-400/20 px-4 py-2 rounded-full mb-4 border border-purple-500/30">
                <Users className="h-5 w-5 text-purple-300 mr-2" />
                <span className="text-purple-300 font-semibold">PARTNERSHIP</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-purple-100">Unisciti a noi</h2>
              <p className="text-gray-300 text-lg">Ottieni sconti esclusivi con una partnership</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <button
                onClick={() => handlePartnershipClick('rp')}
                className="bg-gradient-to-br from-red-500/10 to-purple-500/10 border border-red-400/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all backdrop-blur-sm text-left w-full"
              >
                <div className="bg-red-500/20 p-3 rounded-lg w-fit mb-4">
                  <Target className="h-6 w-6 text-red-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-red-300">Server RP</h3>
                <p className="text-gray-200 mb-4">20% di sconto su Servizi Grafici RP e Video Editor</p>
                <div className="bg-red-500/20 px-3 py-1 rounded-full text-red-300 text-sm font-semibold w-fit">
                  -20% SCONTO
                </div>
              </button>
              
              <button
                onClick={() => handlePartnershipClick('pvp')}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all backdrop-blur-sm text-left w-full"
              >
                <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
                  <Zap className="h-6 w-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-300">Server PVP</h3>
                <p className="text-gray-200 mb-4">20% di sconto su Servizi Grafici PVP e Video Editor</p>
                <div className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm font-semibold w-fit">
                  -20% SCONTO
                </div>
              </button>
              
              <button
                onClick={() => handlePartnershipClick('general')}
                className="bg-gradient-to-br from-green-500/10 to-purple-500/10 border border-green-400/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all backdrop-blur-sm text-left w-full"
              >
                <div className="bg-green-500/20 p-3 rounded-lg w-fit mb-4">
                  <Star className="h-6 w-6 text-green-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-300">Partnership Generali</h3>
                <p className="text-gray-200 mb-4">10% di sconto su tutti i Servizi Grafici</p>
                <div className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm font-semibold w-fit">
                  -10% SCONTO
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Gift Vouchers */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-4 border border-pink-400/30">
              <Gift className="h-5 w-5 text-pink-300 mr-2" />
              <span className="text-pink-300 font-semibold">BUONI REGALO</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-purple-100">Regala creatività!</h2>
            <p className="text-gray-300 text-lg mb-8">Buoni regalo disponibili per tutti i servizi</p>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
              {['5€', '10€', '15€', '20€', '25€', '30€', '35€', '40€', '45€', '50€', '100€'].map((amount) => (
                <button
                  key={amount}
                  onClick={handleGiftClick}
                  className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 px-4 py-2 rounded-lg hover:from-pink-500/30 hover:to-purple-500/30 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <span className="text-pink-300 font-semibold">{amount}</span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={handleGiftClick}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-pink-500/25"
            >
              Scopri i Buoni Regalo
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-6 bg-black/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-purple-100">I Nostri Servizi</h2>
              <p className="text-gray-300 text-lg">Soluzioni professionali per ogni esigenza</p>
            </div>

            {/* Graphics Services */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-purple-400/30">
                  <div className="flex items-center">
                    <Palette className="h-5 w-5 text-purple-300 mr-2" />
                    <span className="text-purple-300 font-semibold">SERVIZI GRAFICI</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.filter(s => s.category === 'graphics').map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service)}
                    className={`bg-black/60 border ${service.featured ? 'border-purple-400 bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'border-purple-500/30'} rounded-xl p-6 hover:transform hover:scale-105 transition-all backdrop-blur-sm text-left w-full`}
                  >
                    {service.featured && (
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 w-fit">
                        <Sparkles className="inline h-4 w-4 mr-1" />
                        POPOLARE
                      </div>
                    )}
                    <h3 className="text-lg font-bold mb-2 text-purple-100">{service.name}</h3>
                    <p className="text-gray-300 mb-3">{service.desc}</p>
                    <div className="text-2xl font-bold text-purple-300">{service.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Video Services */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-blue-400/30">
                  <div className="flex items-center">
                    <Video className="h-5 w-5 text-blue-300 mr-2" />
                    <span className="text-blue-300 font-semibold">VIDEO EDITING</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {services.filter(s => s.category === 'video').map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service)}
                    className={`bg-black/60 border ${service.featured ? 'border-blue-400 bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'border-blue-400/30'} rounded-xl p-6 hover:transform hover:scale-105 transition-all backdrop-blur-sm text-left w-full`}
                  >
                    {service.featured && (
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 w-fit">
                        <Trophy className="inline h-4 w-4 mr-1" />
                        PRO
                      </div>
                    )}
                    <h3 className="text-lg font-bold mb-2 text-blue-200">{service.name}</h3>
                    <p className="text-gray-300 mb-3">{service.desc}</p>
                    <div className="text-2xl font-bold text-blue-300">{service.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Minecraft Coaching */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gradient-to-r from-green-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-green-400/30">
                  <div className="flex items-center">
                    <Gamepad2 className="h-5 w-5 text-green-300 mr-2" />
                    <span className="text-green-300 font-semibold">MINECRAFT COACHING</span>
                  </div>
                </div>
              </div>
              
              <div className="max-w-md mx-auto">
                {services.filter(s => s.category === 'coaching').map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service)}
                    className="bg-gradient-to-br from-green-500/20 to-purple-500/20 border border-green-400/30 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all backdrop-blur-sm w-full"
                  >
                    <div className="bg-green-500/20 p-4 rounded-full w-fit mx-auto mb-4">
                      <Trophy className="h-8 w-8 text-green-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-green-300">{service.name}</h3>
                    <p className="text-gray-200 mb-4">{service.desc}</p>
                    <div className="text-3xl font-bold text-green-300 mb-2">{service.price}</div>
                    <div className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm font-semibold w-fit mx-auto">
                      Solo 4€ per la prima ora!
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-4 border border-orange-400/30">
              <MessageCircle className="h-5 w-5 text-orange-300 mr-2" />
              <span className="text-orange-300 font-semibold">SERVIZI EXTRA</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-purple-100">Hai bisogno di altro?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Richieste personalizzate? Apri un ticket per collaborazioni o pacchetti su misura!
              <br />Clienti abituali? Sconti disponibili su acquisti multipli!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleTicketClick}
                className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center shadow-lg shadow-purple-500/25"
              >
                <Mail className="mr-2 h-5 w-5" />
                Apri un Ticket
              </button>
              <button 
                onClick={handleDiscordJoin}
                className="border border-orange-400 text-orange-300 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Unisciti al nostro Discord
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/80 border-t border-purple-500/30 py-12 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/25">
                  <img 
                    src="/public/DISCORD UFFICIALE.png" 
                    alt="XP SHOP Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                  XP SHOP
                </span>
              </div>
              <div className="text-gray-300 text-center md:text-right">
                <p className="mb-2">Servizi grafici, video editing e coaching Minecraft</p>
                <p className="text-sm">© 2024 XP SHOP. Tutti i diritti riservati.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;