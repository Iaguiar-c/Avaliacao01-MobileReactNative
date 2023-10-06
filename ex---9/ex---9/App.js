import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { styles } from './styles'

function App(){
  return(
    <View style={styles.container}>

    <Text style={styles.titulo}>Vagas</Text>

      <ScrollView>

        <View style={styles.box1}>
        <Text style={styles.titulo2}>Desenvolvedor Backend</Text>
        <Text style={styles.texto}>Salário: R$ 5000,00 </Text>
        <Text style={styles.texto}>Descrição: Buscamos um desenvolvedor backend para criar sistemas robustos, APIs e garantir a segurança dos dados. Oferecemos um ambiente colaborativo com benefícios e oportunidades de crescimento. </Text>
        <Text style={styles.texto}>Contato: (99) 12345-6789 </Text>
        </View>


        <View style={styles.box2}>
        <Text style={styles.titulo2}>Engenheiro de Dados</Text>
        <Text style={styles.texto}>Salário: R$ 9000,00 </Text>
        <Text style={styles.texto}>Descrição: Buscamos um(a) Engenheiro(a) de Dados para desenvolver soluções de análise e gerenciamento de dados, impulsionando a tomada de decisões orientadas por dados em nossa organização.</Text>
        <Text style={styles.texto}>Contato: (99) 12345-6789 </Text>
        </View>


        <View style={styles.box3}>
        <Text style={styles.titulo2}>Desenvolvedor Frontend</Text>
        <Text style={styles.texto}>Salário: R$ 6000,00 </Text>
        <Text style={styles.texto}>Descrição: Vaga para Desenvolvedor Frontend. Criar interfaces de usuário atraentes e funcionais. Oportunidade de contribuir para projetos inovadores.</Text>
        <Text style={styles.texto}>Contato: (99) 12345-6789 </Text>
        </View>


        <View style={styles.box4}>
        <Text style={styles.titulo2}>Gerente de Projetos</Text>
        <Text style={styles.texto}>Salário: R$ 15000,00 </Text>
        <Text style={styles.texto}>Descrição: Vaga para Gerente de Projetos. Liderar equipes, planejar e executar projetos. Experiência em gestão necessária.</Text>
        <Text style={styles.texto}>Contato: (99) 12345-6789 </Text>
        </View>


        <View style={styles.box5}>
        <Text style={styles.titulo2}>Administrador de Sistemas</Text>
        <Text style={styles.texto}>Salário: R$ 7000,00 </Text>
        <Text style={styles.texto}>Descrição: Vaga para Administrador de Sistemas. Gerenciar e manter infraestrutura de TI. Experiência em administração de servidores e sistemas operacionais necessária.</Text>
        <Text style={styles.texto}>Contato: (99) 12345-6789 </Text>
        </View>

      </ScrollView>
    </View>
  )
}


export default App;
