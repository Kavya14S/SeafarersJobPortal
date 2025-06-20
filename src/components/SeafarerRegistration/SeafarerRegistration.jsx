import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SeafarerRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    nationality: "",
    gender: "",
    maritalStatus: "",
    photo: null,

    // Identity & Documents
    passportNumber: "",
    passportIssueDate: "",
    passportExpiryDate: "",
    passportFile: null,
    seamanBookNumber: "",
    seamanBookCountry: "",
    seamanBookIssueDate: "",
    seamanBookExpiryDate: "",
    indosNumber: "",
    aadharNumber: "",
    aadharFile: null,
    panNumber: "",
    panFile: null,

    // Education & Qualifications
    highestEducation: "",
    stcwCourses: [],
    otherCertifications: [],
    licenseGrade: "",
    licenseCountry: "",
    licenseNumber: "",
    licenseValidity: "",

    // Sea Service Experience
    seaExperience: [{
      rank: "",
      vesselName: "",
      vesselType: "",
      grossTonnage: "",
      engineType: "",
      fromDate: "",
      toDate: "",
      companyName: ""
    }],

    // Medical & Fitness
    medicalCertDate: "",
    mlcCompliant: "",
    pastIllnesses: "",
    pastIllnessesDetails: "",
    covidVaccinationStatus: "",

    // File Uploads
    resume: null,
    cdcFile: null,
    cocFile: null,
    stcwFiles: [],

    // Contact Information
    permanentAddress: "",
    currentAddress: "",
    phoneNumber: "",
    alternatePhone: "",
    email: "",
    confirmEmail: "",
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactNumber: "",

    // Account Details
    username: "",
    password: "",
    confirmPassword: "",

    // Declarations
    declaration: false,
    termsAgreed: false
  });

  const [newCourse, setNewCourse] = useState("");
  const [newCertification, setNewCertification] = useState("");

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : files ? files[0] : value
    }));
  };

  const handleArrayChange = (e, arrayName, index) => {
    const { name, value } = e.target;
    const updatedArray = [...formData[arrayName]];
    updatedArray[index] = { ...updatedArray[index], [name]: value };
    setFormData(prev => ({
      ...prev,
      [arrayName]: updatedArray
    }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      seaExperience: [
        ...prev.seaExperience,
        {
          rank: "",
          vesselName: "",
          vesselType: "",
          grossTonnage: "",
          engineType: "",
          fromDate: "",
          toDate: "",
          companyName: ""
        }
      ]
    }));
  };

  const removeExperience = (index) => {
    const updatedExperience = [...formData.seaExperience];
    updatedExperience.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      seaExperience: updatedExperience
    }));
  };

  const addCourse = () => {
    if (newCourse.trim()) {
      setFormData(prev => ({
        ...prev,
        stcwCourses: [...prev.stcwCourses, newCourse]
      }));
      setNewCourse("");
    }
  };

  const removeCourse = (index) => {
    const updatedCourses = [...formData.stcwCourses];
    updatedCourses.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      stcwCourses: updatedCourses
    }));
  };

  const addCertification = () => {
    if (newCertification.trim()) {
      setFormData(prev => ({
        ...prev,
        otherCertifications: [...prev.otherCertifications, newCertification]
      }));
      setNewCertification("");
    }
  };

  const removeCertification = (index) => {
    const updatedCertifications = [...formData.otherCertifications];
    updatedCertifications.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      otherCertifications: updatedCertifications
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/results', { state: { formData } });
    // Submit form data to your backend
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name (as per passport)
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Place of Birth
                </label>
                <input
                  type="text"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nationality
                </label>
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select nationality</option>
                  <option value="IN">India</option>
                  <option value="PH">Philippines</option>
                  <option value="ID">Indonesia</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Marital Status
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Passport-sized Photo
              </label>
              <input
                type="file"
                name="photo"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                accept="image/*"
                required
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Identity & Documents</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Passport Number
                </label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Issue Date
                </label>
                <input
                  type="date"
                  name="passportIssueDate"
                  value={formData.passportIssueDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="date"
                  name="passportExpiryDate"
                  value={formData.passportExpiryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Passport Copy
              </label>
              <input
                type="file"
                name="passportFile"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            
            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Seaman Book / CDC Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CDC Number
                  </label>
                  <input
                    type="text"
                    name="seamanBookNumber"
                    value={formData.seamanBookNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country of Issue
                  </label>
                  <select
                    name="seamanBookCountry"
                    value={formData.seamanBookCountry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select country</option>
                    <option value="IN">India</option>
                    <option value="PH">Philippines</option>
                    <option value="ID">Indonesia</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    name="seamanBookIssueDate"
                    value={formData.seamanBookIssueDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    name="seamanBookExpiryDate"
                    value={formData.seamanBookExpiryDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Additional Documents (Optional)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    INDOS Number (for Indians)
                  </label>
                  <input
                    type="text"
                    name="indosNumber"
                    value={formData.indosNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Aadhar Number
                  </label>
                  <input
                    type="text"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Aadhar Card Copy
                  </label>
                  <input
                    type="file"
                    name="aadharFile"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAN Card Copy
                  </label>
                  <input
                    type="file"
                    name="panFile"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Education & Qualifications</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Highest Educational Qualification
              </label>
              <select
                name="highestEducation"
                value={formData.highestEducation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select qualification</option>
                <option value="high_school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">STCW Courses</h3>
              
              <div className="mb-4">
                {formData.stcwCourses.map((course, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <span className="flex-grow bg-gray-100 px-3 py-1 rounded">{course}</span>
                    <button
                      type="button"
                      onClick={() => removeCourse(index)}
                      className="ml-2 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex">
                <input
                  type="text"
                  value={newCourse}
                  onChange={(e) => setNewCourse(e.target.value)}
                  placeholder="Enter STCW course name"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={addCourse}
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Other Certifications</h3>
              
              <div className="mb-4">
                {formData.otherCertifications.map((cert, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <span className="flex-grow bg-gray-100 px-3 py-1 rounded">{cert}</span>
                    <button
                      type="button"
                      onClick={() => removeCertification(index)}
                      className="ml-2 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex">
                <input
                  type="text"
                  value={newCertification}
                  onChange={(e) => setNewCertification(e.target.value)}
                  placeholder="Enter certification name"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={addCertification}
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">License/COC Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Grade
                  </label>
                  <select
                    name="licenseGrade"
                    value={formData.licenseGrade}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select grade</option>
                    <option value="deck_officer">Deck Officer</option>
                    <option value="master">Master</option>
                    <option value="chief_engineer">Chief Engineer</option>
                    <option value="oow">Officer of the Watch</option>
                    <option value="electro_tech">Electro-Technical Officer</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country of Issue
                  </label>
                  <select
                    name="licenseCountry"
                    value={formData.licenseCountry}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select country</option>
                    <option value="IN">India</option>
                    <option value="PH">Philippines</option>
                    <option value="ID">Indonesia</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    License/COC Number
                  </label>
                  <input
                    type="text"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Validity
                  </label>
                  <input
                    type="date"
                    name="licenseValidity"
                    value={formData.licenseValidity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Sea Service Experience</h2>
            
            {formData.seaExperience.map((exp, index) => (
              <div key={index} className="border p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-gray-700">Experience #{index + 1}</h3>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeExperience(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rank Held
                    </label>
                    <input
                      type="text"
                      name="rank"
                      value={exp.rank}
                      onChange={(e) => handleArrayChange(e, "seaExperience", index)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Vessel Name
                    </label>
                    <input
                      type="text"
                      name="vesselName"
                      value={exp.vesselName}
                      onChange={(e) => handleArrayChange(e, "seaExperience", index)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Vessel Type
                    </label>
                    <select
                      name="vesselType"
                      value={exp.vesselType}
                      onChange={(e) => handleArrayChange(e, "seaExperience", index)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select type</option>
                      <option value="bulk_carrier">Bulk Carrier</option>
                      <option value="tanker">Tanker</option>
                      <option value="container">Container</option>
                      <option value="general_cargo">General Cargo</option>
                      <option value="passenger">Passenger</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gross Tonnage/DWT
                    </label>
                    <input
                      type="text"
                      name="grossTonnage"
                      value={exp.grossTonnage}
                      onChange={(e) => handleArrayChange(e, "seaExperience", index)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Engine Type (for engineers)
                    </label>
                    <input
                      type="text"
                      name="engineType"
                      value={exp.engineType}
                      onChange={(e) => handleArrayChange(e, "seaExperience", index)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={exp.companyName}
                      onChange={(e) => handleArrayChange(e, "seaExperience", index)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      From Date
                    </label>
                    <input
                      type="date"
                      name="fromDate"
                      value={exp.fromDate}
                      onChange={(e) => handleArrayChange(e, "seaExperience", index)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      To Date
                    </label>
                    <input
                      type="date"
                      name="toDate"
                      value={exp.toDate}
                      onChange={(e) => handleArrayChange(e, "seaExperience", index)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addExperience}
              className="w-full py-2 px-4 border border-dashed border-gray-300 rounded-md hover:bg-gray-50"
            >
              + Add Another Experience
            </button>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Medical & Fitness</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Latest Medical Certificate Date
                </label>
                <input
                  type="date"
                  name="medicalCertDate"
                  value={formData.medicalCertDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  MLC/ILO Compliant?
                </label>
                <select
                  name="mlcCompliant"
                  value={formData.mlcCompliant}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Any past illnesses or injuries?
              </label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="pastIllnesses"
                    value="yes"
                    checked={formData.pastIllnesses === "yes"}
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="pastIllnesses"
                    value="no"
                    checked={formData.pastIllnesses === "no"}
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
              
              {formData.pastIllnesses === "yes" && (
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Details
                  </label>
                  <textarea
                    name="pastIllnessesDetails"
                    value={formData.pastIllnessesDetails}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                COVID-19 Vaccination Status
              </label>
              <select
                name="covidVaccinationStatus"
                value={formData.covidVaccinationStatus}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select status</option>
                <option value="fully_vaccinated">Fully Vaccinated</option>
                <option value="partially_vaccinated">Partially Vaccinated</option>
                <option value="not_vaccinated">Not Vaccinated</option>
              </select>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">File Uploads</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume / CV (PDF, DOC)
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CDC Copy
                </label>
                <input
                  type="file"
                  name="cdcFile"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  COC / License Copy
                </label>
                <input
                  type="file"
                  name="cocFile"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  STCW Certificates (Multiple)
                </label>
                <input
                  type="file"
                  name="stcwFiles"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                />
              </div>
            </div>
          </div>
        );
      
      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Permanent Address
              </label>
              <textarea
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Address
              </label>
              <textarea
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center mt-1">
                <input
                  type="checkbox"
                  id="sameAsPermanent"
                  className="mr-2"
                />
                <label htmlFor="sameAsPermanent" className="text-sm text-gray-600">
                  Same as permanent address
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alternate Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="alternatePhone"
                  value={formData.alternatePhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Email
                </label>
                <input
                  type="email"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Emergency Contact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Relation
                  </label>
                  <input
                    type="text"
                    name="emergencyContactRelation"
                    value={formData.emergencyContactRelation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="emergencyContactNumber"
                    value={formData.emergencyContactNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Details</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Are you human?
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="notRobot"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="notRobot" className="text-sm text-gray-700">
                  I'm not a robot
                </label>
              </div>
            </div>
          </div>
        );
      
      case 9:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Declarations & Consent</h2>
            
            <div className="border p-4 rounded-lg">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Declaration</h3>
                <p className="text-sm text-gray-600 mb-4">
                  I hereby declare that all the information provided in this application is true, complete, and accurate to the best of my knowledge. I understand that any false or misleading information may result in the rejection of my application or termination of employment if discovered later.
                </p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    I confirm that all details provided are true and accurate
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Terms & Privacy Policy</h3>
                <p className="text-sm text-gray-600 mb-4">
                  By submitting this application, I agree to the Terms of Service and Privacy Policy of this platform. I consent to the processing of my personal data for recruitment purposes.
                </p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="termsAgreed"
                    checked={formData.termsAgreed}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#001140] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Seafarer Registration</h1>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step === stepNumber
                      ? "bg-[#20d6f0] text-[#073345]"
                      : step > stepNumber
                      ? "bg-[#001140] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {stepNumber}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#001140] h-2.5 rounded-full"
                style={{ width: `${((step - 1) / 8) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {renderStep()}
            
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 font-semibold border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#001140]"
                >
                  Previous
                </button>
              ) : (
                <div></div>
              )}
              
              {step < 9 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-[#20d6f0] font-semibold text-[#073345] rounded-md hover:bg-[#001140] hover:text-white hover:focus:ring-[#001140] focus:outline-none focus:ring-2 focus:ring-[#20d6f0]"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 font-semibold text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Submit Registration
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SeafarerRegistration;