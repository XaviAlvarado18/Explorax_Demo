import React, { useState } from 'react';
import { StyleSheet, Dimensions, ImageBackground, Platform} from 'react-native';
import { Text, View } from '@/components/Themed';
import ChallengeBox from '@/components/ChallengeBox';
import AnimationExample from '@/components/Animation';
import ImageComponent from '@/components/ImageComponent';
import CoinCounter from '@/components/CoinsCount';
import BottomLogo from '@/components/BottomLogo';
import SplashScreen from '@/components/SplashScreen';
import { RootStackParamList } from '@/app/types'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from 'expo-router';


const { width, height } = Dimensions.get('window');
type NavigationProp = StackNavigationProp<RootStackParamList, 'Started'>;


export default function StartedScreen() {

  const [coinCount, setCoinCount] = useState(0);
  const [showTransition, setShowTransition] = useState(false);

  const [showAnimation, setShowAnimation] = useState(true); // Estado para controlar la visibilidad de la animación

  
  const navigation = useNavigation<NavigationProp>();


  // Función para manejar el clic en el botón del ChallengeBox
  const handlePress = () => {
    setShowTransition(true);
    setShowAnimation(false); // Oculta la animación al hacer clic
    console.log("Entra");
  };

  const handleTransitionFinish = () => {
    navigation.navigate('Planet');
  };

  if (showTransition) {
    console.log("Entra");
    return <SplashScreen onFinish={handleTransitionFinish} />;
  }

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


      <View style={styles.container}>                
        {showAnimation && (
            <View style={styles.AnimationContainer}>
              <AnimationExample
                source={require('@/assets/animations/D_fire.json')}
                loop={true} // Ruta del archivo JSON
              />
            </View>
          )}
        <View style={styles.challengeBoxContainer}>
            <ChallengeBox
                title="¡Desafíate!"
                subtitle="Supera estos desafíos y empieza a completar las misiones del Planeta Aritmética"
                buttonText="¡ACEPTO EL RETO!"
                backgroundColor="#204D8D"
                onButtonClick={handlePress}
            />
        </View>
        

        <BottomLogo/>

      

      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      pointerEvents: 'box-none',
    },
    backgroundImage: {
      flex: 1,
      width: width,
      height: height,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
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
      backgroundColor: 'transparent', 
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
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    circlesBox: {
      flex: 1,
      overflow: 'hidden',
      zIndex: 3, // Oculta la parte que se sale del contenedor
    },
    Circle_Purple_1: {
      position: 'absolute',
      width: Platform.OS === 'web' ? width *0.95: width * 0.5, // Cambia la escala según la plataforma
      height: Platform.OS === 'web' ? height : height * 0.5, // Cambia la escala según la plataforma
      margin: 10,
      transform: [
        { translateY: Platform.OS === 'web' ? height * 0.40 : height * 0.2 }, // Ajusta según la plataforma
      ],
      pointerEvents: 'none',
    },
    Circle_Purple_2: {
      position: 'absolute',
      width: Platform.OS === 'web' ? width * 0.95: width * 0.5, // Cambia la escala según la plataforma
      height: Platform.OS === 'web' ? height : height * 0.5, // Cambia la escala según la plataforma
      margin: 10,
      transform: [
        { translateY: Platform.OS === 'web' ? height * 0.45 : height * 0.3 }, // Ajusta según la plataforma
      ],
      pointerEvents: 'none',
    },
    challengeBoxContainer: {
      // Ajusta este valor para cambiar el ancho del ChallengeBox
      transform: [
        { translateX: width * -0.010 },
        { translateY: height * -0.054},
      ],
      backgroundColor: 'transparent',
      position: 'absolute',
      borderRadius: 10,
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
      zIndex: 3,
      pointerEvents: 'none',
    },
  
  });
  