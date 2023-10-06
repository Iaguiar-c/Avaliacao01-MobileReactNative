import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';
import charada from './assets/charada.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {

  this.setState({resultado: Math.floor(Math.random() * 11)});

}

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>Jogo do Nº Aleatório</Text>

        <Image
          source={charada}
          style={{borderWidth: 4, width: 150, height: 150, marginHorizontal: 100 }}
        />

      <Text style={styles.texto}>Pense em um nº de 0 a 10</Text>

       <Text style={styles.textoResultado}>      {this.state.resultado}      </Text>

       <Pressable style={styles.botao} title="Calcular" onPress={this.entrar}>
          <Text style={styles.textoBotao}>Descobrir</Text>
        </Pressable>

      </View>
    );
  }
}
export default App;