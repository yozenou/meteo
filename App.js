import React from 'react'
import { StyleSheet, Text, View, StatusBar} from 'react-native'
import { TabNavigator,TabBarBottom} from 'react-navigation'


import About from './components/About'
import Search from './components/Search'


const Tabs = TabNavigator({
    Home: { screen: Search },
    About: { screen: About }
  },
  {
  tabBarPosition : 'bottom',
  tabBarOptions :{
    pressColor : "red",
    showIcon : true,
    showLabel : false,
    indicatorStyle :{
      height:2,
      backgroundColor:"#fff",
    },
    style:{
      backgroundColor:"#a2273c",
      borderTopWidth:1,
      borderColor : "#3f101c"
    }
  }
}



)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.baseContent}>
      <StatusBar hidden={true} />
      <Tabs />
      </View>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseContent:{
    flex: 1
  }

});
