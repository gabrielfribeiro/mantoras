import React from 'react';

import RCTable from 'rc-table';

import * as S from './styles';

export interface ITableProps<Record = unknown> {
  columns: ITableColumns<Record>[];
  data: Record[];
}

interface ITableColumns<Record> {
  title: string;
  dataIndex: string;
  key: string;
  width?: number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, record: Record, index: number) => any;
}

export function Table<Record>({
  columns,
  data,
}: ITableProps<Record>): React.ReactElement<ITableProps<Record>> {
  return (
    <S.Container>
      <RCTable<Record>
        columns={columns}
        data={data}
        emptyText="Nenhum dado encontrado"
      />
    </S.Container>
  );
}
