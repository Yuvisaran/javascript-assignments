it('set state updated value to input filed', () => {
  function inputHandler(state) {
    return state;
  }
  inputHandler();
});

it('add item to todo list', () => {
  let existingItems = '';
  function addItem(newItem) {
     existingItems = [existingItems, newItem];
  }
  addItem();
});