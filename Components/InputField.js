import React, { Component } from 'react';
import { TextInput } from '@shoutem/ui';

export default class InputField extends Component {

  render() {
    return (
    <TextInput
      placeholder={'Enter new todo'}
    />
    )
  }
}
