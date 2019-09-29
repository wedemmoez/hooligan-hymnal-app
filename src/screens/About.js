import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavigationOptions from '../config/NavigationOptions';
import { Skin, DefaultColors, Palette } from '../config/Settings';
import withUnstated from '@airship/with-unstated';
import GlobalDataContainer from '../containers/GlobalDataContainer';

// About info, link to website/fb/twitter
// maybe a url for the /songs page on website (where App Store/Google Play icons will be found)
// Email to send feedback?

class About extends React.Component {
  static navigationOptions = {
    title: 'About',
    ...NavigationOptions
  };

  state = {
    token: "",
    response: null
  }

  componentDidMount() {
    this.setData();
  }

  componentDidUpdate(prevProps) {
    if (
      (!prevProps.globalData.state.token &&
      this.props.globalData.state.token) ||
      (!prevProps.globalData.state.response &&
        this.props.globalData.state.response)
    ) {
      this.setData();
    }
  }

  setData = () => {
    let { token, response } = this.props.globalData.state
    this.setState({token, response})
  }

  render() {
    return (
      <View style={{flex: 1, padding: 10, backgroundColor: Palette.White }}>
        <View style={{ flex: 1, backgroundColor: Palette.White, padding: 5 }}>
          <Text style={{fontWeight: "bold", fontSize: 20}}>The Guardbook</Text>
          <View style={{ height: 10 }} />
          <Text>
            Please send feedback to Twitter: <Text style={{fontWeight: "bold"}}>@NGSDetroit</Text> or 
            <Text style={{fontWeight: "bold"}}>webmaster@noonelikes.us</Text>
          </Text>
          <View style={{ height: 50 }} />
          <Text>All player headshots courtesy of <Text style={{fontWeight: "bold"}}>Detroit City FC</Text></Text>
          <Text>Home screen video: <Text style={{fontWeight: "bold"}}>@mikoDCTID</Text></Text>
          <Text>Menu photo: <Text style={{fontWeight: "bold"}}>@TheDukeNGS</Text></Text>
          <Text>Hell's Hymnal: <Text style={{fontWeight: "bold"}}>@JosephSlowvak</Text></Text>
          <Text>Roster: <Text style={{fontWeight: "bold"}}>@NGS_Tonto</Text></Text>
          <Text>Administration Developer: <Text style={{fontWeight: "bold"}}>@shortnd667</Text></Text>
          <Text>Release Manager: <Text style={{fontWeight: "bold"}}>@tacoman_x86</Text></Text>
          <Text>Official Butt Opinions: <Text style={{fontWeight: "bold"}}>@ThaBlackUnicorn</Text></Text>
          {/*<Text>Player photos pending</Text>*/}
          {/*<Text>Player headshots pending</Text>*/}
          <View style={{ height: 50 }} />
          <Text>
            Forked with love from the Chattahooligan Hymnal, which used some code based on the open source @nodevember conference schedule app.
          </Text>
          <View style={{ height: 50 }} />
          <Text>
            Interested in helping? If you can code, research players, take awesome photos, or otherwise help make the Guardbook better,
            we'd love to work with you! Please contact <Text style={{fontWeight: "bold"}}>@tacoman_x86</Text> on Twitter or
            <Text style={{fontWeight: "bold"}}>webmaster@noonelikes.us</Text> for more information.
          </Text>
          <View style={{ height: 50 }} />
          {/*<ScrollView style={{flex: 1}}>
            <Text>Debug</Text>
            <Text selectable={true}>{this.state.token}</Text>
            <Text></Text>
            <Text selectable={true}>{JSON.stringify(this.state.response)}</Text>
          </ScrollView>*/}
          <Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default withUnstated(About, { globalData: GlobalDataContainer });