import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainScreen from '../screens/main';
import SecondaryScreen from '../screens/secondary';
import SettingsScreen from '../screens/settings';
import PanicButtonScreen from '../screens/panicButton';
import { navigationOptions } from './config';

import * as IconHelper from '../helpers/icons';

import { styleVars } from '../screens/globalStyles'

const HomeStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    }
  },
  Secondary: {
    screen: SecondaryScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: styleVars.darkBlue,
      },
      headerTitleStyle: { color: '#FFF' },
      headerTintColor: styleVars.brightGreen
    }
  },
});
HomeStack.navigationOptions = navigationOptions;

const PanicStack = createStackNavigator({
  PanicButton: {
    screen: PanicButtonScreen,
    navigationOptions: {
      header: null
    }
  }
});
HomeStack.navigationOptions = navigationOptions;

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      header: null,
    }
  },
  Secondary: {
    screen: SecondaryScreen,
  },
});
SettingsStack.navigationOptions = navigationOptions;

const MainStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => IconHelper.getIcon('home', tintColor),
      }
    },
    Report: {
      screen: PanicStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => IconHelper.getIcon('alert', tintColor),
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => IconHelper.getIcon('settings', tintColor),
      }
    }
  }, {
  tabBarOptions: {
    activeTintColor: styleVars.green,
    style: {
      backgroundColor: styleVars.darkBlue,
    },
  }
}
)
export default MainStack;
