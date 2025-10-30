import { useState, useCallback } from "react";
import { GameState, AnswerOption } from "../types/game";
import {
  Question,
  shuffleArray,
  getQuestionsByDifficulty,
} from "../data/questions";

const initialGameState: GameState = {
  currentQuestionIndex: 0,
  score: 0,
  isGameActive: false,
  isGameOver: false,
  hasWon: false,
  selectedAnswer: null,
  isAnswerRevealed: false,
  waitingForNext: false,
  isBlinking: false,
  usedLifelines: {
    fiftyFifty: false,
    askAudience: false,
    phoneAFriend: false,
  },
  eliminatedAnswers: [],
};

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  // Función para obtener preguntas usadas del localStorage
  const getUsedQuestions = useCallback((): number[] => {
    try {
      const used = localStorage.getItem("usedQuestions");
      return used ? JSON.parse(used) : [];
    } catch {
      return [];
    }
  }, []);

  // Función para guardar preguntas usadas en localStorage
  const saveUsedQuestions = useCallback((usedIds: number[]) => {
    try {
      localStorage.setItem("usedQuestions", JSON.stringify(usedIds));
    } catch {
      // Silenciar errores de localStorage
    }
  }, []);

  // Función para filtrar preguntas no utilizadas
  const getAvailableQuestions = useCallback(
    (difficulty: "easy" | "medium" | "hard"): Question[] => {
      const usedQuestionIds = getUsedQuestions();
      const allQuestions = getQuestionsByDifficulty(difficulty);
      const availableQuestions = allQuestions.filter(
        (q) => !usedQuestionIds.includes(q.id)
      );

      // Si no hay suficientes preguntas disponibles, resetear el historial para esa dificultad
      if (availableQuestions.length < 5) {
        const allUsedIds = getUsedQuestions();
        const otherDifficultyIds = allUsedIds.filter((id) => {
          const question = allQuestions.find((q) => q.id === id);
          return !question; // Mantener IDs que no son de esta dificultad
        });
        saveUsedQuestions(otherDifficultyIds);
        return allQuestions; // Devolver todas las preguntas de esta dificultad
      }

      return availableQuestions;
    },
    [getUsedQuestions, saveUsedQuestions]
  );

  // Inicializar el juego
  const startGame = useCallback(() => {
    // Seleccionar preguntas: 5 fáciles, 5 medianas, 5 difíciles
    // Usando preguntas no utilizadas cuando sea posible
    const easyQuestions = shuffleArray(getAvailableQuestions("easy")).slice(
      0,
      5
    );
    const mediumQuestions = shuffleArray(getAvailableQuestions("medium")).slice(
      0,
      5
    );
    const hardQuestions = shuffleArray(getAvailableQuestions("hard")).slice(
      0,
      5
    );

    const selectedQuestions = [
      ...easyQuestions,
      ...mediumQuestions,
      ...hardQuestions,
    ];

    // Marcar estas preguntas como usadas
    const usedIds = getUsedQuestions();
    const newUsedIds = [...usedIds, ...selectedQuestions.map((q) => q.id)];
    saveUsedQuestions(newUsedIds);

    setGameQuestions(selectedQuestions);
    setCurrentQuestion(selectedQuestions[0]);
    setGameState({
      ...initialGameState,
      isGameActive: true,
    });
  }, [getAvailableQuestions, getUsedQuestions, saveUsedQuestions]);

  // Seleccionar respuesta
  const selectAnswer = useCallback(
    (answer: AnswerOption) => {
      if (!gameState.isGameActive || gameState.isAnswerRevealed) return;

      setGameState((prev) => ({
        ...prev,
        selectedAnswer: answer,
      }));
    },
    [gameState.isGameActive, gameState.isAnswerRevealed]
  );

  // Confirmar respuesta
  const confirmAnswer = useCallback(() => {
    if (!gameState.selectedAnswer || !currentQuestion) return;

    // Iniciar el período de titilación
    setGameState((prev) => ({
      ...prev,
      isBlinking: true,
    }));

    // Después de 5 segundos, revelar la respuesta
    setTimeout(() => {
      setGameState((prev) => ({
        ...prev,
        isAnswerRevealed: true,
        waitingForNext: true,
        isBlinking: false,
      }));
    }, 5000);
  }, [gameState.selectedAnswer, currentQuestion]);

  // Ir a la siguiente pregunta
  const goToNextQuestion = useCallback(() => {
    const nextIndex = gameState.currentQuestionIndex + 1;

    if (nextIndex >= gameQuestions.length) {
      // ¡Ganaste!
      setGameState((prev) => ({
        ...prev,
        hasWon: true,
        isGameActive: false,
        isGameOver: true,
        score: nextIndex,
      }));
    } else {
      // Siguiente pregunta
      setCurrentQuestion(gameQuestions[nextIndex]);
      setGameState((prev) => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedAnswer: null,
        isAnswerRevealed: false,
        waitingForNext: false,
        isBlinking: false,
        eliminatedAnswers: [],
        audiencePoll: undefined,
        friendAdvice: undefined,
        score: nextIndex,
      }));
    }
  }, [gameState.currentQuestionIndex, gameQuestions]);

  // Ir a los resultados (cuando la respuesta es incorrecta)
  const goToResults = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      isGameActive: false,
      isGameOver: true,
    }));
  }, []);

  // Retirarse del juego
  const quitGame = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      isGameActive: false,
      isGameOver: true,
    }));
  }, []);

  // Usar comodín 50/50
  const useFiftyFifty = useCallback(() => {
    if (!currentQuestion || gameState.usedLifelines.fiftyFifty) return;

    const correctAnswer = currentQuestion.correctAnswer;
    const wrongAnswers = (["A", "B", "C", "D"] as AnswerOption[]).filter(
      (option) => option !== correctAnswer
    );

    // Eliminar 2 respuestas incorrectas aleatoriamente
    const answersToEliminate = shuffleArray(wrongAnswers).slice(0, 2);

    setGameState((prev) => ({
      ...prev,
      usedLifelines: {
        ...prev.usedLifelines,
        fiftyFifty: true,
      },
      eliminatedAnswers: answersToEliminate,
    }));
  }, [currentQuestion, gameState.usedLifelines.fiftyFifty]);

  // Usar comodín "Pregunta al público"
  const useAskAudience = useCallback(() => {
    if (!currentQuestion || gameState.usedLifelines.askAudience) return;

    const correctAnswer = currentQuestion.correctAnswer;

    // Simular votación del público con sesgo hacia la respuesta correcta
    const poll = { A: 0, B: 0, C: 0, D: 0 };

    // La respuesta correcta tiene entre 40-70% de votos
    const correctPercentage = Math.floor(Math.random() * 31) + 40;
    poll[correctAnswer] = correctPercentage;

    // Distribuir el resto entre las otras opciones
    const remaining = 100 - correctPercentage;
    const otherOptions = (["A", "B", "C", "D"] as AnswerOption[]).filter(
      (option) => option !== correctAnswer
    );

    let remainingVotes = remaining;
    otherOptions.forEach((option, index) => {
      if (index === otherOptions.length - 1) {
        poll[option] = remainingVotes;
      } else {
        const votes = Math.floor(
          Math.random() * (remainingVotes - (otherOptions.length - index - 1))
        );
        poll[option] = votes;
        remainingVotes -= votes;
      }
    });

    setGameState((prev) => ({
      ...prev,
      usedLifelines: {
        ...prev.usedLifelines,
        askAudience: true,
      },
      audiencePoll: poll,
    }));
  }, [currentQuestion, gameState.usedLifelines.askAudience]);

  // Usar comodín "Llamada a un amigo"
  const usePhoneAFriend = useCallback(() => {
    if (!currentQuestion || gameState.usedLifelines.phoneAFriend) return;

    const correctAnswer = currentQuestion.correctAnswer;
    const correctAnswerText = currentQuestion.answers[correctAnswer];

    // El amigo tiene 80% de probabilidad de dar la respuesta correcta
    const isCorrectAdvice = Math.random() < 0.8;

    let advice: string;
    if (isCorrectAdvice) {
      advice = `Creo que la respuesta es ${correctAnswer}: ${correctAnswerText}. Estoy bastante seguro.`;
    } else {
      // Dar una respuesta incorrecta aleatoria
      const wrongAnswers = (["A", "B", "C", "D"] as AnswerOption[]).filter(
        (option) => option !== correctAnswer
      );
      const wrongAnswer =
        wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
      advice = `Hmm, no estoy muy seguro, pero creo que podría ser ${wrongAnswer}: ${currentQuestion.answers[wrongAnswer]}.`;
    }

    setGameState((prev) => ({
      ...prev,
      usedLifelines: {
        ...prev.usedLifelines,
        phoneAFriend: true,
      },
      friendAdvice: advice,
    }));
  }, [currentQuestion, gameState.usedLifelines.phoneAFriend]);

  // Reiniciar juego
  const resetGame = useCallback(() => {
    setGameState(initialGameState);
    setGameQuestions([]);
    setCurrentQuestion(null);
  }, []);

  // Resetear historial de preguntas (función de utilidad)
  const resetQuestionHistory = useCallback(() => {
    try {
      localStorage.removeItem("usedQuestions");
    } catch {
      // Silenciar errores de localStorage
    }
  }, []);

  return {
    gameState,
    currentQuestion,
    gameQuestions,
    startGame,
    selectAnswer,
    confirmAnswer,
    goToNextQuestion,
    goToResults,
    quitGame,
    useFiftyFifty,
    useAskAudience,
    usePhoneAFriend,
    resetGame,
    resetQuestionHistory,
  };
};
