import './App.scss';
import React from 'react';
import { v4 as uuid } from 'uuid';
import TodoList from './components/TodoList'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: [{ id: uuid(), content: 'Todo 1' }, { id: uuid(), content: 'Todo 2' }] };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDelete(id) {
    this.setState({ todoItems: this.state.todoItems.filter((item) => { return item.id !== id }) })
  }

  handleSubmit(content) {
    if (content === "") {
      return;
    }
    this.setState({ todoItems: [...this.state.todoItems, {id: uuid(), content}]})
  }

  render() {
    return (
      <div className="app">
        <TodoList handleDelete={this.handleDelete} handleSubmit={this.handleSubmit} items={this.state.todoItems}/>
      </div>
    );
  }
}

export default App;
