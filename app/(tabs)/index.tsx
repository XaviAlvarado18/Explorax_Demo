import { StyleSheet, Dimensions} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';

import { Text, View } from '@/components/Themed';
import ChallengeBox from '@/components/ChallengeBox';

const { width, height } = Dimensions.get('window');

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#362148" darkColor="rgba(255,255,255,0.1)" />
       {/* 
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      */}
      <View style={styles.challengeBoxContainer}>
        <ChallengeBox />
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#362148'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  challengeBoxContainer: {
 // Ajusta este valor para cambiar el ancho del ChallengeBox
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#362148',
  },
});
