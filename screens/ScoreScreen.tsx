import ResultBox from '@/components/ResultBox';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, ImageBackground, Platform, View, Text} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native'; 
import ImageComponent from '@/components/ImageComponent';
import CoinCounter from '@/components/CoinsCount';
import AnimationExample from '@/components/Animation';
import { RootStackParamList } from '@/app/types';
import CoinAnimation from '@/components/CoinAnimation';
import ProgressBar from '@/components/ProgressBar';
import { useCurrentProgress } from '@/context/CurrentProgressProvider';
import BottomLogo from '@/components/BottomLogo';

const { width, height } = Dimensions.get('window');

// Define el tipo para los parámetros de la ruta
type ScoreScreenRouteProp = RouteProp<RootStackParamList, 'Score'>;

export default function ScoreScreen() {

    const route = useRoute<ScoreScreenRouteProp>();
    const { totalQuestions, correctAnswers, incorrectAnswers } = route.params;
    const [totalCoins, setTotalCoins] = useState(0);
    const { currentProgress, setCurrentProgress } = useCurrentProgress();

    

    // Función para manejar el cálculo de monedas
    const handleTotalCoins = (calculatedCoins: React.SetStateAction<number>) => {
      setTotalCoins(calculatedCoins);
    };

    
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

        <CoinCounter coinCount={totalCoins} />

        {/* Aquí puedes agregar más imágenes si lo deseas */}
      </View>


      <View style={styles.AnimationContainer}>
          <AnimationExample
            source={require('@/assets/animations/D_fire.json')}
            loop={true} // Ruta del archivo JSON
          />
      </View>

      <Text style={styles.title}>Desafíate</Text>
      
      <View style={styles.progressBarContainer}>
        <ProgressBar level={currentProgress} levelLabel={10} maxLevel={10} />
      </View>

      <View style={styles.ScoreBoxContainer}>

            <ResultBox
              title="¡Buen trabajo!"
              buttonText="INICIAR MISION #1"
              backgroundColor="#204D8D"
              totalQuestions={totalQuestions}
              correctAnswers={correctAnswers}
              incorrectAnswers={incorrectAnswers}
              onCalculateCoins={handleTotalCoins} 
            ></ResultBox>

      </View>

      <BottomLogo/>

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
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      top: '12%',
    },
    progressBarContainer: {
      position: 'absolute',
      width: '90%', // Ancho del contenedor del ProgressBar como porcentaje
      height: '10%', // Altura del contenedor del ProgressBar como porcentaje
      top: '12%', // Mueve el ProgressBar al 50% del alto de la pantalla
      justifyContent: 'center', // Centra el ProgressBar dentro del contenedor
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
      top: '-3%',
      right: '7%',
      // Ajusta este valor para cambiar el ancho del ChallengeBox
      backgroundColor: 'transparent', // Asegura que el componente se posicione de manera absoluta en relación con el contenedor
      position: 'absolute',
      overflow: 'hidden',
      zIndex: 3,
      pointerEvents: 'none',
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
  