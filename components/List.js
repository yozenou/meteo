import React from 'react'
import {View, Text, StyleSheet,ActivityIndicator,AppRegistry,Image,Button,ListView} from 'react-native'
import globalStyle from '../Style'
import axios from 'axios'
import WeatherRow from './weather/Rows'


export default class List extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
       title: `Météo / ${navigation.state.params.ville}`,
       tabBarIcon : () =>{
         return <Image source={require('./icons/home.png')} style={{width:22,height:22}}/>
       }
    }
  }



constructor(props){
  super(props)
  this.state = {
    ville:this.props.navigation.state.params.ville,
    reportApi:null
  }
  setTimeout(()=>{
    this.fetchWeather()
  },1000)

}

fetchWeather(){
  axios.get(`http://api.apixu.com/v1/forecast.json?key=ec7dee18dfc243e2abc140255182102&q=${this.state.ville}&days=9`)
  .then((reponse)=>{
    this.setState({reportApi:reponse.data})
  })
}

  render(){

    if(this.state.reportApi === null)
    {
      return(
        <ActivityIndicator color={globalStyle.colorButton} size="large"/>
      )
    }
    else {

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


      return(
            <ListView
          dataSource={ds.cloneWithRows(this.state.reportApi.forecast.forecastday)}
          renderRow={(row,j,k) => <WeatherRow day={row} index={parseInt(k, 10)} /> }
        />
      )
    }



  }
}
