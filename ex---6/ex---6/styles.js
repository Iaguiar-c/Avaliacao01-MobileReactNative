import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  area: {
    marginTop: 80,
  },

  titulo: {
    fontSize: 28,
    color: 'black',
    marginVertical: 20
  },

  texto: {
    fontSize: 20,
    color: '#f00',
    marginVertical: 20
  },

  botao: {
    width: 300,
    height: 50,
    margin: 20,
    backgroundColor: '#0a3',
  },


  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 25,
    color: 'black',
  },

  input: {
    textAlign: 'center',
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 15,
    fontSize: 20,
    paddingHorizontal: 60,
    width: 320,
  },

    textoResultado: {
    fontSize: 20,
    color: '#f00',
    marginVertical: 20
  },
})

export {styles}  