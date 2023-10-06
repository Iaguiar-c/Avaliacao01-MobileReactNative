import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { styles } from './styles';

function App() {

  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  function multiplicacao() {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (!isNaN(num1) && !isNaN(num2)) {
      const multiplicar = num1 * num2;
      setResultado(`Resultado: ${multiplicar}`);
    } else {
      setResultado('Insira números válidos');
    }
  }

  return (

    <View style={styles.container}>
    <ScrollView style={styles.container}>
    <Text style={styles.title}>Multiplicador de Números</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro nº"
        onChangeText={(text) => setNumero1(text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo nº"
        onChangeText={(text) => setNumero2(text)}
        keyboardType="numeric"
      />

      <Button title="Calcular" onPress={multiplicacao} style={styles.button}/>

      <Text style={styles.result}>{resultado}</Text>
      </ScrollView>
    </View>
    
  );
}

export default App;

