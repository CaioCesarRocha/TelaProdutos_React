import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';

class Footer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Text}> Procuts Bela Vista - 2021 </Text>
            </View>
        );
    }
}
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3f3f3f',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    Text: {
        color: '#fff'
    }
});

export default Footer;