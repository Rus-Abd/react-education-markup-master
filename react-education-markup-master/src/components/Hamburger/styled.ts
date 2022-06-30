import styled from 'styled-components'

import hamburger from '../../assets/icons/hamburger.svg'

type navProps = {
	showNav: Boolean
}

const Burger = styled.button`
	display: none;
	width: 32px;
	height: 32px;
	cursor: pointer;
	background-image: url(${hamburger});
	@media (max-width: 640px) {
		display: inline-block;
	}
`
export const BurgerNav = styled.ul`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background-color: black;
	width: 100vw;
	height: 100vh;
	align-items: center;
	justify-content: space-evenly;
	transform: translateX(${(props: navProps) => (props.showNav ? '0' : '100vw')});
	z-index: 100;
`

export default Burger
