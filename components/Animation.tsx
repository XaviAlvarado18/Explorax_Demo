import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimationExample: React.FC = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./../assets/animations/D_fire.json')} // Ruta del archivo JSON
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  animation: {
    width: 1, // Ajusta el tamaño según sea necesario
    height: 1,
    backgroundColor: 'transparent',
  },
});

export default AnimationExample;
