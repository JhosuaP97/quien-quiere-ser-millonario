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
  {
    id: 1,
    question:
      "¿Quién construyó un arca para salvar a su familia y a los animales del diluvio?",
    answers: {
      A: "Moisés",
      B: "Abraham",
      C: "Noé",
      D: "Elías",
    },
    correctAnswer: "C",
    difficulty: "easy",
    category: "Antiguo Testamento",
  },
  {
    id: 2,
    question: "¿Dónde nació Jesús?",
    answers: {
      A: "Nazaret",
      B: "Jerusalén",
      C: "Belén",
      D: "Egipto",
    },
    correctAnswer: "C",
    difficulty: "easy",
    category: "Evangelios",
  },
  {
    id: 3,
    question: "¿Qué profeta fue tragado por un gran pez?",
    answers: {
      A: "Jonás",
      B: "Isaías",
      C: "Daniel",
      D: "Jeremías",
    },
    correctAnswer: "A",
    difficulty: "easy",
    category: "Profetas",
  },
  {
    id: 4,
    question: "¿Quién fue la primera mujer según la Biblia?",
    answers: {
      A: "Sara",
      B: "Rebeca",
      C: "Eva",
      D: "María",
    },
    correctAnswer: "C",
    difficulty: "easy",
    category: "Génesis",
  },
  {
    id: 5,
    question: "¿Cómo se llamaba el discípulo que negó a Jesús tres veces?",
    answers: {
      A: "Juan",
      B: "Pedro",
      C: "Judas",
      D: "Tomás",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Evangelios",
  },

  {
    id: 6,
    question:
      "¿Qué pueblo marchó alrededor de Jericó hasta que sus muros cayeron?",
    answers: {
      A: "Egipcios",
      B: "Israelitas",
      C: "Filisteos",
      D: "Cananeos",
    },
    correctAnswer: "B",
    difficulty: "medium",
    category: "Josué",
  },
  {
    id: 7,
    question: "¿Quién interpretó los sueños del faraón en Egipto?",
    answers: {
      A: "José",
      B: "Daniel",
      C: "Moisés",
      D: "Aarón",
    },
    correctAnswer: "A",
    difficulty: "medium",
    category: "Génesis",
  },
  {
    id: 8,
    question:
      "¿Cuál fue el primer milagro de Jesús según el Evangelio de Juan?",
    answers: {
      A: "Sanar a un ciego",
      B: "Multiplicar los panes",
      C: "Convertir el agua en vino",
      D: "Caminar sobre el agua",
    },
    correctAnswer: "C",
    difficulty: "medium",
    category: "Evangelios",
  },
  {
    id: 9,
    question: "¿Cómo se llamaba la madre de Samuel?",
    answers: {
      A: "Ana",
      B: "Rut",
      C: "Débora",
      D: "Abigail",
    },
    correctAnswer: "A",
    difficulty: "medium",
    category: "1 Samuel",
  },
  {
    id: 10,
    question: "¿Qué rey escribió muchos de los Salmos?",
    answers: {
      A: "Saúl",
      B: "Salomón",
      C: "David",
      D: "Ezequías",
    },
    correctAnswer: "C",
    difficulty: "medium",
    category: "Salmos",
  },

  {
    id: 11,
    question: "¿Qué discípulo fue conocido como 'el hijo del trueno'?",
    answers: {
      A: "Pedro",
      B: "Juan",
      C: "Andrés",
      D: "Felipe",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Evangelios",
  },
  {
    id: 12,
    question: "¿Qué ciudad fue destruida junto con Sodoma?",
    answers: {
      A: "Jericó",
      B: "Gomorra",
      C: "Nínive",
      D: "Samaria",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Génesis",
  },
  {
    id: 13,
    question: "¿Cuántos años vivió Moisés?",
    answers: {
      A: "100",
      B: "120",
      C: "130",
      D: "150",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Pentateuco",
  },
  {
    id: 14,
    question: "¿Qué profeta vio un valle lleno de huesos secos?",
    answers: {
      A: "Jeremías",
      B: "Ezequiel",
      C: "Isaías",
      D: "Amós",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Profetas Mayores",
  },
  {
    id: 15,
    question:
      "En Apocalipsis, ¿cuántas iglesias son mencionadas en las cartas?",
    answers: {
      A: "5",
      B: "7",
      C: "10",
      D: "12",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Apocalipsis",
  },
  {
    id: 16,
    question: "¿Quién fue el primer rey de Israel?",
    answers: {
      A: "David",
      B: "Saúl",
      C: "Salomón",
      D: "Samuel",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Historia de Israel",
  },
  {
    id: 17,
    question: "¿Qué instrumento tocaba David para calmar al rey Saúl?",
    answers: {
      A: "Arpa",
      B: "Flauta",
      C: "Tambor",
      D: "Lira",
    },
    correctAnswer: "A",
    difficulty: "easy",
    category: "Antiguo Testamento",
  },
  {
    id: 18,
    question: "¿Cuál fue el nombre del apóstol que traicionó a Jesús?",
    answers: {
      A: "Pedro",
      B: "Judas Iscariote",
      C: "Tomás",
      D: "Felipe",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Evangelios",
  },
  {
    id: 19,
    question: "¿Cuántos días estuvo Jesús muerto antes de resucitar?",
    answers: {
      A: "Dos",
      B: "Tres",
      C: "Cuatro",
      D: "Cinco",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Evangelios",
  },
  {
    id: 20,
    question: "¿Qué hizo Jesús para alimentar a más de cinco mil personas?",
    answers: {
      A: "Multiplicó los panes y los peces",
      B: "Convirtió el agua en vino",
      C: "Sanó enfermos",
      D: "Hizo caer maná del cielo",
    },
    correctAnswer: "A",
    difficulty: "easy",
    category: "Milagros de Jesús",
  },

  {
    id: 21,
    question: "¿Qué profeta confrontó al rey Acab y a Jezabel?",
    answers: {
      A: "Isaías",
      B: "Elías",
      C: "Jeremías",
      D: "Eliseo",
    },
    correctAnswer: "B",
    difficulty: "medium",
    category: "Profetas",
  },
  {
    id: 22,
    question:
      "¿Qué discípulo dudó de la resurrección de Jesús hasta ver sus heridas?",
    answers: {
      A: "Juan",
      B: "Tomás",
      C: "Santiago",
      D: "Andrés",
    },
    correctAnswer: "B",
    difficulty: "medium",
    category: "Evangelios",
  },
  {
    id: 23,
    question: "¿Qué mujer escondió a los espías israelitas en Jericó?",
    answers: {
      A: "Rut",
      B: "Débora",
      C: "Rahab",
      D: "Ester",
    },
    correctAnswer: "C",
    difficulty: "medium",
    category: "Josué",
  },
  {
    id: 24,
    question: "¿Cuántos libros tiene la Biblia protestante?",
    answers: {
      A: "60",
      B: "61",
      C: "66",
      D: "72",
    },
    correctAnswer: "C",
    difficulty: "medium",
    category: "Doctrina Bíblica",
  },
  {
    id: 25,
    question: "¿Quién fue el profeta que sucedió a Elías?",
    answers: {
      A: "Samuel",
      B: "Eliseo",
      C: "Isaías",
      D: "Jeremías",
    },
    correctAnswer: "B",
    difficulty: "medium",
    category: "Profetas",
  },

  {
    id: 26,
    question: "¿Qué apóstol fue conocido como 'el médico amado'?",
    answers: {
      A: "Lucas",
      B: "Pablo",
      C: "Pedro",
      D: "Juan",
    },
    correctAnswer: "A",
    difficulty: "hard",
    category: "Nuevo Testamento",
  },
  {
    id: 27,
    question:
      "¿Cuál fue la señal que Dios dio a Gedeón para confirmar su llamado?",
    answers: {
      A: "Un fuego del cielo",
      B: "El rocío en el vellón",
      C: "Una voz en el viento",
      D: "Un sueño profético",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Jueces",
  },
  {
    id: 28,
    question: "¿Qué rey de Babilonia arrojó a Daniel al foso de los leones?",
    answers: {
      A: "Nabucodonosor",
      B: "Darío",
      C: "Belsasar",
      D: "Ciro",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Daniel",
  },
  {
    id: 29,
    question: "¿Qué discípulo escribió el Evangelio más corto?",
    answers: {
      A: "Lucas",
      B: "Mateo",
      C: "Marcos",
      D: "Juan",
    },
    correctAnswer: "C",
    difficulty: "hard",
    category: "Evangelios",
  },
  {
    id: 30,
    question: "¿Cuál es el último libro del Antiguo Testamento?",
    answers: {
      A: "Zacarías",
      B: "Malaquías",
      C: "Oseas",
      D: "Habacuc",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Profetas Menores",
  },
  {
    id: 31,
    question: "¿Qué alimento proveyó Dios a los israelitas en el desierto?",
    answers: {
      A: "Peces",
      B: "Maná",
      C: "Pan del templo",
      D: "Uvas",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Éxodo",
  },
  {
    id: 32,
    question: "¿Quién fue lanzado al horno de fuego y salió ileso?",
    answers: {
      A: "Daniel",
      B: "Sadrac, Mesac y Abednego",
      C: "José y sus hermanos",
      D: "Elías y Eliseo",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Daniel",
  },
  {
    id: 33,
    question: "¿Cuál era el oficio de Pedro antes de seguir a Jesús?",
    answers: {
      A: "Carpintero",
      B: "Recaudador de impuestos",
      C: "Pescador",
      D: "Pastor",
    },
    correctAnswer: "C",
    difficulty: "easy",
    category: "Evangelios",
  },
  {
    id: 34,
    question: "¿Quién fue la madre de Juan el Bautista?",
    answers: {
      A: "María",
      B: "Elisabet",
      C: "Marta",
      D: "Ana",
    },
    correctAnswer: "B",
    difficulty: "easy",
    category: "Evangelios",
  },
  {
    id: 35,
    question: "¿Qué instrumento usó Moisés para dividir el Mar Rojo?",
    answers: {
      A: "Su vara",
      B: "Una piedra",
      C: "Una espada",
      D: "Una red",
    },
    correctAnswer: "A",
    difficulty: "easy",
    category: "Éxodo",
  },

  {
    id: 36,
    question: "¿Quién ayudó a Jesús a cargar la cruz?",
    answers: {
      A: "Pedro",
      B: "Simón de Cirene",
      C: "José de Arimatea",
      D: "Juan",
    },
    correctAnswer: "B",
    difficulty: "medium",
    category: "Evangelios",
  },
  {
    id: 37,
    question: "¿Qué juez derrotó a los madianitas con solo 300 hombres?",
    answers: {
      A: "Sansón",
      B: "Gedeón",
      C: "Débora",
      D: "Jepté",
    },
    correctAnswer: "B",
    difficulty: "medium",
    category: "Jueces",
  },
  {
    id: 38,
    question: "¿Qué rey pidió sabiduría a Dios en lugar de riquezas?",
    answers: {
      A: "David",
      B: "Ezequías",
      C: "Salomón",
      D: "Josafat",
    },
    correctAnswer: "C",
    difficulty: "medium",
    category: "1 Reyes",
  },
  {
    id: 39,
    question: "¿Cuál de los evangelistas era recaudador de impuestos?",
    answers: {
      A: "Marcos",
      B: "Lucas",
      C: "Mateo",
      D: "Juan",
    },
    correctAnswer: "C",
    difficulty: "medium",
    category: "Evangelios",
  },
  {
    id: 40,
    question: "¿Qué mujer se convirtió en estatua de sal por mirar atrás?",
    answers: {
      A: "La esposa de Lot",
      B: "La esposa de Noé",
      C: "Sara",
      D: "Rebeca",
    },
    correctAnswer: "A",
    difficulty: "medium",
    category: "Génesis",
  },

  {
    id: 41,
    question: "¿Qué profeta fue llevado al cielo en un carro de fuego?",
    answers: {
      A: "Eliseo",
      B: "Elías",
      C: "Isaías",
      D: "Miqueas",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "2 Reyes",
  },
  {
    id: 42,
    question:
      "¿Qué apóstol escribió la mayoría de las cartas del Nuevo Testamento?",
    answers: {
      A: "Pedro",
      B: "Juan",
      C: "Pablo",
      D: "Santiago",
    },
    correctAnswer: "C",
    difficulty: "hard",
    category: "Epístolas",
  },
  {
    id: 43,
    question: "¿Cuántos días y noches llovió durante el diluvio?",
    answers: {
      A: "30",
      B: "40",
      C: "50",
      D: "60",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Génesis",
  },
  {
    id: 44,
    question: "¿Qué nombre recibió Jacob después de luchar con un ángel?",
    answers: {
      A: "Judá",
      B: "Israel",
      C: "Isaac",
      D: "Efraín",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Génesis",
  },
  {
    id: 45,
    question: "¿Quién tuvo la visión del Apocalipsis en la isla de Patmos?",
    answers: {
      A: "Pedro",
      B: "Juan",
      C: "Pablo",
      D: "Esteban",
    },
    correctAnswer: "B",
    difficulty: "hard",
    category: "Apocalipsis",
  },
];

export const prizeAmounts = [
  "👑 1 Corona",
  "👑 2 Coronas",
  "👑 3 Coronas",
  "👑 5 Coronas",
  "👑 10 Coronas",
  "👑 20 Coronas",
  "👑 40 Coronas",
  "👑 80 Coronas",
  "👑 160 Coronas",
  "👑 320 Coronas",
  "👑 640 Coronas",
  "👑 1,250 Coronas",
  "👑 2,500 Coronas",
  "👑 5,000 Coronas",
  "👑 10,000 Coronas",
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
