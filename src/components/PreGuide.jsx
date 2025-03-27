import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PreGuide() {
  const [guides, setGuides] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const storedGuides = JSON.parse(localStorage.getItem('preguides') || '[]');
    setGuides(storedGuides);
    const uniqueCompanies = [...new Set(storedGuides.map(guide => guide.company))];
    setCompanies(uniqueCompanies);
  }, []);

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(filter.toLowerCase()) ||
                         guide.company.toLowerCase().includes(filter.toLowerCase());
    const matchesCompany = selectedCompany === 'all' || guide.company === selectedCompany;
    return matchesSearch && matchesCompany;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Preparation Guides</h2>
        <Link 
          to="/add-preguide" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add New Guide
        </Link>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search guides..."
            className="w-full p-4 pr-12 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <svg className="absolute right-4 top-4 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <select
          className="p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="all">All Companies</option>
          {companies.map(company => (
            <option key={company} value={company}>{company}</option>
          ))}
        </select>
      </div>

      <div className="space-y-8">
        {filteredGuides.map(guide => (
          <div key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{guide.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {guide.company}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {guide.role}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <p className="text-sm text-gray-500">Posted by {guide.employeeName}</p>
                  {guide.linkedinProfile && (
                    <a
                      href={guide.linkedinProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center ml-4 text-blue-600 hover:text-blue-800"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      View Profile
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Technical Skills Required
                  </h4>
                  <ul className="space-y-2">
                    {guide.technicalSkills.split('\n').map((skill, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Preparation Roadmap
                  </h4>
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {guide.roadmap}
                  </div>
                </div>

                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Important Topics
                  </h4>
                  <ul className="space-y-2">
                    {guide.importantTopics.split('\n').map((topic, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Additional Tips
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{guide.additionalTips}</p>
                </div>

                {guide.resources && (
                  <div className="bg-yellow-50 p-5 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Recommended Resources
                    </h4>
                    <ul className="space-y-2">
                      {guide.resources.split('\n').map((resource, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-4 text-lg text-gray-600">No guides found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreGuide;
