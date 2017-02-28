import React, { Component } from 'react';
// import Firebase from 'firebase';
import Header from '../components/layouts/Header';
import data from '../components/todos/data/todo';
import List from '../components/todos/List';

class Todos extends Component {
  constructor() {
    super();
    // var config = {
    //   apiKey: "AIzaSyD-O6G2JjjPLySvpYVf1mFvT_HHYni0lKU",
    //   // authDomain: "localhost",
    //   databaseURL: "https://my-first-react-native.firebaseio.com"
    // };
    //
    // Firebase.initializeApp(config);
    // var myFirebaseRef = Firebase.database().ref();

    this.state = {
      todos: data
    };
  }
  submitTodo = (e) => {
    e.preventDefault();
    const todos = this.state.todos;
    let newId = 1;
    if(todos.length <= 0) {
      newId = 1;
    } else {
      newId = todos[todos.length - 1].id + 1;
    }
    this.setState({
      todos: todos.concat({
        id: newId,
        name: this.refs.name.value
      })
    });

    //console.log(this.listItem);
    this.refs.name.value = null;
  }

  handleDelete = (itemToBeDeleted) => {
    //find index of element
    var index = this.state.todos.findIndex(e=>e.id === itemToBeDeleted);
    //copy array
    var newAray = this.state.todos.slice();
    //delete element by index
    newAray.splice(index, 1);
    this.setState({todos: newAray});
  }

  render() {
    return (
      <div>
        <Header header="Todo Lists" />
        <section className="content">
          <form onSubmit={this.submitTodo}>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="กรุณาพิมพ์สิ่งที่ต้องการ . . ." ref="name" required />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="submit"><b>Add</b></button>
              </span>
            </div>
          </form>
          <List
            handleDelete={this.handleDelete}
            todos={this.state.todos} />
        </section>
      </div>
    );
  }
}

export default Todos;
