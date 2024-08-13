
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlanetScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Esta es otra pantalla</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlanetScreen;
