import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './components/styles.js'; // Importe as definições de estilo

function App() {
  const nome1 = 'Isabella Correia Aguiar';
  const nome2 = 'Thais Yassue Domingos Tagawa';
  const dataNascimento1 = '09/06/2004';
  const dataNascimento2 = '23/09/2004'
  const img = 'https://w7.pngwing.com/pngs/1003/402/png-transparent-tom-and-jerry-smiling-illustration-tom-cat-jerry-mouse-nibbles-tom-and-jerry-tom-and-jerry-mammal-heroes-cat-like-mammal.png';
  const formacao = 'Graduação em Análise e Desenvolvimento de Sistemas';
  const experiencia = '2 anos de experiência com Desenvolvimento de Software';
  const projetos = ['- App Meu Perfil Profissional', "\n",'- App Contador de Pessoas presentes na Loja', "\n",'- App Multiplicação de 2 números', "\n",'- App Alcool ou Gasolina', "\n",'- App Cálculo do IMC', "\n",'- App Jogo do número aleatório', "\n",'- App Formulário de abertura de conta bancária'];

  return (
    <View>
    <ScrollView>

     <View style={styles.imageContainer}>
     
        <Image
          source={{ uri: img }}
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>Dados Pessoais:</Text>
      <Text>Nome: {nome1}</Text>
      <Text>Data de Nascimento: {dataNascimento1}</Text>
      
      <Text>Nome: {nome2}</Text>
      <Text>Data de Nascimento: {dataNascimento2}</Text>
     

      <Text style={styles.title}>Formação:</Text>
      <Text>{formacao}</Text>

      <Text style={styles.title}>Experiência:</Text>
      <Text>{experiencia}</Text>

      <Text style={styles.title}>Projetos Realizados:</Text>
      <Text>{projetos}</Text>
      </ScrollView>
    </View>
    
  );
}

export default App;
