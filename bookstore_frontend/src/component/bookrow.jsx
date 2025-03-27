import React from "react";

const BookRow = ({ book, index, expanded, onExpand }) => {
  return (
    <>
      <tr
        className={`cursor-pointer ${expanded ? "bg-blue-100" : "hover:bg-gray-50"}`}
        onClick={onExpand}
      >
        <td className="p-2 border">{index}</td>
        <td className="p-2 border">{book.isbn}</td>
        <td className="p-2 border font-semibold">{book.title}</td>
        <td className="p-2 border">{book.authors.join(", ")}</td>
        <td className="p-2 border">{book.publisher}</td>
      </tr>

      {expanded && (
        <tr>
          <td colSpan="5" className="p-4 bg-gray-50 border">
            <div className="flex gap-4">
              <img
                src={book.cover}
                alt={book.title}
                className="w-24 h-32 object-cover border"
              />
              <div>
                <h2 className="text-lg font-bold">{book.title} <span className="text-sm text-gray-500">Paperback</span></h2>
                <p className="text-gray-600 italic">by {book.authors.join(", ")}</p>
                <p className="text-sm text-gray-500">{book.publisher}, {book.year}</p>

                <h3 className="mt-2 font-semibold">Review</h3>
                {book.reviews.map((review, i) => (
                  <p key={i} className="text-sm text-gray-700">
                    “{review.text}” — <span className="italic">{review.author}</span>
                  </p>
                ))}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default BookRow;