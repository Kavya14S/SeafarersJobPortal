import { useState } from 'react';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaClock, FaPaperPlane, FaCheck 
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Maritime Careers
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our recruitment team for any inquiries about job opportunities or support.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Phone Support */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaPhone className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Phone Support</h3>
            </div>
            <p className="text-gray-600 mb-2">Speak directly with our recruitment team</p>
            <p className="text-blue-600 font-medium">+1 (555) 123-4567</p>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <FaClock className="mr-2" />
              <p>Monday-Friday, 8am-6pm GMT</p>
            </div>
          </div>

          {/* Email Support */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
            </div>
            <p className="text-gray-600 mb-2">Send us your questions or documents</p>
            <p className="text-blue-600 font-medium">careers@maritimejobs.com</p>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <FaClock className="mr-2" />
              <p>Typically respond within 24 hours</p>
            </div>
          </div>

          {/* Office Locations */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Our Offices</h3>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-gray-900">Headquarters</p>
              <p className="text-gray-600">123 Maritime Way, Singapore 098765</p>
              <p className="font-medium text-gray-900 mt-3">European Office</p>
              <p className="text-gray-600">456 Seafarer Street, Rotterdam, Netherlands</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Have questions about job opportunities or your application? Fill out the form below.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                <div className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <p className="text-green-800 font-medium">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Job Inquiry">Job Inquiry</option>
                    <option value="Application Status">Application Status</option>
                    <option value="Recruitment Process">Recruitment Process</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium text-gray-900">How long does the recruitment process take?</h3>
              <p className="mt-1 text-gray-600">
                The process typically takes 2-4 weeks from application to job offer, depending on the position and required clearances.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium text-gray-900">What documents do I need to apply?</h3>
              <p className="mt-1 text-gray-600">
                You'll need your CV, certificates (COC, STCW), passport copies, and medical certificate. Specific requirements vary by position.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium text-gray-900">Do you provide visa sponsorship?</h3>
              <p className="mt-1 text-gray-600">
                Yes, for qualified candidates, we assist with visa processing and work permits for relevant positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;