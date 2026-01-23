import { Shield, Activity, Search, Database, Network, Bug, Code, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'SOC Operations',
      skills: [
        'SOC Monitoring & Incident Detection',
        'Incident Triage and Escalation',
        'Security Playbooks & Runbooks',
        'Alert Investigation & Response',
      ],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Threat Hunting & Analysis',
      skills: [
        'Threat Hunting & IOC Enrichment',
        'MITRE ATT&CK Framework Mapping',
        'Kill Chain Analysis',
        'Behavioral Threat Detection',
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'SIEM & Log Analysis',
      skills: [
        'SIEM Tools (Splunk, QRadar, Sentinel)',
        'Log Analysis & Correlation',
        'Event Correlation & Detection',
        'Query Development (SPL, KQL)',
      ],
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Network Security',
      skills: [
        'Network Traffic Analysis (Wireshark)',
        'TCP/IP, DNS, HTTP/HTTPS Protocols',
        'Packet Capture & Analysis',
        'Network Anomaly Detection',
      ],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Endpoint Security',
      skills: [
        'EDR Tools (Microsoft Defender)',
        'CrowdStrike Falcon',
        'Endpoint Forensics',
        'Malware Analysis Basics',
      ],
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: 'Web Application Security',
      skills: [
        'OWASP Top 10 Testing',
        'Vulnerability Assessment',
        'Bug Bounty Methodologies',
        'Security Code Review',
      ],
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Vulnerability Management',
      skills: [
        'Vulnerability Scanning',
        'Risk Assessment & Prioritization',
        'Patch Management',
        'Compliance Auditing',
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Security Automation',
      skills: [
        'Python Scripting for Security',
        'Bash Automation',
        'API Integration',
        'SOAR Platform Experience',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across multiple domains of cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-sm text-gray-700 flex items-start"
                  >
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
