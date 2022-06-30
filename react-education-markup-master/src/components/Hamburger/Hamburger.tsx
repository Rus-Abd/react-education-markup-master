import React, { useState } from 'react'
import Burger, { BurgerNav } from './styled'

const navList = ['Home', 'Services', 'Clinic', 'Doctors', 'Contact']

function Hamburger() {
	const [viewNav, setViewNav] = useState(false)
	const handleBurgerClick = () => {
		setViewNav(true)
	}
	const handleNavClick = (e: React.MouseEvent) => {
		const type = (e.target as HTMLElement).tagName
		if (type === 'A') {
			setViewNav(false)
		}
	}
	return (
		<>
			<Burger onClick={handleBurgerClick} />
			{viewNav ? (
				<BurgerNav onClick={e => handleNavClick(e)} showNav={viewNav}>
					{navList.map(el => (
						<li>
							<a href='#'>{el}</a>
						</li>
					))}
				</BurgerNav>
			) : null}
		</>
	)
}

export default Hamburger
