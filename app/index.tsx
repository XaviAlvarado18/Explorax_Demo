import { StyleSheet, Dimensions, ImageBackground, Platform} from 'react-native';
import { Text, View } from '@/components/Themed';
import ChallengeBox from '@/components/ChallengeBox';
import AnimationExample from '@/components/Animation';
import ImageComponent from '@/components/ImageComponent';

const { width, height } = Dimensions.get('window');

export default function TabOneScreen() {
  return (
    <ImageBackground
      source={require('./../assets/images/Fondo_RutaIterg.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >

      <View style={styles.container}>

        {/* 
        <EditScreenInfo path="app/(tabs)/index.tsx" />
        */}
                
        <View style={styles.AnimationContainer}>
          <AnimationExample></AnimationExample>
        </View>
        <View style={styles.challengeBoxContainer}>
          <ChallengeBox />
        </View>

        <ImageComponent
          source={require('./../assets/images/Circulo-morado-1.png')}
          style={styles.Circle_Purple_1}
          resizeMode="contain"
        />

        <ImageComponent
            source={require('./../assets/images/Circulo-morado-3.png')}
            style={styles.Circle_Purple_2}
            resizeMode="contain"
        />

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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  Circle_Purple_1: {
    position: 'absolute',
    width: Platform.OS === 'web' ? width * 1.2 : width * 0.5, // Cambia la escala según la plataforma
    height: Platform.OS === 'web' ? height * 1.2 : height * 0.5, // Cambia la escala según la plataforma
    margin: 10,
    transform: [
      { translateY: Platform.OS === 'web' ? height * 0.40 : height * 0.2 }, // Ajusta según la plataforma
    ],
  },
  Circle_Purple_2: {
    position: 'absolute',
    width: Platform.OS === 'web' ? width * 1.1 : width * 0.5, // Cambia la escala según la plataforma
    height: Platform.OS === 'web' ? height * 1.1 : height * 0.5, // Cambia la escala según la plataforma
    margin: 10,
    transform: [
      { translateY: Platform.OS === 'web' ? height * 0.45 : height * 0.3 }, // Ajusta según la plataforma
    ],
  },
  challengeBoxContainer: {
    // Ajusta este valor para cambiar el ancho del ChallengeBox
    transform: [
      { translateX: width * -0.010 },
      { translateY: height * -0.05},
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

  },

});
