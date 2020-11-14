import React from 'react';
import { PageContent } from '../../../components/PageContent';
import { ITableProps, Table } from '../../../components/Table';
import { Container, ContainerTable } from './styles';

interface ILab {
  lab: string;
  block: string;
  profesor: string;
  course: string;
  schedule: string;
  status: string;
}

const ListLabs: React.FC = () => {
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
      title: 'Horário',
      dataIndex: 'schedule',
      key: 'schedule',
      width: 50,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
    },
  ];

  const labs = [
    {
      lab: 'LAB - 06',
      block: 'Bloco 7',
      profesor: 'Alexandre Moreno',
      course: 'ADS',
      schedule: '19:00',
      status: 'RESERVADO',
    },
    {
      lab: 'LAB - 07',
      block: 'Bloco 7',
      profesor: '',
      course: '',
      schedule: '',
      status: 'DISPONÍVEL',
    },
    {
      lab: 'LAB - 08',
      block: 'Bloco 7',
      profesor: 'Alexandre Moreno',
      course: 'ADS',
      schedule: '21:00',
      status: 'RESERVADO',
    },
    {
      lab: 'LAB - 09',
      block: 'Bloco 7',
      profesor: '',
      course: '',
      schedule: '',
      status: 'DISPONÍVEL',
    },
    {
      lab: 'LAB - 10',
      block: 'Bloco 07',
      profesor: 'Aparecido Vilela Junior',
      course: 'Engenharia de Software 4S-N',
      schedule: '21:00',
      status: 'DISPONÍVEL',
    },
    {
      lab: 'LAB - 11',
      block: 'Bloco 07',
      profesor: 'Aparecido Vilela Junior',
      course: 'Engenharia de Software 6S-N',
      schedule: '19:00',
      status: 'DISPONÍVEL',
    },
    {
      lab: 'LAB - 12',
      block: 'Bloco 7',
      profesor: 'Iara Almeida',
      course: 'Engenharia de Software ',
      schedule: '21:00',
      status: 'RESERVADO',
    },
    {
      lab: 'LAB - 13',
      block: 'Bloco 7',
      profesor: '',
      course: '',
      schedule: '',
      status: 'DISPONÍVEL',
    },
    {
      lab: 'LAB - 14',
      block: 'Bloco 7',
      profesor: '',
      course: '',
      schedule: '',
      status: 'DISPONÍVEL',
    },
    {
      lab: 'LAB - 15',
      block: 'Bloco 7',
      profesor: '',
      course: '',
      schedule: '',
      status: 'DISPONÍVEL',
    },
    {
      lab: 'LAB - 16',
      block: 'Bloco 10',
      profesor: '',
      course: '',
      schedule: '',
      status: 'DISPONÍVEL',
    },
    {
      lab: 'LAB - 17',
      block: 'Bloco 10',
      profesor: '',
      course: '',
      schedule: '',
      status: 'DISPONÍVEL',
    },
    {
      lab: 'LAB - 18',
      block: 'Bloco 10',
      profesor: '',
      course: '',
      schedule: '',
      status: 'DISPONÍVEL',
    },
    {
      lab: 'LAB - 19',
      block: 'Bloco 10',
      profesor: '',
      course: '',
      schedule: '',
      status: 'DISPONÍVEL',
    },
    {
      lab: 'LAB - 20',
      block: 'Bloco 10',
      profesor: '',
      course: '',
      schedule: '',
      status: 'DISPONÍVEL',
    },
  ];

  return (
    <PageContent>
      <Container>
        <h1>Laboratórios</h1>
        <ContainerTable>
          <Table<ILab> columns={columns} data={labs} />
        </ContainerTable>
      </Container>
    </PageContent>
  );
};

export { ListLabs };
