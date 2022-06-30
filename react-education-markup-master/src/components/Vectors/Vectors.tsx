import useMediaQuery from '@utils/useMediaQuery'
import React from 'react'
import LowerLeftVectors, {
	BodyBlur,
	BodyVector,
	UpperBodyVector,
	UpperRightVectors,
} from './styled'

export default function Vectors() {
	const { width } = useMediaQuery()
	return (
		<>
			<BodyVector />
			{width > 768 && (
				<>
					<UpperRightVectors />
					<UpperBodyVector />
					<LowerLeftVectors />
					<BodyBlur />
				</>
			)}
		</>
	)
}
