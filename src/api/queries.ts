import { gql } from '@apollo/client';


export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            owner {
              login
            }
          }
        }
      }
    }
  }
`;