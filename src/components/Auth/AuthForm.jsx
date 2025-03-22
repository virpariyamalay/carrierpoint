import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => setIsSignIn(!isSignIn);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-[400px] bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ x: isSignIn ? "100%" : "0%" }}
          animate={{ x: isSignIn ? "0%" : "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 z-0"
        ></motion.div>

        {/* Form Container */}
        <div className="relative z-10 p-8">
          {/* Animated Heading */}
          <motion.h2
            key={isSignIn ? "signin" : "signup"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-6"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </motion.h2>

          {/* Form Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {!isSignIn && (
              <input type="text" placeholder="Username" className="w-full p-3 border rounded-lg focus:outline-none" />
            )}
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:outline-none" />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg focus:outline-none" />
            {!isSignIn && (
              <input type="password" placeholder="Confirm Password" className="w-full p-3 border rounded-lg focus:outline-none" />
            )}

            <button className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </motion.div>

          {/* Toggle Link */}
          <p className="mt-4 text-center">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={toggleForm}
              className="text-green-500 font-semibold cursor-pointer hover:underline"
            >
              {isSignIn ? "Sign up here" : "Sign in here"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
