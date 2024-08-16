import React, {useState} from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import AnimationExample from './Animation';
import ImageComponent from './ImageComponent';

interface AnswerButtonProps {
    content: string | number;
    backgroundColor: string;
    isOperation: boolean;
    correctAnswer: number; // La respuesta correcta esperada
    isCorrectAnswer: boolean;
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
    isCorrectAnswer,
    onPress,
    style,
    textStyle,
    disabled
}) => {

    const [isSelected, setIsSelected] = useState(false);
    const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
    const [showAnimation, setShowAnimation] = useState(false);

    // Determinar el color del botón basado en isOperation e isCorrect
    const buttonColor = isOperation
    ? backgroundColor
    : isCorrect === null
    ? backgroundColor
    : isCorrect
    ? '#6FBA3B'
    : '#E6333C';

    

    // Asegurarse de que onPress es una función
  const handlePress = () => {

    setIsSelected(true);
    // Calcular si la respuesta es correcta
    const correct = content === correctAnswer;
    setIsCorrect(correct);
    setShowAnimation(correct);

    console.log("IsSelected: ", isSelected);

    // Asegurarse de que onPress es una función y manejar el evento de clic
    if (typeof onPress === 'function' && !isOperation) {

      onPress(correct); // Pasar el resultado
      console.log("Pasa");
    } 
  };

  // Determinar si el botón es la respuesta correcta y no ha sido seleccionado
  const shouldShowCheck = isCorrectAnswer && !isSelected && !isCorrect === false;

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

          {shouldShowCheck &&(
            <ImageComponent
              source={require('@/assets/images/check.png')} // Usa tu componente ImageComponent
              style={styles.checkImage}
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
    fontSize: 40,
    fontWeight: 'bold',
  },
  checkImage: {
    width: 20, // Ajusta el tamaño según lo que necesites
    height: 20, // Ajusta el tamaño según lo que necesites
    position: 'absolute',
    top: 5, // Ajusta la posición vertical
    right: 5, // Ajusta la posición horizontal
    zIndex: 1, // Asegura que esté encima de otros elementos
  },
});

export default AnswerButton;