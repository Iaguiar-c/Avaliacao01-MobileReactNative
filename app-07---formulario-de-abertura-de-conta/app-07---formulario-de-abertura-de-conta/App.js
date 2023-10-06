import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet, SafeAreaView, Slider as SliderWeb, Platform, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';

import styles from './styles';

const App = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [escolaridade, setEscolaridade] = useState('Ensino Médio');
  const [limiteConta, setLimiteConta] = useState(1000);
  const [brasileiro, setBrasileiro] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  const exibir = () => {
    setMostrar(true);
  };

  return (
    <View style={styles.container}>
    <ScrollView>

    <View>
        <Text style={styles.title}>Abertura de Conta</Text>
    </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Coloque seu Nome"
          onChangeText={(text) => setNome(text)}
          value={nome}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Coloque sua Idade"
          onChangeText={(text) => setIdade(text)}
          value={idade}
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sexo:</Text>
        <Picker
          selectedValue={sexo}
          style={styles.input}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Escolaridade:</Text>
        <Picker
          selectedValue={escolaridade}
          style={styles.input}
          onValueChange={(itemValue) => setEscolaridade(itemValue)}
        >
         
          <Picker.Item label="Ensino Médio" value="Ensino Médio" />
          <Picker.Item label="Graduação" value="Graduação" />
          <Picker.Item label="Pós-graduação" value="Pós-graduação" />
        </Picker>
      </View>

     
      <View style={styles.inputContainer}>
      <Text style={styles.label}>Limite na Conta:</Text>
      {Platform.OS == "android" || Platform.OS == "ios" ? (
        
        <SliderWeb
          style={styles.slider}
          minimumValue={0}
          maximumValue={5000}
          step={100}
          onValueChange={(value) => setLimiteConta(value)}
          value={limiteConta}
        />
      ) : (
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={5000}
          step={100}
          onValueChange={(value) => setLimiteConta(value)}
          value={limiteConta}
        />
      )}
        <Text style={styles.valueText}>{limiteConta.toFixed(2)}</Text>
     </View>
      
      
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Brasileiro:</Text>
        <Switch
          value={brasileiro}
          onValueChange={(value) => setBrasileiro(value)}
        />
      </View>
      
      <Button title="Confirmar" onPress={exibir} />

      {mostrar && (
        <View>
           <View>
        <Text style={styles.title2}>Dados Informados: </Text>
          </View>
          <Text>Nome: {nome}</Text>
          <Text>Idade: {idade}</Text>
          <Text>Sexo: {sexo}</Text>
          <Text>Escolaridade: {escolaridade}</Text>
          <Text>Limite na Conta: {limiteConta.toFixed(2)}</Text>
          <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
        </View>
      )}
      </ScrollView>
    </View>
  );
};

export default App;