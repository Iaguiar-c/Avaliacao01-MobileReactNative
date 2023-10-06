import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native';
import { styles } from './styles';

function App() {

  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');
  const img = 'https://wp-midia-nova.bidu.com.br/uploads/2017/01/05175045/%C3%A1lcool.png';

  function divisao() {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (num1 <= 0 || num2 <= 0) {
    setResultado ("Insira preços válidos");
  }

  const comparar = num1 / num2;

  if (comparar < 0.7) {
    setResultado ("Álcool é vantajoso");
  } else {
    setResultado ("Gasolina é vantajosa");
  }
}

  return (

    <View style={styles.container}>
    <ScrollView style={styles.container}>

    <Text style={styles.title}>Álcool ou Gasolina</Text>

    <View style={styles.imageContainer}>
        <Image
          source={{ uri: img }}
          style={styles.image}
        />
      </View>

     

      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        onChangeText={(text) => setNumero1(text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        onChangeText={(text) => setNumero2(text)}
        keyboardType="numeric"
      />

      <Button title="Verificar" onPress={divisao} style={styles.button}/>

      <Text style={styles.result}>{resultado}</Text>
      </ScrollView>
    </View>
  
  );
}

export default App;

