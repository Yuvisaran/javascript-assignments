import React, { Component } from "react";

class App extends Component {
  state = {
    todo: "",
    todosList: [{ todo: "Pay bills", isEdit: false }, { todo: "Go shopping", isEdit: false }],
    completedList: [{ todo: "Visit doctor", isEdit: false }],
    isEdit: false
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  todosChange = (e, i) => {
    let list = [...this.state.todosList];
    list[i].todo = e.target.value;
    this.setState({ todosList: list });
  };

  addItemFun = e => {
    e.preventDefault();
    const { todo } = this.state;
    let list = [...this.state.todosList];
    list.push({ 'todo': todo, isEdit: false });
    this.setState({ todosList: list, todo: '' })
  };

  todoComple = (each, i) => {
    let list = [...this.state.todosList];
    list.splice(i, 1);
    let comList = [...this.state.completedList];
    comList.push(each);
    this.setState({ todosList: list, completedList: comList });
  };

  todoDelete = (each, i) => {
    let list = [...this.state.completedList];
    list.splice(i, 1);
    this.setState({ completedList: list });
  };

  editTodo = (isEdit, i, editTodo) => {
    let list = [...this.state.todosList];
    list[i].isEdit = !isEdit;
    this.setState({ todosList: list })
  }

  render() {
    const { todo, todos, isEdit, todosList, completedList, editTodo } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row marginTop20">
              <div className="col-lg-12">
                <div className="row">
                  <div className="page-title">
                    <label>Add Item</label>
                  </div>
                </div>
                <div className="row marginTop20">
                  <div className="col-lg-12">
                    <form onSubmit={this.addItemFun}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="todo"
                              value={todo}
                              placeholder='add todo..'
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-group col-lg-6">
                          <button type="submit" className="customBtn">
                            {" "}
                            ADD ITEM{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row marginTop20">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="page-title">
                        <label>ToDo</label>
                      </div>
                    </div>
                    {todosList.map((each, i) => {
                      return (
                        <div key={i} className="row  marginTop20">
                          <div className="form-group col-lg-6">
                            <input
                              type="text"
                              name="todos"
                              className="form-control"
                              value={each.todo}
                              disabled={!each.isEdit}
                              onChange={(e) => this.todosChange(e, i)}
                            />
                          </div>
                          <div className="form-group col-lg-6 ">
                            <button type="submit" className="customBtn marginRight10" onClick={() => this.editTodo(each.isEdit, i, each.todo)}>
                              {each.isEdit ? 'Save' : 'Edit'}
                            </button>
                            <button type="submit" className="customBtn" onClick={() => this.todoComple(each, i)}>
                              {" "}
                              Complete{" "}
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="row marginTop20">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="page-title">
                        <label>Completed ToDo</label>
                      </div>
                    </div>
                    <div className="form-group col-lg-6 ">

                      {completedList.map((each, i) => {
                        return (
                          <React.Fragment key={i}>
                            <strike>{each.todo}</strike>
                            <button type="button" className="customBtn" onClick={() => this.todoDelete(each, i)}>
                              {" "}
                              Delete{" "}
                            </button> <br />
                          </React.Fragment>
                        )
                      })}
                    </div>
                    <div className="form-group col-lg-6 ">

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
