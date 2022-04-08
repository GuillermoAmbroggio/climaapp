import { gql } from '@apollo/client';

export const WEATHER_GET_ID = gql`
  query getCityById($id: [String!]) {
    getCityById(id: $id, config: { units: metric, lang: sp }) {
      id
      name
      country
      weather {
        summary {
          icon
          title
          description
        }
        temperature {
          actual
          min
          max
        }
      }
    }
  }
`;

export const WEATHER_GET_NAME = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name, config: { units: metric, lang: sp }) {
      id
      name
      country
      weather {
        summary {
          icon
          title
          description
        }
        temperature {
          actual
          min
          max
        }
      }
    }
  }
`;
