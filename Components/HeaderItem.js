import React, { Component } from 'react';
import { NavigationBar, Title, Image, Text } from '@shoutem/ui';

export default class HeaderItem extends Component {

  render() {
    return (
      <Image
        source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
        style={{ width: window.width, height: 70, marginTop: 0 }}
      >
        <NavigationBar
          styleName="clear"
          centerComponent={<Title>TO DO</Title>}
        />
      </Image>
    )
  }
}
