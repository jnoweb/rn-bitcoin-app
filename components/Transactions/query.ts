import { gql } from '@apollo/client';

export const GET_TRANSACTIONS = gql`
  {
    bitcoin {
      transactions(options: { limit: 5, desc: "date.date" }) {
       index
       date {
         date
       }
      }
    }
  }
`;
