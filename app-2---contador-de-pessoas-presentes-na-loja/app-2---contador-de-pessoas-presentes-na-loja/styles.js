import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  text: {
    color: '#FFA500',
    fontSize: 30,
    marginBottom: 30,
  },

  countContainer: {
    borderColor: 'black',
    borderWidth: 1,
   // padding: 10,
    borderRadius: 5,
    marginBottom: 25,
    width: 150,
    height: 150, 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  countText: {
    fontSize: 100,
    alignItems: 'center'
  },

  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  button: {
    width: 280,
    padding: 5,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonTextIncrement: {
    color: '#0f6908',
    fontSize: 25,
  },

  buttonTextDecrement: {
    color: '#78150b',
    fontSize: 25,
  },

  incrementButton: {
    backgroundColor: '#ADFF2F',
  },

  decrementButton: {
    backgroundColor: '#ff1919',
  },
});

export default styles;
