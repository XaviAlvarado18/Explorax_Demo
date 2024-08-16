import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface ScoreCardProps {
  boxImage: ImageSourcePropType;
  starImage: ImageSourcePropType;
  number: number;
  text: string;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ boxImage, starImage, number, text }) => {
  return (
    <View style={styles.container}>
      <Image source={starImage} style={styles.star} />
      <Image source={boxImage} style={styles.box} />
      <View style={styles.content}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  star: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: -20,
    zIndex: 1,
  },
  box: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
});

export default ScoreCard;