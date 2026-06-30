import { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  Phone,
  Briefcase,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');

    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm actively seeking opportunities as a <strong>SOC Analyst</strong>,
            <strong> Security Analyst</strong>, or{' '}
            <strong>IT Risk &amp; Controls Analyst</strong>. Whether you'd like
            to discuss cybersecurity, compliance, or potential collaborations,
            I'd love to connect.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="kabirbagalkot99@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Job Opportunity / Collaboration"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about the role, project, collaboration, or cybersecurity opportunity you'd like to discuss..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  {submitStatus === 'sending' ? (
                    <>Sending...</>
                  ) : submitStatus === 'success' ? (
                    <>Message Sent!</>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center font-semibold">
                    Thank you for reaching out! I'll respond as soon as possible.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>

                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>

                    <a
                      href="mailto:kabirbagalkot99@gmail.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      kabirbagalkot99@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>

                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>

                    <a
                      href="tel:+917666007228"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      +91 7666007228
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>

                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Location
                    </h4>

                    <p className="text-gray-700">
                      Pune, Maharashtra, India
                    </p>

                    <p className="text-sm text-gray-600">
                      Open to Remote, Hybrid & On-site Opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* Open to Opportunities */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-blue-700" />
                  <h4 className="text-lg font-bold text-gray-900">
                    Open to Opportunities
                  </h4>
                </div>

                <ul className="space-y-2 text-gray-700">
                  <li>• SOC Analyst (L1)</li>
                  <li>• Security Analyst</li>
                  <li>• IT Risk & Controls (ITGC)</li>
                  <li>• Blue Team Operations</li>
                  <li>• Remote, Hybrid & On-site Roles</li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Connect With Me
                </h4>

                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/kabir-bagalkot-35a3181a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-4 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  >
                    <Linkedin className="w-5 h-5 text-blue-700" />
                    LinkedIn Profile
                  </a>

                  <a
                    href="https://github.com/kabir737851"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-4 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  >
                    <Github className="w-5 h-5 text-gray-900" />
                    GitHub Profile
                  </a>

                  <a
                    href="mailto:kabirbagalkot99@gmail.com"
                    className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-4 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  >
                    <Mail className="w-5 h-5 text-red-600" />
                    Email Me Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;