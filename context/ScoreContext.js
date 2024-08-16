import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const ScoreContext = createContext();

// Hook para usar el contexto
export const useScore = () => {
  const context = useContext(ScoreContext);
  if (context === undefined) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return context;
};

// Provider para envolver la aplicación
export const ScoreProvider = ({ children }) => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  return (
    <ScoreContext.Provider value={{ totalQuestions, correctAnswers, incorrectAnswers, setTotalQuestions, setCorrectAnswers, setIncorrectAnswers }}>
      {children}
    </ScoreContext.Provider>
  );
};
