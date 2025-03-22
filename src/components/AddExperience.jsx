import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddExperience() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    university: '',
    company: '',
    role: '',
    experience: '',
    preparation: '',
    tips: '',
    rating: 5,
    linkedinProfile: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/experiences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      navigate('/experiences');
      return;
    }
    const newExperience = await response.json().catch(err => {
        console.error('Error parsing JSON:', err);
        return null; // Handle the case where JSON parsing fails
    });
    // Optionally handle the newExperience if needed
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
      <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">University</label>
          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
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
          <label className="block text-sm font-medium mb-1">Interview Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Preparation Strategy</label>
          <textarea
            name="preparation"
            value={formData.preparation}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tips for Others</label>
          <textarea
            name="tips"
            value={formData.tips}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Company Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit Experience
        </button>
      </form>
    </div>
  );
}

export default AddExperience;
