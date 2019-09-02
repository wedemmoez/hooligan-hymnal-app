import React from 'react';
import { Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import NavigationOptions from '../config/NavigationOptions';
import { ROOTS_URL } from '../config/Settings';

export default class Roots extends React.Component {
  static navigationOptions = {
    title: 'Let\'s Make Roots',
    ...NavigationOptions
  };

  componentDidMount() {
    this.openBrowser();
  }

  async openBrowser() {
    let result = await WebBrowser.openBrowserAsync(ROOTS_URL);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Text>Let's Make Roots open in WebBrowser component</Text>
    );
  }
}