// ResultsPage.jsx
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const { state } = useLocation();
  const formData = state?.formData || {};

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Registration Summary</h1>
      
      <div className="space-y-6">
        {/* Personal Information */}
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Full Name</p>
              <p className="text-gray-800">{formData.fullName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Date of Birth</p>
              <p className="text-gray-800">{formData.dateOfBirth}</p>
            </div>
            {/* Add all other fields similarly */}
          </div>
        </div>

        {/* Add other sections similarly */}
      </div>
    </div>
  );
};

export default ResultsPage;