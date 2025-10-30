export interface GameState {
  currentQuestionIndex: number;
  score: number;
  isGameActive: boolean;
  isGameOver: boolean;
  hasWon: boolean;
  selectedAnswer: string | null;
  isAnswerRevealed: boolean;
  waitingForNext: boolean;
  isBlinking: boolean; // Para el período de titilación de 5 segundos
  usedLifelines: {
    fiftyFifty: boolean;
    askAudience: boolean;
    phoneAFriend: boolean;
  };
  eliminatedAnswers: string[];
  audiencePoll?: {
    A: number;
    B: number;
    C: number;
    D: number;
  };
  friendAdvice?: string;
}

export interface Lifeline {
  name: string;
  icon: string;
  used: boolean;
  description: string;
}

export type AnswerOption = "A" | "B" | "C" | "D";

export interface GameSettings {
  soundEnabled: boolean;
  animationsEnabled: boolean;
  questionTimeLimit?: number;
}
