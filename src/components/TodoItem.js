import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class TodoItem extends React.Component {
    constructor(props) {
      super(props);
      this.handleDelete = props.handleDelete.bind(this);
    }
    render() {
      return <div data-testid="todo_item">
        {this.props.content}
        <IconButton aria-label="delete" onClick={this.handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    }
  
}

export default TodoItem;