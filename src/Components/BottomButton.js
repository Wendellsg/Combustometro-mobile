
import React from 'react';
import styled from 'styled-components';


const CustomButton = props => (
	<ButtonContainer
	
	>
		<ButtonText >{props.text}</ButtonText>
	</ButtonContainer>
);

export default CustomButton;

const ButtonContainer = styled.View`
	width: 250px;
	height: 60px;
	background: #000;
	border-radius: 100px;
	justify-content: center;
	align-items: center;
	margin-Bottom: 20px;
	margin-Top: 10px;
	
`;

const ButtonText = styled.Text`
	color: 'rgb(255,238,204)';
    font-size: 20px;
	text-align: center;`