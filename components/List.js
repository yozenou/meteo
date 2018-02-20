import React from 'react'
import {View, Text, StyleSheet,ActivityIndicator,AppRegistry,Image,Button,ListView} from 'react-native'
import globalStyle from '../Style'
import axios from 'axios'
import WeatherRow from './weather/Rows'


export default class List extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      // title: `Météo / ${navigation.state.params.ville}`,
    }
  }


constructor(props){
  super(props)
  this.state = {
    ville:'Montpellier', //this.props.navigation.state.params.ville,
    reportApi:null
  }
  this.fetchWeather()
}

fetchWeather(){
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.ville}&APPID=4cb8b6ae0f608ecf2c1e8da80b2fcfb4&units=metric`)
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
          dataSource={ds.cloneWithRows(this.state.reportApi.list)}
          renderRow={(row,j,k) => <WeatherRow day={row} index={parseInt(k, 10)} /> }
        />
      )
    }



  }
}
