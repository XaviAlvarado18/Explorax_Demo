import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

interface SplashScreenProps {
    onFinish: () => void;
}

const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
    const darkCircleSize = useRef(new Animated.Value(0)).current;
    const lightCircleSize = useRef(new Animated.Value(0)).current;
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const logoSize = useRef(new Animated.Value(0.5)).current;
    console.log('xD');

    useEffect(() => {
      Animated.sequence([
        Animated.timing(darkCircleSize, {
          toValue: 1,
          duration: 450,
          useNativeDriver: false,
        }),
        Animated.parallel([
          Animated.timing(logoOpacity, {
            toValue: 1,
            duration: 450,
            useNativeDriver: false,
          }),
          Animated.timing(logoSize, {
            toValue: 1,
            duration: 250,
            useNativeDriver: false,
          }),
        ]),
        Animated.timing(lightCircleSize, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start(onFinish);
    }, []);
  
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.darkCircle,
            {
              transform: [{ scale: darkCircleSize }],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.lightCircle,
            {
              transform: [{ scale: lightCircleSize }],
            },
          ]}
        />
        <Animated.Image
          source={require('@/assets/images/logo_blanco.png')}
          style={[
            styles.logo,
            {
              opacity: logoOpacity,
              transform: [{ scale: logoSize }],
            },
          ]}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366', // Color de fondo oscuro
    zIndex: 3,
  },
  darkCircle: {
    position: 'absolute',
    width: width*1.5,
    height: height*1.5,
    borderRadius: 150,
    backgroundColor: '#004080', // Color azul oscuro
  },
  lightCircle: {
    position: 'absolute',
    width: width*1.5,
    height: height*1.5,
    borderRadius: 125,
    backgroundColor: '#0099cc', // Color azul claro
  },
  logo: {
    width: width*0.4,
    height: height*0.4,
    resizeMode: 'contain',
  },
});

export default SplashScreen;