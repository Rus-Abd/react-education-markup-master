import styled from 'styled-components'

import mailSvg from '../../assets/icons/mail.svg'
import bodyImg from '../../assets/images/body-background.webp'

const MainContainer = styled.main`
	display: flex;
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 97px;
	color: var(--blue);
	h2 {
		font-family: 'Roboto-Bold';
		font-size: 65px;
		line-height: 66px;
		color: var(--blue);
		max-width: 543px;
		margin-bottom: 30px;
	}
	h5 {
		font-family: 'Roboto-Bold';
		font-size: 14px;
		line-height: 24px;
		color: var(--blue);
		margin-bottom: 19px;
	}
	p {
		font-size: 20px;
		line-height: 30px;
		color: var(--blue);
		max-width: 520px;
		margin-bottom: 52px;
	}
`
export const Form = styled.form`
	display: flex;
	align-items: center;
	width: 515px;
	height: 68px;
	background: #ffffff;
	border-radius: 40px;
	span {
		margin-left: 22px;
		background: url(${mailSvg}) no-repeat;
		width: 24px;
		height: 24px;
	}
	input {
		border: none;
		width: 115px;
		margin-right: 144px;
		margin-left: 19px;
		font-size: 16px;
		line-height: 19px;
	}
	input:focus {
		outline: none;
	}
	button {
		width: 180px;
		height: 50px;
		background: #215ee9;
		box-shadow: 0px 100px 161px rgba(33, 94, 233, 0.08),
			0px 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
			0px 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
			0px 20px 26.1625px rgba(33, 94, 233, 0.04),
			0px 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),
			0px 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);
		border-radius: 40px;
		padding: 15px 48px;
		font-size: 16px;
		line-height: 19px;
		color: #ffffff;
	}
`
export const Stats = styled.ul`
	display: flex;
	margin-top: 119px;
	li {
		margin-right: 78px;
		max-width: 142px;
		span {
			font-size: 56px;
			line-height: 66px;
			letter-spacing: -4px;
			color: #333333;
			margin-bottom: 13px;
		}
		p {
			font-size: 16px;
			line-height: 24px;
			color: #000000;
		}
	}
`
export const Img = styled.img.attrs({
	src: bodyImg,
})`
	width: 740px;
	height: 885px;
	filter: drop-shadow(50px -56px 104px rgba(28, 91, 235, 0.05));
`

export default MainContainer
