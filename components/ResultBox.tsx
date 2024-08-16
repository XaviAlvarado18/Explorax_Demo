import React, {useEffect, useState} from 'react';
import { View, Text, Pressable, StyleSheet, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/app/types'; 
import SplashScreen from './SplashScreen';
import ScoreCard from './ScoreCard';
import CoinScoreCard from './CoinScoreCard';
import * as Animatable from 'react-native-animatable';


const { width, height } = Dimensions.get('window');

type NavigationProp = StackNavigationProp<RootStackParamList, 'Started'>;

const COINS_PER_CORRECT_ANSWER = 10; // Monedas por respuesta correcta
const PENALTY_PER_INCORRECT_ANSWER = -3; // Penalización por respuesta incorrecta

interface ChallengeBoxProps {
  title: string;
  buttonText: string;
  backgroundColor: string;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  onCalculateCoins: (coins: number) => void;
}

const ResultBox: React.FC<ChallengeBoxProps> = ({ title, buttonText, backgroundColor, totalQuestions, correctAnswers, incorrectAnswers,  onCalculateCoins}) => {
  const navigation = useNavigation<NavigationProp>();
  const [showTransition, setShowTransition] = useState(false);
  const [coins, setCoins] = useState(0);

  const calculateTotalCoins = (totalQuestions: number, correctAnswers: number, incorrectAnswers: number) => {
    // Calcular las monedas obtenidas
    const totalCoins = (correctAnswers * COINS_PER_CORRECT_ANSWER) + (incorrectAnswers * PENALTY_PER_INCORRECT_ANSWER);
  
    // Asegurarse de que el total de monedas no sea negativo
    return Math.max(totalCoins, 0);
  };


  
  // Usa useEffect para calcular y enviar las monedas al componente padre
  useEffect(() => {
    const totalCoins = calculateTotalCoins(totalQuestions, correctAnswers, incorrectAnswers);
    setCoins(totalCoins);
    onCalculateCoins(totalCoins); // Llama a la función pasada por el padre
  }, [totalQuestions, correctAnswers, incorrectAnswers, onCalculateCoins]);


  const handlePress = () => {
    setShowTransition(true);
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
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor }]}>
        <Text style={styles.title}>
          {title}
          <View style={styles.underline} />
        </Text>

        <View style={styles.scorecards}>

          <ScoreCard 
            boxImage={require('@/assets/images/box_conteo_preguntas.png')}
            starImage={require('@/assets/images/estrella_preguntas.png')}
            number={totalQuestions}
            text="Preguntas"
          />

          <ScoreCard 
            boxImage={require('@/assets/images/box_conteo_preguntas.png')}
            starImage={require('@/assets/images/estrella_correctas.png')}
            number={correctAnswers}
            text="Correctas"
          />

          <ScoreCard 
            boxImage={require('@/assets/images/box_conteo_preguntas.png')}
            starImage={require('@/assets/images/estrella_incorrectas.png')}
            number={incorrectAnswers}
            text="Incorrectas"
          />

        </View>

        <CoinScoreCard 
          boxImage={require('@/assets/images/box_conteomonedas.png')}
          coinImage={require('@/assets/images/moneda.png')}
          number={coins}
          text="Monedas obtenidas"
        />

        <Pressable
          style={styles.button}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.005, // 0.5% of screen width
    paddingVertical: height * 0.005,  // 0.5% of screen height
    zIndex: 3
  },
  box: {
    padding: height * 0.03, // 3% of screen height
    borderRadius: 10,
    width: width * 0.90, // 80% of screen width on both web and mobile
    height: height * 0.50, // 50% of screen height on web, 40% on mobile
    shadowColor: '#362148',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: height * 0.040, // Relative font size based on screen width
    fontWeight: 'bold',
    color: 'white',
    marginTop: height * 0.03,
    marginBottom: height * 0.04,
    textAlign: 'center',
    position: 'relative',
  },
  underline: {
    backgroundColor: '#9B4FFF',
    height: 0.2, // Fixed height for the underline
    width: '100%',
    position: 'absolute',
    bottom: -5,
    left: 5,
  },
  subtitle: {
    fontSize: height * 0.022, // Relative font size based on screen width
    color: 'white',
    marginBottom: height * 0.03 , // 3% of screen height
    textAlign: 'center',
  },
  scorecards: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: width * -0.06,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: height * 0.015, // 1.5% of screen height
    paddingHorizontal: width * 0.06, // 6% of screen width
    borderRadius: 5,
    marginTop: height * 0.014,
    alignItems: 'center',
    zIndex: 10,
  },
  buttonText: {
    fontSize: height * 0.02, // Relative font size based on screen width
    color: '#204D8D',
    fontWeight: 'bold',
  },
});

export default ResultBox;
