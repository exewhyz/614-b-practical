import { useState } from "react";

const booksData = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

function Library() {
  let [count, setCount] = useState(0);
  let [books, setBooks] = useState(booksData);
  let [title, setTitle] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div>
      <h1>Library Management</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>

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
        <button>Add Book</button>
      </form>
    </div>
  );
}
export default Library;
