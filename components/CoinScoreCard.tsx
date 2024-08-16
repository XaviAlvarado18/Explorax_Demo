import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

interface CoinScoreCardProps {
  boxImage: ImageSourcePropType;
  coinImage: ImageSourcePropType;
  number: number;
  text: string;
}



const CoinScoreCard: React.FC<CoinScoreCardProps> = ({ boxImage, coinImage, number, text }) => {

  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    const duration = 900; // Duration of the animation in milliseconds
    const endValue = number;
    let startValue = 0;
    const step = (timestamp: number) => {
      if (!startValue) startValue = timestamp;
      const progress = timestamp - startValue;
      const newNumber = Math.min(Math.floor((progress / duration) * endValue), endValue);
      setAnimatedNumber(newNumber);
      if (newNumber < endValue) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [number]);

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>{text}</Text>
      <View style={styles.scoreContainer}>
        <Image source={coinImage} style={styles.coin} />
        <View style={styles.boxContainer}>
          <Image source={boxImage} style={styles.box} />
          <Animatable.Text
            style={styles.number}
            animation="fadeIn"
            duration={1000}
          >
            {animatedNumber}
          </Animatable.Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coin: {
    width: width * 0.169,
    height: height * 0.086,
    marginRight: width * -0.14,
    resizeMode: 'contain',
    zIndex: 1,
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  box: {
    width: width * 0.4,
    height: height * 0.086,
    resizeMode: 'contain',
  },
  number: {
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CoinScoreCard;
