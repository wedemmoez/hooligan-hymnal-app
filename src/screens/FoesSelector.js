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
    const { item: foe } = this.props;
    console.log(foe);
    return (
      <View style={styles.row}>
        <RectButton
          onPress={this._handlePress}
          activeOpacity={0.05}
          style={{ flex: 1 }}
        >
          <View style={{flexDirection: 'row'}}>            
            <View style={styles.rowData}>
              <View style={{ flexDirection: 'column' }}>
                <MediumText>{foe.opponent}</MediumText>
              </View>
            </View>
          </View>
        </RectButton>
      </View>
    );
  }

  _handlePress = () => {
    this.props.onPress(this.props.item);
  };
}

class FoesSelector extends React.Component {
  static navigationOptions = {
    headerTitle: "Foes Mad",
    ...NavigationOptions
  };
  
  state = {
    rosterTitle: "Foes",
    foes: []
  }

  componentDidMount() {
    this.setData();
  }

  componentDidUpdate(prevProps) {
    if (
      !prevProps.globalData.state.foes &&
      this.props.globalData.state.foes
    ) {
      this.setData();
    }
  }

  setData = () => {

    let rosterTitle = "Foes";
    let foes = [];
    foes.push({});
    foes[0].title = "Live inside their heads. It's free real estate."
    foes[0].data = [];
    
    this.props.globalData.state.foes.forEach(foeChild => {
        foes[0].data.push(foeChild);
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
    return <FoeRow item={item} onPress={this._handlePressRow} />;
  };

  _handlePressRow = foe => {
    this.props.globalData.currentFoe = foe;
    this.props.navigation.navigate('FoesRoster', { foe });
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

export default withUnstated(FoesSelector, { globalData: GlobalDataContainer });