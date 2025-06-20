import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSearch, FaFilter, FaMapMarkerAlt, 
  FaBriefcase, FaDollarSign, FaCalendarAlt 
} from 'react-icons/fa';
import jobs from '../../api/jobs';


const BrowseJobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    category: '',
    type: '',
    vesselType: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Apply filters whenever they change
  useEffect(() => {
    const results = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilters = (
        (filters.location === '' || job.location.includes(filters.location)) &&
        (filters.category === '' || job.category === filters.category) &&
        (filters.type === '' || job.type === filters.type) &&
        (filters.vesselType === '' || job.vesselType === filters.vesselType)
      );

      return matchesSearch && matchesFilters;
    });

    setFilteredJobs(results);
  }, [searchTerm, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      location: '',
      category: '',
      type: '',
      vesselType: ''
    });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Browse Maritime Jobs</h1>
          <p className="text-gray-600 mt-2">
            Find your next seafaring opportunity from {jobs.length} current listings
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by job title or company..."
                className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              <FaFilter className="mr-2" />
              Filters
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Locations</option>
                    <option value="International">International Waters</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Middle East">Middle East</option>
                    <option value="North America">North America</option>
                  </select>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    name="category"
                    value={filters.category}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Categories</option>
                    <option value="Deck Officers">Deck Officers</option>
                    <option value="Engine Officers">Engine Officers</option>
                    <option value="Technical Officers">Technical Officers</option>
                    <option value="Deck Ratings">Deck Ratings</option>
                    <option value="Engine Ratings">Engine Ratings</option>
                    <option value="Catering Staff">Catering Staff</option>
                  </select>
                </div>

                {/* Job Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                  <select
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Types</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Contract">Contract</option>
                    <option value="Seasonal">Seasonal</option>
                    <option value="Training">Training</option>
                  </select>
                </div>

                {/* Vessel Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vessel Type</label>
                  <select
                    name="vesselType"
                    value={filters.vesselType}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Vessel Types</option>
                    <option value="Container Ship">Container Ship</option>
                    <option value="Tanker">Tanker</option>
                    <option value="Bulk Carrier">Bulk Carrier</option>
                    <option value="Cruise Ship">Cruise Ship</option>
                    <option value="Ro-Ro">Ro-Ro</option>
                    <option value="Offshore">Offshore Vessels</option>
                  </select>
                </div>
              </div>

              {/* Reset Filters Button */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Job Listings */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
            </h2>
            <div className="text-sm text-gray-500">
              Sorted by: <span className="font-medium">Most Recent</span>
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-2">No jobs match your search criteria</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search term</p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.map(job => (
                <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <Link to={`/jobs/${job.id}`} className="block">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h3>
                          <p className="text-gray-600">{job.company}</p>
                        </div>
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                          {job.category}
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="text-gray-400 mr-2" />
                          <span>{job.location}</span>
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

                      <div className="mt-4">
                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-2">
                          {job.vesselType}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="flex justify-between items-center">
            <button 
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <span className="text-sm text-gray-700">
              Showing 1 - {filteredJobs.length} of {filteredJobs.length} jobs
            </span>
            <button 
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              disabled={filteredJobs.length <= 10}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseJobsPage;