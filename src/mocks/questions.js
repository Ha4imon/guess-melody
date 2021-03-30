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
        id: `id-genre1`,
        src: `https://upload.wikimedia.org/wikipedia/commons/d/db/Gimn_Sovetskogo_Soyuza_%281977_Vocal%29.oga`,
        genre: `rock`,
      },
      {
        id: `id-genre2`,
        src: `https://upload.wikimedia.org/wikipedia/commons/d/db/Gimn_Sovetskogo_Soyuza_%281977_Vocal%29.oga`,
        genre: `jazz`,
      },
      {
        id: `id-genre3`,
        src: `https://upload.wikimedia.org/wikipedia/commons/d/db/Gimn_Sovetskogo_Soyuza_%281977_Vocal%29.oga`,
        genre: `pop`,
      },
      {
        id: `id-genre4`,
        src: `https://upload.wikimedia.org/wikipedia/commons/d/db/Gimn_Sovetskogo_Soyuza_%281977_Vocal%29.oga`,
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
        id: `id-artist1`,
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`
      },
      {
        id: `id-artist2`,
        picture: `http://placehold.it/134x134`,
        artist: `Jack Snow`
      },
      {
        id: `id-artist3`,
        picture: `http://placehold.it/134x134`,
        artist: `Джек`
      },
    ]
  }
];

export {gameSettings, questions};
