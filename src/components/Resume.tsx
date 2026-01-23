import { Download, FileText, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    alert('Update this with your actual resume PDF link');
  };

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download my complete professional resume
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">Professional Resume</h3>
                    <p className="text-gray-600">Last updated: January 2024</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Briefcase className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Experience Highlights</h4>
                      <p className="text-gray-600 text-sm">
                        SOC operations, threat hunting, SIEM analysis, incident response
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <GraduationCap className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Education & Certifications</h4>
                      <p className="text-gray-600 text-sm">
                        Security+, CSA, specialized training programs
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  <Download size={24} />
                  Download Resume (PDF)
                </button>

                <p className="text-sm text-gray-500 mt-4">
                  File size: ~250KB | Format: PDF
                </p>
              </div>

              <div className="hidden md:block">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                  <div className="bg-white rounded-lg shadow-md p-6 w-48 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-blue-600 mx-auto mb-3" />
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto"></div>
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-5/6 mx-auto"></div>
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-2/3 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Professional summary
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Work experience
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Technical skills
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Education & certifications
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Key projects
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Contact information
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
