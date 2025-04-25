import { useState } from "react";
import { useMutation } from "@apollo/client";
// @ts-ignore
import { CREATE_QUOTE } from "../graphql/mutations";
// @ts-ignore
export default function AddQuoteForm({ refetch }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [createQuote] = useMutation(CREATE_QUOTE);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!text || !author) return;
    await createQuote({ variables: { input: { text, author } } });
    setText("");
    setAuthor("");
    refetch();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Quote"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit" className="gradient-btn">
        Add Quote
      </button>
    </form>
  );
}
