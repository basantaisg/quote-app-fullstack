import { useQuery } from "@apollo/client";
// @ts-ignore
import { GET_QUOTES } from "../graphql/queries";
// @ts-ignore
export default function QuoteList({ search }) {
  const { data, loading, error, refetch } = useQuery(GET_QUOTES, {
    variables: { params: search },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching quotes</p>;

  return (
    <div className="quote-list">
      {data?.searchQuotes.map((quote: any) => (
        <div key={quote.id} className="quote-card">
          <p>{quote.text}</p>
          <small>- {quote.author}</small>
          <p className="date">{new Date(quote.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
