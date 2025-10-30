import React, { useEffect, useRef } from "react";
import { useGameLogic } from "./hooks/useGameLogic";
import { useAudioStore } from "./stores/audioStore";
import { prizeAmounts } from "./data/questions";
import StartScreen from "./components/StartScreen/StartScreen";
import GameScreen from "./components/GameScreen/GameScreen";
import EndScreen from "./components/EndScreen/EndScreen";
import "./styles/globals.css";

function App() {
  const { volume, audioEnabled, setVolume, setAudioEnabled } = useAudioStore();

  const {
    gameState,
    currentQuestion,
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
  } = useGameLogic();

  // Referencias de audio
  const mainAudioRef = useRef<HTMLAudioElement>(null);
  const attentionAudioRef = useRef<HTMLAudioElement>(null);

  // Detectar primera interacción del usuario para habilitar audio
  useEffect(() => {
    const handleFirstInteraction = () => {
      setAudioEnabled(true);
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };

    if (!audioEnabled) {
      document.addEventListener("click", handleFirstInteraction);
      document.addEventListener("keydown", handleFirstInteraction);
    }

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [audioEnabled, setAudioEnabled]);

  // Control de volumen para todos los audios
  useEffect(() => {
    if (mainAudioRef.current) {
      mainAudioRef.current.volume = volume;
    }
    if (attentionAudioRef.current) {
      attentionAudioRef.current.volume = volume;
    }
  }, [volume]);

  // Reproducir sonido solo en la pantalla principal (antes de iniciar el juego)
  useEffect(() => {
    if (
      audioEnabled &&
      !gameState.isGameActive &&
      !gameState.isGameOver &&
      mainAudioRef.current
    ) {
      mainAudioRef.current.play().catch((error) => {
        console.log("Error reproduciendo sonido principal:", error);
      });
    }
  }, [audioEnabled, gameState.isGameActive, gameState.isGameOver]);

  // Reproducir sonido de atención cuando cambie la pregunta
  useEffect(() => {
    if (
      audioEnabled &&
      gameState.isGameActive &&
      !gameState.isGameOver &&
      currentQuestion &&
      attentionAudioRef.current
    ) {
      // Pequeño delay para que se escuche bien
      setTimeout(() => {
        if (attentionAudioRef.current) {
          attentionAudioRef.current.play().catch((error) => {
            console.log("Error reproduciendo sonido de atención:", error);
          });
        }
      }, 500);
    }
  }, [
    audioEnabled,
    currentQuestion,
    gameState.isGameActive,
    gameState.isGameOver,
  ]);

  const handleStartGame = () => {
    setAudioEnabled(true);
    startGame();
  };

  const handleResetQuestionHistory = () => {
    if (
      window.confirm(
        "¿Estás seguro de que quieres resetear el historial de preguntas? Esto permitirá que las preguntas anteriores puedan aparecer nuevamente."
      )
    ) {
      resetQuestionHistory();
      alert(
        "Historial de preguntas reseteado exitosamente. Las preguntas anteriores ahora pueden aparecer en nuevas partidas."
      );
    }
  };

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
      return prizeAmounts[9];
    } else if (gameState.score > 4) {
      return prizeAmounts[4];
    } else {
      return gameState.score > 0
        ? prizeAmounts[gameState.score - 1]
        : "👑 0 Coronas";
    }
  };

  // Componente de menú de configuración
  const SettingsMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = React.useRef<HTMLDivElement>(null);

    // Cerrar menú cuando se hace click fuera
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        // No cerrar si el click es en el slider, botón de reset, o cualquier elemento del menú
        if (
          menuRef.current &&
          !menuRef.current.contains(target) &&
          !target.closest(".settings-dropdown") &&
          !target.closest(".volume-slider-inline") &&
          !target.closest(".reset-questions-button")
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("click", handleClickOutside);
      }

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [isOpen]);

    const getVolumeEmoji = () => {
      if (volume === 0) return "🔇";
      if (volume < 0.5) return "🔉";
      return "🔊";
    };

    const handleResetWithClose = () => {
      handleResetQuestionHistory();
      setIsOpen(false); // Cerrar menú después de resetear
    };

    return (
      <div className="settings-menu" ref={menuRef}>
        <button
          className="settings-toggle"
          onClick={() => setIsOpen(!isOpen)}
          title="Configuración"
        >
          ⚙️
        </button>

        {isOpen && (
          <div className="settings-dropdown">
            {/* Control de volumen */}
            <div className="settings-item">
              <label className="settings-label">
                <span className="volume-emoji">{getVolumeEmoji()}</span>
                Volumen
              </label>
              <div className="volume-control-inline">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="volume-slider-inline"
                />
                <span className="volume-percentage-inline">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            </div>

            {/* Resetear preguntas */}
            <div className="settings-item">
              <button
                className="reset-questions-button"
                onClick={handleResetWithClose}
                title="Resetear historial de preguntas"
              >
                🔄 Reiniciar Preguntas
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Pantalla principal - antes de empezar el juego
  if (!gameState.isGameActive && !gameState.isGameOver) {
    return (
      <div className="game-container">
        <SettingsMenu />
        <StartScreen onStartGame={handleStartGame} />
        {/* Audio principal de fondo */}
        <audio
          ref={mainAudioRef}
          src="/assets/sounds/sonido_principal.mp3"
          loop
          preload="auto"
        />
      </div>
    );
  }

  // Pantalla de juego
  if (gameState.isGameActive && !gameState.isGameOver) {
    return (
      <div className="game-container">
        <SettingsMenu />
        <GameScreen
          gameState={gameState}
          currentQuestion={currentQuestion}
          onSelectAnswer={selectAnswer}
          onConfirmAnswer={confirmAnswer}
          onGoToNext={goToNextQuestion}
          onGoToResults={goToResults}
          onQuitGame={quitGame}
          onUseFiftyFifty={useFiftyFifty}
          onUseAskAudience={useAskAudience}
          onUsePhoneAFriend={usePhoneAFriend}
          prizeAmount={getCurrentPrize()}
        />
        {/* Audio de atención para cada pregunta */}
        <audio
          ref={attentionAudioRef}
          src="/assets/sounds/pregunta-de-atencion.mp3"
          preload="auto"
        />
      </div>
    );
  }

  // Pantalla final
  return (
    <div className="game-container">
      <SettingsMenu />
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
