import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || ''); // Retrieve phone from localStorage

  const handleVerify = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('OTP Verified Successfully!');
        navigate('/'); // Redirect to home page
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error('OTP Verification Failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <button onClick={handleVerify} className="bg-blue-500 text-white p-2 rounded w-full">
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default VerifyOTP;
