import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  category: string;
  tools: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      name: 'SIEM Dashboard & Alert Automation',
      description: 'Built a custom SIEM dashboard to correlate security events and automate alert triage using Splunk and Python.',
      category: 'SOC/SIEM',
      tools: ['Splunk', 'Python', 'REST API', 'SPL'],
      highlights: [
        'Reduced false positives by 40%',
        'Automated alert enrichment',
        'Real-time threat correlation',
      ],
      githubUrl: 'https://github.com/yourusername/siem-dashboard',
    },
    {
      name: 'Threat Hunting Framework',
      description: 'Developed a threat hunting framework using MITRE ATT&CK to proactively identify IOCs and suspicious behaviors.',
      category: 'Threat Hunting',
      tools: ['Python', 'MITRE ATT&CK', 'Sigma Rules', 'ElasticSearch'],
      highlights: [
        'Mapped 50+ attack techniques',
        'Created custom detection rules',
        'Integrated IOC feeds',
      ],
      githubUrl: 'https://github.com/yourusername/threat-hunting',
    },
    {
      name: 'Web Vulnerability Scanner',
      description: 'Created an automated web vulnerability scanner based on OWASP Top 10 for bug bounty reconnaissance.',
      category: 'Web Security',
      tools: ['Python', 'Burp Suite', 'OWASP ZAP', 'BeautifulSoup'],
      highlights: [
        'Scans for XSS, SQLi, CSRF',
        'Generates detailed reports',
        'Supports bulk scanning',
      ],
      githubUrl: 'https://github.com/yourusername/vuln-scanner',
    },
    {
      name: 'Incident Response Playbooks',
      description: 'Comprehensive incident response playbooks covering ransomware, phishing, and data breach scenarios.',
      category: 'SOC/SIEM',
      tools: ['NIST Framework', 'MITRE ATT&CK', 'Markdown', 'Documentation'],
      highlights: [
        'Step-by-step response procedures',
        'Includes containment strategies',
        'Aligned with industry standards',
      ],
      githubUrl: 'https://github.com/yourusername/ir-playbooks',
    },
    {
      name: 'Log Analysis Toolkit',
      description: 'Python toolkit for parsing and analyzing security logs from multiple sources including Windows Event Logs and Syslog.',
      category: 'Automation',
      tools: ['Python', 'Pandas', 'Regex', 'JSON'],
      highlights: [
        'Multi-format log parsing',
        'Automated anomaly detection',
        'Export to SIEM formats',
      ],
      githubUrl: 'https://github.com/yourusername/log-toolkit',
    },
    {
      name: 'Network Traffic Analyzer',
      description: 'Built a network traffic analysis tool using Wireshark and Python to detect malicious patterns and anomalies.',
      category: 'Threat Hunting',
      tools: ['Python', 'Scapy', 'Wireshark', 'NetworkX'],
      highlights: [
        'Real-time packet inspection',
        'Protocol analysis',
        'Malicious traffic detection',
      ],
      githubUrl: 'https://github.com/yourusername/traffic-analyzer',
    },
    {
      name: 'Security Automation Scripts',
      description: 'Collection of Python and Bash scripts for automating common security tasks and workflows.',
      category: 'Automation',
      tools: ['Python', 'Bash', 'APIs', 'Cron'],
      highlights: [
        'Automated vulnerability scanning',
        'Report generation',
        'Integration with ticketing systems',
      ],
      githubUrl: 'https://github.com/yourusername/sec-automation',
    },
    {
      name: 'OWASP Top 10 Lab Environment',
      description: 'Created a vulnerable web application lab for practicing OWASP Top 10 exploitation techniques.',
      category: 'Web Security',
      tools: ['Docker', 'PHP', 'MySQL', 'DVWA'],
      highlights: [
        'Hands-on vulnerability practice',
        'Dockerized environment',
        'Training documentation included',
      ],
      githubUrl: 'https://github.com/yourusername/owasp-lab',
    },
  ];

  const categories = ['All', 'SOC/SIEM', 'Web Security', 'Threat Hunting', 'Automation'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects & Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical implementations and hands-on security projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">
                    {project.name}
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
