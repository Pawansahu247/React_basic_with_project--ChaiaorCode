import React from 'react'

export default function Project() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 - Password Generator */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Password Generator</h3>
            <p className="mb-4">Generate strong passwords with custom length, special characters, and more.</p>
            <p className="text-sm text-gray-500 mb-3">Tech used: React, Tailwind, Hooks</p>
            <a href="https://your-live-link.com" className="text-blue-600 mr-4" target="_blank">Live Demo</a>
            <a href="https://github.com/yourrepo" className="text-blue-600" target="_blank">GitHub</a>
          </div>

          {/* Project 2 - Currency Converter */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Currency Converter</h3>
            <p className="mb-4">Check real-time currency conversion using public API.</p>
            <p className="text-sm text-gray-500 mb-3">Tech used: React, Tailwind, useEffect</p>
            <a href="https://your-live-link.com" className="text-blue-600 mr-4" target="_blank">Live Demo</a>
            <a href="https://github.com/yourrepo" className="text-blue-600" target="_blank">GitHub</a>
          </div>

          {/* ✅ Project 3 - Weather App */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Weather App</h3>
            <p className="mb-4">
              A weather app that shows live temperature, humidity, and city-wise forecast using OpenWeatherMap API.
            </p>
            <p className="text-sm text-gray-500 mb-3">Tech used: React, API, useState, useEffect</p>
            <a href="https://your-live-weather-app-link.com" className="text-blue-600 mr-4" target="_blank">Live Demo</a>
            <a href="https://github.com/Pawansahu247/WeatherApp_using_APIs.git" className="text-blue-600" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

