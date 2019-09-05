import React from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Screens from './screens';
import CustomDrawer from './components/CustomDrawer';

const { width: deviceWidth } = Dimensions.get('window');

const DefaultStackConfig = {
  cardStyle: {
    backgroundColor: '#fafafa'
  }
};

const SongsNavigation = StackNavigator(
  {
    SpeakerList: {
      screen: Screens.Songs
    }
  },
  DefaultStackConfig
);

const HomeNavigation = StackNavigator(
  {
    Home: { screen: Screens.Home },
    SingleSong: { screen: Screens.SingleSong }
  },
  {
    ...DefaultStackConfig,
    navigationOptions: {
      drawerLabel: 'HOME'
    }
  }
);

const SongbookNavigation = StackNavigator(
  {
    Songbook: {
      screen: Screens.Songbook
    }
  },
  {
    ...DefaultStackConfig,
    navigationOptions: {
      drawerLabel: "HELL'S HYMNAL"
    }
  }
);

const RosterNavigation = StackNavigator(
  {
    Roster: {
      screen: Screens.Roster
    },
    Player: { screen: Screens.Player },
    RosterSingleSong: { screen: Screens.SingleSong },
    TwitterList: { screen: Screens.TwitterList }
  },
  {
    ...DefaultStackConfig,
    navigationOptions: {
      drawerLabel: 'ROSTER'
    }
  }
);

const EventsNavigation = StackNavigator(
  {
    Events: {
      screen: Screens.Events
    }
  },
  {
    ...DefaultStackConfig,
    navigationOptions: {
      drawerLabel: 'EVENTS ↗️'
    }
  }
);

const StandingsNavigation = StackNavigator(
  {
    Events: {
      screen: Screens.Standings
    }
  },
  {
    ...DefaultStackConfig,
    navigationOptions: {
      drawerLabel: 'NPSL MC STANDINGS ↗️'
    }
  }
);

const ShopNavigation = StackNavigator(
  {
    Events: {
      screen: Screens.Shop
    }
  },
  {
    ...DefaultStackConfig,
    navigationOptions: {
      drawerLabel: 'MERCH SHOP ↗️'
    }
  }
);

const LetsMakeRootsNavigation = StackNavigator(
  {
    Events: {
      screen: Screens.Roots
    }
  },
  {
    ...DefaultStackConfig,
    navigationOptions: {
      drawerLabel: 'LET\'S MAKE ROOTS ↗️'
    }
  }
);

const SmokeNavigation = StackNavigator(
  {
    Events: {
      screen: Screens.Smoke
    }
  },
  {
    ...DefaultStackConfig,
    navigationOptions: {
      drawerLabel: 'DONATE TO SMOKE ↗️'
    }
  }
);

const InstrumentationNavigation = StackNavigator(
  {
    Events: {
      screen: Screens.Instrumentation
    }
  },
  {
    ...DefaultStackConfig,
    navigationOptions: {
      drawerLabel: 'INSTRUMENTATION ↗️'
    }
  }
);

const CapoHomeNavigation = StackNavigator(
  {
    CapoLogin: { screen: Screens.CapoLogin },
    CapoHome: {
      screen: Screens.CapoHome
    },
    CapoSelectSong: { screen: Screens.CapoSelectSong },
    CapoComposeSong: { screen: Screens.CapoComposeSong },
    CapoConfirmSendSong: { screen: Screens.CapoConfirmSendSong },
    CapoSetGoalkeeperNickname: { screen: Screens.CapoSetGoalkeeperNickname },
    CapoConfirmSendGoalkeeperNickname: { screen: Screens.CapoConfirmSendGoalkeeperNickname }
  },
  {
    ...DefaultStackConfig,
    navigationOptions: {
      drawerLabel: 'GATEKEEPER DASHBOARD'
    }
  }
);

const AboutNavigation = StackNavigator(
  {
    About: {
      screen: Screens.About
    }
  },
  {
    ...DefaultStackConfig,
    navigationOptions: {
      drawerLabel: 'ABOUT'
    }
  }
);

const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeNavigation },
    Songbook: { screen: SongbookNavigation },
    Roster: { screen: RosterNavigation },
    Events: { screen: EventsNavigation },
    Standings: { screen: StandingsNavigation },
    Shop: { screen: ShopNavigation },
    Roots: { screen: LetsMakeRootsNavigation },
    //Smoke: { screen: SmokeNavigation },
    CapoHome: { screen: CapoHomeNavigation },
    About: { screen: AboutNavigation }
    //Instrumentation: {screen: InstrumentationNavigation },
  },
  {
    contentComponent: props => <CustomDrawer {...props} />,
    drawerWidth: deviceWidth - 80
  }
);

export default StackNavigator(
  {
    Drawer: { screen: Drawer }
  },
  {
    ...DefaultStackConfig,
    headerMode: 'none'
  }
);
