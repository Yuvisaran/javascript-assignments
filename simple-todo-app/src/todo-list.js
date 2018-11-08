import React, { Component } from 'react';

import { MainWrapper } from './style';

class ListItems extends Component {
  constructor(props){
    super(props);
}

  render(){

    let allItems = this.props.items;
    let allCompletedItems = this.props.completedItems;

    return(
  <div className="list-items">
          <MainWrapper.pageHeading>To do</MainWrapper.pageHeading>
          <MainWrapper.contentBox>
          <div className="row">
            {allItems.length > 0 ? (
                  allItems.map((item, i) => {
                    return <div className="item" key={i}>
                            <div className="checkbox">
                              <input type="checkbox" name={i} onClick={(e)=> this.props.completed(i)} />
                              <div className="checkedIcon"></div>
                            </div>
                            {this.props.editNameInputShow !== `editName_${i}` ? (
                              <div className="item-name">{item}</div> 
                              ): null 
                            }
                            {this.props.editNameInputShow === `editName_${i}` ? (
                              <div className="item-edit">
                                <input type="text" defaultValue={item} id={`editName_${i}`} />
                              </div> 
                              ): null 
                            }
                            <div className="todo-actions">
                            {!this.props.editNameInputShow ? (
                              <a href="javascript:void(0)" onClick={(e)=> this.props.editNameDisplay(i)}>Edit</a>
                              ): null 
                            }
                            {this.props.editNameInputShow ? (
                              <a href="javascript:void(0)" onClick={(e)=> this.props.edit(i)}>Save</a> 
                              ): null 
                          }
                              <a href="javascript:void(0)" onClick={(e)=> this.props.deleteItem(i)}>Delete</a>
                            </div>
                          </div>;
                  }) 
            ): ('No items in to do.')
          }
          </div>
          </MainWrapper.contentBox>
          <MainWrapper.pageHeading>completed</MainWrapper.pageHeading>
          <MainWrapper.contentBox>
            <div className="row">
              {allCompletedItems.length > 0 ? (
                allCompletedItems.map((item, i) => {
                  return <div className="item" key={i}>
                          <div className="checkbox">
                            <input type="checkbox" name={i} onClick={(e)=> this.props.backToDoItem(i)} />
                            <div className="checkedIcon"></div>
                          </div>
                          {this.props.editNameCompletedInputShow !== `editCompletedName_${i}` ? (
                            <div className="item-name item-name-completed">{item}</div> 
                            ): null 
                          }
                          {this.props.editNameCompletedInputShow === `editCompletedName_${i}` ? (
                            <div className="item-edit">
                              <input type="text" defaultValue={item} id={`editCompletedName_${i}`} />
                            </div> 
                            ): null 
                          }
                          <div className="todo-actions">
                          {!this.props.editNameCompletedInputShow ? (
                              <a href="javascript:void(0)" onClick={(e)=> this.props.editNameCompletedDisplay(i)}>Edit</a>
                              ): null 
                            }
                            {this.props.editNameCompletedInputShow ? (
                              <a href="javascript:void(0)" onClick={(e)=> this.props.editCompleted(i)}>Save</a> 
                              ): null 
                            }
                            <a href="javascript:void(0)" onClick={(e)=> this.props.deleteCompletedItem(i)}>Delete</a>
                          </div>
                        </div>
                }) 
              ): ('No items completed yet.')
              }
            </div>
          </MainWrapper.contentBox>
          {allItems.length > 0 || allCompletedItems.length > 0 ? (
              <MainWrapper.pointNoted>*When you click on checkbox, items will be moved to completed or todo list.</MainWrapper.pointNoted>
            ): null }
        </div>
    )
  }
}

export default ListItems;