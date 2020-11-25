import React from 'react';
import styled from 'styled-components';

const Subtitulos = props => (
    <Conteinner>
        <TitulosPretos			
        >
        {props.text}
        </TitulosPretos>
        
    </Conteinner>
);

export default Subtitulos;

const Conteinner = styled.View`
    
	justify-content: center;
    align-items: center;
    margin-Top: 10px;
`

const TitulosPretos = styled.Text`
	color: rgba(0,0,0, 0.5);
    font-size: 10px;
    text-align: center;
    `
