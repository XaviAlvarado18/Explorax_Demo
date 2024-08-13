
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, Pressable} from 'react-native';
import AnswerButton from '@/components/AnswerComponent';
import ProgressBar from '@/components/ProgressBar';

import { useNavigation, CommonActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/app/types'; 
import { useCurrentProgress } from '@/context/CurrentProgressProvider';
import generateOperation from '@/constants/operations'

const MAX_PROGRESS = 10;
const { width, height } = Dimensions.get('window');

const buttonWidth = (width - 60) / 2;
type NavigationProp = StackNavigationProp<RootStackParamList, 'Started'>;

interface Operation {
  num1: number;
  num2: number;
  operation: '+' | '-' | '*';
  result: number;
  isCorrect: boolean;
}

const PlanetScreen: React.FC = () => {

  const navigation = useNavigation<NavigationProp>();
  const correctAnswer = 84;
  const { currentProgress, setCurrentProgress } = useCurrentProgress();
  const [showNextButton, setShowNextButton] = useState(false);
  const [operations, setOperations] = useState<Operation[]>([]);

  useEffect(() => {
    const operationsData: Operation[] = [];
    for (let i = 0; i < 4; i++) {
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
    console.log("Answer");
    if (isCorrect) {
      if (currentProgress < MAX_PROGRESS) {
        setCurrentProgress((prevProgress: number) => prevProgress + 1);
      }
      setShowNextButton(true); // Mostrar el botón "SIGUIENTE" si la respuesta es correcta
    } else {
      setShowNextButton(true); // Ocultar el botón si la respuesta no es correcta
    }   
  }

  const handleNextPress = () => {
    setShowNextButton(false); // Ocultar el botón "SIGUIENTE" al hacer clic
    // Navegar a la misma pantalla y limpiar el estado
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Planet' }],
      })
    );
  };

  return (
    <ImageBackground
      source={require('./../assets/images/Fondo_RutaIterg.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
        <Text style={styles.title}>Desafíate</Text>
        <ProgressBar level={currentProgress} levelLabel={1} maxLevel={MAX_PROGRESS} />
        <View style={styles.buttonContainer}>

        <AnswerButton
            content={'75 + 8 = ?'}
            backgroundColor="#FFFFFF"
            isOperation={true}
            correctAnswer={correctAnswer}
            onPress={() => console.log('Pressed 67')}
            style={styles.buttonOp}
            textStyle={styles.textbtnOp}
        />

        <View style={styles.buttonRow}>
          <AnswerButton
            content={84}
            backgroundColor="#6AB1B5"
            isOperation={false}
            correctAnswer={correctAnswer}
            onPress={() => handleAnswerPress(true)}
            style={styles.button}
          />
          <AnswerButton
            content={82}
            backgroundColor="#6AB1B5"
            isOperation={false}
            correctAnswer={correctAnswer}
            onPress={() => handleAnswerPress(false)}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonRow}>
          <AnswerButton
            content={83}
            backgroundColor="#6AB1B5"
            isOperation={false}
            correctAnswer={correctAnswer}
            onPress={() => handleAnswerPress(false)}
            style={styles.button}
          />
          <AnswerButton
            content={67}
            backgroundColor="#6AB1B5"
            isOperation={false}
            correctAnswer={correctAnswer}
            onPress={() => handleAnswerPress(false)}
            style={styles.button}
          />
        </View>

        {showNextButton && (
          <Pressable style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>SIGUIENTE</Text>
          </Pressable>
        )}


      </View>

    </ImageBackground>
  );
};

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
    height: height * 0.07,
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
