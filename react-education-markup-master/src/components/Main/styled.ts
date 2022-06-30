import styled from 'styled-components'

import mailSvg from '@assets/icons/mail.svg'
import bodyImgWebp from '@images/body-background.webp'
import bodyImg from '@images/body-background.png'
import bodyImgWebp320 from '@images/body-background320.webp'

const srcsetImgs = `${bodyImgWebp} 740w, ${bodyImgWebp320} 640w`
const srcsetSizes = `
(min-width: 640px) 640px,
(min-width: 1600px) 740px,
740px`
const MainContainer = styled.main`
	display: flex;
	@media (max-width: 768px) {
		flex-direction: column-reverse;
	}
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 97px;
	margin-right: 69px;
	color: var(--blue);
	h2 {
		font-family: 'Roboto Bold';
		font-size: 65px;
		line-height: 66px;
		letter-spacing: -0.01em;
		color: var(--blue);
		max-width: 543px;
		margin-bottom: 30px;
	}
	h5 {
		font-family: 'Roboto Bold';
		font-size: 14px;
		line-height: 24px;
		color: var(--blue);
		margin-bottom: 19px;
	}
	p {
		font-family: 'Roboto Regular';
		font-size: 20px;
		line-height: 30px;
		color: var(--blue);
		max-width: 522px;
		margin-bottom: 52px;
		opacity: 0.7;
	}
	@media (max-width: 768px) {
		margin-top: 0px;
		margin-left: 39px;
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
		opacity: 0.2;
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
		max-width: 141px;
		display: flex;
		flex-direction: column;
		margin-right: 73px;
		span {
			font-size: 56px;
			line-height: 66px;
			letter-spacing: -4px;
			color: var(--black-secondary);
			margin-bottom: 13px;
			font-family: 'Roboto Bold';
		}

		p {
			font-size: 16px;
			line-height: 24px;
			color: var(--black-primary);
			font-family: 'Roboto Regular';
			opacity: 1;
		}
	}
	li:nth-of-type(2) {
		margin-right: 71px;
		span {
			color: var(--blue);
		}
	}
	li:last-of-type {
		margin-right: 0px;
	}
`
export const Img = styled.img.attrs({
	srcSet: srcsetImgs,
	sizes: srcsetSizes,
	src: bodyImg,
})`
	/* margin-top: -143px;
	margin-left: 72px; */
	width: 740px;
	height: 885px;
	filter: drop-shadow(50px -56px 104px rgba(28, 91, 235, 0.05));
	@media (max-width: 768px) {
		height: 895px;
		width: 640px;
		margin-top: 46px;
		/* margin-top: 46px;
		margin-left: 3px;
		margin-right: -14px; */
	}
`

export default MainContainer
