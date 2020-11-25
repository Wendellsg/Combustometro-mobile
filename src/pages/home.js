import React  from 'react'

import {View, Text, Button, Image, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'

import BottomButtom from '../Components/BottomButton'
import Titulos from '../Components/Titulos'
import Subtitulos from '../Components/Subtitulos'


import {Container} from './Styles';

export default function Home({navigation}) {


    function handlePress(){

    
        navigation.navigate('GasolinePrice')

    };
        return(
            <Container>
                <Image
                style={styles.mangueira}
                source={require('../../assets/Mangueira.png')}
                />
                <Titulos text="SEJA BEM-VINDO AO COMBUSTÔMETRO"></Titulos>
                <Subtitulos text="Descubra exatamente se vai abastecer 
com Alcool ou gasolina"/>
                <Image
                style={styles.bomba}
                source={require('../../assets/icon.png')}
                />
                
                <TouchableOpacity onPress={handlePress}>
                        <BottomButtom 
                        text="INICIAR" 
                        />
                </TouchableOpacity>
                
               

            </Container>
        );
    
}

const styles = StyleSheet.create({
    mangueira:{
        height:100,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 40,
    },

    bomba:{
        height:250,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 20,
    },
});
