import { css } from 'styled-components/macro'

import robotoBoldttf from '../assets/fonts/Roboto700/Roboto-Bold.ttf'
import robotoBoldwoff from '../assets/fonts/Roboto700/Roboto-Bold.woff'
import robotoBoldwoff2 from '../assets/fonts/Roboto700/Roboto-Bold.woff2'

import robotoRegularttf from '../assets/fonts/Roboto400/Roboto-Regular.ttf'
import robotoRegularwoff from '../assets/fonts/Roboto400/Roboto-Regular.woff'
import robotoRegularwoff2 from '../assets/fonts/Roboto400/Roboto-Regular.woff2'

const fonts = css`
	@font-face {
		font-family: 'Roboto-Regular';
		src: url(${robotoRegularwoff2}) format('woff2'),
			url(${robotoRegularttf}) format('truetype'),
			url(${robotoRegularwoff}) format('woff');
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: 'Roboto-Bold';
		src: local('Roboto-Bold') url(${robotoBoldwoff2}) format('woff2'),
			url(${robotoBoldttf}) format('truetype'),
			url(${robotoBoldwoff}) format('woff');
		font-weight: 700;
		font-style: normal;
	}
`
export default fonts
