import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import BookCard from './bookcard';
import axios from 'axios';

const BookTable = ({ settings }) => {
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchBooks = async () => {
    const { seed, likes, reviews, region } = settings;
    try {
      const response = await axios.get('http://localhost:5000/books', {
        params: {
          seed,
          page,
        },
      });
      const newBooks = response.data;
      setBooks((prevBooks) => [...prevBooks, ...newBooks]);
      if (newBooks.length < 10) setHasMore(false);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  useEffect(() => {
    setBooks([]);
    setPage(1);
    setHasMore(true);
  }, [settings]);

  return (
    <InfiniteScroll
      dataLength={books.length}
      next={() => setPage(page + 1)}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more books to show</p>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default BookTable;
