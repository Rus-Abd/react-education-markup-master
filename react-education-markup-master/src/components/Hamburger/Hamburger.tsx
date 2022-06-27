import React, { useState } from 'react'
import Burger, { BurgerNav } from './styled'

function Hamburger() {
	const [viewNav, setViewNav] = useState(false)
	const handleBurgerClick = () => () => {
		setViewNav(true)
	}
	const handleNavClick = (e: MouseEvent) => {
		const type = (e.target as HTMLElement).tagName
		if (type === 'LI') {
			setViewNav(false)
		}
	}
	return (
		<>
			<Burger onClick={handleBurgerClick} />
			{viewNav ? (
				<BurgerNav onClick={e => handleNavClick(e)}>
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
						<a href='#'>Contact</a>
					</li>
				</BurgerNav>
			) : null}
		</>
	)
}

export default Hamburger
