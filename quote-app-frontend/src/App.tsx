import { useState } from "react";
import AddQuoteForm from "./components/AddQuoteForm";
import QuoteList from "./components/QuoteList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [search, setSearch] = useState({});

  return (
    <div className="container">
      <h1>Quote Vault 💬</h1>
      <AddQuoteForm refetch={() => setSearch({ ...search })} />
      <SearchBar setSearch={setSearch} />
      <QuoteList search={search} />
    </div>
  );
}
