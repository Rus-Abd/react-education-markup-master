import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import fonts from './fonts'
import variables from './variables'

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${fonts}
  ${variables}
  *{box-sizing:border-box;}
  button{   
        background: none repeat scroll 0 0 transparent;
        border: medium none;
        border-spacing: 0;
        color: #26589F;
        font-family: 'PT Sans Narrow',sans-serif;
        font-size: var(--x2);
        font-weight: normal;
        line-height: 1.42rem;
        list-style: none outside none;
        margin: 0;
        padding: 0;
        text-align: left;
        text-decoration: none;
        text-indent: 0;
      }



  body{
    background-color: #EBF1FF;
    overflow-x: hidden;
  }

  a{
    text-decoration: none;
    font-family: 'Roboto Bold'; 
    font-size: var(--x2);
    line-height: 19px;
    color: var(--grey);
  }
 
  button{
    font-family: 'Roboto Bold';
    cursor: pointer;
   }
`
export const Container = styled.div`
	margin: 0 73px 0px 151px;
	width: 1374px;

	@media (max-width: 768px) {
		margin: 0px;
		width: 100%;
	}
`

export default GlobalStyles
