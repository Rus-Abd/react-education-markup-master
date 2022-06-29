import React from 'react'
import Hamburger from '../Hamburger/Hamburger'
import StyledHeader, { Auth, Bell, ModsenHealth, NavBar } from './styled'

const navList = ['Home', 'Services', 'Clinic', 'Doctors', 'Contact']
function Header() {
	return (
		<StyledHeader>
			<ModsenHealth>
				<div id='wind-icon' />
				<span>Modsen Health</span>
			</ModsenHealth>
			<NavBar>
				<ul>
					{navList.map(el => (
						<li>
							<a href='#'>{el}</a>
							<span />
						</li>
					))}
				</ul>
			</NavBar>
			<Hamburger />
			<Auth>
				<button type='button'>Log In</button>
				<button type='button'>Register</button>
			</Auth>
			<Bell />
		</StyledHeader>
	)
}

export default Header
