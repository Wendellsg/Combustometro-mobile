import React from 'react';
import styled from 'styled-components';

const Titulos = props => (
    <Conteinner>
        <TitulosPretos			
        >
        {props.text}
        </TitulosPretos>
        
    </Conteinner>
);

export default Titulos;

const Conteinner = styled.View`
   
	justify-content: center;
	align-items: center;
`

const TitulosPretos = styled.Text`
	color: #000;
    font-size: 30px;
    text-align: center;
    text-shadow: 1px 2px 1px #fff;`




    


