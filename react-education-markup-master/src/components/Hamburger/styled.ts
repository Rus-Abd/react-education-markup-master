import styled from 'styled-components'

import hamburger from '../../assets/icons/hamburger.svg'

const Burger = styled.button`
	display: none;
	width: 32px;
	height: 32px;
	justify-content: space-between;
	flex-direction: column;
	background-image: url(${hamburger}) no-repeat center;
	@media (max-width: 640px) {
		display: inline-block;
	}
`
export const BurgerNav = styled.ul`
	display: none;
	justify-content: space-between;
	flex-direction: column;
	@media (max-width: 640px) {
		display: flex;
	}
`

export default Burger
