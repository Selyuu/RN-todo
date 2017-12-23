import React, { Component } from 'react';
import { View, Screen } from '@shoutem/ui';
import { StyleSheet } from 'react-native';

import HeaderItem from './Components/HeaderItem';
import FooterButton from './Components/FooterButton';
import Todolist from './Components/Todolist';
import InputField from './Components/InputField';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isReady: false,
      todos: [
      {text: 'Walk dog', completed: false},
      {text: 'Do laundry', completed: false},
      {text: 'Buy sofa', completed: false},
      {text: 'Order pillows', completed: false},
      ]
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
      'Rubik': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf')
    });
    this.setState({ isReady: true });
  }

  updateCompleted = (title) => {
    this.state.todos.forEach((el, i) => {
      if (el.text === title) {
        this.setState({
          ...this.state,
          todos: this.state.todos.map(item => {
            if (item.text === title) {
              return {
                ...item,
                completed: !item.completed
              }
            }
            return item;
          })
        })
      }
    })
  }

  addNew = (newItem) => {
    this.setState({
      ...this.state,
      todos: [
        {text: newItem, completed: false},
        ...this.state.todos
      ]
    })
  }

  removeCompleted = () => {
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos.filter(el => el.completed === false)
      ]
    })
  }


  // RENDER =======================

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Screen>
        <HeaderItem />
        <InputField 
          addNew={this.addNew}
        />
        <Todolist 
          todos={this.state.todos} 
          updateCompleted={this.updateCompleted}
        />
        <FooterButton 
          removeCompleted={this.removeCompleted}
        />
      </Screen>
    );
  }
}