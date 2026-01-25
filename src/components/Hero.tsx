import { Download, Github, Mail, FolderKanban } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
              Kabir Bagalkot
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-300 mb-6 animate-slide-up animation-delay-100">
              Cybersecurity Analyst | Aspiring SOC Analyst
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
              Specialized in SOC monitoring, incident detection, threat hunting, SIEM investigations,
              and web security testing. Dedicated to identifying and mitigating security threats
              through proactive analysis and continuous monitoring.
            </p>

            <div className="flex flex-wrap gap-4 justify-center animate-slide-up animation-delay-300">
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <FolderKanban size={20} />
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </button>
              <a
                href="https://github.com/kabir737851"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Github size={20} />
                GitHub
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
