import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface CoinScoreCardProps {
  boxImage: ImageSourcePropType;
  coinImage: ImageSourcePropType;
  number: number;
  text: string;
}

const CoinScoreCard: React.FC<CoinScoreCardProps> = ({ boxImage, coinImage, number, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>{text}</Text>
      <View style={styles.scoreContainer}>
        <Image source={coinImage} style={styles.coin} />
        <View style={styles.boxContainer}>
          <Image source={boxImage} style={styles.box} />
          <Text style={styles.number}>{number}</Text>
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
