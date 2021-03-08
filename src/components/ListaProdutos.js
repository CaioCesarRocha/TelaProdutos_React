import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Produto extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.nomeProduto}> {this.props.nome} </Text>
                <View style={styles.infoContainerLinha}>
                    <View style={styles.infoContainerColuna}>
                        <Text style={styles.dados}> 
                            Valor: <Text style={styles.valor}> R$ {this.props.valor} </Text>
                        </Text>
                    </View>
                    <View style={styles.infoContainerColuna}>
                        <Text style={styles.dados}> 
                            Marca: <Text style={styles.valor}> {this.props.marca} </Text>
                        </Text>
                    </View>    
                </View>    
                <View style={styles.infoContainerLinha}>
                    <View style={styles.infoContainerColuna}>
                        <Text style={styles.dados}>
                            Qtd: <Text style={styles.valor}> {this.props.quantidade} </Text>
                        </Text>
                    </View>   
                    <View style={styles.infoContainerColuna}> 
                        <Text style={styles.dados}>
                            Ref: <Text style={styles.valor}> {this.props.reff} </Text>
                        </Text>
                    </View>    
                </View>    
                <View style={styles.infoContainerLinha}>
                    <View style={styles.infoContainerColuna}> 
                        <View style={styles.containerDesconto}>
                            <Text style={styles.textDescontos}>
                                {`${this.props.desconto}% de desconto`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.infoContainerColuna}> 
                        <View style={styles.containerPromocao}>
                            <Text style={styles.textDescontos}>
                                {`Leve ${this.props.leve} pague ${this.props.pague}`}
                            </Text>
                        </View> 
                    </View>
                </View>
                
            </View>
        );
    }
}
      
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#a0a0a0',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 15,                
    },
    infoContainerLinha: {
        flexDirection: 'row',
    },
    infoContainerColuna: {
        flex: 1
    },
    nomeProduto: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    dados: {
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 5,
    },
    valor: {
        color: '#fff',
        fontWeight: '200',
    },
    containerDesconto:{
       backgroundColor:'#4ee44e',
       padding: 7,
       marginTop: 7,
       marginRight: 15
    },
    containerPromocao:{
       backgroundColor:'#ffa07a',
       padding: 7,
       marginTop: 7,
       marginRight: 15
    },
    textDescontos:{
        color: '#fff',
    },
 
});

export default Produto;