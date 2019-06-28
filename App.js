import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'

import HomeScreen from './src/screens/HomeScreen'
import UsScreen from './src/screens/UsScreen'
import TicketScreen from './src/screens/TicketScreen';


const MainNav = createStackNavigator ({
  Home: {screen: HomeScreen},
  US: {screen: UsScreen},
  Ticket: {screen: TicketScreen,
            navigationOptions: () => ({
              gesturesEnabled: true,
              swipeEnabled: true,
              gestureResponseDistance: {
                horizontal: 300,
                vertical: 135,
              }
            })},

},

{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    gesturesEnabled: true,
    swipeEnabled: true,
    gestureResponseDistance: {
      horizontal: 300,
      vertical: 135,
    },
  }
});

const App = createAppContainer(MainNav);
export default App;