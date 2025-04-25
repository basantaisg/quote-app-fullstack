import { gql } from "@apollo/client";

export const GET_QUOTES = gql`
  query GetAllQuotes {
    getAllQuotes {
      id
      text
      author
      createdAt
    }
  }
`;

export const GET_QUOTE_BY_ID = gql`
  query GetQuoteById($id: Int!) {
    getQuoteById(id: $id) {
      id
      text
      author
      createdAt
    }
  }
`;

export const SEARCH_QUOTES = gql`
  query SearchQuotes($input: SearchQuoteInput!) {
    searchQuotes(input: $input) {
      id
      text
      author
      createdAt
    }
  }
`;
