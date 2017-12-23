import React, { Component } from 'react';
import { NavigationBar, Title, Icon, Image, Overlay } from '@shoutem/ui';
import { View, DropDownMenu } from 'react-native';

export default class HeaderItem extends Component {

  render() {
    return (
      <View style={{ paddingTop: 24 }}> 
        <Image
          source={{uri: 'https://i.imgur.com/1P4Gbqc.jpg'}}
          style={{width: window.width, height:100}}
        >

        <NavigationBar
          styleName="clear"
          centerComponent={
            <Title 
            styleName="bold" 
            style={{color: 'white'}}>
            To Do</Title>}
        />
        </Image>
      </View>
    )
  }
}
