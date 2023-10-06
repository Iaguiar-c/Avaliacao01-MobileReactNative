import { useState } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import { styles } from './styles'
import imc from './assets/imc.png';

export default function App() {
  const [resultado, setResultado] = useState()
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()

  const calcularIMC = () => {
  const pesoFloat = parseFloat(peso);
  const alturaFloat = parseFloat(altura) / 100;
  const imc = pesoFloat / (alturaFloat * alturaFloat);

    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade Grau 1';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade Grau 2';
    } else {
      classificacao = 'Obesidade Grau 3';
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
  };

  return (
    <View>
      <Text style={styles.titulo}>Cálculo do IMC</Text>

      <Image source={imc} style={styles.imc} />

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />

      <Button title="Verificar" color='green' onPress={calcularIMC} />
     
      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  )
}