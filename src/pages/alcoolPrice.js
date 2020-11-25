import React, {Component} from 'react'

import {View, Text, Button, TouchableOpacity} from 'react-native'

import BottomButtom from '../Components/BottomButton'
import Titulos from '../Components/Titulos'
import Subtitulos from '../Components/Subtitulos'
import {Container} from './Styles';
import Textarea from '../Components/Textarea'

export default function alcoolPrice({navigation}) {

    function handleChange(){

        setGasoline()
        console.log(alcool)

    }

    function handlePress(){
        handleSubmit()
        navigation.navigate('Result')
    }

    async function handleSubmit(){

        await AsyncStorage.setItem('alcool', alcool)

        
    }
       return( 
               
                    <Container>      
                                
                                <Titulos text="QUANTO TÁ CUSTANDO O ALCOOL"></Titulos>
                                <View>
                                <Textarea onChange={handleChange}>
                                </Textarea>
                                <Subtitulos text="Digite o Valor do Alcool"></Subtitulos>
                            </View>
                        <KeyboardAvoidingView behavior="padding">
                                <TouchableOpacity onPress={handlePress}>
                                        <BottomButtom 
                                        text="Calcular" 
                                        />
                                </TouchableOpacity>
                        </KeyboardAvoidingView>

                    </Container>
       )
    };
