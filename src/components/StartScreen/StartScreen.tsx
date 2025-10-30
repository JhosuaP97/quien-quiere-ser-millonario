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
          <img
            src="/assets/logo.png"
            alt="Logo Quién Quiere Ser Millonario"
            width={400}
          />
        </div>

        <button className="start-button pulse glow" onClick={onStartGame}>
          <span className="button-text">COMENZAR JUEGO</span>
          <span className="button-glow"></span>
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
