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
      src: `http://placehold.it/134x134`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Snow`
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Джек`
      },
    ]
  }
];

export {gameSettings, questions};
