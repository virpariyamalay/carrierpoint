import { useState, useEffect } from 'react';

function CompanyReviews() {
  const [companies, setCompanies] = useState({});

  useEffect(() => {
    const experiences = JSON.parse(localStorage.getItem('experiences') || '[]');
    const companyStats = experiences.reduce((acc, exp) => {
      if (!acc[exp.company]) {
        acc[exp.company] = {
          totalRating: 0,
          count: 0,
          roles: new Set()
        };
      }
      acc[exp.company].totalRating += exp.rating;
      acc[exp.company].count += 1;
      acc[exp.company].roles.add(exp.role);
      return acc;
    }, {});

    setCompanies(companyStats);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Company Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(companies).map(([company, stats]) => (
          <div key={company} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{company}</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="text-yellow-500 text-xl mr-2">
                  {'★'.repeat(Math.round(stats.totalRating / stats.count))}
                  {'☆'.repeat(5 - Math.round(stats.totalRating / stats.count))}
                </span>
                ({stats.count} reviews)
              </p>
              <div>
                <h4 className="font-medium">Roles Hired:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {Array.from(stats.roles).map(role => (
                    <span
                      key={role}
                      className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {Object.keys(companies).length === 0 && (
          <p className="text-center text-gray-600 col-span-2">No company reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default CompanyReviews;