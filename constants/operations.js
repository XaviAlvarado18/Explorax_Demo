function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function generateOperation() {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error('Invalid operation');
  }

  // Generar 3 respuestas falsas
  const wrongAnswers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 200));
  const possibleAnswers = [
    { answer: result, isCorrect: true },
    ...wrongAnswers.map(answer => ({ answer, isCorrect: false })),
  ];

  return { num1, num2, operation, result, isCorrect: true, possibleAnswers };
}
