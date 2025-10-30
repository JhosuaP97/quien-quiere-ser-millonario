import React from "react";
import { prizeAmounts } from "../../data/questions";
import "./EndScreen.css";

interface EndScreenProps {
  hasWon: boolean;
  score: number;
  finalPrize: string;
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({
  hasWon,
  score,
  finalPrize,
  onRestart,
}) => {
  const getScoreMessage = () => {
    if (hasWon) {
      return "¡FELICITACIONES! ¡ERES MILLONARIO!";
    } else if (score >= 10) {
      return "¡Increíble! Llegaste muy lejos";
    } else if (score >= 5) {
      return "¡Buen trabajo! Lo hiciste bien";
    } else {
      return "¡No te rindas! Inténtalo de nuevo";
    }
  };

  const getEncouragementMessage = () => {
    if (hasWon) {
      return "Has demostrado que tienes el conocimiento y la valentía para llegar hasta el final. ¡Eres una leyenda!";
    } else if (score >= 10) {
      return "Estuviste muy cerca de la gloria. Con un poco más de suerte, la próxima vez podrías ser millonario.";
    } else if (score >= 5) {
      return "Llegaste a la mitad del camino. Eso demuestra que tienes potencial. ¡Sigue practicando!";
    } else {
      return "Todos los grandes millonarios empezaron desde abajo. ¡Tu momento llegará!";
    }
  };

  const getScoreDetails = () => {
    let guaranteedPrize = "$0";

    if (score > 9) {
      guaranteedPrize = prizeAmounts[9]; // $1,280,000,000
    } else if (score > 4) {
      guaranteedPrize = prizeAmounts[4]; // $40,000,000
    }

    return {
      questionsAnswered: score,
      totalQuestions: 15,
      guaranteedPrize,
      finalPrize: score > 0 ? (hasWon ? finalPrize : guaranteedPrize) : "$0",
    };
  };

  const scoreDetails = getScoreDetails();

  return (
    <div className="end-screen">
      <div className="end-content">
        {/* Resultado principal */}
        <div className="result-container fade-in">
          <div className="result-icon">
            {hasWon ? "👑" : score >= 5 ? "🏆" : "🎯"}
          </div>
          <h1 className={`result-title ${hasWon ? "winner" : ""}`}>
            {getScoreMessage()}
          </h1>
          <p className="result-subtitle">{getEncouragementMessage()}</p>
        </div>

        {/* Estadísticas del juego */}
        <div className="stats-container slide-in-left">
          <h2>Estadísticas del Juego</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Preguntas Correctas</span>
              <span className="stat-value">
                {scoreDetails.questionsAnswered}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Total de Preguntas</span>
              <span className="stat-value">{scoreDetails.totalQuestions}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Precisión</span>
              <span className="stat-value">
                {(
                  (scoreDetails.questionsAnswered /
                    scoreDetails.totalQuestions) *
                  100
                ).toFixed(1)}
                %
              </span>
            </div>
          </div>
        </div>

        {/* Premio final */}
        <div className="prize-container slide-in-right">
          <h2>Premio Final</h2>
          <div className="final-prize">
            <span className="prize-currency">$</span>
            <span className="prize-number">
              {scoreDetails.finalPrize.replace("$", "").replace(/,/g, ".")}
            </span>
          </div>
          {!hasWon && scoreDetails.guaranteedPrize !== "$0" && (
            <p className="guaranteed-text">
              Premio garantizado alcanzado:{" "}
              <strong>{scoreDetails.guaranteedPrize}</strong>
            </p>
          )}
        </div>

        {/* Progreso visual */}
        <div className="progress-container fade-in">
          <h3>Tu Progreso</h3>
          <div className="progress-ladder">
            {prizeAmounts.map((amount, index) => {
              const isReached = index < score;
              const isCurrent = index === score - 1;
              const isSafeHaven = [4, 9].includes(index);

              return (
                <div
                  key={index}
                  className={`progress-step ${isReached ? "reached" : ""} ${
                    isCurrent ? "current" : ""
                  } ${isSafeHaven ? "safe-haven" : ""}`}
                >
                  <span className="step-number">{index + 1}</span>
                  <span className="step-amount">{amount}</span>
                  {isSafeHaven && <span className="safe-icon">🛡️</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="actions-container bounce">
          <button className="restart-button glow" onClick={onRestart}>
            <span className="button-icon">🔄</span>
            Jugar de Nuevo
          </button>

          <div className="share-container">
            <p>¡Comparte tu logro!</p>
            <button
              className="share-button"
              onClick={() => {
                const text = hasWon
                  ? `¡Acabo de ganar $40,000,000,000 en "¿Quién Quiere Ser Millonario?"! 🏆👑`
                  : `Respondí ${score} preguntas correctas y gané ${scoreDetails.finalPrize} en "¿Quién Quiere Ser Millonario?" 🎯`;

                if (navigator.share) {
                  navigator.share({
                    title: "¿Quién Quiere Ser Millonario?",
                    text: text,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(text);
                  alert("¡Texto copiado al portapapeles!");
                }
              }}
            >
              <span className="button-icon">📤</span>
              Compartir Resultado
            </button>
          </div>
        </div>

        {/* Mensaje motivacional */}
        <div className="motivation-container fade-in">
          <div className="motivation-quote">
            <blockquote>
              {hasWon
                ? '"El conocimiento es el único tesoro que crece cuando se comparte."'
                : '"El fracaso es solo la oportunidad de empezar de nuevo con más inteligencia."'}
            </blockquote>
            <cite>- Henry Ford</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;
