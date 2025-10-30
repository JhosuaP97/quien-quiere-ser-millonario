import React from "react";
import "./StartScreen.css";

interface StartScreenProps {
  onStartGame: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartGame }) => {
  return (
    <div className="start-screen">
      <div className="start-content">
        <div className="logo-container fade-in">
          <h1 className="game-title">
            <span className="title-line">¿QUIÉN QUIERE</span>
            <span className="title-line">SER</span>
            <span className="title-line title-highlight">MILLONARIO?</span>
          </h1>
          <div className="logo-decoration">
            <div className="diamond"></div>
            <div className="diamond"></div>
            <div className="diamond"></div>
          </div>
        </div>

        <div className="game-info slide-in-left">
          <h2>¿Tienes lo que se necesita?</h2>
          <p>
            Responde 15 preguntas correctamente y gana hasta{" "}
            <strong>$40,000,000,000</strong> de pesos colombianos
          </p>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <span>15 preguntas de dificultad creciente</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🛟</span>
              <span>3 comodines para ayudarte</span>
            </div>
            <div className="feature">
              <span className="feature-icon">💰</span>
              <span>Premios en pesos colombianos</span>
            </div>
          </div>
        </div>

        <div className="lifelines-preview slide-in-right">
          <h3>Comodines disponibles:</h3>
          <div className="lifeline-list">
            <div className="lifeline-item">
              <span className="lifeline-icon">✂️</span>
              <div className="lifeline-info">
                <strong>50:50</strong>
                <p>Elimina dos respuestas incorrectas</p>
              </div>
            </div>
            <div className="lifeline-item">
              <span className="lifeline-icon">👥</span>
              <div className="lifeline-info">
                <strong>Pregunta al Público</strong>
                <p>Ve qué piensa la audiencia</p>
              </div>
            </div>
            <div className="lifeline-item">
              <span className="lifeline-icon">📞</span>
              <div className="lifeline-info">
                <strong>Llamada a un Amigo</strong>
                <p>Pide ayuda a un experto</p>
              </div>
            </div>
          </div>
        </div>

        <button className="start-button pulse glow" onClick={onStartGame}>
          <span className="button-text">COMENZAR JUEGO</span>
          <span className="button-glow"></span>
        </button>

        <div className="instructions">
          <p>
            💡 <strong>Tip:</strong> Puedes retirarte en cualquier momento y
            conservar tus ganancias
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
