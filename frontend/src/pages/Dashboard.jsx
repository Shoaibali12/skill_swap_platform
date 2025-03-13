import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import {
  FaUserCircle,
  FaChalkboardTeacher,
  FaCalendarAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900">
          Welcome, {user?.name || "User"} 👋
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Profile Summary */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="flex items-center space-x-4">
              <FaUserCircle className="text-5xl text-gray-500" />
              <div>
                <h3 className="text-xl font-semibold">
                  {user?.name || "User"}
                </h3>
                <p className="text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Recommended Matches */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Recommended Matches</h3>
            <div className="flex items-center space-x-4">
              <FaChalkboardTeacher className="text-4xl text-red-500" />
              <div>
                <p className="text-gray-700">
                  Find people who want to learn what you teach!
                </p>
                <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg">
                  View Matches
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
            <div className="flex items-center space-x-4">
              <FaCalendarAlt className="text-4xl text-blue-500" />
              <div>
                <p className="text-gray-700">
                  Join skill-sharing workshops & events.
                </p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                  View Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
