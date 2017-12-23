import React, { Component } from 'react';
import { Button, Text } from '@shoutem/ui';

export default class FooterButton extends Component {

  delete = () => {
    this.props.removeCompleted();
  }

  // RENDER ====================

  render() {
    return (
      <Button
        onPress={this.delete}
      >
        <Text 
          style={{color: 'red'}}
        >
          DELETE COMPLETED
        </Text>
      </Button>
    )
  }
}
