import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import bicicleta from './assets/bicicleta.jpg';
import tico from './assets/tico.jpeg';
import corrente from './assets/corrente.webp';
import bolsa from './assets/bolsa.jpeg';
import dog from './assets/dog.jpg';
import fone from './assets/fone.jpeg';
import { styles } from './styles'


function App(){
  return(

    <View style={styles.container}>

        <Text style={styles.titulo}>Anúncios</Text>

      <ScrollView horizontal={true}>
        
        <View style={styles.box1}>
          <Image source={bicicleta} style={styles.imagem} />
          <Text style={styles.texto}>Bicicleta Vintage Retrô</Text>
          <Text style={styles.texto}>Por apenas R$900,00</Text>
          <Text style={styles.texto}>em até 5x sem juros</Text>
        </View>

        <View style={styles.box2}>
          <Image source={tico} style={styles.imagem} />
          <Text style={styles.texto}>Tico Tico Rosa Baby</Text>
          <Text style={styles.texto}>Por apenas R$290,90</Text>
          <Text style={styles.texto}>em até 3x sem juros</Text>
        </View>


        <View style={styles.box3}>
          <Image source={corrente} style={styles.imagem} />
          <Text style={styles.texto}>Corrente Cadeado Bike</Text>
          <Text style={styles.texto}>Por apenas R$19,90</Text>
          <Text style={styles.texto}>em até 2x sem juros</Text>
          <Text style={styles.texto}></Text>
        </View>


          <View style={styles.box4}>
          <Image source={bolsa} style={styles.imagem} />
          <Text style={styles.texto}>Bolsa Rosa Bebê</Text>
          <Text style={styles.texto}>Por apenas R$149,90</Text>
          <Text style={styles.texto}>em até 3x sem juros</Text>
        </View>

        <View style={styles.box5}>
          <Image source={dog} style={styles.imagem} />
          <Text style={styles.texto}>Filhote de Yorkshire</Text>
          <Text style={styles.texto}>Por apenas R$2999,90</Text>
          <Text style={styles.texto}>em até 10x sem juros</Text>
        </View>

        <View style={styles.box6}>
          <Image source={fone} style={styles.imagem} />
          <Text style={styles.texto}>Fone Bluetooth JBL</Text>
          <Text style={styles.texto}>Por apenas R$249,90</Text>
          <Text style={styles.texto}>em até 2x sem juros</Text>
        </View>


  
      </ScrollView>
    </View>
  )
}

export default App;