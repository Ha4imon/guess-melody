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

export {createNodeMock};
