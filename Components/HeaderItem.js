import React, { Component } from 'react';
import { NavigationBar, Title, Icon } from '@shoutem/ui';
import { View, DropDownMenu } from 'react-native';

export default class HeaderItem extends Component {

  render() {
    return (
<View style={{ paddingTop: 24 }}> 
<NavigationBar
      styleName="inline"
      centerComponent={<Title>TO DO</Title>}
    />
    </View>
    )
  }
}
