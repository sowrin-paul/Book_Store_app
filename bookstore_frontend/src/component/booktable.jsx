import React, { useState, useEffect } from "react";
import BookRow from "./bookrow.jsx";

const BookTable = ({ books, loadMoreBooks }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      ) {
        loadMoreBooks();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreBooks]);

  return (
    <div className="overflow-x-auto w-full p-4">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">ISBN</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Author(s)</th>
            <th className="p-2 border">Publisher</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <BookRow
              key={book.isbn}
              book={book}
              index={index + 1}
              expanded={expandedIndex === index}
              onExpand={() => toggleExpand(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;