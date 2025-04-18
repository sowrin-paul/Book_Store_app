import React, { useState } from 'react';

const BookCard = ({ book = {} }) => {
  const [expanded, setExpanded] = useState(false);

  const {
    title = 'Unknown Title',
    author = 'Unknown Author',
    publisher = 'Unknown Publisher',
    isbn = 'No ISBN',
  } = book;

  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition-all">
      <div className="font-bold text-xl">{title}</div>
      <div className="text-gray-600">{author}</div>
      <div className="text-sm text-gray-500">{publisher}</div>
      <div className="text-xs text-gray-400">{isbn}</div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-blue-500 hover:text-blue-700"
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>

      {expanded && (
        <div className="mt-4 text-sm text-gray-600">
          <div><strong>Reviews:</strong> {Math.random() > 0.5 ? 'Great!' : 'Not bad'}</div>
          <div><strong>Likes:</strong> {Math.floor(Math.random() * 10)}</div>
        </div>
      )}
    </div>
  );
};

export default BookCard;