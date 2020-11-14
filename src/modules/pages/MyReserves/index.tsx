import React from 'react';
import { PageContent } from '../../../components/PageContent';
import { ITableProps, Table } from '../../../components/Table';
import { Container } from './styles';

interface ILab {
  lab: string;
  block: string;
  profesor: string;
  course: string;
  schedule: string;
  date: string;
}

const MyReserves: React.FC = () => {
  const columns: ITableProps<ILab>['columns'] = [
    {
      title: 'Laboratório',
      dataIndex: 'lab',
      key: 'lab',
      width: 50,
    },
    {
      title: 'Bloco',
      dataIndex: 'block',
      key: 'block',
      width: 50,
    },
    {
      title: 'Professor',
      dataIndex: 'profesor',
      key: 'profesor ',
      width: 150,
    },
    {
      title: 'Curso',
      dataIndex: 'course',
      key: 'course',
      width: 150,
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
      width: 50,
    },
    {
      title: 'Horário',
      dataIndex: 'schedule',
      key: 'schedule',
      width: 50,
    },
  ];

  const myReserves = [
    {
      lab: 'LAB - 11',
      block: 'Bloco 07',
      profesor: 'Aparecido Vilela Junior',
      course: 'Engenharia de Software 6S-N',
      date: '13/11/2020',
      schedule: '19:00',
    },
    {
      lab: 'LAB - 10',
      block: 'Bloco 07',
      profesor: 'Aparecido Vilela Junior',
      course: 'Engenharia de Software 4S-N',
      date: '13/11/2020',
      schedule: '21:00',
    },
    {
      lab: 'LAB - 11',
      block: 'Bloco 07',
      profesor: 'Aparecido Vilela Junior',
      course: 'Engenharia de Software 6S-N',
      date: '16/11/2020',
      schedule: '19:00',
    },
    {
      lab: 'LAB - 10',
      block: 'Bloco 07',
      profesor: 'Aparecido Vilela Junior',
      course: 'Engenharia de Software 4S-N',
      date: '16/11/2020',
      schedule: '21:00',
    },
  ];

  return (
    <PageContent>
      <Container>
        <h1>Minhas Reservas</h1>
        <Table<ILab> columns={columns} data={myReserves} />
      </Container>
    </PageContent>
  );
};

export { MyReserves };
