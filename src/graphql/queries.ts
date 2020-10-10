import { gql } from "apollo-boost";

// Create GraphQL queries

export const GET_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

export const GET_JOKE = gql`
  query Joke($category: String) {
    random(category: $category) {
      value
    }
  }
`;
