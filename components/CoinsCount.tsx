// CoinCounter.tsx
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';


const { width, height } = Dimensions.get('window');

// Define la interfaz para las propiedades del componente
interface CoinCounterProps {
  coinCount: number; // Especifica que coinCount es de tipo string
}

const CoinCounter: React.FC<CoinCounterProps> = ({ coinCount }) => {

  // Animation
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const duration = 900; // Duration of the animation in milliseconds
    const endValue = coinCount;
    let startValue = 0;
    const step = (timestamp: number) => {
      if (!startValue) startValue = timestamp;
      const progress = timestamp - startValue;
      const newNumber = Math.min(Math.floor((progress / duration) * endValue), endValue);
      setAnimatedNumber(newNumber);
      if (newNumber < endValue) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [coinCount]);

  const handleAnimationEnd = () => {
    setShowAnimation(false);
  };

  const formatNumber = (number: number) => {
    return number.toString().padStart(4, '0');
  };

  return (
    <View style={styles.coinContainer}>
      <Image
        source={require('./../assets/images/moneda.png')} // Asegúrate de ajustar la ruta de la imagen según tu estructura de archivos
        style={styles.Moneda}
        resizeMode="contain"
      />
      <Animatable.Text
            style={styles.coinCounter}
            animation="fadeIn"
            duration={1000}
          >
            {formatNumber(animatedNumber)}
          </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: 'row', // Alinea la imagen de la moneda y el contador horizontalmente
    alignItems: 'center',
  },
  Moneda: {
    width: '20%', // Ajusta esto según lo que necesites
    height: undefined,
    aspectRatio: 1, // Mantiene la proporción de la imagen
    margin: width*0.002,
    marginRight: -width*0.03,
    pointerEvents: 'none',
    zIndex: 1,
  },
  coinCounter: {
    backgroundColor: '#1F2858', // Fondo azul
    color: '#FFFFFF', // Texto blanco
    paddingVertical: height*0.002,
    paddingHorizontal: 20,
    borderRadius: 10, // Bordes redondeados
    fontSize: width*0.04, // Tamaño del texto
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 0,
  },
});

export default CoinCounter;
