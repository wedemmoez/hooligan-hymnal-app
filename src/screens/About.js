import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationOptions from '../config/NavigationOptions';
import { Skin, DefaultColors, Palette } from '../config/Settings';

// About info, link to website/fb/twitter
// maybe a url for the /songs page on website (where App Store/Google Play icons will be found)
// Email to send feedback?

export default class About extends React.Component {
  static navigationOptions = {
    title: 'About',
    ...NavigationOptions
  };
  render() {
    return (
      <View style={{flex: 1, padding: 10, backgroundColor: Palette.Gold }}>
        <View style={{ flex: 1, backgroundColor: Palette.White, padding: 5 }}>
          <Text>NGS Hymnal</Text>
          <View style={{ height: 10 }} />
          <Text>
            Thanks for testing! Stay tuned for updates before the season begins
          </Text>
          <Text>
            Please send feedback to Twitter: @NGSDetroit or
            webmaster@noonelikes.us
          </Text>
          <View style={{ height: 50 }} />
          <Text>Home screen video pending</Text>
          <Text>Menu photo pending</Text>
          <Text>Player photos pending</Text>
          <Text>Player headshots pending</Text>
          <Text>
            Forked from the Chattahooligan Hymnal, which used some code based on the open source @nodevember conference schedule app
          </Text>
          <View style={{ height: 50 }} />
          <Text>Debug</Text>
          <Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
