import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > h1{
    font-size: 25px;
    font-weight: 700;
    padding: 0px 0 25px 0;
  }
`;
export const ContainerTable = styled.div`
  padding: 0px 0px 25px 0px;
  overflow-y: scroll;
  max-height: 82vh;

  ::-webkit-scrollbar {
    display: none;
  }
`;
