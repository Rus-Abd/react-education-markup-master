import React from 'react'
import useMediaQuery from '@utils/useMediaQuery'
import MainContainer, { Form, Info, Stats, Img } from './styled'

function Main() {
	const { width } = useMediaQuery()
	return (
		<MainContainer>
			<Info>
				<h5>Booking of doctor’s appointment</h5>
				<h2>Don’t Miss Our Exclusive Patient Special</h2>
				<p>
					We want to make sure that everyone has access to natural and effective
					care. With our special, you’ll receive a consultation and a digital posture
					assesment.
				</p>
				<Form action='post'>
					<span />
					<input type='text' name='' id='' placeholder='Enter your email' />
					<button type='button'>Get Started</button>
				</Form>
				{width > 768 && (
					<Stats>
						<li>
							<span>240</span>
							<p>Qualified Doctors & Medical Specialists</p>
						</li>
						<li>
							<span>1.456</span>
							<p>Medical Tests Done For Our Patients</p>
						</li>
						<li>
							<span>1M+</span>
							<p>Years of Experience The Medical Field</p>
						</li>
					</Stats>
				)}
			</Info>
			<Img />
		</MainContainer>
	)
}

export default Main
