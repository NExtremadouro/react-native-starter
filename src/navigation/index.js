import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainStack from './main';
import AuthStack from './auth';

export const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      Auth: {
        screen: AuthStack,
      },

      Main: {
        screen: MainStack,
      },
    })
);
export default RootStack;

