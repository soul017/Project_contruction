// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function SignupPage() {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();

//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       alert("📱 Please enter a valid 10-digit mobile number!");
//       return;
//     }

//     alert("🎉 Account created successfully!");
//     console.log({ fullName, email, mobile, password });
//     navigate("/");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
//       <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-[370px] border border-white/20 animate-fadeIn">
//         <h2 className="text-3xl font-bold text-white mb-6 text-center">
//           Create Account ✨
//         </h2>

//         <form onSubmit={handleSignup} className="space-y-5">
//           {/* Full Name */}
//           <div>
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* Mobile Number */}
//           <div>
//             <input
//               type="tel"
//               placeholder="Mobile Number"
//               maxLength="10"
//               className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <input
//               type="password"
//               placeholder="Choose Password"
//               className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-indigo-300/40"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-gray-200 text-sm mt-5 text-center">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-pink-300 hover:text-white font-semibold transition"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function SignupPage() {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();

//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       alert("Please enter a valid 10-digit mobile number.");
//       return;
//     }

//     alert("Account created successfully!");
//     console.log({ fullName, email, mobile, password });
//     navigate("/");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200">
//       <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md border border-purple-100">
//         <div className="text-center mb-6">
//           <div className="inline-block p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-3">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//             </svg>
//           </div>
//           <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Create Account
//           </h2>
//           <p className="text-gray-600 mt-2 text-sm">
//             Join us today and get started
//           </p>
//         </div>

//         <form onSubmit={handleSignup} className="space-y-4">
//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* Mobile Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               placeholder="9876543210"
//               maxLength="10"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 mt-2"
//           >
//             Create Account
//           </button>
//         </form>

//         <p className="text-gray-600 text-sm mt-6 text-center">
//           Already have an account?{" "}
//           <Link
//             to="/"
//             className="text-purple-600 hover:text-purple-700 font-semibold hover:underline"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // <-- 1. ADD THIS STATE

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(""); // <-- Clear success message on new submit

    // --- Validation ---
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsLoading(true);

    // --- 2. UPDATED LOGIC BLOCK ---
    try {
      const url = "https://backend.dreamvieweryatra.com/api/v1/user/userSignUp";
      const { data } = await axios.post(url, {
        fullName,
        email,
        password,
        mobileNumber,
      });

      if (data.responseCode === 200) {
        // Instead of alert and navigate:
        setSuccess("Account created successfully! You can now log in.");
        // Clear the form
        setFullName("");
        setEmail("");
        setMobileNumber("");
        setPassword("");
      } else {
        setError(data.responseMessage || "An unknown error occurred.");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data?.responseMessage || "Signup failed. Please try again.");
      } else if (err.request) {
        setError("Network error. Please try again later.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
    // --- END OF UPDATED BLOCK ---
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md border border-purple-100">
        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-3">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Join us today and get started
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              autoComplete="email"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="9876543210"
              maxLength="10"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              autoComplete="new-password"
            />
          </div>

          {/* --- 3. ADD THIS UI BLOCK --- */}
          {/* Display API Error/Success Messages */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-500 text-sm text-center">{success}</p>
          )}
          {/* --- END OF UI BLOCK --- */}


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-gray-600 text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-purple-600 hover:text-purple-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}