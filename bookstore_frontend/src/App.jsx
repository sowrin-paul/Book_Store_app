import React, { useState, useEffect } from "react";
import Filters from "./components/Filters";
import BookTable from "./components/BookTable";

const App = () => {
  const [filters, setFilters] = useState({
    language: "en",
    seed: 42,
    likes: 5,
    reviews: 4.7,
  });

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch(
      `/api/books?seed=${filters.seed}&lang=${filters.language}&likes=${filters.likes}&reviews=${filters.reviews}`
    );
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-6">
      <Filters filters={filters} setFilters={setFilters} regenerateBooks={fetchBooks} />
      <BookTable books={books} loadMoreBooks={fetchBooks} />
    </div>
  );
};

export default App;