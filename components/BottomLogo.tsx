import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const BottomLogo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/Chanin.png')}
        style={styles.character}
        resizeMode="contain"
      />
      <View style={styles.circlesContainer}>
        <View style={[styles.circle, styles.darkBlueCircle]} />
        <View style={[styles.circle, styles.lightBlueCircle]} />
      </View>
      <Image
        source={require('@/assets/images/LogoOscuros.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '30%', // Ajusta este valor según necesites
    alignItems: 'center',
  },
  character: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    bottom: '5%',
    left: '1%',
    zIndex: -1,
  },
  circlesContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  circle: {
    width: '100%',
    height: '200%',
    borderTopLeftRadius: 1000,
    borderTopRightRadius: 1000,
    position: 'absolute',
  },
  darkBlueCircle: {
    backgroundColor: '#1E90FF',
    bottom: '-175%',
    zIndex: 1,
  },
  lightBlueCircle: {
    backgroundColor: '#87CEFA',
    bottom: '-170%',
    zIndex: 0,
  },
  logo: {
    width: '40%',
    height: '20%',
    position: 'absolute',
    bottom: '0%',
    zIndex: 3,
  },
});

export default BottomLogo;