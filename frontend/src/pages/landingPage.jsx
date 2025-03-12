import React from "react";
import Navbar from "../components/Navbar";
import FeaturesSection from "../components/FeatureSection";

const testimonials = [
  { name: "Alex", quote: "I learned web development in just 3 months!" },
  { name: "Sophia", quote: "Taught Spanish and learned guitar in return!" },
  { name: "Jake", quote: "SkillSwap helped me become a full-time designer!" },
];

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="bg-white py-20 mt-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Learn, Teach & Exchange Skills with a Global Community
        </h1>
        <p className="text-xl mb-8">
          Swap your skills with others, join workshops, and grow together!
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg hover:bg-red-600 transition">
          Get Started for Free
        </button>
      </section>

      {/* Features Section (Now in a separate component) */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center">
            {testimonials.map((user, index) => (
              <div key={index} className="w-full md:w-1/3 p-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <p className="italic mb-4">"{user.quote}"</p>
                  <h3 className="text-xl font-semibold">{user.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="bg-red-500 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Start Swapping Skills?
        </h2>
        <button className="bg-white text-red-500 px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition">
          Join Now
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
