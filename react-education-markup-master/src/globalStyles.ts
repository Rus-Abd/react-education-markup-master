import { createGlobalStyle } from 'styled-components'

import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  body{
    background-color: #E5E5E5;
  }
  @font-face{
    font-family: 'Roboto-Regular';
    src: local('Roboto'),url('./assets/fonts/Roboto400/Roboto-Regular.ttf') format('truetype'),
    url('./assets/fonts/Roboto400/Roboto-Regular.woff') format('woff'),
    url('./assets/fonts/Roboto400/Roboto-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face{
    font-family: 'Roboto-Bold';
    src: local('Roboto'),url('./assets/fonts/Roboto700/Roboto-Bold.ttf') format('truetype'),
    url('./assets/fonts/Roboto700/Roboto-Bold.woff') format('woff'),
    url('./assets/fonts/Roboto700/Roboto-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`
export default GlobalStyles
