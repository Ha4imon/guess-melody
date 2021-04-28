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
        src: `audio/sovet-russia.oga`,
        genre: `rock`,
      },
      {
        id: `id-genre2`,
        src: `audio/sovet-russia.oga`,
        genre: `jazz`,
      },
      {
        id: `id-genre3`,
        src: `audio/sovet-russia.oga`,
        genre: `pop`,
      },
      {
        id: `id-genre4`,
        src: `audio/sovet-russia.oga`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `genre`,
    genre: `jazz`,
    answers: [
      {
        id: `id-genre5`,
        src: `audio/sovet-russia.oga`,
        genre: `rock`,
      },
      {
        id: `id-genre6`,
        src: `audio/sovet-russia.oga`,
        genre: `jazz`,
      },
      {
        id: `id-genre7`,
        src: `audio/sovet-russia.oga`,
        genre: `pop`,
      },
      {
        id: `id-genre8`,
        src: `audio/sovet-russia.oga`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        id: `id-genre1`,
        src: `audio/sovet-russia.oga`,
        genre: `rock`,
      },
      {
        id: `id-genre2`,
        src: `audio/sovet-russia.oga`,
        genre: `jazz`,
      },
      {
        id: `id-genre3`,
        src: `audio/sovet-russia.oga`,
        genre: `pop`,
      },
      {
        id: `id-genre4`,
        src: `audio/sovet-russia.oga`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Snow`,
      src: `audio/sovet-russia.oga`,
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
        artist: `Jim Snow`
      },
    ]
  }
];

const createNodeMock = function (element) {
  if (element.type === `audio`) {
    // This is your fake DOM node for <p>.
    // Feel free to add any stub methods, e.g. focus() or any
    // other methods necessary to prevent crashes in your components.
    return {
      src: ``,
    };
  }
  // You can return any object from this method for any type of DOM component.
  // React will use it as a ref instead of a DOM node when snapshot testing.
  return null;
};


export {gameSettings, questions, createNodeMock};
