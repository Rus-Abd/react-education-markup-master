import React from 'react'

import Header from '@components/Header/Header'
import Main from '@components/Main/Main'
import Vectors from '@components/Vectors/Vectors'
import { Container } from './styles/globalStyles'

function App() {
	return (
		<Container>
			<Vectors />
			<Header />
			<Main />
		</Container>
	)
}

export default App
