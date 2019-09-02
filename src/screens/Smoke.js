import React from 'react';
import { Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import NavigationOptions from '../config/NavigationOptions';
import { SMOKE_URL } from '../config/Settings';

export default class Smoke extends React.Component {
  static navigationOptions = {
    title: 'Donate to Smoke',
    ...NavigationOptions
  };

  componentDidMount() {
    this.openBrowser();
  }

  async openBrowser() {
    let result = await WebBrowser.openBrowserAsync(SMOKE_URL);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Text>Donate to Smoke open in WebBrowser component</Text>
    );
  }
}