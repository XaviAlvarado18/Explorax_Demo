import React, {useState} from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import AnimationExample from './Animation';

interface AnswerButtonProps {
    content: string | number;
    backgroundColor: string;
    isOperation: boolean;
    correctAnswer: number; // La respuesta correcta esperada
    onPress: (isCorrect: boolean) => void; // Modificar la firma para pasar el resultado
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
    content,
    backgroundColor,
    isOperation,
    correctAnswer,
    onPress,
    style,
    textStyle,
    disabled
}) => {

    const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
    const [showAnimation, setShowAnimation] = useState(false);

    // Determinar el color del botón basado en isOperation e isCorrect
    const buttonColor = isOperation
  ? backgroundColor
  : isCorrect === null
    ? backgroundColor // Color por defecto si isCorrect es null
    : isCorrect
      ? '#6FBA3B'
      : '#E6333C';

    // Asegurarse de que onPress es una función
  const handlePress = () => {
    // Calcular si la respuesta es correcta
    const correct = content === correctAnswer;
    setIsCorrect(correct);
    setShowAnimation(correct);

    // Asegurarse de que onPress es una función y manejar el evento de clic
    if (typeof onPress === 'function' && !isOperation) {

      onPress(correct); // Pasar el resultado
      console.log("Pasa");
    } 
  };

  return (
      <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }, style]}
          onPress={handlePress}
          disabled={disabled || isOperation} // Desactivar el botón si disabled es true
      >
          <Text style={[styles.buttonText, textStyle]}>
              {isOperation ? `${content}` : content}
          </Text>

          {showAnimation && (
          <AnimationExample
            source={require('@/assets/animations/Estrellitas.json')} // Ruta de la animación de éxito
            loop={false}
            />
          )}

      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
  },
});

export default AnswerButton;