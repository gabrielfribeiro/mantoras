import styled from 'styled-components'

import theme from '../../assets/styles'

export const Container = styled.div`
  > div {
    > div {
      > div {
        overflow-x: auto hidden !important;
        table {
          width: 100%;
          font-size: 16px;

          > thead {
            > tr {
              > th {
                background: ${theme.colors.gray[200]};
                padding: 22px 20px;
                text-align: left;
                font-weight: 800;
              }
            }
          }

          > tbody {
            > tr {
              > td {
                padding: 22px 20px;
                border-top: 1px solid ${theme.colors.gray[400]};
              }

              &:nth-child(even) {
                background: ${theme.colors.gray[100]};
              }
            }
          }
        }
      }
    }
  }
`
