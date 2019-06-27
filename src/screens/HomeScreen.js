import React from 'react';
import { StyleSheet, Text,
         View, ImageBackground,
         TouchableOpacity, Dimensions, Button
} from 'react-native';

import bgImage from '../images/flight.jpg';
import UsScreen from './UsScreen';
//import EuroScreen from './EuroScreen';

const { width: WIDTH } = Dimensions.get('window')

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        header: null,

    };
  render() {
      const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View>
          <Text style={styles.headerText}>FLIGHT PLAN</Text>
        </View>
       <TouchableOpacity style={styles.USbtn}
                          onPress={() => navigate('US', {screen: UsScreen.default})}>
          <Text style={styles.btnText} >North America</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Eubtn}
                        /*onPress={() => navigate('Europe', {screen: EuroScreen.default})}*/>
          <Text style={styles.btnText}>Europe</Text>
       </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 60,
    fontWeight: '500',
    height: 225,
    opacity: 0.9,
  },
  USbtn: {
    width: WIDTH - 25,
    height: 60,
    borderRadius: 25,
    backgroundColor: '#1f7db8',
    justifyContent: 'center',
    opacity: 0.7,
    marginTop: -100
  },
  Eubtn: {
    width: WIDTH - 25,
    height: 60,
    borderRadius: 25,
    backgroundColor: '#1f7db8',
    justifyContent: 'center',
    opacity: 0.7,
    marginTop: 60
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  },
});
