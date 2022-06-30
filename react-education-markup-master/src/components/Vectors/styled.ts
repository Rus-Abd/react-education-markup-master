import styled from 'styled-components'

import lowervectors from '@images/lowerLeftVectors.png'
import uppervectors from '@images/upperRightVectors.png'
import upperBodyVector from '@images/upperBodyVector.png'
import bodyVector from '@images/bodyVector.png'
import bodyBlur from '@images/bodyBlur.png'

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
	@media (max-width: 768px) {
		height: 970.2379670677133px;
		width: 1205.915043339168px;
		left: -458px;
		top: 172.05157470703125px;
		border-radius: 123px;
	}
`
export const BodyBlur = styled.div`
	position: absolute;
	width: 725px;
	height: 869px;
	left: 852px;
	top: 233px;
	filter: blur(64px);
	background: url(${bodyBlur});
	opacity: 0.3;
`
export default LowerLeftVectors
