import { useState } from "react";
import "./BookCollection.css";

function BookCollection() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Alchemist", price: 299, rating: 0 },
    { id: 2, title: "Atomic Habits", price: 499, rating: 0 },
    { id: 3, title: "Rich Dad Poor Dad", price: 399, rating: 0 }
  ]);

  // ⭐ Rating function
  const handleRating = (id, rate) => {
    const updated = books.map((book) =>
      book.id === id ? { ...book, rating: rate } : book
    );
    setBooks(updated);
  };

  // 🛒 Purchase
  const buyBook = (book) => {
    alert(`Purchased: ${book.title} for ₹${book.price}`);
  };

  return (
    <div className="collection">
      <h2>📚 Book Collection</h2>

      <div className="books">
        {books.map((book) => (
          <div className="card" key={book.id}>
            <img
              src={`https://picsum.photos/200/250?random=${book.id}`}
              alt={book.title}
            />
            <h3>{book.title}</h3>
            <p>₹{book.price}</p>

            {/* ⭐ Rating */}
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRating(book.id, star)}
                  className={star <= book.rating ? "active" : ""}
                >
                  ★
                </span>
              ))}
            </div>

            <button onClick={() => buyBook(book)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookCollection;