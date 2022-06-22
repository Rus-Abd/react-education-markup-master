import styled, { createGlobalStyle } from 'styled-components'

import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  button{   
        background: none repeat scroll 0 0 transparent;
        border: medium none;
        border-spacing: 0;
        color: #26589F;
        font-family: 'PT Sans Narrow',sans-serif;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.42rem;
        list-style: none outside none;
        margin: 0;
        padding: 0;
        text-align: left;
        text-decoration: none;
        text-indent: 0;
      }
:root{
  --blue:#215EE9,
  --grey:#7D8790,
  --black-primary:#000000,
  --black-secondary:#333333
}
  @font-face{
    font-family: 'Roboto-Regular';
    src: 
    url('./assets/fonts/Roboto400/Roboto-Regular.woff2') format('woff2'),
   
    url('./assets/fonts/Roboto400/Roboto-Regular.woff') format('woff'),
    ;
    font-weight: 400;
    font-style: normal;
  }
  @font-face{
    font-family: 'Roboto';
    src: local('Roboto-Bold')
    url('./assets/fonts/Roboto700/Roboto-Bold.woff2') format('woff2'),
    url('./assets/fonts/Roboto700/Roboto-Bold.ttf') format('truetype'),
    url('./assets/fonts/Roboto700/Roboto-Bold.woff') format('woff'),
    ;
    font-weight: 700;
    font-style: normal;
  }

  body{
    background-color: #E5E5E5;
  }

  a{
    text-decoration: none;
    font-family: 'Roboto-Bold'; 
    font-size: 16px;
    line-height: 19px;
    color: var(--grey);
  }
`
export const Container = styled.div`
	margin: 0 73px 0px 151px;
	width: 1374px;
`

export default GlobalStyles
