import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Produto from './src/components/ListaProdutos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaProdutos: [
        {id: '1', nome: 'Arroz', valor: '15,00', marca: 'Camil', quantidade: 12, reff: '005', desconto: 10, promocao: {leve: 6, pague: 5} },
        {id: '2', nome: 'Feijão', valor: '12,50', marca: 'Camil', quantidade: 20, reff: '003', desconto: 5, promocao: {leve: 5, pague: 4} },
        {id: '3', nome: 'Margarina', valor: '5,99', marca: 'Qualy', quantidade: 100, reff: '405', desconto: 20, promocao: {leve: 10, pague: 9} },
        {id: '4', nome: 'Sal', valor: '5,35', marca: 'Sal Lebre', quantidade: 3, reff: '037', desconto: 8, promocao: {leve: 3, pague: 2} },
        {id: '5', nome: 'Açúcar', valor: '7,99', marca: 'União', quantidade: 10, reff: '12', desconto: 15, promocao: {leve: 10, pague: 8} },
        {id: '6', nome: 'Caixa de Leite', valor: '28,49', marca: 'Cemil', quantidade: '25 und', reff: '009', desconto: 5, promocao: {leve: 25, pague: 20} },
      ]
    }
  }
  
  render(){
    return(
      <View style={styles.container}>
        <StatusBar />
        <Header/>
          <View style = {styles.lista}>
              <Text style ={styles.title}>Lista de Produtos</Text>
              <FlatList 
                style = {styles.lista}
                showsVerticalScrollIndicator={false}
                data={this.state.listaProdutos}              
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => 
                  <Produto 
                    nome={item.nome}
                    valor={item.valor}
                    marca={item.marca}
                    quantidade={item.quantidade}
                    reff={item.reff}
                    desconto={item.desconto}
                    leve={item.promocao.leve}
                    pague={item.promocao.pague}
                  />
                }>
              </FlatList>
          </View>        
        <Footer/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    fontWeight: 'bold',
    color: '#00ced1',
    fontSize: '25',
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  lista:{
    flex: 2,
    backgroundColor: '#fff'
  },

});

export default App;