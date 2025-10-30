import { useEffect, useRef } from "react";
import { Question } from "../../data/questions";
import { GameState, AnswerOption } from "../../types/game";
import { useAudioStore } from "../../stores/audioStore";
import "./GameScreen.css";

interface GameScreenProps {
  gameState: GameState;
  currentQuestion: Question | null;
  onSelectAnswer: (answer: AnswerOption) => void;
  onConfirmAnswer: () => void;
  onGoToNext: () => void;
  onGoToResults: () => void;
  onQuitGame: () => void;
  onUseFiftyFifty: () => void;
  onUseAskAudience: () => void;
  onUsePhoneAFriend: () => void;
  prizeAmount: string;
}

const GameScreen: React.FC<GameScreenProps> = ({
  gameState,
  currentQuestion,
  onSelectAnswer,
  onConfirmAnswer,
  onGoToNext,
  onGoToResults,
  onQuitGame,
  onUseFiftyFifty,
  onUseAskAudience,
  onUsePhoneAFriend,
  prizeAmount,
}) => {
  const { volume, audioEnabled } = useAudioStore();
  const correctAudioRef = useRef<HTMLAudioElement>(null);
  const incorrectAudioRef = useRef<HTMLAudioElement>(null);
  const decisionAudioRef = useRef<HTMLAudioElement>(null);

  // Control de volumen para todos los audios
  useEffect(() => {
    const updateVolume = () => {
      if (correctAudioRef.current) {
        correctAudioRef.current.volume = volume;
      }
      if (incorrectAudioRef.current) {
        incorrectAudioRef.current.volume = volume;
      }
      if (decisionAudioRef.current) {
        decisionAudioRef.current.volume = volume;
      }
    };

    // Actualizar volumen inmediatamente
    updateVolume();

    // También actualizar cuando los audios se carguen
    const correctAudio = correctAudioRef.current;
    const incorrectAudio = incorrectAudioRef.current;
    const decisionAudio = decisionAudioRef.current;

    if (correctAudio) {
      correctAudio.addEventListener("loadeddata", updateVolume);
    }
    if (incorrectAudio) {
      incorrectAudio.addEventListener("loadeddata", updateVolume);
    }
    if (decisionAudio) {
      decisionAudio.addEventListener("loadeddata", updateVolume);
    }

    return () => {
      if (correctAudio) {
        correctAudio.removeEventListener("loadeddata", updateVolume);
      }
      if (incorrectAudio) {
        incorrectAudio.removeEventListener("loadeddata", updateVolume);
      }
      if (decisionAudio) {
        decisionAudio.removeEventListener("loadeddata", updateVolume);
      }
    };
  }, [volume]);

  // Reproducir sonidos cuando se revele la respuesta
  useEffect(() => {
    if (
      audioEnabled &&
      gameState.isAnswerRevealed &&
      gameState.selectedAnswer &&
      currentQuestion
    ) {
      const isCorrect =
        gameState.selectedAnswer === currentQuestion.correctAnswer;

      // Reproducir sonido inmediatamente cuando se revele la respuesta
      if (isCorrect && correctAudioRef.current) {
        correctAudioRef.current.volume = volume; // Asegurar volumen correcto
        correctAudioRef.current.play().catch((error) => {
          console.log("Error reproduciendo sonido correcto:", error);
        });
      } else if (!isCorrect && incorrectAudioRef.current) {
        incorrectAudioRef.current.volume = volume; // Asegurar volumen correcto
        incorrectAudioRef.current.play().catch((error) => {
          console.log("Error reproduciendo sonido incorrecto:", error);
        });
      }
    }
  }, [
    audioEnabled,
    gameState.isAnswerRevealed,
    gameState.selectedAnswer,
    currentQuestion,
    volume,
  ]);

  // Función modificada para manejar la confirmación con titilación y sonido de decisión
  const handleConfirmAnswer = () => {
    // Reproducir sonido de decisión inmediatamente
    if (audioEnabled && decisionAudioRef.current) {
      decisionAudioRef.current.volume = volume; // Asegurar volumen correcto
      decisionAudioRef.current.play().catch((error) => {
        console.log("Error reproduciendo sonido de decisión:", error);
      });
    }

    // Después de 5 segundos, confirmar la respuesta
    setTimeout(() => {
      onConfirmAnswer();
    }, 5000);
  };
  if (!currentQuestion) {
    return <div>Cargando...</div>;
  }

  const getAnswerClassName = (option: AnswerOption) => {
    let className = "answer-option";

    if (gameState.eliminatedAnswers.includes(option)) {
      className += " eliminated";
      return className;
    }

    if (gameState.selectedAnswer === option) {
      className += " selected";

      // Agregar efecto de titilación durante el período de blinking
      if (gameState.isBlinking) {
        className += " blinking";
      }
    }

    if (gameState.isAnswerRevealed) {
      if (option === currentQuestion.correctAnswer) {
        className += " correct";
      } else if (
        option === gameState.selectedAnswer &&
        option !== currentQuestion.correctAnswer
      ) {
        className += " incorrect";
      }
    }

    return className;
  };

  const canConfirm =
    gameState.selectedAnswer &&
    !gameState.isAnswerRevealed &&
    !gameState.isBlinking;
  const canGoNext =
    gameState.waitingForNext &&
    gameState.isAnswerRevealed &&
    gameState.selectedAnswer === currentQuestion?.correctAnswer;
  const canGoToResults =
    gameState.waitingForNext &&
    gameState.isAnswerRevealed &&
    gameState.selectedAnswer !== currentQuestion?.correctAnswer;

  return (
    <div className="game-screen">
      {/* Header */}
      <div className="game-header">
        <div className="question-counter fade-in">
          <span>Pregunta {gameState.currentQuestionIndex + 1} de 15</span>
        </div>
        <div className="current-prize fade-in">
          <span className="prize-label">Coronas actuales:</span>
          <span className="prize-amount">{prizeAmount}</span>
        </div>
        <button className="quit-button" onClick={onQuitGame}>
          Retirarse
        </button>
      </div>

      {/* Lifelines */}
      <div className="lifelines-container slide-in-left">
        <h3>Comodines</h3>
        <div className="lifelines">
          <button
            className={`lifeline ${
              gameState.usedLifelines.fiftyFifty ? "used" : ""
            }`}
            onClick={onUseFiftyFifty}
            disabled={
              gameState.usedLifelines.fiftyFifty ||
              gameState.isAnswerRevealed ||
              gameState.isBlinking
            }
            title="50:50 - Elimina dos respuestas incorrectas"
          >
            <span className="lifeline-icon">✂️</span>
            <span className="lifeline-text">50:50</span>
          </button>

          <button
            className={`lifeline ${
              gameState.usedLifelines.askAudience ? "used" : ""
            }`}
            onClick={onUseAskAudience}
            disabled={
              gameState.usedLifelines.askAudience ||
              gameState.isAnswerRevealed ||
              gameState.isBlinking
            }
            title="Pregunta al Público"
          >
            <span className="lifeline-icon">👥</span>
            <span className="lifeline-text">Público</span>
          </button>

          <button
            className={`lifeline ${
              gameState.usedLifelines.phoneAFriend ? "used" : ""
            }`}
            onClick={onUsePhoneAFriend}
            disabled={
              gameState.usedLifelines.phoneAFriend ||
              gameState.isAnswerRevealed ||
              gameState.isBlinking
            }
            title="Llamada a un Amigo"
          >
            <span className="lifeline-icon">📞</span>
            <span className="lifeline-text">Amigo</span>
          </button>
        </div>
      </div>

      {/* Question */}
      <div className="question-container fade-in">
        <div className="question-card">
          <div className="question-text">{currentQuestion.question}</div>
          {currentQuestion.category && (
            <div className="question-category">
              Categoría: {currentQuestion.category}
            </div>
          )}
        </div>
      </div>

      {/* Answers */}
      <div className="answers-container slide-in-right">
        <div className="answers-grid">
          {(["A", "B", "C", "D"] as AnswerOption[]).map((option) => (
            <button
              key={option}
              className={getAnswerClassName(option)}
              onClick={() => onSelectAnswer(option)}
              disabled={
                gameState.isAnswerRevealed ||
                gameState.isBlinking ||
                gameState.eliminatedAnswers.includes(option)
              }
            >
              <span className="answer-letter">{option}:</span>
              <span className="answer-text">
                {currentQuestion.answers[option]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Audience Poll */}
      {gameState.audiencePoll && (
        <div className="audience-poll fade-in">
          <h3>🎭 Votación del Público</h3>
          <div className="poll-results">
            {Object.entries(gameState.audiencePoll).map(
              ([option, percentage]) => (
                <div key={option} className="poll-option">
                  <span className="poll-letter">{option}</span>
                  <div className="poll-bar">
                    <div
                      className="poll-fill"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="poll-percentage">{percentage}%</span>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Friend Advice */}
      {gameState.friendAdvice && (
        <div className="friend-advice fade-in">
          <h3>📞 Consejo del Amigo</h3>
          <div className="advice-text">"{gameState.friendAdvice}"</div>
        </div>
      )}

      {/* Confirm Button */}
      {canConfirm && (
        <div className="confirm-container bounce">
          <button className="confirm-button glow" onClick={handleConfirmAnswer}>
            ¿Respuesta final?
          </button>
        </div>
      )}

      {/* Next Button */}
      {canGoNext && (
        <div className="confirm-container bounce">
          <button
            className="confirm-button next-button glow"
            onClick={onGoToNext}
          >
            Siguiente Pregunta →
          </button>
        </div>
      )}

      {/* Results Button */}
      {canGoToResults && (
        <div className="confirm-container bounce">
          <button
            className="confirm-button results-button glow"
            onClick={onGoToResults}
          >
            Ver Resultados
          </button>
        </div>
      )}

      {/* Audio elements for correct/incorrect sounds */}
      <audio
        ref={correctAudioRef}
        src="/assets/sounds/correcto.mp3"
        preload="auto"
      />
      <audio
        ref={incorrectAudioRef}
        src="/assets/sounds/equivocado.mp3"
        preload="auto"
      />
      <audio
        ref={decisionAudioRef}
        src="/assets/sounds/decision.MP3"
        preload="auto"
      />
    </div>
  );
};

export default GameScreen;
