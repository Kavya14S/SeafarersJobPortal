import jobs from '../../api/jobs';
import { useParams, Link } from 'react-router-dom';
import { FaShip, FaCalendarAlt, FaDollarSign, FaMapMarkerAlt, FaBriefcase, FaCertificate } from 'react-icons/fa';

const JobDetailsPage = () => {
  const { id } = useParams();
  
  // Find the job with matching ID
  const job = jobs.find(job => job.id === Number(id));

  // Handle case where job isn't found
  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Job not found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Back to all jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back to Jobs Link */}
        <Link 
          to="/" 
          className="flex items-center text-blue-600 hover:underline mb-6"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all jobs
        </Link>

        {/* Job Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
                <p className="text-xl text-gray-600">{job.company}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {job.category}
                </span>
              </div>
            </div>

            {/* Job Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-400 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <FaShip className="text-gray-400 mr-2" />
                <span>{job.vesselType}</span>
              </div>
              <div className="flex items-center">
                <FaBriefcase className="text-gray-400 mr-2" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center">
                <FaDollarSign className="text-gray-400 mr-2" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-gray-400 mr-2" />
                <span>Posted {job.posted}</span>
              </div>
            </div>

            {/* Quick Apply Button */}
            
            <Link 
  to={`/jobs/${job.id}/apply`}
  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-medium text-center block"
>
  Apply Now
</Link>
            
            
          </div>
        </div>

        {/* Job Details */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Job Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Experience Required</h3>
                <p>{job.experience}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Contract Duration</h3>
                <p>{job.contractDuration}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Joining Date</h3>
                <p>{job.joiningDate}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Application Deadline</h3>
                <p>{job.applicationDeadline}</p>
              </div>
            </div>

            <h3 className="font-medium text-gray-700 mb-2">Job Description</h3>
            <p className="mb-6">{job.description}</p>

            <h3 className="font-medium text-gray-700 mb-2">Requirements</h3>
            <ul className="mb-6 list-disc pl-5 space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>

            <h3 className="font-medium text-gray-700 mb-2">Responsibilities</h3>
            <ul className="mb-6 list-disc pl-5 space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>

            <h3 className="font-medium text-gray-700 mb-2">Benefits</h3>
            <ul className="list-disc pl-5 space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">About {job.company}</h2>
            <p className="mb-4">{job.companyDescription}</p>
            <div className="flex items-center">
              <FaCertificate className="text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">Verified employer</span>
            </div>
          </div>
        </div>

        {/* Application Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">How to Apply</h2>
            <p className="mb-6">Send your CV and supporting documents to:</p>
            <a 
              href={`mailto:${job.contactEmail}`} 
              className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
            >
              {job.contactEmail}
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Please include the job title in your email subject. Only shortlisted candidates will be contacted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;