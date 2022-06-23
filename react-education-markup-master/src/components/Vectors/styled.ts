import styled from 'styled-components'

import lowervectors from '../../assets/images/lowerLeftVectors.png'
import uppervectors from '../../assets/images/upperRightVectors.png'
import upperBodyVector from '../../assets/images/upperBodyVector.png'
import bodyVector from '../../assets/images/bodyVector.png'

const LowerLeftVectors = styled.div`
	position: absolute;
	width: 1133.5px;
	height: 442.15px;
	left: 0px;
	top: 732px;
	background: url(${lowervectors}) no-repeat;
	z-index: -10;
`
export const UpperRightVectors = styled.div`
	position: absolute;
	width: 1133.5px;
	height: 442.15px;
	right: 0px;
	top: 54px;
	background: url(${uppervectors}) no-repeat;
	z-index: -10;
`
export const UpperBodyVector = styled.div`
	position: absolute;
	width: 654px;
	height: 198px;
	left: 917px;
	top: 255px;
	background: url(${upperBodyVector}) no-repeat;
	z-index: -10;
`
export const BodyVector = styled.div`
	position: absolute;
	width: 950.96px;
	height: 868.76px;
	left: 674.91px;
	top: 514.29px;
	background: url(${bodyVector}) no-repeat;
	z-index: -10;
`

export default LowerLeftVectors
