import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
} from 'react-native';
import {
  View,
  Icon,
  Text,
  Image,
  Tile,
  Title,
  Subtitle,
  Divider,
  Screen,
  NavigationBar,
  ListView,
} from '@shoutem/ui';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      restaurants: [{
        "name": "Gaspar Brasserie",
        "address": "185 Sutter St, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }],
    }
  }

  renderHeader() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingHorizontal:8,
          paddingTop:8,
          paddingBottom:0
        }}
      >
        <Icon name="down-arrow" />
        <Text
          style={{
            alignSelf: "center"
          }}
        >
          Pull to Refresh
        </Text>
        <Icon name="down-arrow" />
      </View>
    );
  }

  renderRow(restaurant) {
    return (
      <View>
        <Image
          styleName="large-banner"
          source={{ uri: restaurant.image.url }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
          </Tile>
        </Image>
        <Divider styleName="line" />
      </View>
    );
  }

  render() {
    return (
      <Screen>
        <StatusBar
          hidden={true}
        />
        <ListView
          data={this.state.restaurants}
          renderRow={this.renderRow}
          autoHideHeader={true}
          renderHeader={this.renderHeader}
        />
      </Screen>
    );
  }
}