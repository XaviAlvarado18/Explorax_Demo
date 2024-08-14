import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Define las propiedades del componente
const BottomLogo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/LogoOscuros.png')} // Asegúrate de ajustar la ruta de la imagen
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0, // Alinea el contenedor en la parte inferior de la pantalla
    width: '100%', // Asegura que el contenedor ocupe el ancho completo
    alignItems: 'center', // Centra el contenido horizontalmente
    zIndex: -1,
  },
  logo: {
    width: width * 0.4, // Ajusta el ancho según sea necesario
    height: undefined,
    aspectRatio: 1, // Mantiene la proporción de la imagen
  },
});

export default BottomLogo;
