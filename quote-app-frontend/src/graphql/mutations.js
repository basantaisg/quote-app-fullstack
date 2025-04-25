import { gql } from "@apollo/client";

export const CREATE_QUOTE = gql`
  mutation CreateQuote($input: CreateQuoteInput!) {
    createQuote(input: $input) {
      id
      text
      author
      createdAt
    }
  }
`;

export const UPDATE_QUOTE = gql`
  mutation UpdateQuote($id: Int!, $input: UpdateQuoteInput!) {
    updateQuote(id: $id, input: $input) {
      id
      text
      author
      createdAt
    }
  }
`;

export const DELETE_QUOTE = gql`
  mutation DeleteQuote($id: Int!) {
    deleteQuote(id: $id) {
      id
    }
  }
`;
