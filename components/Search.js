import React from 'react'
import {View, Text,TextInput,StyleSheet,Image,Button, Keyboard} from 'react-native'
import globalStyle from '../Style'
import List from './List'
import {StackNavigator} from 'react-navigation'


class Search extends React.Component{
  constructor(props) {
      super(props);
      this.state = { text: 'Marseille' };
    }

  static navigationOptions = {
    title:'Rechercher une ville',
    tabBarIcon : () =>{
      return <Image source={require('./icons/home.png')} style={{width:22,height:22}}/>
    }
  }

setCity(e){
    this.setState({text:e})
}

  submit()
  {
      this.props.navigation.navigate('Result', {ville:this.state.text})
      Keyboard.dismiss()
  }



  render()
  {
    return(
      <View style={globalStyle.container}>
        <TextInput
        style={globalStyle.input}
        value={this.state.text}
        onSubmitEditing={() => this.submit()}
        onChangeText={ this.setCity.bind(this)}
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
  Search:{
    screen:Search,
    navigationOptions
  },
  Result:{
    screen:List,
    navigationOptions
  }

})
