import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaUpload, FaCheckCircle, FaArrowLeft, FaFilePdf, FaTimes } from 'react-icons/fa';
import jobs from '../../api/jobs';

const ApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    seamanBookNumber: '',
    certificates: [],
    experienceYears: '',
    coverLetter: '',
    cv: null,
    additionalDocuments: [],
    termsAgreed: false
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const foundJob = jobs.find(job => job.id === Number(id));
    if (!foundJob) {
      navigate('/jobs');
      return;
    }
    setJob(foundJob);
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleFileUpload = (e, fieldName) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      [fieldName]: [...prev[fieldName], ...files]
    }));
  };

  const removeFile = (fieldName, index) => {
    setFormData(prev => {
      const updatedFiles = [...prev[fieldName]];
      updatedFiles.splice(index, 1);
      return {
        ...prev,
        [fieldName]: updatedFiles
      };
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.seamanBookNumber) newErrors.seamanBookNumber = 'Seaman book number is required';
    if (!formData.experienceYears) newErrors.experienceYears = 'Experience is required';
    if (!formData.cv) newErrors.cv = 'CV is required';
    if (!formData.termsAgreed) newErrors.termsAgreed = 'You must agree to the terms';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would submit to your backend:
      // const response = await axios.post('/api/applications', formData);
      
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        seamanBookNumber: '',
        certificates: [],
        experienceYears: '',
        coverLetter: '',
        cv: null,
        additionalDocuments: [],
        termsAgreed: false
      });
    } catch (error) {
      console.error('Application error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) return <div className="p-8 text-center">Loading job details...</div>;

  if (submitSuccess) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        <div className="text-center py-12">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h2>
          <p className="mb-6">Thank you for applying for the {job.title} position at {job.company}.</p>
          <p className="mb-8">We've sent a confirmation to {formData.email}. Our recruitment team will review your application and contact you if you're shortlisted.</p>
          <div className="flex justify-center gap-4">
            <Link 
              to={`/jobs/${job.id}`} 
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Back to Job
            </Link>
            <Link 
              to="/jobs" 
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50"
            >
              Browse More Jobs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-4">
      <Link 
        to={`/jobs/${job.id}`} 
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <FaArrowLeft className="mr-2" />
        Back to Job Details
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-[#001140] text-white p-6">
          <h1 className="text-2xl font-bold">Apply for: {job.title}</h1>
          <p className="mt-1">{job.company} • {job.location}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Personal Information</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Country of Residence *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Country</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="PH">Philippines</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="UA">Ukraine</option>
                  <option value="RU">Russia</option>
                  <option value="CN">China</option>
                </select>
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>
            </div>

            {/* Professional Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Professional Information</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Seaman Book Number *</label>
                <input
                  type="text"
                  name="seamanBookNumber"
                  value={formData.seamanBookNumber}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.seamanBookNumber ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.seamanBookNumber && <p className="text-red-500 text-sm mt-1">{errors.seamanBookNumber}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Years of Experience *</label>
                <select
                  name="experienceYears"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.experienceYears ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
                {errors.experienceYears && <p className="text-red-500 text-sm mt-1">{errors.experienceYears}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Certificates & Licenses</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-4">
                  <label className="flex flex-col items-center justify-center cursor-pointer">
                    <FaUpload className="text-blue-500 text-2xl mb-2" />
                    <span className="text-sm text-center">Click to upload certificates (STCW, COC, etc.)</span>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleFileUpload(e, 'certificates')}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </label>
                </div>
                {formData.certificates.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {formData.certificates.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                        <div className="flex items-center">
                          <FaFilePdf className="text-red-500 mr-2" />
                          <span className="text-sm truncate max-w-xs">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile('certificates', index)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Documents</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Curriculum Vitae (CV) *</label>
              <div className={`border-2 ${errors.cv ? 'border-red-500' : 'border-dashed border-gray-300'} rounded p-4`}>
                <label className="flex flex-col items-center justify-center cursor-pointer">
                  <FaUpload className="text-blue-500 text-2xl mb-2" />
                  <span className="text-sm text-center">Click to upload your CV (PDF or Word)</span>
                  <input
                    type="file"
                    name="cv"
                    onChange={handleChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                </label>
              </div>
              {formData.cv && (
                <div className="mt-2 flex items-center justify-between bg-gray-100 p-2 rounded">
                  <div className="flex items-center">
                    <FaFilePdf className="text-red-500 mr-2" />
                    <span>{formData.cv.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, cv: null }))}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <FaTimes />
                  </button>
                </div>
              )}
              {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Additional Documents (Optional)</label>
              <div className="border-2 border-dashed border-gray-300 rounded p-4">
                <label className="flex flex-col items-center justify-center cursor-pointer">
                  <FaUpload className="text-blue-500 text-2xl mb-2" />
                  <span className="text-sm text-center">Click to upload additional documents</span>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => handleFileUpload(e, 'additionalDocuments')}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.png"
                  />
                </label>
              </div>
              {formData.additionalDocuments.length > 0 && (
                <div className="mt-2 space-y-2">
                  {formData.additionalDocuments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                      <div className="flex items-center">
                        <FaFilePdf className="text-red-500 mr-2" />
                        <span className="text-sm truncate max-w-xs">{file.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('additionalDocuments', index)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cover Letter */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Cover Letter</h2>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell the employer why you're a good fit for this position..."
              className="w-full p-3 border border-gray-300 rounded h-40"
            />
          </div>

          {/* Terms and Submit */}
          <div className="mb-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  className={`h-4 w-4 rounded ${errors.termsAgreed ? 'border-red-500' : 'border-gray-300'} text-blue-600 focus:ring-blue-500`}
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium">
                  I agree to the{' '}
                  <a href="/terms" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                  *
                </label>
                {errors.termsAgreed && <p className="text-red-500 text-sm mt-1">{errors.termsAgreed}</p>}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded disabled:opacity-50 flex items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;