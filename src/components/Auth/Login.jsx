// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import toast from 'react-hot-toast';

// function Login() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: formData.email, password: formData.password }),
//       });

//       if (!response.ok) {
//         const error = await response.json();
//         throw new Error(error.message);
//       }


//       toast.success('Successfully logged in!');
//       navigate('/');
//       navigate('/');
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="email" className="sr-only">Email address</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               {loading ? 'Signing in...' : 'Sign in'}
//             </button>
//           </div>

//           <div className="text-sm text-center">
//             <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
//               Don't have an account? Sign up
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { FaSpinner } from 'react-icons/fa';

// function Login() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const error = await response.json();
//         throw new Error(error.message);
//       }

//       toast.success('Successfully logged in!');
//       navigate('/');
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="w-full max-w-5xl flex bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* Left Side: Login Form */}
//         <div className="w-1/2 p-8">
//           <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Welcome Back</h2>
//           <p className="text-gray-600 text-center mb-6">Sign in to your account</p>
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex justify-center items-center gap-2 py-3 px-4 text-white text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-lg"
//             >
//               {loading ? <FaSpinner className="animate-spin" /> : 'Sign in'}
//             </button>
//           </form>

//           <div className="text-center text-gray-600 mt-4">
//             <Link to="/signup" className="hover:underline">Don't have an account? Sign up</Link>
//           </div>
//         </div>

//         {/* Right Side: Illustration */}
//         {/* <div className="w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-8">
//           <img src="/login.png" alt="Login Illustration" className="w-full h-full object-cover" />
//         </div> */}
//         {/* Right Side: Illustration */}
//         <div className="w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-8">
//           <img src="/login.png" alt="Login Illustration" className="w-full h-full object-cover" />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Login;


// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { FaSpinner, FaEnvelope, FaLock } from 'react-icons/fa';

// function Login() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const error = await response.json();
//         throw new Error(error.message);
//       }

//       toast.success('Successfully logged in!');
//       navigate('/');
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="w-full max-w-5xl flex bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* Left Side: Login Form */}
//         <div className="w-1/2 p-8">
//           <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Welcome Back</h2>
//           <p className="text-gray-600 text-center mb-6">Sign in to your account</p>
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {/* Email Field with Icon */}
//             <div className="relative">
//               <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
//               <div className="relative">
//                 <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none hover:border-blue-400 transition duration-300"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             {/* Password Field with Icon */}
//             <div className="relative">
//               <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
//               <div className="relative">
//                 <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none hover:border-blue-400 transition duration-300"
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             {/* Submit Button with Advanced Hover Effects */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex justify-center items-center gap-2 py-3 px-4 text-white text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-indigo-600 hover:to-blue-700 transition duration-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-lg transform hover:scale-105"
//             >
//               {loading ? <FaSpinner className="animate-spin" /> : 'Sign in'}
//             </button>
//           </form>

//           <div className="text-center text-gray-600 mt-4">
//             <Link to="/signup" className="hover:underline">Don't have an account? Sign up</Link>
//           </div>
//         </div>

//         {/* Right Side: Illustration */}
//         <div className="w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-8">
//           <img src="/login.png" alt="Login Illustration" className="w-full h-full object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
// import { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { FaSpinner, FaEnvelope, FaLock } from 'react-icons/fa';

// function Login() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [hideImage, setHideImage] = useState(false);

//   // Function to check screen dimensions
//   const checkScreenSize = () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     if (width < 775 && height < 630) {
//       setHideImage(true);
//     } else {
//       setHideImage(false);
//     }
//   };

//   useEffect(() => {
//     // Run check on load
//     checkScreenSize();
    
//     // Add event listener
//     window.addEventListener('resize', checkScreenSize);

//     return () => {
//       window.removeEventListener('resize', checkScreenSize);
//     };
//   }, []);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const error = await response.json();
//         throw new Error(error.message);
//       }

//       toast.success('Successfully logged in!');
//       navigate('/');
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* Left Side: Login Form */}
//         <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">Welcome Back</h2>
//           <p className="text-gray-600 text-center mb-6">Sign in to your account</p>
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {/* Email Field */}
//             <div className="relative">
//               <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
//               <div className="relative">
//                 <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="relative">
//               <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
//               <div className="relative">
//                 <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex justify-center items-center gap-2 py-3 px-4 text-white text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-indigo-600 hover:to-blue-700 transition rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-lg"
//             >
//               {loading ? <FaSpinner className="animate-spin" /> : 'Sign in'}
//             </button>
//           </form>

//           <div className="text-center text-gray-600 mt-4">
//             <Link to="/signup" className="hover:underline">Don't have an account? Sign up</Link>
//           </div>
//         </div>

//         {/* Right Side: Illustration (Hidden on Small Screens) */}
//         {!hideImage && (
//           <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-purple-500 to-indigo-600">
//             <img src="/login.png" alt="Login Illustration" className="w-full h-auto max-h-96 object-contain" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaSpinner, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', phone: '' });
  const [loginWithPhone, setLoginWithPhone] = useState(false);
  const [hideImage, setHideImage] = useState(false);

  const checkScreenSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setHideImage(width < 775 && height < 630);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = loginWithPhone ? 'http://localhost:5000/api/auth/send-otp' : 'http://localhost:5000/api/login';
      const payload = loginWithPhone ? { phone: formData.phone } : formData;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      toast.success(loginWithPhone ? 'OTP sent successfully!' : 'Successfully logged in!');

      if (loginWithPhone) {
        localStorage.setItem('phone', formData.phone); // ✅ Store phone before navigating
        navigate('/verify-otp');
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">Welcome Back</h2>
          <p className="text-gray-600 text-center mb-6">Sign in to your account</p>
          
          <button
            type="button"
            onClick={() => setLoginWithPhone(!loginWithPhone)}
            className="mb-4 text-blue-600 hover:underline text-center"
          >
            {loginWithPhone ? 'Login with Email' : 'Login with Phone'}
          </button>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {loginWithPhone ? (
              <div className="relative">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="relative">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 text-white text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-indigo-600 hover:to-blue-700 transition rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-lg"
            >
              {loading ? <FaSpinner className="animate-spin" /> : loginWithPhone ? 'Send OTP' : 'Sign in'}
            </button>
          </form>

          <div className="text-center text-gray-600 mt-4">
            <Link to="/signup" className="hover:underline">Don't have an account? Sign up</Link>
          </div>
        </div>

        {!hideImage && (
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-purple-500 to-indigo-600">
            <img src="/login.png" alt="Login Illustration" className="w-full h-auto max-h-96 object-contain" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
