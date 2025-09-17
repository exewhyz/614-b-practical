import { useState } from "react";

const booksData = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

function Library() {
  //   let [count, setCount] = useState(0);
  let [books, setBooks] = useState(booksData);
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
      author,
    };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  const handleDelete = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title
        .toLowerCase()
        .trim()
        .includes(searchText.toLowerCase().trim()) ||
      book.author.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    );
  });

  return (
    <div>
      <h1>Library Management</h1>
      {/* <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button> */}

      <input
        type="text"
        placeholder="Book title"
        required
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Book author"
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <button>Add Book</button>
      </form>
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}
              <button onClick={() => handleDelete(book.id)}>Remove</button>
            </li>
          ))
        ) : (
          <h3>No books available</h3>
        )}
      </ul>
    </div>
  );
}
export default Library;
