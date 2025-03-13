import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signinUser } from "../redux/authSlice";
import Navbar from "../components/Navbar";
import loginImage from "../assets/login-image.jpg"; // Ensure this image is in your project

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Redirect if user is already logged in
  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinUser(formData)); // Redux handles API call
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Sign-In Page Layout */}
      <div className="flex flex-grow items-center justify-center px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
          {/* Left Section - Image (Hidden on Small Screens) */}
          <div className="w-full md:w-1/2 hidden md:flex items-center justify-center bg-gray-200">
            <img
              src={loginImage}
              alt="Login"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section - Sign-In Form */}
          <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
              Welcome Back to SkillSwap
            </h2>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-gray-700 text-lg mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 text-lg mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <p className="text-center mt-4 text-lg">
              Don't have an account?{" "}
              <a href="/signup" className="text-red-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
