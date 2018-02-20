import React from 'react'
import {View, Text,TextInput,StyleSheet,Image,Button} from 'react-native'


export default class Home extends React.Component{

  static navigationOptions = {
    tabBarIcon : () =>{
      return <Image source={require('./icons/home.png')} style={{width:22,height:22}}/>
    }
  }





  constructor(props) {
      super(props);
      this.state = { text: 'Tapez votre ville' };
    }


  setState(state)
  {
    this.setState(state)
  }


  render()
  {
    return(
      <View style={style.view}>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={this.state.text}
        onChangeText={(text) => this.setState({text})}
        underlineColorAndroid='transparent'/>
        <Button onPress={ () => this.submit()} title="Rechercher"/>
      </View>
    )
  }

}


const style = StyleSheet.create({
  view:
  {
    marginBottom:40
  }
});
