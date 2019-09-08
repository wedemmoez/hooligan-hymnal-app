import React from 'react';
import {
  SectionList,
  StyleSheet,
  View
} from 'react-native';

import withUnstated from '@airship/with-unstated';
import GlobalDataContainer from '../containers/GlobalDataContainer';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, RectButton } from 'react-native-gesture-handler';

import NavigationOptions from '../config/NavigationOptions';
import { NavigationActions } from 'react-navigation';

import { BoldText, MediumText, RegularText } from '../components/StyledText';
import LoadingPlaceholder from '../components/LoadingPlaceholder';

import { Colors, FontSizes, Layout } from '../constants';
import Constants from 'expo-constants';

import { find, propEq } from 'ramda';
import { Palette, Skin } from '../config/Settings';

class FoeRow extends React.Component {
  render() {
    const { item: player } = this.props;
    return (
      <View style={styles.row}>
        <RectButton
          activeOpacity={0.05}
          style={{ flex: 1 }}
        >
          <View style={{flexDirection: 'row'}}>            
            <View style={styles.rowData}>
              <View
                  style={{ width: 25, alignItems: 'flex-end', paddingRight: 5 }}
              >
                <BoldText>{player.squadNumber}</BoldText>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <MediumText>{player.name}</MediumText>
              </View>
            </View>
          </View>
        </RectButton>
      </View>
    );
  }
}

class FoesRoster extends React.Component {
  static navigationOptions = {
    headerTitle: "Foes Mad",
    ...NavigationOptions
  };
  
  state = {
    rosterTitle: this.props.globalData.currentFoe.opponent,
    foes: []
  }

  componentDidMount() {
    this.setData();
  }

  componentDidUpdate(prevProps) {
  }

  setData = () => {
    let rosterTitle = this.props.globalData.currentFoe.opponent;
    let foes = [];
    foes.push({});
    foes[0].title = this.props.globalData.currentFoe.opponent;
    foes[0].data = [];
    
    this.props.globalData.currentFoe.players.forEach(player => {
        foes[0].data.push(player);
    });

    this.setState({ rosterTitle, foes });
  }

  render() {
    return (
      <LoadingPlaceholder>
        <View style={styles.container}>
          <SectionList style={styles.container}
            renderScrollComponent={props => <ScrollView {...props} />}
            stickySectionHeadersEnabled={true}
            renderItem={this._renderItem}
            renderSectionHeader={this._renderSectionHeader}
            sections={this.state.foes}
            keyExtractor={(item, index) => index}
          />
        </View>
      </LoadingPlaceholder>
    );
  }

  _renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <RegularText>{section.title}</RegularText>
      </View>
    );
  };

  _renderItem = ({ item }) => {
    return <FoeRow item={item} />;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100 + '%'
  },
  row: {
    flex: 1,
    paddingTop: 10,
    padding: 10,
    backgroundColor: Palette.White,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row'
  },
  rowAvatarContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  rowData: {
    flex: 1,
    flexDirection: 'row'
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingTop: 7,
    paddingBottom: 5,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#eee'
  }
});

export default withUnstated(FoesRoster, { globalData: GlobalDataContainer });