import React from 'react';
import { Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import NavigationOptions from '../config/NavigationOptions';

const eventsUrl = 'https://www.npsl.com/table/2019-npsl-members-cup/';

export default class Standings extends React.Component {
  static navigationOptions = {
    title: 'Standings',
    ...NavigationOptions
  };

  componentDidMount() {
    this.openBrowser();
  }

  async openBrowser() {
    let result = await WebBrowser.openBrowserAsync(eventsUrl);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Text>NPSL standings open in WebBrowser component</Text>
    );
  }
}
