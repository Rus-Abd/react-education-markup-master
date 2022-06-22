import styled from 'styled-components'

import windSvg from '../../assets/icons/wind.svg'
import notificationSvg from '../../assets/icons/notification.svg'

const StyledHeader = styled.header`
	display: flex;
	background-color: tan;
	height: 53px;
	margin-top: 149px;
	display: flex;
	align-items: center;
`
export const ModsenHealth = styled.div`
	margin-right: 294px;
	display: flex;
	#wind-icon {
		height: 24px;
		width: 24px;
		background-image: url(${windSvg});
		margin-right: 10px;
	}
	span {
		font-family: 'Roboto-Bold';
		font-size: 16px;
		line-height: 19px;
		color: var(--grey);
	}
`
export const NavBar = styled.nav`
	display: flex;
	ul {
		display: flex;
		li {
			margin-right: 45px;
		}
	}
`

export const Auth = styled.div`
	display: flex;
	margin-left: 181px;
	button {
		margin-left: 83px;
	}
	button:hover {
		width: 146px;
		height: 52px;
		background: #215ee9;
		box-shadow: 0px 100px 161px rgba(33, 94, 233, 0.08),
			0px 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
			0px 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
			0px 20px 26.1625px rgba(33, 94, 233, 0.04),
			0px 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),
			0px 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);
		border-radius: 40px;
	}
`
export const Bell = styled.div`
	height: 22px;
	width: 22px;
	background-image: url(${notificationSvg});
	margin-left: 60px;
`

export default StyledHeader
