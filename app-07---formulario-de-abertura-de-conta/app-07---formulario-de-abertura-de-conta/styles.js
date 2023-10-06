import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    margin: 20,
  },
  inputContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    flex: 2,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },
  title:{
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center',
    color: '#000000',
  },
  title2:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'left',
    color: '#0000ff',
  },
  slider: {
    flex: 1
  }
});

export default styles;

