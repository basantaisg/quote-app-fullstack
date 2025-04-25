import { useState } from "react";
// @ts-ignore
export default function SearchBar({ setSearch }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSearch = () => {
    setSearch({ text, author });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author..."
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleSearch} className="gradient-btn">
        Search
      </button>
    </div>
  );
}
