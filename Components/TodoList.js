import React, { Component } from 'react';
import { Button, Text, View, Tile, Title, Divider, ListView, Overlay, Icon } from '@shoutem/ui';
import { StyleSheet } from 'react-native';


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

        <Button styleName="space-between">
        <Title style={{height: 80, paddingTop: 30}}>{todo}</Title>
        <Icon name="checkbox-off" />
        </Button>

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
