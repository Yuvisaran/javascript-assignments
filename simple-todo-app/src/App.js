import React, { Component } from 'react';

import { MainWrapper } from './style';

import AddNewListForm from './add-new-list';
import ListItems from './todo-list';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      newItemText: '',
      completedItems: [],
      editNameInputShow: '',
      editNameCompletedInputShow: '',
      movedItemsClass: false,
    }

    this.inputHandler = this.inputHandler.bind(this);
    this.addIem = this.addIem.bind(this);
    this.completed = this.completed.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.edit = this.edit.bind(this);
    this.deleteCompletedItem = this.deleteCompletedItem.bind(this);
    this.editCompleted = this.editCompleted.bind(this);
    this.editNameDisplay = this.editNameDisplay.bind(this);
    this.backToDoItem = this.backToDoItem.bind(this);
    this.editNameCompletedDisplay = this.editNameCompletedDisplay.bind(this);
  }

  inputHandler(e){
    console.log(e.target.value);
    this.setState({
      newItemText: e.target.value
    })
  }

  addIem(){
    const newItem = this.state.newItemText;
    if(newItem.text!==''){
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        newItemText: '',
      })
    }
  }

  completed(id){
    this.setState({
      movedItemsClass: true, 
    })
    const itemInList = this.state.items;
    const completedItems =[...this.state.completedItems, itemInList[id]];

    this.setState({
      completedItems: completedItems,
      items: itemInList,
    })
    itemInList.splice(id, 1);
  }

  deleteItem(id){
    const itemInList = this.state.items;
    itemInList.splice(id, 1);

    this.setState({
      items: itemInList,
    })
  }


  edit(id){
    const itemInList = this.state.items;
    itemInList[id] = document.getElementById('editName_'+id).value;
    this.setState({
      items: itemInList,
      editNameInputShow: false,
    }) 
  }

  deleteCompletedItem(id){
    const completedItemInList = this.state.completedItems;
    completedItemInList.splice(id, 1);
    this.setState({
      completedItems: completedItemInList,
    })
  }

  editCompleted(id){
    const completedItemInList = this.state.completedItems;
    completedItemInList[id] = document.getElementById('editCompletedName_'+id).value;
    this.setState({
      completedItems: completedItemInList,
      editNameCompletedInputShow: false,
    })
  }

  editNameDisplay(id){
    console.log(id);
    this.setState({
      editNameInputShow: "editName_"+id,
    })
  }

  editNameCompletedDisplay(id){
    this.setState({
      editNameCompletedInputShow: "editCompletedName_"+id,
    })
  }

  backToDoItem(id){
    const completedItemInList = this.state.completedItems;
    const itemInList =[...this.state.items, completedItemInList[id]];

    this.setState({
      completedItems: completedItemInList,
      items: itemInList,
    })
    completedItemInList.splice(id, 1);
  }

  render() {

    return (
      <MainWrapper className="App">
        <MainWrapper.pageHeading>Add Items</MainWrapper.pageHeading>
        <MainWrapper.formBox>
          <AddNewListForm inputHandler={this.inputHandler} addIem={this.addIem} newItemText={this.state.newItemText} />
        </MainWrapper.formBox>
        <ListItems 
          items={this.state.items}  
          completed={this.completed} 
          deleteItem={this.deleteItem} 
          edit={this.edit}
          deleteCompletedItem={this.deleteCompletedItem}
          editCompleted={this.editCompleted}
          editNameDisplay={this.editNameDisplay}
          backToDoItem = {this.backToDoItem}
          editNameCompletedDisplay = {this.editNameCompletedDisplay}
          {...this.state} />
      </MainWrapper>);
  }
}

export default App;
