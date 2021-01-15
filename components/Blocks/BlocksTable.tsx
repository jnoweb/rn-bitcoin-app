import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { DataTable } from 'react-native-paper';

interface Block {
  time: string;
  height: string;
  hash: string;
}
interface Props {
  blocks: Block[];
}

const headers = ['Height', 'Time', 'Hash'];

function BlocksTable({ blocks }: Props) {
  return (
    <DataTable>
      <DataTable.Header>
        {headers.map((header) => (
          <DataTable.Title key={header}>{header}</DataTable.Title>
        ))}
      </DataTable.Header>
      {blocks.map(({ height, hash, time }, index) => {
        return (
          <DataTable.Row key={index}>
            <DataTable.Cell>{height}</DataTable.Cell>
            <DataTable.Cell>{time}</DataTable.Cell>
            <DataTable.Cell>{hash}</DataTable.Cell>
          </DataTable.Row>
        );
      })}
    </DataTable>
  );
}

export default BlocksTable;
