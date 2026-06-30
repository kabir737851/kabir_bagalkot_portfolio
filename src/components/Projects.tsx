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
      name: 'SOC Analyst Home Lab',
      description: 'Built a VMware-based SOC home lab with Kali Linux and Metasploitable 3, integrated Splunk and Wazuh for log collection, alerting, and incident investigation.',
      category: 'SOC/SIEM',
      tools: ['VMware', 'Kali Linux', 'Metasploitable 3', 'Splunk', 'Wazuh', 'Wireshark', 'MITRE ATT&CK'],
      highlights: [
        'Simulated real attack scenarios mapped to MITRE ATT&CK',
        'Centralized log collection and alert investigation',
        'Network traffic analysis using Wireshark',
      ],
      githubUrl: 'https://github.com/kabir737851/SOC-Home-Lab',
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
