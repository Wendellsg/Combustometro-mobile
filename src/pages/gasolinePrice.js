
import React, { useState, useEffect} from 'react'

import {View, Text, Button, TouchableOpacity, KeyboardAvoidingView, AsyncStorage} from 'react-native'

import BottomButtom from '../Components/BottomButton'
import Titulos from '../Components/Titulos'
import Subtitulos from '../Components/Subtitulos'
import {Container} from './Styles';
import Textarea from '../Components/Textarea'

export default function gasolinePrice({navigation}) {
    const [gasoline, setGasoline] = useState(0);


    function handleChange(){

        setGasoline()
        console.log(gasoline)

    }

    async function handleSubmit(){

        await AsyncStorage.setItem('gasoline', gasoline)

        navigation.navigate('AlcoolPrice')
    }
       return( 
               
                    <Container>      
                                
                                <Titulos text="QUANTO TÁ CUSTANDO A GASOLINA"></Titulos>
                                <View>
                                <Textarea onChange={handleChange}>
                                </Textarea>
                                <Subtitulos text="Digite o Valor da Gasolina"></Subtitulos>
                            </View>
                        <KeyboardAvoidingView behavior="padding">
                                <TouchableOpacity onPress={handleSubmit}>
                                        <BottomButtom 
                                        text="PRÓXIMO" 
                                        />
                                </TouchableOpacity>
                        </KeyboardAvoidingView>

                    </Container>
       )
    };

