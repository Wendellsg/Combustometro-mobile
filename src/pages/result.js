import React, {Component} from 'react'

import {View, Text, Image, TouchableOpacity} from 'react-native'
import {Container} from './Styles';
import BottomButtom from '../Components/BottomButton'
import Titulos from '../Components/Titulos'
import Subtitulos from '../Components/Subtitulos'


export default class Main extends Component {

    render(){
        return(
            <Container>
            <Titulos
                text="ABASTEÇA COM"
                />
                    <Titulos
                    text="ÁLCOOL"
                    />
                    <Subtitulos
                    text="Opte pelo Álcool e você economizará
                    dessa vez"
                    />         
              
                    <Image                
                    style={{width: 200, height: 350,}}
                    
                    source={require('../../assets/splash.png')}
                    />
                
              

            
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <BottomButtom 
                        text="REFAZER" 
                        />
                    </TouchableOpacity>
           
                
            </Container>

        );
    }
}
