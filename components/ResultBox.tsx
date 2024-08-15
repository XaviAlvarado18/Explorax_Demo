import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/app/types'; 
import SplashScreen from './SplashScreen';

const { width, height } = Dimensions.get('window');

type NavigationProp = StackNavigationProp<RootStackParamList, 'Started'>;

interface ChallengeBoxProps {
  title: string;
  buttonText: string;
  backgroundColor: string;
}

const ResultBox: React.FC<ChallengeBoxProps> = ({ title, buttonText, backgroundColor }) => {
  const navigation = useNavigation<NavigationProp>();
  const [showTransition, setShowTransition] = useState(false);

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
    height: height * 0.46, // 50% of screen height on web, 40% on mobile
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
    marginBottom: height * 0.01, // 1% of screen height
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
    marginBottom: height * 0.03, // 3% of screen height
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: height * 0.015, // 1.5% of screen height
    paddingHorizontal: width * 0.06, // 6% of screen width
    borderRadius: 5,
    marginTop: height * 0.012,
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
