import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Dimensions} from 'react-native';


const { width, height } = Dimensions.get('window');

const ChallengeBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>
          ¡Desafíate!
          <View style={styles.underline} />
        </Text>
        <Text style={styles.subtitle}>
          Supera estos desafíos y empieza a completar las misiones del Planeta Aritmética
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>¡ACEPTO EL RETO!</Text>
        </TouchableOpacity>
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
  },
  box: {
    backgroundColor: '#204D8D',
    padding: height * 0.03, // 3% of screen height
    borderRadius: 10,
    width: width * 0.80, // 80% of screen width on both web and mobile
    height: height * 0.30, // 50% of screen height on web, 40% on mobile
    shadowColor: '#123051',
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
    fontSize: height * 0.020, // Relative font size based on screen width
    color: 'white',
    marginBottom: height * 0.03, // 3% of screen height
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: height * 0.015, // 1.5% of screen height
    paddingHorizontal: width * 0.06, // 6% of screen width
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: height * 0.02, // Relative font size based on screen width
    color: '#204D8D',
    fontWeight: 'bold',
  },
});


export default ChallengeBox;
