import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class TodoIntput extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = props.handleSubmit.bind(this);
      this.state = {content: ""};
    }
  
    handleChange(e) {
      this.setState({content: e.target.value});
    }
    
    render() {
      return (
        <div>
          <TextField inputProps={{ "data-testid": "input_field" }} id="standard-basic" label="New Todo" value={this.state.content} onChange={(e) => this.handleChange(e)}/>
          <Button data-testid="add_button" variant="contained" onClick={() => {this.handleSubmit(this.state.content); this.setState({content: ""})}}>Add</Button>
        </div>
      )
    }
}

export default TodoIntput;