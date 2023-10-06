
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 1,
    textAlign: 'center',
    color: '#f7680f',
    padding: 30,
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
    marginTop: 2,
    fontSize: 25,
    textAlign: 'center',
    color: '#09bd33',
  }
});

export { styles };
