import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { 
  Github, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Twitch, 
  Mail, 
  Menu, 
  X,
  Code,
  Music,
  Plane,
  Camera,
  Gamepad2,
  ChartBar,
  Home,
  User,
  Share2,
  MessageSquare,
  Layers,
  FileText,
  Shield
} from 'lucide-react';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for background effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  // Navigation items
  const navItems = [
    { id: 'home', label: 'Über Mich', icon: <Home className="w-5 h-5" /> },
    { id: 'interests', label: 'Interessen', icon: <User className="w-5 h-5" /> },
    { id: 'social', label: 'Social Media', icon: <Share2 className="w-5 h-5" /> },
    { id: 'contact', label: 'Kontakt', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'impressum', label: 'Impressum', icon: <FileText className="w-5 h-5" /> },
    { id: 'datenschutz', label: 'Datenschutz', icon: <Shield className="w-5 h-5" /> }
  ];

  // Social media links
  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, name: 'GitHub', url: 'https://github.com/0xChri2' },
    { icon: <Instagram className="w-6 h-6" />, name: 'Instagram', url: 'https://www.instagram.com/chrisindustries.de/?next=%2F&hl=de' },
    { icon: <Twitter className="w-6 h-6" />, name: 'X', url: 'https://x.com/0xChri2' },
    { icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/0xchri2/' },
    { icon: <Youtube className="w-6 h-6" />, name: 'YouTube', url: 'https://www.youtube.com/@0xChri2' },
    { icon: <Twitch className="w-6 h-6" />, name: 'Twitch', url: 'https://twitch.tv/' }
  ];

  // Interests with icons
  const interests = [
    {
      icon: <Code className="w-8 h-8" />,
      name: 'Technologie',
      description: 'Ich bin fasziniert von den endlosen Möglichkeiten, die die Technologie und Künstliche Intelligenz bietet. Sie verändert die Welt und ich liebe es, die neuesten Entwicklungen zu verfolgen.'
    },
    {
      icon: <ChartBar className="w-8 h-8" />,
      name: 'Trading',
      description: 'Der Finanzmarkt hat mich immer gereizt. Es ist eine Mischung aus Strategie, Analyse und psychologischer Stärke, die mich immer wieder herausfordert.'
    },
    {
      icon: <Music className="w-8 h-8" />,
      name: 'Musik',
      description: 'Musik ist für mich nicht nur Unterhaltung, sondern eine Möglichkeit, mich auszudrücken und die Welt um mich herum zu interpretieren.'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      name: 'Reisen',
      description: 'Reisen ermöglicht mir, verschiedene Kulturen zu erleben und neue Perspektiven zu gewinnen. Jeder Ort hat eine einzigartige Geschichte, die ich gerne entdecke.'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      name: 'Fotografie',
      description: 'Das Erstellen und Bearbeiten von Bilder ist eine meiner Leidenschaften. Es ermöglicht mir, Momente festzuhalten und kreativ zu sein.'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      name: 'Gaming',
      description: 'Gaming ist nicht nur ein Hobby, sondern eine Leidenschaft. Es bietet mir eine Auszeit.'
    }
  ];
  // Twitter posts

  const tweets = [
    { id: '1896110478071635991' },
    { id: '1895808994419360163' },
    { id: '1874893059185676579' }
  ];

  const [tweetOptions, setTweetOptions] = useState({
    theme: 'dark',
    align: 'center',
    dnt: true,
    width: window.innerWidth < 768 ? '100%' : undefined,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setTweetOptions({
        theme: 'dark',
        align: 'center',
        dnt: true,
        width: window.innerWidth < 768 ? '100%' : undefined,
      });
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  /*const twitterPosts = [
    {
      id: 1,
      content: "Gerade ein spannendes neues Projekt gestartet! #coding #webdesign",
      date: "Vor 2 Stunden",
      likes: 24,
      retweets: 5
    },
    {
      id: 2,
      content: "Die neue Version von React ist beeindruckend. Hier sind meine ersten Eindrücke und Tipps für den Einstieg! #reactjs #webdev",
      date: "Vor 2 Tagen",
      likes: 156,
      retweets: 42
    },
    {
      id: 3,
      content: "Auf dem Weg zur #TechConference2025! Wer ist auch dort? Lasst uns treffen!",
      date: "Vor 5 Tagen",
      likes: 89,
      retweets: 12
    }
  ];*/

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans relative overflow-hidden"
      style={{
        backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute rounded-full w-96 h-96 bg-purple-500/10 blur-3xl"
          style={{ 
            top: `${mousePosition.y * 30}%`, 
            left: `${mousePosition.x * 30}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div 
          className="absolute rounded-full w-96 h-96 bg-blue-500/10 blur-3xl"
          style={{ 
            bottom: `${(1-mousePosition.y) * 30}%`, 
            right: `${(1-mousePosition.x) * 30}%`,
            transform: 'translate(50%, 50%)'
          }}
        ></div>
      </div>

      {/* Mobile Navigation Header */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md blur-sm opacity-70"></div>
              <div className="relative z-10 flex items-center justify-center w-full h-full bg-gray-900/80 rounded-md border border-purple-500/30">
                <img src="/src/assets/chrisindustries.png" alt="Logo" className="w-10 h-10 object-cover rounded-md" />
              </div>
            </div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Chris Indstries
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800 py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.id 
                      ? 'text-purple-400' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Left Navigation */}
      <div className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 bg-gray-900/80 backdrop-blur-md border-r border-gray-800 z-50 flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="relative w-13 h-12">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md blur-sm opacity-70 animate-pulse"></div>
              <div className="relative z-10 flex items-center justify-center w-full h-full bg-gray-900/80 rounded-md border border-purple-500/30">
              <img src="/src/assets/chrisindustries.png" alt="Logo" className="w-14 h-12 object-cover rounded-md" />
              </div>
            </div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Chris Industries
            </div>
          </div>
          <div className="flex flex-col space-y-6 mt-10">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-3 transition-all duration-300 hover:text-purple-400 ${
                  activeSection === item.id 
                    ? 'text-purple-400 bg-gray-800/50 rounded-lg p-3 border-l-4 border-purple-500' 
                    : 'text-gray-300 p-3'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-auto p-6 border-t border-gray-800">
          <div className="flex justify-between">
            {socialLinks.slice(0, 4).map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans relative overflow-hidden">
      {/* Main Content */}
      <main className="flex-1 md:ml-64 px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* About Me Section */}
          <section 
            id="home" 
            className={`transition-opacity duration-500 ${
              activeSection === 'home' ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                  Willkommen
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                    Christoph 
                </p>
                <p className="text-gray-400 mb-8">
                Ich bin Christoph und spezialisiere mich auf Finanzanalysen, bei denen ich Techniken wie die Elliott-Wellen-Theorie und andere Methoden der technischen Analyse einsetze, um präzise Prognosen zu treffen und Handelsstrategien zu entwickeln. Gleichzeitig bin ich ein begeisterter IT-Lernender, der sich mit der Welt der Informatik beschäftigt und neue Technologien und Programme studiert. In meiner Freizeit bin ich leidenschaftlicher Fotograf und fokussiere mich auf Porträts, Autos und Landschaften. Auf meiner Webseite teile ich meine vielseitigen Interessen, die sowohl meine analytische als auch kreative Seite widerspiegeln. Lass dich inspirieren!
                </p>
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Kontaktiere Mich
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <img 
                    src="/src/assets/chris.jpg" 
                    alt="Profilbild" 
                    className="w-64 h-64 object-cover rounded-full border-4 border-gray-800 relative z-10"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Interests Section */}
          <section 
            id="interests" 
            className={`transition-opacity duration-500 ${
              activeSection === 'interests' ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Meine Interessen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {interests.map((interest, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
                >
                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 rounded-lg inline-block mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    {interest.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{interest.name}</h3>
                  <p className="text-gray-400">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          
          {/* Social Media Section with Twitter Highlight */}
          <section 
            id="social" 
            className={`transition-opacity duration-500 ${
              activeSection === 'social' ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Meine Kanäle
            </h2>
            
            {/* Twitter Highlight */}
            <div className="mb-12 bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 shadow-lg shadow-blue-500/5">
              <div className="flex items-center gap-4 mb-6">
                <Twitter className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-semibold text-blue-300">Meine neuesten Tweets</h3>
              </div>
              
              <div className="space-y-6">
                {tweets.map(tweet => (
                  <div key={tweet.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
<TwitterTweetEmbed tweetId={tweet.id} options={tweetOptions} />                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href="https://x.com/0xChri2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 rounded-full text-blue-300 font-medium transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Folge mir auf Twitter</span>
                </a>
              </div>
            </div>
            
            {/* Other Social Media */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {socialLinks.filter(social => social.name !== 'Twitter').map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
                >
                  <div className="text-gray-400 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 mb-3">
                    {social.icon}
                  </div>
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section 
            id="contact" 
            className={`transition-opacity duration-500 ${
              activeSection === 'contact' ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Kontakt
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4">Schreib mir eine Nachricht</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Nachricht</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    Senden
                  </button>
                </form>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Kontaktinformationen</h3>
                  <p className="text-gray-400 mb-8">
                    Sie können mich auch direkt über folgende Wege erreichen:
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="mailto:business@chris-industries.de" 
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5" />
                      <span>business@chris-industries.de</span>
                    </a>
                    {socialLinks.slice(0, 3).map((social, index) => (
                      <a 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                      >
                        {social.icon}
                        <span>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-gray-400">
                    Ich freue mich auf Ihre Nachricht.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Impressum Section */}
        <section 
            id="impressum" 
            className={`transition-opacity duration-500 ${
              activeSection === 'impressum' ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Impressum
            </h2>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <p className="text-gray-400 mb-4">
                Angaben gemäß § 5 TMG:
              </p>
              <p className="text-gray-400 mb-4">
                Christoph Riedel<br />
                Lehmkuhler Weg 47<br />
                40723 Hilden
              </p>
              <p className="text-gray-400 mb-4">
                Kontakt:<br />
                E-Mail: business@chris-industries.de
              </p>
              <p className="text-gray-400 mb-4">
                Haftungsausschluss:<br />
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </section>

          {/* Datenschutz Section */}
          <section 
            id="datenschutz" 
            className={`transition-opacity duration-500 ${
              activeSection === 'datenschutz' ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Datenschutz
            </h2>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <p className="text-gray-400 mb-4">
                Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung von Chris Industries. Eine Nutzung der Internetseiten von Chris Industries ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden.
              </p>
              <p className="text-gray-400 mb-4">
                Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in Übereinstimmung mit den für Chris Industries geltenden landesspezifischen Datenschutzbestimmungen.
              </p>
              <p className="text-gray-400 mb-4">
                Mittels dieser Datenschutzerklärung möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.
              </p>
              <p className="text-gray-400 mb-4">
                Name und Anschrift des für die Verarbeitung Verantwortlichen:<br />
                Christoph Riedel<br />
                Lehmkuhler Weg 47<br />
                40723 Hilden<br />
                Deutschland<br />
                E-Mail: business@chris-industries.de
              </p>
              <p className="text-gray-400 mb-4">
                Erfassung von allgemeinen Daten und Informationen:<br />
                Die Internetseite von Chris Industries erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.
              </p>
              <p className="text-gray-400 mb-4">
                Diese Informationen werden benötigt, um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite sowie die Werbung für diese zu optimieren, (3) die dauerhafte Funktionsfähigkeit unserer informationstechnologischen Systeme und der Technik unserer Internetseite zu gewährleisten sowie (4) Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch Chris Industries daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz und die Datensicherheit in unserem Unternehmen zu erhöhen, um letztlich ein optimales Schutzniveau für die von uns verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.
              </p>
            </div>
          </section>
      </main>

      {/* Footer */}
      <footer className="md:ml-64 bg-gray-900/80 backdrop-blur-md border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0"> 
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md blur-sm opacity-70"></div>
                <div className="relative z-10 flex items-center justify-center w-full h-full bg-gray-900/80 rounded-md border border-purple-500/30">
                  <img src="/src/assets/chrisindustries.png" alt="Logo" className="w-10 h-10 object-cover rounded-md" />
                </div>
              </div>
              <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Chris Industries
              </div>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => setActiveSection('impressum')}
                className="hover:text-white transition-colors duration-300"
              >
                Impressum
              </button>
              <button 
                onClick={() => setActiveSection('datenschutz')}
                className="hover:text-white transition-colors duration-300"
              >
                Datenschutz
              </button>
            </div>
            <div className="mt-4">
              © {new Date().getFullYear()} Chris Industries. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>
</div>
    </div>
  );
}

export default App;