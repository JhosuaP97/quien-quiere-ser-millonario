# # 🎯 ¿Quién Quiere Ser Millonario?

Un juego completo de "¿Quién Quiere Ser Millonario?" desarrollado en React con TypeScript. ¡Pon a prueba tus conocimientos y ve si tienes lo que se necesita para convertirte en millonario... en pesos colombianos!

## 🚀 Características

### 🎮 Jugabilidad Completa

- **15 preguntas** de dificultad progresiva
- **3 niveles de dificultad**: Fácil (1-5), Medio (6-10), Difícil (11-15)
- **Premios acumulativos** hasta $40,000,000,000 (pesos colombianos)
- **Refugios seguros** en las preguntas 5 y 10
- **Opción de retirarse** en cualquier momento

### 🛟 Comodines Interactivos

- **50:50**: Elimina dos respuestas incorrectas
- **Pregunta al Público**: Simula votación de la audiencia
- **Llamada a un Amigo**: Consejo de un "experto"

### ✨ Experiencia Visual

- **Diseño moderno** y responsive
- **Animaciones fluidas** y efectos visuales
- **Interfaz intuitiva** y fácil de usar
- **Compatible con dispositivos móviles**

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── StartScreen/    # Pantalla de inicio
│   ├── GameScreen/     # Pantalla principal del juego
│   └── EndScreen/      # Pantalla de resultados
├── data/               # Datos del juego
│   └── questions.ts    # ❗ ARCHIVO PARA EDITAR PREGUNTAS
├── hooks/              # Hooks personalizados
│   └── useGameLogic.ts # Lógica principal del juego
├── styles/             # Estilos globales
│   └── globals.css     # Variables CSS y animaciones
└── types/              # Definiciones de TypeScript
    └── game.ts         # Tipos de datos del juego
```

## 🎯 Cómo Agregar/Editar Preguntas

### Editar Preguntas Existentes

Abre el archivo `src/data/questions.ts` y modifica cualquier pregunta:

```typescript
{
  id: 1,
  question: "¿Cuál es tu pregunta aquí?",
  answers: {
    A: "Respuesta A",
    B: "Respuesta B",
    C: "Respuesta C (correcta)",
    D: "Respuesta D"
  },
  correctAnswer: "C",
  difficulty: "easy", // "easy", "medium", o "hard"
  category: "Tu Categoría" // Opcional
}
```

### Agregar Nuevas Preguntas

Simplemente añade nuevos objetos al array `questions`:

```typescript
export const questions: Question[] = [
  // ... preguntas existentes ...
  {
    id: 16, // Siguiente ID disponible
    question: "¿Tu nueva pregunta?",
    answers: {
      A: "Opción A",
      B: "Opción B",
      C: "Opción C",
      D: "Opción D (correcta)",
    },
    correctAnswer: "D",
    difficulty: "hard",
    category: "Nueva Categoría",
  },
];
```

### Niveles de Dificultad

- **easy**: Preguntas 1-5 ($2,000,000 - $40,000,000)
- **medium**: Preguntas 6-10 ($80,000,000 - $1,280,000,000)
- **hard**: Preguntas 11-15 ($2,560,000,000 - $40,000,000,000)

## 💰 Modificar Premios

Para cambiar los montos de los premios, edita el array `prizeAmounts` en `src/data/questions.ts`:

```typescript
export const prizeAmounts = [
  "$2,000,000", // Pregunta 1
  "$4,000,000", // Pregunta 2
  "$8,000,000", // Pregunta 3
  // ... continúa hasta 15 preguntas
  "$40,000,000,000", // Pregunta 15
];
```

## 🚀 Instalación y Uso

### Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm start
```

### Construcción para Producción

```bash
# Crear build optimizado
npm run build
```

## 🇨🇴 Edición Colombia

Esta versión especial utiliza **pesos colombianos** como moneda:

- 💰 Premio máximo: **$40,000,000,000**
- 🛡️ Refugios seguros: $40,000,000 (pregunta 5) y $1,280,000,000 (pregunta 10)
- 📈 Progresión realista de premios en pesos colombianos

Para más detalles sobre la versión colombiana, consulta el archivo `COLOMBIA.md`.

## 📱 Compatibilidad

- ✅ **Desktop**: Windows, macOS, Linux
- ✅ **Mobile**: iOS Safari, Android Chrome
- ✅ **Tablets**: iPad, Android tablets
- ✅ **Navegadores**: Chrome, Firefox, Safari, Edge

## 🎨 Personalización Visual

### Colores

Los colores principales se definen en `src/styles/globals.css`:

```css
:root {
  --primary-blue: #0a1f3b;
  --accent-gold: #ffd700;
  --accent-orange: #ff6b35;
  /* Modifica estos valores para cambiar la apariencia */
}
```

## 🔧 Funcionalidades Técnicas

### Lógica del Juego

- **Selección aleatoria** de preguntas por dificultad
- **Validación** de respuestas en tiempo real
- **Sistema de comodines** con lógica realista
- **Gestión de estado** con React Hooks

### Características de Accesibilidad

- **Responsive design** para todos los dispositivos
- **Contraste** optimizado para legibilibilidad
- **Navegación** por teclado
- **Reducción de movimiento** para usuarios sensibles

---

¡Disfruta jugando y que tengas suerte en tu camino hacia el millón! 🏆💰

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
