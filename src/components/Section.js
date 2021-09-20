import React from 'react'
import styled from 'styled-components'


const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImg }) => {
	return (
		<Wrap bgImage={backgroundImg}>
			<ItemText>
				<h1>{ title }</h1>
				<p>{ description }</p>
			</ItemText>
			<Buttons>
				<ButtonGroup>
					<LeftButton>
						{ leftBtnText }
					</LeftButton>
					{ rightBtnText &&
						<RightButton>
							{ rightBtnText }
						</RightButton>
					}
				</ButtonGroup>
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
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

	background-image: ${props => `url("/images/${props.bgImage}")`};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
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
	cursor: pointer;
	margin: 8px;
`;

const RightButton = styled(LeftButton)`
	background-color: white;
	opacity: 0.65;
	color: black;
`;

const DownArrow = styled.img`
	height: 40px;
	overflow-x: hidden;
	animation: animateDown infinite 1.5s;
`;


export default Section
