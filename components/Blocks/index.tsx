import * as React from 'react';
import { useQuery } from '@apollo/client';

import { GET_BLOCKS } from './query';
import Screen from '../Common/Screen';
import BlocksTable from './BlocksTable';
import { formatDateTime } from '../../utils';

const buildBlockList = (data) => {
  if (!data) return [];
  const { blocks } = data.bitcoin;
  console.log(blocks);
  return blocks.map(({ blockHash, timestamp, height }) => {
    return {
      hash: blockHash,
      height,
      time: formatDateTime(timestamp.iso8601),
    };
  });
};

function Blocks() {
  const { loading, data } = useQuery(GET_BLOCKS, { pollInterval: 500 });

  return (
    <Screen title="Blocks" loading={loading}>
      <BlocksTable blocks={buildBlockList(data)} />
    </Screen>
  );
}

export default Blocks;
