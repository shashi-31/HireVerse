import React from "react";
import { Link } from "react-router-dom";

const Creator = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About HireVerse</h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          <strong>HireVerse</strong> is a modern professional networking and job-matching platform designed to connect talented individuals with the right career opportunities. Inspired by industry leaders like LinkedIn and Naukri, HireVerse simplifies the hiring journey by offering intelligent, user-first features for both job seekers and recruiters.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-green-100 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Job Seekers</h2>
            <p className="text-gray-600 leading-relaxed">
              Discover jobs that align with your skills, experience, and career goals. Build a professional profile, upload your resume, track applications, and connect with companies actively hiring in your field. Whether you're starting out or switching paths, HireVerse helps you move forward confidently.
            </p>
          </div>

          <div className="bg-blue-100 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Employers</h2>
            <p className="text-gray-600 leading-relaxed">
              Post openings, manage applications, and access a growing pool of verified candidates. HireVerse enables recruiters to streamline the hiring process through smart filtering, profile insights, and efficient communication tools. Find the right fit—faster.
            </p>
          </div>
        </div>


        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To become a trusted, go-to digital hiring ecosystem that fosters meaningful career connections across industries. We aim to empower individuals and businesses through technology, transparency, and trust.
          </p>
        </div>

        <div className="mt-12 bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Why Choose HireVerse?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
            <li>Clean and intuitive interface for effortless navigation</li>
            <li>AI-powered job matching and smart search filters</li>
            <li>Secure login and user data protection</li>
            <li>Real-time notifications and application tracking</li>
            <li>Personalized dashboards for candidates and employers</li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <h4 className="text-lg text-gray-700 font-medium mb-3">Join thousands who trust HireVerse to power their careers and hiring journeys.</h4>
          <Link
            to="/authentication/Register"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Creator;
