import styled from 'styled-components'

import windSvg from '../../assets/icons/wind.svg'
import windSvg320 from '../../assets/icons/wind320px.svg'
import notificationSvg from '../../assets/icons/notification.svg'

const StyledHeader = styled.header`
	display: flex;

	height: 53px;
	margin-top: 149px;
	display: flex;
	align-items: center;
	@media (max-width: 640px) {
		margin-top: 20px;
		width: 100%;
		height: 34px;
	}
`
export const ModsenHealth = styled.div`
	margin-right: 294px;
	display: flex;
	align-items: center;
	#wind-icon {
		height: 24px;
		width: 24px;
		background-image: url(${windSvg});
		margin-right: 10px;
	}
	span {
		font-family: 'Roboto Bold';
		font-size: 16px;
		line-height: 24px;
		color: var(--grey);
	}
	@media (max-width: 640px) {
		margin-left: 16px;
		#wind-icon {
			background-image: url(${windSvg320});
			height: 32px;

			margin-right: 10px;
		}
	}
`
export const NavBar = styled.nav`
	display: flex;
	ul {
		display: flex;
		width: 442px;
		justify-content: space-between;
		li {
			position: relative;
		}
		li:last-of-type {
			margin-right: 0px;
		}
		li:hover:after {
			position: absolute;
			top: 11px;
			width: 7px;
			height: 7px;
			background: #215ee9;
		}
	}
	@media (max-width: 640px) {
		display: none;
	}
`

export const Auth = styled.div`
	display: flex;
	margin-left: 181px;
	button:last-of-type {
		margin-left: 40px;
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
		text-align: center;

		color: #ffffff;
	}
	@media (max-width: 640px) {
		display: none;
	}
`
export const Bell = styled.div`
	height: 22px;
	width: 22px;
	background-image: url(${notificationSvg});
	margin-left: 60px;
	@media (max-width: 640px) {
		display: none;
	}
`

export default StyledHeader
