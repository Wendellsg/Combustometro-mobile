
import React from 'react';
import styled from 'styled-components';
import {TextInput, StyleSheet } from 'react-native'




const Textarea = props => (
    <Conteinner>
        
        <Conteinner2>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "0,00"
               keyboardType = "numeric"
               placeholderTextColor = "#000"
               autoCapitalize = "none"
               />
        </Conteinner2>
    </Conteinner>
)

export default Textarea;

const Conteinner = styled.View`
    width: 250px;
    height: 60px;
    border-radius: 100px;
    background-color: #FFEECC;
	justify-content: center;
	align-items: center;
`

const Conteinner2 = styled.View`
    width: 250px;
    height: 60px;
    border-radius: 100px;
    border: 1px;
    border-color: #000;
    background-color: rgba(0,0,0,0);
	justify-content: center;
    align-items: center;
    top: -5px;
`

const styles = StyleSheet.create({
  
    input:{
        fontSize: 20
    }
   
 });
