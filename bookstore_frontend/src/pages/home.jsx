import React, { useState } from "react";
import BookList from "../components/BookList";

const Home = () => {
  const [seed, setSeed] = useState(12345);
  const [language, setLanguage] = useState("en");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Book Store Test App</h1>
      
      {/* Controls */}
      <div className="flex gap-4 mb-6">
        <label>
          Language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="ml-2 p-2 border rounded"
          >
            <option value="en">English (USA)</option>
            <option value="de">German (Germany)</option>
            <option value="fr">French (France)</option>
          </select>
        </label>

        <label>
          Seed:
          <input
            type="number"
            value={seed}
            onChange={(e) => setSeed(Number(e.target.value))}
            className="ml-2 p-2 border rounded"
          />
        </label>

        <button
          onClick={() => setSeed(Math.floor(Math.random() * 10000))}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Random Seed
        </button>
      </div>

      {/* Book List */}
      <BookList seed={seed} language={language} />
    </div>
  );
};

export default Home;