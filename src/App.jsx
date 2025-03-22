import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AddExperience from './components/AddExperience';
import ExperienceList from './components/ExperienceList';
import CompanyReviews from './components/CompanyReviews';
import PreGuide from './components/PreGuide';
import AddPreGuide from './components/AddPreGuide';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-experience" element={<AddExperience />} />
            <Route path="/experiences" element={<ExperienceList />} />
            <Route path="/company-reviews" element={<CompanyReviews />} />
            <Route path="/preguide" element={<PreGuide />} />
            <Route path="/add-preguide" element={<AddPreGuide />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;