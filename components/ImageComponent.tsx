// ImageComponent.tsx
import React from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';

// Define las propiedades que acepta el componente
interface ImageComponentProps {
  source: any; // Puedes usar require o { uri: string }
  style?: StyleProp<ImageStyle>; // Permite pasar estilos personalizados
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center' | 'repeat'; // Opciones de redimensionamiento
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  source,
  style,
  resizeMode = 'cover', // Valor predeterminado
}) => {
  return (
    <Image source={source} style={[styles.image, style]} resizeMode={resizeMode} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100, // Valores predeterminados
    height: 100,
  },
});

export default ImageComponent;