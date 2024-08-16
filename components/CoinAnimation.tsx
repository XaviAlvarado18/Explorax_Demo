import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface CoinAnimationProps {
  coinImage: any; // Puedes ajustar el tipo según cómo importes las imágenes
  onAnimationEnd: () => void;
}

const CoinAnimation: React.FC<CoinAnimationProps> = ({ coinImage, onAnimationEnd }) => {
  const animation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: { x: 0, y: -height * 0.3 }, // Ajusta la posición final según donde esté el contador
      duration: 1500, // Duración de la animación en milisegundos
      useNativeDriver: true,
    }).start(() => {
      onAnimationEnd(); // Llamar a esta función cuando la animación termine
    });
  }, [animation, onAnimationEnd]);

  return (
    <Animated.View style={[styles.coin, { transform: animation.getTranslateTransform() }]}>
      <Image source={coinImage} style={styles.image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  coin: {
    position: 'absolute',
    bottom: 0, // Empieza desde el fondo de la pantalla
  },
  image: {
    width: 50, // Ajusta el tamaño según sea necesario
    height: 50,
  },
});

export default CoinAnimation;
