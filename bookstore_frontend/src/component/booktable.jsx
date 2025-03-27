import React, { useState, useEffect } from "react";

const BookTable = ({ seed, lang }) => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [expandedBook, setExpandedBook] = useState(null);

  const fetchBooks = async (pageNum) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/books?seed=${seed}&lang=${lang}&page=${pageNum}`
      );
      const data = await response.json();
      setBooks((prevBooks) => (pageNum === 1 ? data : [...prevBooks, ...data]));
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setPage(1);
    fetchBooks(1);
  }, [seed, lang]);

  const handleScroll = (e) => {
    if (
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight &&
      !loading
    ) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchBooks(nextPage);
    }
  };

  const toggleExpand = (book) => {
    setExpandedBook(expandedBook === book.index ? null : book.index);
  };

  return (
    <div onScroll={handleScroll} className="table-container">
      <table className="table">
        <thead>
          <tr className="table-header">
            <th className="table-cell">#</th>
            <th className="table-cell">ISBN</th>
            <th className="table-cell">Title</th>
            <th className="table-cell">Author(s)</th>
            <th className="table-cell">Publisher</th>
            <th className="table-cell">Expand</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <React.Fragment key={book.index}>
              <tr className="table-row">
                <td className="table-cell">{book.index}</td>
                <td className="table-cell">{book.isbn}</td>
                <td className="table-cell font-semibold">{book.title}</td>
                <td className="table-cell">{book.author}</td>
                <td className="table-cell">{book.publisher}</td>
                <td className="table-cell text-center">
                  <button
                    onClick={() => toggleExpand(book)}
                    className="expand-btn"
                  >
                    {expandedBook === book.index ? "▲" : "▼"}
                  </button>
                </td>
              </tr>
              {expandedBook === book.index && (
                <tr>
                  <td colSpan="6" className="book-detail">
                    <div className="book-detail-content">
                      {/* Book Cover */}
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="book-cover"
                      />
                      <div className="book-info">
                        <h3 className="book-title">{book.title}</h3>
                        <p className="book-author">by {book.author}</p>
                        <p className="book-publisher">{book.publisher}, {book.year}</p>

                        {/* Reviews */}
                        <div className="reviews-section">
                          <h4 className="font-medium text-lg text-gray-700">Reviews:</h4>
                          {book.reviews.map((review, idx) => (
                            <div key={idx} className="text-sm text-gray-600">
                              <p>"{review.text}"</p>
                              <span className="reviewer">- {review.reviewer}</span>
                            </div>
                          ))}
                        </div>

                        {/* Likes */}
                        <p className="likes">
                          👍 {book.likes} Likes
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {loading && <p className="loading">Loading...</p>}
    </div>
  );
};

export default BookTable;
