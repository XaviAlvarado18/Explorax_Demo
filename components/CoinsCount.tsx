// CoinCounter.tsx
import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

// Define la interfaz para las propiedades del componente
interface CoinCounterProps {
  coinCount: string; // Especifica que coinCount es de tipo string
}

const CoinCounter: React.FC<CoinCounterProps> = ({ coinCount }) => {
  return (
    <View style={styles.coinContainer}>
      <Image
        source={require('./../assets/images/moneda.png')} // Asegúrate de ajustar la ruta de la imagen según tu estructura de archivos
        style={styles.Moneda}
        resizeMode="contain"
      />
      <Text style={styles.coinCounter}>{coinCount}</Text>
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
