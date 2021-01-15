import { gql } from '@apollo/client';

export const GET_BLOCKS = gql`
  {
    bitcoin {
      blocks(options: { limit: 5, desc: "date.date" }) {
        height
        blockHash
        date {
          date
        }
        timestamp {
          time
          iso8601
        }
      }
    }
  }
`;
