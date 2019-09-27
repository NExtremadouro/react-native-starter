
import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/login';
import AuthLoadingScreen from '../screens/auth';

const AuthStack =
  createSwitchNavigator(
    {
      AuthLoading: {
        screen: AuthLoadingScreen,
      },
      Login: {
        screen: LoginScreen,
      },
    }
  );

export default AuthStack;
