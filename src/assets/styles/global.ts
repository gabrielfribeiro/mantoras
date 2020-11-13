import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'


export default createGlobalStyle`
  /* Normalize CSS */
  ${reset}
  * {
      box-sizing: border-box;
  }
  body, input, button, nav, div {
    font-family: 'Maven Pro', sans-serif;
    font-size: 16px;
  }
  `
