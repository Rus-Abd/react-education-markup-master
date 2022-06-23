import React from 'react'
import LowerLeftVectors, {
	BodyVector,
	UpperBodyVector,
	UpperRightVectors,
} from './styled'

export default function Vectors() {
	return (
		<>
			<LowerLeftVectors />
			<UpperRightVectors />
			<UpperBodyVector />
			<BodyVector />
		</>
	)
}
