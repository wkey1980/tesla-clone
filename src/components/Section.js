import React from 'react'
import styled from 'styled-components'


const Section = () => {
	return (
		<Wrap>
			<ItemText>
				<h1>Model S</h1>
				<p>Order Online for Touchless Delivery</p>
			</ItemText>
			<ButtonGroup>
				<LeftButton>
					Custom Order
				</LeftButton>
				<RightButton>
					Existing Inventory
				</RightButton>
			</ButtonGroup>
		</Wrap>
	)
}


const Wrap = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;

	background-image: url('/images/model-s.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;
`;

const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	width: 256px;
	height: 40px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
`;

const RightButton = styled(LeftButton)``;


export default Section
