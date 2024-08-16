import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface ProgressBarProps {
  level: number;
  levelLabel: number,
  maxLevel: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ level, levelLabel, maxLevel }) => {
  const progress = (level / maxLevel) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.levelText}>Nivel {levelLabel}/{maxLevel}</Text>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
        <View style={styles.progressIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 40, // Dejamos un margen de 20 a cada lado
    marginHorizontal: 20,
  },
  levelText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  progressBarContainer: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FFA500', // Color naranja para la barra de progreso
  },
  progressIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFA500',
    position: 'absolute',
    left: 0,
    transform: [{ translateX: -10 }], // Centramos el indicador en el borde de la barra
  },
});

export default ProgressBar;