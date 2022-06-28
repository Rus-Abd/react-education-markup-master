import React, { useState } from 'react'
import Burger, { BurgerNav } from './styled'

function Hamburger() {
	const [viewNav, setViewNav] = useState(false)
	const handleBurgerClick = () => {
		console.log('aa')
		setViewNav(true)
	}
	const handleNavClick = (e: React.MouseEvent) => {
		const type = (e.target as HTMLElement).tagName
		if (type === 'A') {
			setViewNav(false)
			console.log('xxx')
		}
	}
	return (
		<>
			<Burger onClick={handleBurgerClick} />
			{viewNav ? (
				<BurgerNav onClick={e => handleNavClick(e)} showNav={viewNav}>
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
