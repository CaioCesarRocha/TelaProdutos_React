import React, {Component} from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

class Header extends Component{

    render(){
        var url = 'https://image.freepik.com/vetores-gratis/carrinho-de-compras-de-supermercado-com-pictograma-mercearia_1284-11697.jpg';
        
        return(
            <View style={styles.container}>
                <Image
                style = {styles.imagem}
                source={{uri: url}}
                />              
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1919e6',
        paddingTop: 2,
        paddingLeft: 2,
        paddingVertical: 2,
        justifyContent: 'center',
    },
    imagem: {
        height: 35,
        width: 35,      
    }

});

export default Header;