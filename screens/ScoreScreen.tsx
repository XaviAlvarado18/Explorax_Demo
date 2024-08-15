import ResultBox from '@/components/ResultBox';
import React from 'react';
import { StyleSheet, Dimensions, ImageBackground, Platform, View} from 'react-native';
import ImageComponent from '@/components/ImageComponent';
import CoinCounter from '@/components/CoinsCount';
import AnimationExample from '@/components/Animation';

const { width, height } = Dimensions.get('window');

export default function ScoreScreen() {

    const [coinCount, setCoinCount] = React.useState('00000');

    return (
        <ImageBackground
          source={require('@/assets/images/Fondo_RutaIterg.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >

        <View style={styles.topContainer}>
        <ImageComponent
            source={require('@/assets/images/PlanetaAritmetica.png')}
            style={styles.PlanetAritmetica}
            resizeMode="contain"
          />

        <CoinCounter coinCount={coinCount} />

        {/* Aquí puedes agregar más imágenes si lo deseas */}
      </View>


      <View style={styles.AnimationContainer}>
          <AnimationExample
            source={require('@/assets/animations/D_fire.json')}
            loop={true} // Ruta del archivo JSON
          />
      </View>

      <View style={styles.ScoreBoxContainer}>
          <ResultBox
            title="¡Buen trabajo!"
            buttonText="INICIAR MISION #1"
            backgroundColor="#204D8D"
            
          ></ResultBox>
      </View>

        </ImageBackground>
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      pointerEvents: 'box-none',
    },
    topContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      padding: 10,
      flexDirection: 'row', // Para alinear múltiples imágenes horizontalmente
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    PlanetAritmetica: {
      width: '20%', // Ajusta esto según lo que necesites
      height: undefined,
      aspectRatio: 1, // Mantiene la proporción de la imagen
      maxWidth: 50, // Controla el tamaño máximo en pantallas grandes
      maxHeight: 50, // Controla el tamaño máximo en pantallas grandes
      margin: width*0.002,
      pointerEvents: 'none',
    },
    spacer: {
      height: height*-0.10, // Ajusta la altura del espaciador según tus necesidades
    },
    AnimationContainer: {
      transform: [
        { translateX: width * -0.1 }, // Trasladar en el eje X
        { translateY: height * -0.23 },
       ],
      // Ajusta este valor para cambiar el ancho del ChallengeBox
      backgroundColor: 'transparent', // Asegura que el componente se posicione de manera absoluta en relación con el contenedor
      position: 'absolute',
      overflow: 'hidden',
  
    },
    ScoreBoxContainer: {
      // Ajusta este valor para cambiar el ancho del ChallengeBox
      transform: [
        { translateX: width * 0.045 },
        { translateY: height * 0.23},
      ],
      backgroundColor: 'transparent',
      position: 'absolute',
      borderRadius: 10,
    },
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
    },
  
});
  