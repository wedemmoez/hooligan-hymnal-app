import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavigationOptions from '../config/NavigationOptions';
import { Skin, DefaultColors, Palette } from '../config/Settings';
import { FontSizes } from '../constants';
import { BoldText, RegularText, MediumText } from '../components/StyledText';
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
        <ScrollView style={{ flex: 1, backgroundColor: Palette.White, padding: 5 }}>
          <Text style={{fontWeight: "bold", fontSize: 20}}>The Guardbook</Text>
          <RegularText>The Guardbook was conjured from the dark web to help everyone support Detroit City FC.</RegularText>
          <View style={{ height: 10 }} />
            <RegularText>Please send feedback to Twitter: <Text style={{fontWeight: "bold"}}>@NGSDetroit</Text> or 
            <Text style={{fontWeight: "bold"}}>webmaster@noonelikes.us</Text>
            </RegularText>
          <View style={{ height: 20 }} />
          <MediumText>Credits</MediumText>
          <View style={{ height: 50 }} />
          <Text>All player headshots courtesy of <Text style={{fontWeight: "bold"}}>Detroit City FC</Text></Text>
          <Text>Home screen video: <Text style={{fontWeight: "bold"}}>@mikoDCTID</Text></Text>
          <Text>Menu photo: <Text style={{fontWeight: "bold"}}>@TheDukeNGS</Text></Text>
          <Text>Hell's Hymnal: <Text style={{fontWeight: "bold"}}>@JosephSlowvak</Text></Text>
          <Text>Roster: <Text style={{fontWeight: "bold"}}>@NGS_Tonto</Text></Text>
          <Text>Administration Developer: <Text style={{fontWeight: "bold"}}>@shortnd667</Text></Text>
          <Text>Release Manager: <Text style={{fontWeight: "bold"}}>@tacoman_x86</Text></Text>
          <Text>Official Butt Opinions: <Text style={{fontWeight: "bold"}}>@ThaBlackUnicorn</Text></Text>
          <View style={{ height: 50 }} />
          <RegularText>
            Forked with love from the Chattahooligan Hymnal, which used some code based on the open source @nodevember conference schedule app.
            Interested in helping? If you can code, research players, take awesome photos, or otherwise help make the Guardbook better,
            we'd love to work with you! Please contact <Text style={{fontWeight: "bold"}}>@tacoman_x86</Text> on Twitter or
            <Text style={{fontWeight: "bold"}}>webmaster@noonelikes.us</Text> for more information.
          </RegularText>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default withUnstated(About, { globalData: GlobalDataContainer });