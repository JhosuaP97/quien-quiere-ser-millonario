# 🎨 Guía de Personalización - ¿Quién Quiere Ser Millonario?

Esta guía te ayudará a personalizar completamente tu juego.

## 🎯 Personalizar Preguntas y Respuestas

### Archivo Principal: `src/data/questions.ts`

Este es el archivo más importante para personalizar tu juego:

```typescript
// Formato de cada pregunta
{
  id: 1,                           // ID único (número)
  question: "¿Tu pregunta aquí?",  // La pregunta
  answers: {
    A: "Primera opción",
    B: "Segunda opción",
    C: "Tercera opción",
    D: "Cuarta opción"
  },
  correctAnswer: "A",              // Letra de la respuesta correcta
  difficulty: "easy",              // "easy", "medium", o "hard"
  category: "Categoría"            // Opcional: categoría de la pregunta
}
```

### Cambiar Premios

```typescript
export const prizeAmounts = [
  "$2,000,000", // Pregunta 1
  "$4,000,000", // Pregunta 2
  "$8,000,000", // Pregunta 3
  "$20,000,000", // Pregunta 4
  "$40,000,000", // Pregunta 5 (Refugio seguro)
  // ... continúa hasta 15 preguntas
];
```

**Nota:** Puedes cambiar la moneda ($, €, etc.) y los montos.

## 🎨 Personalizar Colores y Apariencia

### Archivo: `src/styles/globals.css`

```css
:root {
  /* Colores principales */
  --primary-blue: #0a1f3b; /* Azul principal */
  --secondary-blue: #1e3a5f; /* Azul secundario */
  --accent-gold: #ffd700; /* Dorado (premios, botones) */
  --accent-orange: #ff6b35; /* Naranja (acentos) */

  /* Colores de texto */
  --text-white: #ffffff; /* Texto principal */
  --text-light: #e0e7ff; /* Texto secundario */

  /* Colores de estado */
  --correct-green: #22c55e; /* Respuesta correcta */
  --incorrect-red: #ef4444; /* Respuesta incorrecta */

  /* Fondos */
  --background-dark: #0f172a; /* Fondo principal */
  --card-background: rgba(30, 58, 95, 0.9); /* Fondo de tarjetas */
  --border-gold: #b8860b; /* Bordes dorados */
}
```

### Ejemplos de Temas de Color

#### Tema Verde (Dinero)

```css
:root {
  --primary-blue: #064e3b; /* Verde oscuro */
  --secondary-blue: #065f46; /* Verde medio */
  --accent-gold: #10b981; /* Verde claro */
  --accent-orange: #34d399; /* Verde mint */
}
```

#### Tema Púrpura (Elegante)

```css
:root {
  --primary-blue: #4c1d95; /* Púrpura oscuro */
  --secondary-blue: #5b21b6; /* Púrpura medio */
  --accent-gold: #a855f7; /* Púrpura claro */
  --accent-orange: #c084fc; /* Púrpura suave */
}
```

#### Tema Rojo (Intenso)

```css
:root {
  --primary-blue: #7f1d1d; /* Rojo oscuro */
  --secondary-blue: #991b1b; /* Rojo medio */
  --accent-gold: #ef4444; /* Rojo claro */
  --accent-orange: #f87171; /* Rojo suave */
}
```

#### Tema Colombia (Patrio)

```css
:root {
  --primary-blue: #1e3a8a; /* Azul Colombia */
  --secondary-blue: #1d4ed8; /* Azul medio */
  --accent-gold: #fbbf24; /* Amarillo Colombia */
  --accent-orange: #dc2626; /* Rojo Colombia */
}
```

## 🏆 Personalizar Textos del Juego

### Archivo: `src/components/StartScreen/StartScreen.tsx`

```typescript
// Cambiar título del juego
<h1 className="game-title">
  <span className="title-line">¿QUIÉN QUIERE</span>
  <span className="title-line">SER</span>
  <span className="title-line title-highlight">MILLONARIO?</span>
</h1>

// Cambiar descripción
<p>Responde 15 preguntas correctamente y gana hasta <strong>$40,000,000,000</strong></p>
```

### Archivo: `src/components/EndScreen/EndScreen.tsx`

```typescript
// Personalizar mensajes de victoria/derrota
const getScoreMessage = () => {
  if (hasWon) {
    return "¡FELICITACIONES! ¡ERES MILLONARIO!";
  } else if (score >= 10) {
    return "¡Increíble! Llegaste muy lejos";
  }
  // ... más condiciones
};
```

## 🎵 Agregar Sonidos (Opcional)

### 1. Crear carpeta de sonidos

```
public/
├── sounds/
│   ├── correct.mp3
│   ├── incorrect.mp3
│   ├── lifeline.mp3
│   └── background.mp3
```

### 2. Usar sonidos en el código

```typescript
// En useGameLogic.ts
const playSound = (soundName: string) => {
  const audio = new Audio(`/sounds/${soundName}.mp3`);
  audio.play().catch((e) => console.log("Sound play failed:", e));
};

// Usar en confirmAnswer
if (isCorrect) {
  playSound("correct");
} else {
  playSound("incorrect");
}
```

## 🎮 Personalizar Comodines

### Archivo: `src/hooks/useGameLogic.ts`

```typescript
// Cambiar probabilidad del comodín "Pregunta al Público"
const useAskAudience = useCallback(() => {
  // Cambiar el rango de porcentaje para la respuesta correcta
  const correctPercentage = Math.floor(Math.random() * 31) + 40; // 40-70%

  // Para hacer el comodín más confiable, usa un rango mayor:
  const correctPercentage = Math.floor(Math.random() * 21) + 60; // 60-80%
});

// Cambiar probabilidad del comodín "Llamada a un Amigo"
const usePhoneAFriend = useCallback(() => {
  // Cambiar probabilidad de respuesta correcta
  const isCorrectAdvice = Math.random() < 0.8; // 80% por defecto

  // Para hacer más confiable:
  const isCorrectAdvice = Math.random() < 0.9; // 90%
});
```

## 📱 Personalizar Refugios Seguros

### Archivo: `src/hooks/useGameLogic.ts`

```typescript
// Cambiar posiciones de refugio seguro
const getFinalPrize = () => {
  if (gameState.score > 9) {
    return prizeAmounts[9]; // Pregunta 10 (por defecto)
  } else if (gameState.score > 4) {
    return prizeAmounts[4]; // Pregunta 5 (por defecto)
  }

  // Para cambiar a preguntas 3 y 8:
  if (gameState.score > 7) {
    return prizeAmounts[7]; // Pregunta 8
  } else if (gameState.score > 2) {
    return prizeAmounts[2]; // Pregunta 3
  }
};
```

## 🔧 Personalizar Dificultad

### Número de Preguntas por Dificultad

En `src/hooks/useGameLogic.ts`:

```typescript
const startGame = useCallback(() => {
  // Por defecto: 5 fáciles, 5 medianas, 5 difíciles
  const easyQuestions = shuffleArray(getQuestionsByDifficulty("easy")).slice(
    0,
    5
  );
  const mediumQuestions = shuffleArray(
    getQuestionsByDifficulty("medium")
  ).slice(0, 5);
  const hardQuestions = shuffleArray(getQuestionsByDifficulty("hard")).slice(
    0,
    5
  );

  // Para hacer más fácil: 8 fáciles, 4 medianas, 3 difíciles
  const easyQuestions = shuffleArray(getQuestionsByDifficulty("easy")).slice(
    0,
    8
  );
  const mediumQuestions = shuffleArray(
    getQuestionsByDifficulty("medium")
  ).slice(0, 4);
  const hardQuestions = shuffleArray(getQuestionsByDifficulty("hard")).slice(
    0,
    3
  );
});
```

## 📋 Lista de Verificación para Personalización

- [ ] ✏️ Cambié las preguntas en `src/data/questions.ts`
- [ ] 💰 Personalicé los premios si es necesario
- [ ] 🎨 Ajusté los colores en `src/styles/globals.css`
- [ ] 📝 Modifiqué los textos del juego
- [ ] 🎮 Configuré la dificultad de los comodines
- [ ] 🏆 Ajusté las posiciones de refugio seguro
- [ ] 🔊 Agregué sonidos (opcional)
- [ ] 📱 Probé en diferentes dispositivos
- [ ] ✅ Probé todas las funcionalidades

## 🚀 Consejos para una Experiencia Profesional

1. **Mantén Consistencia**: Usa el mismo estilo en todas las preguntas
2. **Prueba Balanceada**: Asegúrate de tener suficientes preguntas de cada dificultad
3. **Categorías Variadas**: Incluye diferentes temas para mayor diversión
4. **Respuestas Creíbles**: Todas las opciones deben ser plausibles
5. **Prueba Exhaustiva**: Juega varias veces para detectar errores

¡Disfruta creando tu versión personalizada del juego! 🎉
