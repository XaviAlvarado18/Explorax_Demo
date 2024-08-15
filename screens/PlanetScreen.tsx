
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, Pressable, Platform} from 'react-native';
import AnswerButton from '@/components/AnswerComponent';
import ProgressBar from '@/components/ProgressBar';
import ImageComponent from '@/components/ImageComponent';
import CoinCounter from '@/components/CoinsCount';
import BottomLogo from '@/components/BottomLogo';
import SplashScreen from '@/components/SplashScreen';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/app/types'; 
import { useCurrentProgress } from '@/context/CurrentProgressProvider';
import generateOperation from '@/constants/operations'


const MAX_PROGRESS = 2;
const { width, height } = Dimensions.get('window');

const buttonWidth = (width - 60) / 2;
type NavigationProp = StackNavigationProp<RootStackParamList, 'Started'>;

interface Operation {
  num1: number;
  num2: number;
  operation: '+' | '-' | '*';
  result: number;
  isCorrect: boolean;
  shuffledAnswers: Array<any>;
}

const PlanetScreen: React.FC = () => {

  const navigation = useNavigation<NavigationProp>();
  const correctAnswer = 84;
  const { currentProgress, setCurrentProgress } = useCurrentProgress();
  const [showNextButton, setShowNextButton] = useState(false);
  const [operations, setOperations] = useState<Operation[]>([]);
  const [coinCount, setCoinCount] = React.useState('00000');
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const operationsData: Operation[] = [];
    for (let i = 0; i < 1; i++) {
      const operation = generateOperation();
      operationsData.push(operation);
      // Agrega un console.log aquí para ver cada operación generada
      console.log(`Operación ${i+1}:`, operation);
    }
    // Agrega un console.log aquí para ver el arreglo completo de operaciones generadas
    console.log('Arreglo de operaciones:', operationsData);
    setOperations(operationsData);


    
  }, []);
  

  const handleAnswerPress = (isCorrect: boolean) => {
    console.log("Answer: ", isCorrect);
    if (isCorrect) {
      if (currentProgress < MAX_PROGRESS) {
        console.log("currenProgress: ", currentProgress);
        setCurrentProgress((prevProgress: number) => prevProgress + 1);
      }
      setShowNextButton(true); // Mostrar el botón "SIGUIENTE" si la respuesta es correcta
    } else {
      setShowNextButton(true); // Ocultar el botón si la respuesta no es correcta
    }   
  }

  const handleTransitionFinish = () => {
    navigation.navigate('Score');
  };

  const handleNextPress = () => {
    setShowNextButton(false); // Ocultar el botón "SIGUIENTE" al hacer clic
  
    if (currentProgress >= MAX_PROGRESS) {
      // Navegar a la pantalla de Score si el progreso es máximo
      setShowTransition(true);
      //console.log("Entra? ");
      //navigation.navigate('Score');
    } else {
      //setShowTransition(true);
      // De lo contrario, reiniciar el estado y continuar
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Planet' }],
        })
      );
    }
  };
  
  if (showTransition) {
    //console.log("Entra");
    return <SplashScreen onFinish={handleTransitionFinish} />;
  }
  

  return (
    <ImageBackground
      source={require('./../assets/images/Fondo_RutaIterg.png')}
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

      <View style={styles.spacer} />

      <Text style={styles.title}>Desafíate</Text>
      <ProgressBar level={currentProgress} levelLabel={1} maxLevel={10} />
  
      {operations.map((operation, index) => {
        // Divide el array en dos partes
        const firstHalf = operation.shuffledAnswers.slice(0, 2);
        const secondHalf = operation.shuffledAnswers.slice(2, 4);
  
        return (
          <View key={index} style={styles.buttonContainer}>
            <AnswerButton
              content={`${operation.num1} ${operation.operation} ${operation.num2} = ?`}
              backgroundColor="#FFFFFF"
              isOperation={true}
              correctAnswer={operation.result}
              onPress={() => console.log('Operacion Pressed')}
              style={styles.buttonOp}
              textStyle={styles.textbtnOp}
            />

            <View style={styles.spacer} />
  
            {/* Primera fila de botones */}
            <View style={styles.buttonRow}>
              {firstHalf.map((answer, i) => (
                <AnswerButton
                  key={i}
                  content={answer.answer}
                  backgroundColor="#6AB1B5"
                  isOperation={false}
                  correctAnswer={operation.result}
                  onPress={() => handleAnswerPress(answer.isCorrect)}
                  style={styles.button}
                  disabled={showNextButton} 
                />
              ))}
            </View>
  
            {/* Segunda fila de botones */}
            <View style={styles.buttonRow}>
              {secondHalf.map((answer, i) => (
                <AnswerButton
                  key={i + 2} // Ajusta la clave para que sea única
                  content={answer.answer}
                  backgroundColor="#6AB1B5"
                  isOperation={false}
                  correctAnswer={operation.result}
                  onPress={() => handleAnswerPress(answer.isCorrect)}
                  style={styles.button}
                  disabled={showNextButton} 
                />
              ))}
            </View>
  
            {/* Botón "SIGUIENTE" dentro del contenedor */}
            {showNextButton && (
              <Pressable style={styles.nextButton} onPress={handleNextPress}>
                <Text style={styles.nextButtonText}>SIGUIENTE</Text>
              </Pressable>
            )}
          </View>
        );
      })}

      <BottomLogo/>

    </ImageBackground>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
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
    height: height*0.10, // Ajusta la altura del espaciador según tus necesidades
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: height*0.024,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    width: buttonWidth,
    height: height * 0.07, // Ajusta según necesites
  },
  buttonOp: {
    width: buttonWidth*2,
    height: height * 0.07, // Ajusta según necesites
  },
  textbtnOp: {
    color: '#013265' // Ajusta según necesites
  },
  nextButton: {
    width: buttonWidth /1.2,
    height: undefined,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  nextButtonText: {
    color: '#013265',
    fontSize: buttonWidth /7.5,
    fontWeight: 'bold',
  },

});

export default PlanetScreen;
