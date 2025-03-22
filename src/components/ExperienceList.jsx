import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

function ExperienceList() {
  const [experiences, setExperiences] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedExperiences = JSON.parse(localStorage.getItem('experiences') || '[]');
    setExperiences(storedExperiences);
  }, []);

  const filteredExperiences = experiences.filter(exp =>
    exp.company.toLowerCase().includes(filter.toLowerCase()) ||
    exp.university.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Interview Experiences</h2>
        <Link 
          to="/add-experience" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Share Experience
        </Link>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search by company or university..."
          className="w-full p-4 pr-12 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <svg className="absolute right-4 top-4 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="space-y-8">
        {filteredExperiences.map(exp => (
          <div key={exp.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.company}</h3>
                  <p className="text-lg text-blue-600 font-medium">{exp.role}</p>
                  <p className="text-gray-600">{exp.university}</p>
                  {exp.linkedinProfile && (
                    <a
                      href={exp.linkedinProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      View Profile
                    </a>
                  )}
                </div>
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-yellow-500 mr-1 text-xl">{'★'.repeat(exp.rating)}</span>
                  <span className="text-gray-300 text-xl">{'★'.repeat(5-exp.rating)}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Interview Experience</h4>
                  <p className="text-gray-700 leading-relaxed">{exp.experience}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Preparation Strategy</h4>
                  <p className="text-gray-700 leading-relaxed">{exp.preparation}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Tips</h4>
                  <p className="text-gray-700 leading-relaxed">{exp.tips}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-sm text-gray-500">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Posted on {format(new Date(exp.date), 'MMM dd, yyyy')}
              </div>
            </div>
          </div>
        ))}
        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-4 text-lg text-gray-600">No experiences found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceList;