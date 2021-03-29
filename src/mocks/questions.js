const gameSettings = {
  mistakes: 3,
  time: 5
};

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `stroka`,
        genre: `rock`,
      },
      {
        src: `stroka`,
        genre: `jazz`,
      },
      {
        src: `stroka`,
        genre: `pop`,
      },
      {
        src: `stroka`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Snow`,
      src: `stroka`,
    },
    answers: [
      {
        picture: `stroka`,
        artist: `John Snow`
      },
      {
        picture: `stroka`,
        artist: `Jack Snow`
      },
      {
        picture: `stroka`,
        artist: `Jim Snow`
      },
    ]
  }
];

export {gameSettings, questions};
