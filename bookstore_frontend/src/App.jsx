import React, { useState } from "react";
import BookTable from "./component/booktable.jsx";

const App = () => {
  const [seed, setSeed] = useState(42);
  const [lang, setLang] = useState("en");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex gap-4 mb-4">
        <label>
          Seed:{" "}
          <input
            type="number"
            value={seed}
            onChange={(e) => setSeed(Number(e.target.value))}
            className="border p-2 rounded"
          />
        </label>
        <label>
          Language:
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="en">English (US)</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </label>
      </div>

      <BookTable seed={seed} lang={lang} />
    </div>
  );
};

export default App;