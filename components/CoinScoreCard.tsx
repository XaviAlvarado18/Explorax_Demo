import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

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
        <Image source={boxImage} style={styles.box} />
        <Text style={styles.number}>{number}</Text>
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coin: {
    width: 50,
    height: 50,
    marginRight: -25,
    zIndex: 1,
  },
  box: {
    width: 150,
    height: 50,
  },
  number: {
    position: 'absolute',
    right: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CoinScoreCard;