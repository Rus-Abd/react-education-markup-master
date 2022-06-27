import React from 'react'
import Hamburger from '../Hamburger/Hamburger'
import StyledHeader, { Auth, Bell, ModsenHealth, NavBar } from './styled'

function Header() {
	return (
		<StyledHeader>
			<ModsenHealth>
				<div id='wind-icon' />
				<span>Modsen Health</span>
			</ModsenHealth>
			<NavBar>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Services</a>
					</li>
					<li>
						<a href='#'>Clinic</a>
					</li>
					<li>
						<a href='#'>Doctors</a>
					</li>
					<li>
						<a href='#'>Contact </a>
					</li>
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
