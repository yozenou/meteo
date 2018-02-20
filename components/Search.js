import React from 'react'
import {View, Text,TextInput,StyleSheet,Image,Button} from 'react-native'
import globalStyle from '../Style'
import List from './List'
import {StackNavigator} from 'react-navigation'


class Search extends React.Component{

  static navigationOptions = {
    title:'Rechercher une ville',
    tabBarIcon : () =>{
      return <Image source={require('./icons/home.png')} style={{width:22,height:22}}/>
    }
  }





  constructor(props) {
      super(props);
      this.state = { text: 'Marseille' };
    }


  setState(state)
  {
    this.setState(state)
  }

  submit()
  {
      this.props.navigation.navigate('Result', {ville:this.state.text})



  }


  render()
  {
    return(
      <View style={globalStyle.container}>
        <TextInput
        style={globalStyle.input}
        value={this.state.text}
        onChangeText={(text) => this.setState({text})}
        underlineColorAndroid='transparent'/>
        <Button onPress={ () => this.submit()} title="Rechercher" color={globalStyle.colorButton}/>
      </View>


    )
  }
}


const navigationOptions = {
  headerStyle:globalStyle.header,
  headerTitleStyle:globalStyle.headerTitle
}


export default StackNavigator({
  Result:{
    screen:List,
    navigationOptions
  },
  Search:{
    screen:Search,
    navigationOptions
  },

})
