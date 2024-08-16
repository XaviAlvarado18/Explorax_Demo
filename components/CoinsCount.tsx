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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinea los elementos al inicio del contenedor
    paddingHorizontal: 10, // Añade un poco de padding horizontal
  },
  Moneda: {
    width: width * 0.04, // Ajusta este valor según necesites
    height: width * 0.04, // Mantiene la moneda cuadrada
    marginRight: -width * 0.02, // Espacio entre la moneda y el contador
    zIndex: 1,
  },
  coinCounter: {
    backgroundColor: '#1F2858',
    color: '#FFFFFF',
    paddingVertical: height * 0.001,
    paddingHorizontal: width * 0.04,
    borderRadius: 20,
    fontSize: width * 0.04,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 0,
  },
});


export default CoinCounter;
