// Archivo de preguntas del juego "¿Quién Quiere Ser Millonario?"
// Para agregar más preguntas, simplemente añade objetos al array siguiendo el formato

export interface Question {
  id: number;
  question: string;
  answers: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: "A" | "B" | "C" | "D";
  difficulty: "easy" | "medium" | "hard";
  category?: string;
}

export const questions: Question[] = [
  // Preguntas fáciles (1-5)
  {
    id: 1,
    question: "¿Cuál es la capital de Francia?",
    answers: {
      A: "Londres",
      B: "Berlín",
      C: "París",
      D: "Madrid",
    },
    correctAnswer: "C",
    difficulty: "easy",
    category: "Geografía",
  },
  {
    id: 2,
    question: "¿Cuántos días tiene una semana?",
    answers: {
      A: "5",
      B: "6",
      C: "7",
      D: "8",
    },
    correctAnswer: "C",
    difficulty: "easy",
    category: "General",
  },
  {
    id: 3,
    question: "¿Cuál es el color que resulta de mezclar azul y amarillo?",
    answers: {
      A: "Rojo",
      B: "Verde",
      C: "Morado",
      D: "Naranja",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Ciencias",
  },
  {
    id: 4,
    question: "¿En qué continente se encuentra España?",
    answers: {
      A: "Asia",
      B: "África",
      C: "América",
      D: "Europa",
    },
    correctAnswer: "D",
    difficulty: "easy",
    category: "Geografía",
  },
  {
    id: 5,
    question: "¿Cuál es el animal más grande del mundo?",
    answers: {
      A: "Elefante",
      B: "Ballena azul",
      C: "Jirafa",
      D: "Tiburón blanco",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Naturaleza",
  },

  // Preguntas medianas (6-10)
  {
    id: 6,
    question: "¿En qué año llegó el hombre a la Luna por primera vez?",
    answers: {
      A: "1968",
      B: "1969",
      C: "1970",
      D: "1971",
    },
    correctAnswer: "B",
    difficulty: "medium",
    category: "Historia",
  },
  {
    id: 7,
    question: "¿Cuál es la fórmula química del agua?",
    answers: {
      A: "CO2",
      B: "O2",
      C: "H2O",
      D: "NaCl",
    },
    correctAnswer: "C",
    difficulty: "medium",
    category: "Ciencias",
  },
  {
    id: 8,
    question: "¿Quién escribió 'Don Quijote de la Mancha'?",
    answers: {
      A: "Miguel de Cervantes",
      B: "Federico García Lorca",
      C: "Pablo Neruda",
      D: "Gustavo Adolfo Bécquer",
    },
    correctAnswer: "A",
    difficulty: "medium",
    category: "Literatura",
  },
  {
    id: 9,
    question: "¿Cuál es la capital de Australia?",
    answers: {
      A: "Sídney",
      B: "Melbourne",
      C: "Canberra",
      D: "Perth",
    },
    correctAnswer: "C",
    difficulty: "medium",
    category: "Geografía",
  },
  {
    id: 10,
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    answers: {
      A: "1938",
      B: "1939",
      C: "1940",
      D: "1941",
    },
    correctAnswer: "B",
    difficulty: "medium",
    category: "Historia",
  },

  // Preguntas difíciles (11-15)
  {
    id: 11,
    question: "¿Cuál es el elemento químico con símbolo 'Au'?",
    answers: {
      A: "Plata",
      B: "Oro",
      C: "Aluminio",
      D: "Argón",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Ciencias",
  },
  {
    id: 12,
    question: "¿Quién compuso 'Las Cuatro Estaciones'?",
    answers: {
      A: "Wolfgang Amadeus Mozart",
      B: "Ludwig van Beethoven",
      C: "Antonio Vivaldi",
      D: "Johann Sebastian Bach",
    },
    correctAnswer: "C",
    difficulty: "hard",
    category: "Música",
  },
  {
    id: 13,
    question: "¿Cuál es la montaña más alta de África?",
    answers: {
      A: "Monte Kenia",
      B: "Monte Kilimanjaro",
      C: "Monte Elgon",
      D: "Montes Drakensberg",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Geografía",
  },
  {
    id: 14,
    question: "¿En qué año se inventó la World Wide Web?",
    answers: {
      A: "1989",
      B: "1990",
      C: "1991",
      D: "1992",
    },
    correctAnswer: "C",
    difficulty: "hard",
    category: "Tecnología",
  },
  {
    id: 15,
    question: "¿Cuál es la obra más famosa de Leonardo da Vinci?",
    answers: {
      A: "La Última Cena",
      B: "La Mona Lisa",
      C: "El Hombre de Vitruvio",
      D: "La Anunciación",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Arte",
  },

  // Preguntas colombianas adicionales
  {
    id: 16,
    question: "¿Cuál es la capital de Colombia?",
    answers: {
      A: "Medellín",
      B: "Bogotá",
      C: "Cali",
      D: "Cartagena",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Geografía Colombia",
  },
  {
    id: 17,
    question: "¿Quién escribió 'Cien años de soledad'?",
    answers: {
      A: "Mario Vargas Llosa",
      B: "Pablo Neruda",
      C: "Gabriel García Márquez",
      D: "Jorge Luis Borges",
    },
    correctAnswer: "C",
    difficulty: "medium",
    category: "Literatura Colombia",
  },
  {
    id: 18,
    question: "¿En qué año Colombia obtuvo su independencia?",
    answers: {
      A: "1810",
      B: "1819",
      C: "1820",
      D: "1821",
    },
    correctAnswer: "C",
    difficulty: "medium",
    category: "Historia Colombia",
  },
  {
    id: 19,
    question: "¿Cuál es el río más largo de Colombia?",
    answers: {
      A: "Río Cauca",
      B: "Río Magdalena",
      C: "Río Amazonas",
      D: "Río Atrato",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Geografía Colombia",
  },
  {
    id: 20,
    question: "¿Cómo se llama la moneda oficial de Colombia?",
    answers: {
      A: "Bolívar",
      B: "Peso colombiano",
      C: "Sol",
      D: "Quetzal",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Economía Colombia",
  },
];

// Niveles de premio
export const prizeAmounts = [
  "$2,000,000",
  "$4,000,000",
  "$8,000,000",
  "$20,000,000",
  "$40,000,000",
  "$80,000,000",
  "$160,000,000",
  "$320,000,000",
  "$640,000,000",
  "$1,280,000,000",
  "$2,560,000,000",
  "$5,000,000,000",
  "$10,000,000,000",
  "$20,000,000,000",
  "$40,000,000,000",
];

// Función para obtener preguntas por dificultad
export const getQuestionsByDifficulty = (
  difficulty: "easy" | "medium" | "hard"
): Question[] => {
  return questions.filter((q) => q.difficulty === difficulty);
};

// Función para mezclar array aleatoriamente
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
