import { Form } from '@unform/web';
import React, { useState } from 'react';
import { PageContent } from '../../../components/PageContent';
import { ITableProps, Table } from '../../../components/Table';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import { ILab } from '../MyReserves';
import {
  Container,
  FormContainer,
  InputLineContainer,
  ContainerTable,
  ContainerButton,
} from './styles';

const Reserve: React.FC = () => {
  const columns: ITableProps['columns'] = [
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

  const [labData, setLabData] = useState({
    lab: '',
    block: '',
    profesor: '',
    course: '',
    date: '',
    schedule: '',
  });

  const myReserves = [
    {
      lab: labData.lab,
      block: labData.block,
      profesor: labData.profesor,
      course: labData.course,
      date: labData.date,
      schedule: labData.schedule,
    },
  ];

  const handleSubmit = (data: ILab) => {
    setLabData({
      lab: data.lab,
      block: data.block,
      profesor: data.profesor,
      course: data.course,
      date: data.date,
      schedule: data.schedule,
    });
  };

  const handleCancel = () => {
    setLabData({
      lab: '',
      block: '',
      profesor: '',
      course: '',
      date: '',
      schedule: '',
    });
  };

  return (
    <PageContent>
      <Container>
        <h1>Reservar Laboratório</h1>
        <ContainerTable>
          <Table columns={columns} data={myReserves} />
        </ContainerTable>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <InputLineContainer>
              <Input
                name="profesor"
                placeholder="Nome completo..."
                width="470px"
                marginRight="30px"
                label="Nome *"
              />
              <Input
                name="block"
                placeholder="Bloco..."
                width="470px"
                marginRight="30px"
                label="Bloco *"
              />
              <Input
                name="lab"
                placeholder="Laboratório..."
                width="508px"
                label="Laboratório *"
              />
            </InputLineContainer>
            <InputLineContainer>
              <Input
                name="course"
                placeholder="Curso..."
                width="470px"
                marginRight="30px"
                label="Curso *"
              />
              <Input
                name="date"
                placeholder="Data..."
                width="470px"
                marginRight="30px"
                label="Data *"
                hasMask={true}
                mask="99/99/9999"
              />
              <Input
                name="schedule"
                placeholder="Horário..."
                width="508px"
                label="Horário *"
                hasMask={true}
                mask="99:99"
              />
            </InputLineContainer>
            <ContainerButton>
              <Button
                size="default"
                color="cancel"
                onClick={() => handleCancel}
              >
                Cancelar
              </Button>
              <Button size="default" type="submit">
                Salvar
              </Button>
            </ContainerButton>
          </Form>
        </FormContainer>
      </Container>
    </PageContent>
  );
};

export { Reserve };
