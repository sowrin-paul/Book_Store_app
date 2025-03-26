import React, { useState } from 'react';

const Controls = ({ onSettingsChange }) => {
  const [seed, setSeed] = useState('');
  const [likes, setLikes] = useState(5);
  const [reviews, setReviews] = useState(5);
  const [region, setRegion] = useState('en-US');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSettingsChange({ seed, likes, reviews, region });
  };

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Select Language & Region</label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="en-US">English (USA)</option>
            <option value="de-DE">German (Germany)</option>
            <option value="fr-FR">French (France)</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Seed</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={seed}
            onChange={(e) => setSeed(e.target.value)}
            placeholder="Enter Seed"
          />
        </div>

        <div>
          <label className="block mb-2">Average Likes</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            step="0.1"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2">Average Reviews</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            step="0.1"
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Update Books
        </button>
      </div>
    </form>
  );
};

export default Controls;