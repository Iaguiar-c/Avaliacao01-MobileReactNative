import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setCount(0);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador de Pessoas: </Text>
      <View style={styles.countContainer}>
          <Text style={styles.countText}>{count}</Text>
        </View>
      <View style={styles.buttonContainer}>
        
        <TouchableOpacity
          style={[styles.button, styles.incrementButton]}
          onPress={increment}
        >
          <Text style={styles.buttonTextIncrement}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.decrementButton]}
          onPress={decrement}
        >
          <Text style={styles.buttonTextDecrement}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;


