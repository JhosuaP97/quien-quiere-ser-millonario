import React from "react";
import { Question } from "../../data/questions";
import { GameState, AnswerOption } from "../../types/game";
import "./GameScreen.css";

interface GameScreenProps {
  gameState: GameState;
  currentQuestion: Question | null;
  onSelectAnswer: (answer: AnswerOption) => void;
  onConfirmAnswer: () => void;
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
  onQuitGame,
  onUseFiftyFifty,
  onUseAskAudience,
  onUsePhoneAFriend,
  prizeAmount,
}) => {
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

  const canConfirm = gameState.selectedAnswer && !gameState.isAnswerRevealed;

  return (
    <div className="game-screen">
      {/* Header */}
      <div className="game-header">
        <div className="question-counter fade-in">
          <span>Pregunta {gameState.currentQuestionIndex + 1} de 15</span>
        </div>
        <div className="current-prize fade-in">
          <span className="prize-label">Premio actual:</span>
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
              gameState.usedLifelines.fiftyFifty || gameState.isAnswerRevealed
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
              gameState.usedLifelines.askAudience || gameState.isAnswerRevealed
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
              gameState.usedLifelines.phoneAFriend || gameState.isAnswerRevealed
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
          <button className="confirm-button glow" onClick={onConfirmAnswer}>
            ¿Respuesta final?
          </button>
        </div>
      )}
    </div>
  );
};

export default GameScreen;
