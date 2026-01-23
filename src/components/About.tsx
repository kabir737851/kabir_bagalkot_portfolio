import { BookOpen, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey in cybersecurity and what drives me
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who I Am</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                I'm a passionate cybersecurity professional with a strong focus on Security Operations Center (SOC)
                activities, threat detection, and incident response. My journey into cybersecurity began with a
                fascination for understanding how systems can be protected against evolving cyber threats.
              </p>
              <p>
                Through hands-on experience in SOC monitoring, SIEM analysis, and threat hunting, I've developed
                a comprehensive skill set that enables me to identify, investigate, and respond to security incidents
                effectively. I believe in continuous learning and staying updated with the latest threat landscape,
                attack techniques, and defensive strategies.
              </p>
              <p>
                My approach combines technical expertise with analytical thinking, allowing me to not just detect
                threats but also understand the adversary's tactics, techniques, and procedures (TTPs) using
                frameworks like MITRE ATT&CK. I'm committed to contributing to a safer digital environment through
                proactive security measures and rapid incident response.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-3">Currently Learning</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Advanced threat hunting techniques
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Cloud security (AWS, Azure)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Malware analysis and reverse engineering
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Security automation with SOAR platforms
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Kubernetes security
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-600">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-3">Career Goals</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  SOC Analyst (Tier 2/3)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Threat Hunter
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Incident Response Analyst
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Security Engineer
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Penetration Tester
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-600">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-3">Interests</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  CTF competitions
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Bug bounty hunting
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Open-source security tools
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Security research & blogging
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Cybersecurity community building
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
