import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

interface AnimationExampleProps {
  source: any; 
  loop?: boolean; 
}

const AnimationExample: React.FC<AnimationExampleProps> = ({ source, loop = false }) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={source}
        autoPlay
        loop={loop}
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
    width: 100, // Ajusta el tamaño según sea necesario
    height: 100,
    backgroundColor: 'transparent',
  },
});

export default AnimationExample;
