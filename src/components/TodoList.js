import React from 'react';
import TodoItem from './TodoItem';
import TodoIntput from './TodoInput';


class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.handleDelete = this.props.handleDelete;
      this.handleSubmit = this.props.handleSubmit;
  
    }
  
    render() {
      return (<div>
            <TodoIntput handleSubmit={this.handleSubmit}/>
            {this.props.items.map(item => {
            return (
              <TodoItem
                key={item.id}
                content={item.content}
                handleDelete={() => this.handleDelete(item.id)}
              />
            );
          })}
      </div>)
    }
  }

export default TodoList;