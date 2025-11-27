export interface ScrambleWordState {
  words: string[];
  currentWord: string;
  scrambledWord: string;
  guess: string;
  points: number;
  errorCounter: number;
  maxAllowErrors: number;
  skipCounter: number;
  maxSkips: number;
  isGameOver: boolean;
}

export type ScrambleWordAction = {
  type: string;
  payload?: any;
};

export const GAME_WORDS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const getInitialState = (): ScrambleWordState => {
  const words = shuffleArray(GAME_WORDS);
  const currentWord = words[0];
  const scrambledWord = scrambleWord(currentWord);
  return {
    words,
    currentWord,
    scrambledWord,
    guess: "",
    points: 0,
    errorCounter: 0,
    maxAllowErrors: 2,
    skipCounter: 0,
    maxSkips: 2,
    isGameOver: false,
  };
};

export const scrambleWordReducer = (
  state: ScrambleWordState,
  action: ScrambleWordAction
): ScrambleWordState => {
  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload,
      };

    case "CHECK_WORD": {
      if (state.isGameOver) return state;

      const isCorrect = state.guess === state.currentWord;

      if (isCorrect) {
        const newWords = state.words.slice(1);
        const newCurrentWord = newWords[0];

        // Victory condition handled in component by checking words length

        return {
          ...state,
          points: state.points + 1,
          guess: "",
          words: newWords,
          currentWord: newCurrentWord || "",
          scrambledWord: newCurrentWord ? scrambleWord(newCurrentWord) : "",
        };
      } else {
        const newErrorCounter = state.errorCounter + 1;
        return {
          ...state,
          errorCounter: newErrorCounter,
          isGameOver: newErrorCounter >= state.maxAllowErrors,
        };
      }
    }

    case "SKIP_WORD": {
      if (state.skipCounter >= state.maxSkips || state.isGameOver) return state;

      const newWords = state.words.slice(1);
      const newCurrentWord = newWords[0];

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        guess: "",
        words: newWords,
        currentWord: newCurrentWord || "",
        scrambledWord: newCurrentWord ? scrambleWord(newCurrentWord) : "",
      };
    }

    case "RESTART_GAME":
      return getInitialState();

    default:
      return state;
  }
};
