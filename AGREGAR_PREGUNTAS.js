// EJEMPLO: Cómo agregar más preguntas al juego
// Copia este formato y añádelo al archivo src/data/questions.ts

// Ejemplo de preguntas adicionales que puedes agregar:

export const ejemplosPreguntas = [
  // Preguntas fáciles
  {
    id: 16,
    question: "¿Cuál es el océano más grande del mundo?",
    answers: {
      A: "Atlántico",
      B: "Índico",
      C: "Pacífico",
      D: "Ártico",
    },
    correctAnswer: "C",
    difficulty: "easy",
    category: "Geografía",
  },

  {
    id: 17,
    question: "¿Cuántos minutos tiene una hora?",
    answers: {
      A: "50",
      B: "60",
      C: "70",
      D: "100",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Matemáticas",
  },

  // Preguntas medianas
  {
    id: 18,
    question: "¿Quién pintó 'La Noche Estrellada'?",
    answers: {
      A: "Pablo Picasso",
      B: "Vincent van Gogh",
      C: "Claude Monet",
      D: "Leonardo da Vinci",
    },
    correctAnswer: "B",
    difficulty: "medium",
    category: "Arte",
  },

  {
    id: 19,
    question: "¿En qué año terminó la Primera Guerra Mundial?",
    answers: {
      A: "1917",
      B: "1918",
      C: "1919",
      D: "1920",
    },
    correctAnswer: "B",
    difficulty: "medium",
    category: "Historia",
  },

  // Preguntas difíciles
  {
    id: 20,
    question: "¿Cuál es la velocidad de la luz en el vacío?",
    answers: {
      A: "299,792,458 m/s",
      B: "300,000,000 m/s",
      C: "299,800,000 m/s",
      D: "298,000,000 m/s",
    },
    correctAnswer: "A",
    difficulty: "hard",
    category: "Física",
  },

  {
    id: 21,
    question: "¿Cuál es el hueso más largo del cuerpo humano?",
    answers: {
      A: "Tibia",
      B: "Húmero",
      C: "Fémur",
      D: "Radio",
    },
    correctAnswer: "C",
    difficulty: "hard",
    category: "Anatomía",
  },
];

// INSTRUCCIONES PARA USAR ESTOS EJEMPLOS:
//
// 1. Abre el archivo: src/data/questions.ts
// 2. Copia las preguntas de arriba
// 3. Pégalas al final del array 'questions' ANTES del corchete de cierre ]
// 4. Asegúrate de que cada pregunta tenga un ID único
// 5. Guarda el archivo
//
// EJEMPLO de cómo debería verse el archivo questions.ts:
//
// export const questions: Question[] = [
//   // ... preguntas existentes ...
//   {
//     id: 15,
//     question: "¿Cuál es la obra más famosa de Leonardo da Vinci?",
//     // ... resto de la pregunta
//   },
//   // Aquí pegas las nuevas preguntas:
//   {
//     id: 16,
//     question: "¿Cuál es el océano más grande del mundo?",
//     // ... resto de la pregunta
//   }
//   // ... más preguntas nuevas
// ];

// CONSEJOS PARA CREAR BUENAS PREGUNTAS:
//
// 1. DIFICULTAD APROPIADA:
//    - easy: Conocimiento general básico
//    - medium: Cultura general intermedia
//    - hard: Conocimiento especializado
//
// 2. RESPUESTAS PLAUSIBLES:
//    - Todas las opciones deben ser creíbles
//    - Evita opciones obviamente incorrectas
//    - Usa respuestas del mismo tipo (números, nombres, fechas, etc.)
//
// 3. PREGUNTA CLARA:
//    - Sé específico y directo
//    - Evita ambigüedades
//    - Usa un lenguaje comprensible
//
// 4. CATEGORÍAS SUGERIDAS:
//    - Geografía, Historia, Ciencias, Arte, Literatura
//    - Deportes, Música, Cine, Tecnología
//    - Matemáticas, Naturaleza, Cultura General
//
// 5. VERIFICACIÓN:
//    - Asegúrate de que la respuesta correcta sea factualmente correcta
//    - Revisa la ortografía y gramática
//    - Prueba la pregunta con otras personas
