import * as React from 'react';
import { DataTable } from 'react-native-paper';

interface Transaction {
  date: string;
  index: string;
}
interface Props {
  transactions: Transaction[];
}

const headers = ['Transaction index', 'Transaction date'];

function TransactionsTable({ transactions }: Props) {
  return (
    <DataTable>
      <DataTable.Header>
        {headers.map((header) => (
          <DataTable.Title key={header}>{header}</DataTable.Title>
        ))}
      </DataTable.Header>
      {transactions.map(({ date, index }, _index) => {
        return (
          <DataTable.Row key={_index}>
            <DataTable.Cell>{index}</DataTable.Cell>
            <DataTable.Cell>{date}</DataTable.Cell>
          </DataTable.Row>
        );
      })}
    </DataTable>
  );
}

export default TransactionsTable;
