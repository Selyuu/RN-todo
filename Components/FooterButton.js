import React, { Component } from 'react';
import { Button, Text } from '@shoutem/ui';

export default class FooterButton extends Component {

  render() {
    return (
      <Button>
        <Text 
          style={{color: 'red'}}
        >
          DELETE COMPLETED
        </Text>
      </Button>
    )
  }
}
