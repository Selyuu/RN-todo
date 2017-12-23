import React, { Component } from 'react';
import { Button, Text, View, Tile, Title, Divider, ListView, Overlay, Icon } from '@shoutem/ui';
import { StyleSheet } from 'react-native';


export default class FooterButton extends Component {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      todos: this.props.todos,
    }
  }

  componentWillReceiveProps(nextProps) {
      // update original states
      this.setState({
        todos: nextProps.todos,
      });
  }

  onPress = (item) => {
    return () => {
      this.props.updateCompleted(item);
    }
  }

  checkedBox = (item) => {
    return item.completed === false ? 'checkbox-off' : 'checkbox-on';
  }

// RENDER ================


  renderRow(todo) {
    return (
      <View>
      <Divider styleName="line" />

        <Button styleName="space-between" onPress={this.onPress(todo.text)}>
        <Title style={{height: 80, paddingTop: 30}}>{todo.text}</Title>
        <Icon name={this.checkedBox(todo)} />
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
