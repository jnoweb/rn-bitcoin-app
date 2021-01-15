import * as React from 'react';
import { useQuery } from '@apollo/client';

import { GET_TRANSACTIONS } from './query';
import Screen from '../Common/Screen';
import TransactionsTable from './TransactionsTable';

const buildTransactions = (data) => {
  if (!data) return [];
  const { transactions } = data.bitcoin;
  console.log(transactions);
  return transactions.map(({ date, index }) => {
    return {
      index,
      date: date.date,
    };
  });
};

function Transactions() {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS, {
    pollInterval: 500,
  });

  return (
    <Screen title="Transactions" loading={loading}>
      <TransactionsTable transactions={buildTransactions(data)} />
    </Screen>
  );
}

export default Transactions;
