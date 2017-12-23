import React, { Component } from 'react';
import { TextInput } from '@shoutem/ui';

export default class InputField extends Component {

  state = {
    newTodo: ''
  }

  addNewItem = (item) => {
    return () => {
      this.props.addNew(item);
      this.state.newTodo = '';
    }
  }

  // RENDER =======================

  render() {
    return (
    <TextInput
      placeholder={'Enter new todo'}
      value={this.state.newTodo}
      onChangeText={newTodo => this.setState({newTodo})}
      onSubmitEditing={this.addNewItem(this.state.newTodo)}
    />
    )
  }
}
