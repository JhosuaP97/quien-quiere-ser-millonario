import React from "react";
import { useGameLogic } from "./hooks/useGameLogic";
import { prizeAmounts } from "./data/questions";
import StartScreen from "./components/StartScreen/StartScreen";
import GameScreen from "./components/GameScreen/GameScreen";
import EndScreen from "./components/EndScreen/EndScreen";
import "./styles/globals.css";
import "./App.css";

function App() {
  const {
    gameState,
    currentQuestion,
    startGame,
    selectAnswer,
    confirmAnswer,
    quitGame,
    useFiftyFifty,
    useAskAudience,
    usePhoneAFriend,
    resetGame,
  } = useGameLogic();

  const getCurrentPrize = () => {
    if (gameState.currentQuestionIndex < prizeAmounts.length) {
      return prizeAmounts[gameState.currentQuestionIndex];
    }
    return prizeAmounts[prizeAmounts.length - 1];
  };

  const getFinalPrize = () => {
    if (gameState.hasWon) {
      return prizeAmounts[prizeAmounts.length - 1];
    }

    // Determinar premio garantizado
    if (gameState.score > 9) {
      return prizeAmounts[9]; // $1,280,000,000 - refugio seguro
    } else if (gameState.score > 4) {
      return prizeAmounts[4]; // $40,000,000 - refugio seguro
    } else {
      return gameState.score > 0 ? prizeAmounts[gameState.score - 1] : "$0";
    }
  };

  // Pantalla de inicio
  if (!gameState.isGameActive && !gameState.isGameOver) {
    return (
      <div className="game-container">
        <StartScreen onStartGame={startGame} />
      </div>
    );
  }

  // Pantalla de juego
  if (gameState.isGameActive && !gameState.isGameOver) {
    return (
      <div className="game-container">
        <GameScreen
          gameState={gameState}
          currentQuestion={currentQuestion}
          onSelectAnswer={selectAnswer}
          onConfirmAnswer={confirmAnswer}
          onQuitGame={quitGame}
          onUseFiftyFifty={useFiftyFifty}
          onUseAskAudience={useAskAudience}
          onUsePhoneAFriend={usePhoneAFriend}
          prizeAmount={getCurrentPrize()}
        />
      </div>
    );
  }

  // Pantalla final
  return (
    <div className="game-container">
      <EndScreen
        hasWon={gameState.hasWon}
        score={gameState.score}
        finalPrize={getFinalPrize()}
        onRestart={resetGame}
      />
    </div>
  );
}

export default App;
