// import { Link, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import toast from 'react-hot-toast';

// // function Navbar() {
// //   const location = useLocation();
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetch('/api/session')
// //       .then(response => response.json())
// //       .then(data => {
// //         setUser(data.user ?? null);
// //         setLoading(false);
// //       });

// //     const handleAuthChange = () => {
// //       fetch('/api/session')
// //         .then(response => response.json())
// //         .then(data => {
// //           setUser(data.user ?? null);
// //         });
// //     };


// // function Navbar() {
// //   const location = useLocation();
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     return () => {
// //       // Cleanup logic if needed
// //     };

// //     // return () => subscription.unsubscribe();
// //   }, []);

// //   const handleSignOut = async () => {
// //     try {
// //       const response = await fetch('/api/logout', {
// //         method: 'POST',
// //       });
// //       if (!response.ok) {
// //         const error = await response.json();
// //         throw new Error(error.message);
// //       }
// //       if (error) throw error;
// //       toast.success('Successfully signed out!');
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   const isActive = (path) => {
// //     return location.pathname === path ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700 hover:text-white';
// //   };

// function Navbar() {
//   const location = useLocation();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/api/session')
//       .then(response => response.json())
//       .then(data => {
//         setUser(data.user ?? null);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching session:', error);
//         setLoading(false);
//       });
//   }, []);

//   const handleSignOut = async () => {
//     try {
//       const response = await fetch('/api/logout', { method: 'POST' });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message);
//       }

//       setUser(null);
//       toast.success('Successfully signed out!');
//     } catch (error) {
//       toast.error(error.message || 'Failed to sign out.');
//     }
//   };

//   const isActive = (path) => {
//     return location.pathname === path
//       ? 'bg-blue-700 text-white'
//       : 'text-blue-100 hover:bg-blue-700 hover:text-white';
//   };


//   return (
//     <nav className="bg-blue-600 shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center space-x-3">
//               <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               <span className="text-2xl font-bold text-white">CarriePoint</span>
//             </Link>
//           </div>

//           <div className="hidden md:flex md:items-center md:space-x-1">
//             <Link
//               to="/"
//               className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive('/')}`}
//             >
//               Home
//             </Link>
//             <div className="relative group">
//               <Link
//                 to="/experiences"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive('/experiences')}`}
//               >
//                 Experiences
//               </Link>
//               <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//               <div className="relative group">
//   <div className="absolute left-0 mt-2 w-52 bg-white/80 backdrop-blur-lg shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 ease-in-out scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100">
//     <Link
//       to="/experiences"
//       className="block px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white"
//     >
//       View Experiences
//     </Link>
//     <Link
//       to="/add-experience"
//       className="block px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white"
//     >
//       Share Experience
//     </Link>
//   </div>
// </div>

//               </div>
//             </div>
//             <Link
//               to="/company-reviews"
//               className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive('/company-reviews')}`}
//             >
//               Company Reviews
//             </Link>
//             <div className="relative group">
//               <Link
//                 to="/preguide"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive('/preguide')}`}
//               >
//                 PreGuide
//               </Link>
//               <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//               <div className="relative">
//   <div className="absolute left-0 mt-2 w-52 bg-white/80 backdrop-blur-lg shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 ease-in-out scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100">
//     <Link
//       to="/preguide"
//       className="block px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white"
//     >
//       View Guides
//     </Link>
//     <Link
//       to="/add-preguide"
//       className="block px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white"
//     >
//       Add New Guide
//     </Link>
//   </div>
// </div>

//               </div>
//             </div>
//             {!loading && (
//               user ? (
//                 <button
//                   onClick={handleSignOut}
//                   className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-700 hover:text-white transition-all duration-200"
//                 >
//                   Sign Out
//                 </button>
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-700 hover:text-white transition-all duration-200"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/signup"
//                     className="px-3 py-2 rounded-md text-sm font-medium bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200"
//                   >
//                     Sign Up
//                   </Link>
//                 </>
//               )
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className="md:hidden">
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <Link
//             to="/"
//             className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
//           >
//             Home
//           </Link>
//           <Link
//             to="/experiences"
//             className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
//           >
//             Experiences
//           </Link>
//           <Link
//             to="/add-experience"
//             className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
//           >
//             Share Experience
//           </Link>
//           <Link
//             to="/company-reviews"
//             className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
//           >
//             Company Reviews
//           </Link>
//           <Link
//             to="/preguide"
//             className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
//           >
//             PreGuide
//           </Link>
//           <Link
//             to="/add-preguide"
//             className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
//           >
//             Add New Guide
//           </Link>
//           {!loading && (
//             user ? (
//               <button
//                 onClick={handleSignOut}
//                 className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
//               >
//                 Sign Out
//               </button>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-700"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             )
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  useEffect(() => {
    fetch('/api/session')
      .then(response => response.json())
      .then(data => {
        setUser(data.user ?? null);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching session:', error);
        setLoading(false);
      });
  }, []);

  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/logout', { method: 'POST' });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      setUser(null);
      toast.success('Successfully signed out!');
    } catch (error) {
      toast.error(error.message || 'Failed to sign out.');
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700 hover:text-white';
  };

  return (
    <nav className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-white">CarrierPoint</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive('/')}`}>Home</Link>
            
            {/* Experiences Dropdown */}
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(isDropdownOpen === 'experiences' ? null : 'experiences')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive('/experiences')}`}>
                Experiences
              </button>
              {isDropdownOpen === 'experiences' && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-xl">
                  <Link to="/experiences" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">View Experiences</Link>
                  <Link to="/add-experience" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Share Experience</Link>
                </div>
              )}
            </div>

            <Link to="/company-reviews" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive('/company-reviews')}`}>Company Reviews</Link>
            
            {!loading && (
              user ? (
                <button onClick={handleSignOut} className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-700 hover:text-white">Sign Out</button>
              ) : (
                <>
                  <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-700 hover:text-white">Login</Link>
                  <Link to="/signup" className="px-3 py-2 rounded-md text-sm font-medium bg-white text-blue-600 hover:bg-blue-50">Sign Up</Link>
                </>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white">Home</Link>
          <button onClick={() => setIsDropdownOpen(isDropdownOpen === 'experiences' ? null : 'experiences')} className="block w-full text-left px-3 py-2 text-white">
            Experiences
          </button>
          {isDropdownOpen === 'experiences' && (
            <div className="pl-4">
              <Link to="/experiences" className="block px-3 py-2 text-white hover:bg-blue-600">View Experiences</Link>
              <Link to="/add-experience" className="block px-3 py-2 text-white hover:bg-blue-600">Share Experience</Link>
            </div>
          )}
          <Link to="/company-reviews" className="block px-3 py-2 rounded-md text-base font-medium text-white">Company Reviews</Link>
          {!loading && (
            user ? (
              <button onClick={handleSignOut} className="block w-full text-left px-3 py-2 text-white hover:bg-blue-600">Sign Out</button>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 text-white hover:bg-blue-600">Login</Link>
                <Link to="/signup" className="block px-3 py-2 text-white hover:bg-blue-600">Sign Up</Link>
              </>
            )
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
