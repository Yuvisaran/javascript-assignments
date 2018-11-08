describe('Todo list Component', () => { 
    it('to move items in completed list when click on checkbox', () => {
    function completed(movedItem) {
      let existingCompletedItems = '';
      existingCompletedItems = [existingCompletedItems, movedItem];
    }
    completed();
  });


  it('to edit the name of list in todo list section', () => {
    function edit(id) {
      const itemInList = ['item1', 'item2', 'item3'];
      itemInList[id] = 'This is new text of todo item';
    }
    edit();
  });

  it('to delete the items from list section', () => {
    function deleteItem(id) {
      const itemInList = ['item1', 'item2', 'item3'];
      itemInList.splice(id, 1);
    }
    deleteItem();
  });

})