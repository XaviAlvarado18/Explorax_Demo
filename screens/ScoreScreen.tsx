import React from 'react';
import { StyleSheet, Dimensions, ImageBackground, Platform} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ScoreScreen() {

    return (
        <ImageBackground
          source={require('@/assets/images/Fondo_RutaIterg.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >

        </ImageBackground>
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      pointerEvents: 'box-none',
    },
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
    },
  
});
  