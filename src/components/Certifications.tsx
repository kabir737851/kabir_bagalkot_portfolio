import { Award, ExternalLink, CheckCircle } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  proofUrl?: string;
  status: 'completed' | 'in-progress';
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2024',
      credentialId: 'COMP001234567',
      proofUrl: 'https://www.credly.com/badges/example',
      status: 'completed',
    },
    {
      name: 'Blue Team Level 1 (BTL1)',
      issuer: 'Security Blue Team',
      date: 'In Progress',
      status: 'in-progress',
    },
  ];

  const completedCerts = certifications.filter(cert => cert.status === 'completed');
  const inProgressCerts = certifications.filter(cert => cert.status === 'in-progress');

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Training
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Completed Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedCerts.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                      Certified
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Issuer:</span> {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Date:</span> {cert.date}
                  </p>
                  {cert.credentialId && (
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-semibold">ID:</span> {cert.credentialId}
                    </p>
                  )}
                  {cert.proofUrl && (
                    <a
                      href={cert.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                    >
                      Verify Credential
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <TrendingUp className="w-6 h-6 text-orange-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">In Progress</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inProgressCerts.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <span className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
                      In Progress
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Issuer:</span> {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Expected:</span> {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrendingUp = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export default Certifications;
