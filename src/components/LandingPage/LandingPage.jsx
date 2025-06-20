import { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // 1. Set up job data and search state (STEP 1)
  const [allJobs, setAllJobs] = useState([
    {
      id: 1,
      title: "Chief Engineer",
      company: "Maersk Line",
      location: "International Waters",
      type: "Contract",
      salary: "$8,000 - $12,000/month",
      category: "Engine Officers",
      posted: "2 days ago",
      vesselType: "Container Ship"
    },
    {
      id: 2,
      title: "Deck Officer (OOW)",
      company: "Mediterranean Shipping Company",
      location: "Europe-Asia Routes",
      type: "Permanent",
      salary: "$5,500 - $7,500/month",
      category: "Deck Officers",
      posted: "1 day ago",
      vesselType: "Bulk Carrier"
    },
    {
      id: 3,
      title: "2nd Engineer",
      company: "COSCO Shipping",
      location: "Worldwide",
      type: "Contract",
      salary: "$6,000 - $9,000/month",
      category: "Engine Officers",
      posted: "3 days ago",
      vesselType: "Tanker"
    },
    {
      id: 4,
      title: "Electrical Officer",
      company: "Evergreen Marine",
      location: "Trans-Pacific",
      type: "Contract",
      salary: "$5,800 - $8,200/month",
      category: "Technical Officers",
      posted: "5 days ago",
      vesselType: "Container Ship"
    },
    {
      id: 5,
      title: "Chief Cook",
      company: "Royal Caribbean Cruises",
      location: "Caribbean",
      type: "Permanent",
      salary: "$3,500 - $4,500/month",
      category: "Catering Staff",
      posted: "1 week ago",
      vesselType: "Cruise Ship"
    },
    {
      id: 6,
      title: "AB Seaman",
      company: "Stena Line",
      location: "North Sea",
      type: "Contract",
      salary: "$3,000 - $4,000/month",
      category: "Deck Ratings",
      posted: "2 days ago",
      vesselType: "Ro-Ro"
    },
    {
      id: 7,
      title: "ETO (Electro-Technical Officer)",
      company: "Shell Shipping",
      location: "Middle East Routes",
      type: "Contract",
      salary: "$7,000 - $9,500/month",
      category: "Technical Officers",
      posted: "4 days ago",
      vesselType: "LNG Carrier"
    },
    {
      id: 8,
      title: "Chief Mate",
      company: "Hapag-Lloyd",
      location: "Global",
      type: "Permanent",
      salary: "$7,500 - $10,000/month",
      category: "Deck Officers",
      posted: "3 days ago",
      vesselType: "Container Ship"
    },
    {
      id: 9,
      title: "3rd Engineer",
      company: "BP Shipping",
      location: "Atlantic Routes",
      type: "Contract",
      salary: "$5,000 - $6,500/month",
      category: "Engine Officers",
      posted: "1 week ago",
      vesselType: "Oil Tanker"
    },
    
    // Add more jobs...
  ]);

  const [searchFilters, setSearchFilters] = useState({
    title: '',
    location: '',
    type: '',
    category: ''
  });

  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  // 2. Add search handler (STEP 2)
  const handleSearch = (e) => {
    e.preventDefault();
    
    const filtered = allJobs.filter(job => {
      const titleMatch = job.title.toLowerCase().includes(searchFilters.title.toLowerCase());
      const locationMatch = searchFilters.location === '' || 
        job.location.toLowerCase().includes(searchFilters.location.toLowerCase());
      const typeMatch = searchFilters.type === '' || job.type === searchFilters.type;
      const categoryMatch = searchFilters.category === '' || 
        job.category.toLowerCase().includes(searchFilters.category.toLowerCase());
      
      return titleMatch && locationMatch && typeMatch && categoryMatch;
    });
    
    setFilteredJobs(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Rest of your existing component code...

  const jobCategories = [
    { name: "Deck Officers", count: 124 },
    { name: "Engine Officers", count: 98 },
    { name: "Hotel Administration/IT", count: 50 },
    { name: "Electrical Officers", count: 80 },
    { name: "Medical Officers", count: 70 },
    // Add more categories...
  ];

  const testimonials = [
{
  quote: "After 3 months of searching elsewhere, I landed a Chief Engineer position through this platform in just 2 weeks!",
  author: "Maria Gonzalez",
  position: "Chief Engineer, Oil Tankers"
  },
{
  quote: "The recruiter matching system connected me with the perfect cruise ship job that matched all my qualifications.",
  author: "David Wilson",
  position: "Hotel Director, Luxury Cruises"
},
{
  quote: "From cadet to 2nd Officer in 3 years - this platform helped me navigate every career step with great opportunities.",
  author: "Aisha Johnson",
  position: "2nd Officer, Container Ships"
}
    // Add more testimonials...
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Keep as is */}
      <section className=" bgg text-white flex flex-col justify-center items-center py-20">
        <div className="container mx-auto  px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Maritime Career Starts Here</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with top shipping companies and find your perfect seafaring job
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/SeafarerRegistration" 
              className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Register Now
            </Link>
            <Link 
              to="/BrowseJobsPage" 
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>
      
      {/* Updated Job Search Section (STEP 3) */}
      <section className="py-16 bg-white ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-4">
            <h2 className="text-2xl font-bold mb-6">Find Your Next Voyage</h2>
            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Job Title</label>
                  <input 
                    type="text" 
                    name="title"
                    value={searchFilters.title}
                    onChange={handleFilterChange}
                    placeholder="e.g. Chief Engineer" 
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <select 
                    name="location"
                    value={searchFilters.location}
                    onChange={handleFilterChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Any Location</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="International">International Waters</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Job Type</label>
                  <select 
                    name="type"
                    value={searchFilters.type}
                    onChange={handleFilterChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Any Type</option>
                    <option value="Contract">Contract</option>
                    <option value="Permanent">Permanent</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                  >
                    Search Jobs
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Updated Featured Jobs Section (STEP 4) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <Link to="/BrowseJobsPage" className="text-blue-600 hover:underline">View All Jobs</Link>
          </div>
          
          {/* No results message (STEP 5) */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No jobs found matching your criteria</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search filters</p>
              <button 
                onClick={() => {
                  setSearchFilters({
                    title: '',
                    location: '',
                    type: '',
                    category: ''
                  });
                  setFilteredJobs(allJobs);
                }}
                className="text-blue-600 hover:underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map(job => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-1">{job.company}</p>
                  <p className="text-gray-500 mb-4">{job.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded">{job.type}</span>
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded">{job.salary}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{job.posted}</span>
                    <Link 
                      to={`/jobs/${job.id}`} 
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Keep all other sections the same */}
      {/* Job Categories Section */}
      {/* Why Choose Us Section */}
      {/* Testimonials Section */}
      {/* Call to Action */}
      {/* Job Categories Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {jobCategories.map(category => (
              <Link 
                key={category.name}
                to={`/jobs?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition"
              >
                <h3 className="font-medium mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} jobs available</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why MaritimeJobs.com?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Employers</h3>
              <p className="text-gray-600">We screen all companies to ensure legitimate job opportunities</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diverse Opportunities</h3>
              <p className="text-gray-600">From entry-level to executive positions across all vessel types</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Support</h3>
              <p className="text-gray-600">Dedicated team to help with applications and career advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#001140] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Set Sail?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of seafarers who found their dream jobs through our platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/SeafarerRegistration" 
              className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Create Free Account
            </Link>
            <Link 
              to="/ContactPage" 
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;