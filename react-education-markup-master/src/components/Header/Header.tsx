import React from 'react'
import useMediaQuery from '@utils/useMediaQuery'
import Hamburger from '../Hamburger/Hamburger'
import StyledHeader, {
	Auth,
	Bell,
	ModsenHealth,
	NavBar,
	NavItem,
} from './styled'

const navList = ['Home', 'Services', 'Clinic', 'Doctors', 'Contact']

function Header() {
	const { width } = useMediaQuery()
	return (
		<StyledHeader>
			<ModsenHealth>
				<div id='wind-icon' />
				<span>Modsen Health</span>
			</ModsenHealth>
			<NavBar>
				<ul>
					{navList.map(el => (
						<NavItem key={el}>
							<a href='#'>{el}</a>
							<span />
						</NavItem>
					))}
				</ul>
			</NavBar>
			{width <= 768 && <Hamburger />}
			{width > 768 && (
				<>
					<Auth>
						<button type='button'>Log In</button>
						<button type='button'>Register</button>
					</Auth>
					<Bell />
				</>
			)}
		</StyledHeader>
	)
}

export default Header
