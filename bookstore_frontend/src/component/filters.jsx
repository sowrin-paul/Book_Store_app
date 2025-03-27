import React, { useState } from "react";

const Filters = ({ filters, setFilters, regenerateBooks }) => {
  const { seed, language, likes, reviews } = filters;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md flex flex-wrap gap-4 justify-between items-center">
      {/* Language Selector */}
      <div className="flex flex-col">
        <label className="text-gray-600 text-sm">Language</label>
        <select
          name="language"
          value={language}
          onChange={handleChange}
          className="border p-2 rounded-md"
        >
          <option value="en">English (US)</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      {/* Seed Input */}
      <div className="flex flex-col">
        <label className="text-gray-600 text-sm">Seed</label>
        <input
          type="number"
          name="seed"
          value={seed}
          onChange={handleChange}
          className="border p-2 rounded-md w-32"
        />
      </div>

      {/* Random Seed Button */}
      <button
        onClick={() => setFilters((prev) => ({ ...prev, seed: Math.floor(Math.random() * 1000000) }))}
        className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
      >
        Randomize
      </button>

      {/* Likes Slider */}
      <div className="flex flex-col">
        <label className="text-gray-600 text-sm">Likes</label>
        <input
          type="range"
          name="likes"
          min="0"
          max="10"
          value={likes}
          onChange={handleChange}
          className="cursor-pointer"
        />
      </div>

      {/* Reviews Selector */}
      <div className="flex flex-col">
        <label className="text-gray-600 text-sm">Review</label>
        <select
          name="reviews"
          value={reviews}
          onChange={handleChange}
          className="border p-2 rounded-md"
        >
          <option value="5">5.0</option>
          <option value="4.7">4.7</option>
          <option value="4.5">4.5</option>
          <option value="4.0">4.0</option>
        </select>
      </div>

      {/* Apply Button */}
      <button
        onClick={regenerateBooks}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;