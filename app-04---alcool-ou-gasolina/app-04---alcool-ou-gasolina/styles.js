import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: '#000000',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 18,
    padding: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#d6210d',
  },
  button: {
    margin: 10,
    height: 50,
  },
  image: {
    width: 300,
    height: 170,
    marginTop: 10,
  },

  imageContainer: {
    alignItems: 'center', 
    justifyContent: 'center',

  },
});

export { styles };