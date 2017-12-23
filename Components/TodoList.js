import React, { Component } from 'react';
import { Button, Text, View, Tile, Title, Divider, ListView, Overlay, Icon } from '@shoutem/ui';

export default class FooterButton extends Component {
constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      todos: ['Walk dog', 'Do laundry', 'Buy sofa', 'Order pillows']
    }
  }

  renderRow(todo) {
    return (
      <View>
      <Divider styleName="line" />
        <Button><Icon name="checkbox-off" /><Title styleName="xl-gutter">{todo}</Title></Button>
        <Divider styleName="line" />
      </View>
    );
  }

  render() {
    return (
        <ListView
          data={this.state.todos}
          renderRow={this.renderRow}
        />
    );
  }
}
