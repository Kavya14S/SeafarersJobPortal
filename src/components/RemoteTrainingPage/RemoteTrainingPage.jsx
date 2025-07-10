import { useState } from 'react';
import { FaVideo, FaCalendarAlt, FaClock, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';

const RemoteTrainingPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [registeredCourses, setRegisteredCourses] = useState([
    {
      id: 1,
      title: "Advanced Firefighting (STCW)",
      date: "2023-11-15",
      time: "09:00 - 17:00 GMT",
      instructor: "Capt. John Smith",
      platform: "Zoom",
      joinLink: "#",
      materials: "#",
      completed: false
    },
    {
      id: 2,
      title: "ECDIS Operational Training",
      date: "2023-12-05",
      time: "08:00 - 16:00 GMT",
      instructor: "Chief Off. Maria Gonzalez",
      platform: "Microsoft Teams",
      joinLink: "#",
      materials: "#",
      completed: false
    }
  ]);

  const [availableCourses] = useState([
    {
      id: 3,
      title: "Crisis Management & Human Behavior",
      date: "2024-01-10",
      time: "10:00 - 14:00 GMT",
      instructor: "Dr. Emma Wilson",
      duration: "4 hours",
      certification: "STCW compliant",
      seats: 15
    },
    {
      id: 4,
      title: "GMDSS General Operator Course",
      date: "2024-02-20",
      time: "08:30 - 16:30 GMT",
      instructor: "Elect. Off. David Brown",
      duration: "5 days",
      certification: "IMO approved",
      seats: 10
    }
  ]);

  const handleRegister = (courseId) => {
    const course = availableCourses.find(c => c.id === courseId);
    if (course) {
      setRegisteredCourses([...registeredCourses, {
        ...course,
        joinLink: "#",
        materials: "#",
        completed: false
      }]);
      // In a real app, you would call your API here
    }
  };

  const handleComplete = (courseId) => {
    setRegisteredCourses(registeredCourses.map(course => 
      course.id === courseId ? { ...course, completed: true } : course
    ));
    // In a real app, you would update the backend
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-4 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Maritime Remote Training Center
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Participate in STCW-compliant training courses from anywhere in the world
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-4 px-6 font-medium text-sm ${activeTab === 'upcoming' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            My Courses
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm ${activeTab === 'available' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('available')}
          >
            Available Courses
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm ${activeTab === 'completed' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed Courses
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'upcoming' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Upcoming Training Sessions</h2>
            
            {registeredCourses.filter(c => !c.completed).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {registeredCourses.filter(c => !c.completed).map(course => (
                  <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                          <FaVideo className="text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold">{course.title}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <FaCalendarAlt className="text-gray-400 mr-2" />
                          <span>{course.date}</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="text-gray-400 mr-2" />
                          <span>{course.time}</span>
                        </div>
                        <div className="flex items-center">
                          <FaChalkboardTeacher className="text-gray-400 mr-2" />
                          <span>Instructor: {course.instructor}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2">Platform:</span>
                          <span>{course.platform}</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 space-y-2">
                        <a
                          href={course.joinLink}
                          className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Join Training
                        </a>
                        <a
                          href={course.materials}
                          className="block w-full text-center border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download Materials
                        </a>
                        <button
                          onClick={() => handleComplete(course.id)}
                          className="w-full text-center text-sm text-gray-600 hover:text-gray-800 mt-2"
                        >
                          Mark as Completed
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-2">No upcoming training sessions</h3>
                <p className="text-gray-600 mb-4">Browse available courses to register for training</p>
                <button
                  onClick={() => setActiveTab('available')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  View Available Courses
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'available' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Training Courses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableCourses.map(course => (
                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FaVideo className="text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <FaCalendarAlt className="text-gray-400 mr-2" />
                        <span>{course.date} • {course.time}</span>
                      </div>
                      <div className="flex items-center">
                        <FaChalkboardTeacher className="text-gray-400 mr-2" />
                        <span>Instructor: {course.instructor}</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="text-gray-400 mr-2" />
                        <span>Duration: {course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCertificate className="text-gray-400 mr-2" />
                        <span>{course.certification}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Seats available: {course.seats}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleRegister(course.id)}
                      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Completed Training Courses</h2>
            
            {registeredCourses.filter(c => c.completed).length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left">Course Title</th>
                      <th className="py-3 px-4 text-left">Date Completed</th>
                      <th className="py-3 px-4 text-left">Instructor</th>
                      <th className="py-3 px-4 text-left">Certificate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {registeredCourses.filter(c => c.completed).map(course => (
                      <tr key={course.id}>
                        <td className="py-4 px-4">{course.title}</td>
                        <td className="py-4 px-4">{course.date}</td>
                        <td className="py-4 px-4">{course.instructor}</td>
                        <td className="py-4 px-4">
                          <a 
                            href="#" 
                            className="text-blue-600 hover:underline"
                            onClick={(e) => {
                              e.preventDefault();
                              // In a real app, this would download the certificate
                              alert("Certificate download would start here");
                            }}
                          >
                            Download
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-2">No completed training sessions</h3>
                <p className="text-gray-600">Your completed courses will appear here</p>
              </div>
            )}
          </div>
        )}

        {/* Training Requirements */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Remote Training Requirements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Stable internet connection (minimum 2Mbps recommended)</li>
            <li>Computer with webcam and microphone</li>
            <li>Updated web browser (Chrome, Firefox, or Edge)</li>
            <li>Required software will be provided before each session</li>
            <li>STCW compliance requires full attendance and active participation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RemoteTrainingPage;