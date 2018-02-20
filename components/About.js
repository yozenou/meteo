import React from 'react'
import {View, Text, StyleSheet,ActivityIndicator,AppRegistry,Image,Button} from 'react-native'


export default class About extends React.Component{


static navigationOptions = {
  tabBarIcon : () =>{
    return <Image source={require('./icons/user.png')} style={{width:22,height:22}}/>
  }
}


search(){
  this.props.navigation.navigate('Home')
}

render(){
return(
  <View style={style.view}>

    <View style={style.view}>
    <Text style={style.title}>A Propos</Text>
    <Text>Lorem ipsutetur adipiscing elit. Donec malesuada id elit vitae imperdiet. Mauris et semper magna. Proin
    elementum felis lectus, vitae tempus eros rutrum in.
    Vivamus dictum nibh eget maximus ornare. Cras auctor tincidunt neque sed rhoncus. Suspendisse molestie</Text>
    <Button onPress={() => this.search()} title="Rechercher une ville" />
    </View>

    {/*<View style={style.aligncharge}>
      <ActivityIndicator style={style.view} size="large" color="red"  animating={true}/>
      <ActivityIndicator style={style.view} size="large" color="red"  animating={true}/>
    </View>*/}

  </View>

)

}

}


const style = StyleSheet.create({

view:
{
  margin:20
},
title:{
  fontSize : 22,
  marginBottom:20
},
aligncharge:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
}

})
