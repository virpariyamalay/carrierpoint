import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPreGuide() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    role: '',
    employeeName: '',
    linkedinProfile: '',
    technicalSkills: '',
    roadmap: '',
    importantTopics: '',
    additionalTips: '',
    resources: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const guides = JSON.parse(localStorage.getItem('preguides') || '[]');
    const newGuide = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString()
    };
    guides.push(newGuide);
    localStorage.setItem('preguides', JSON.stringify(guides));
    navigate('/preguide');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create Preparation Guide</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Guide Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            placeholder="e.g., Complete Guide for Frontend Developer Role"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            placeholder="e.g., Software Engineer, Data Scientist"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">LinkedIn Profile URL</label>
          <input
            type="url"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="https://www.linkedin.com/in/your-profile"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Technical Skills Required</label>
          <textarea
            name="technicalSkills"
            value={formData.technicalSkills}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
            placeholder="List one skill per line"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Preparation Roadmap</label>
          <textarea
            name="roadmap"
            value={formData.roadmap}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
            placeholder="Detailed step-by-step preparation guide"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Important Topics</label>
          <textarea
            name="importantTopics"
            value={formData.importantTopics}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
            placeholder="List one topic per line"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Additional Tips</label>
          <textarea
            name="additionalTips"
            value={formData.additionalTips}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
            placeholder="Any additional advice or tips for preparation"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Recommended Resources</label>
          <textarea
            name="resources"
            value={formData.resources}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            placeholder="List one resource per line (Optional)"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit Guide
        </button>
      </form>
    </div>
  );
}

export default AddPreGuide;