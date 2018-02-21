import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator, AppRegistry, Image, Button, ListView} from 'react-native'
import moment from 'moment'
import 'moment/locale/fr'
import globalStyle from '../../Style'
import FadeInView from '../animation/fadeInView'


moment.locale('fr')

export default class Rows extends React.Component {

    /*static propTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number
    }*/

day(){

let day = moment(this.props.day["date_epoch"] * 1000).format('ddd')


return (
  <Text style={[style.white,style.bold]}>{day.toUpperCase()}</Text>
)

}


iconee (size = 50){
const httdebut = 'http:'
const test = httdebut + this.props.day.day.condition.icon//this.props.day.condition.text.toLowerCase()

 return(
   <Image style={{width: size, height: size}} source={{uri:test}} />
    //<Text>m</Text>
  )

}

//  let typee = this.props.day.weather.[0].main
//  console.log(this.props.day)
//




date(){

let day = moment(this.props.day["date_epoch"] * 1000).format('DD/MM')
return (
  <Text  style={[style.white]}>{day}</Text>
)

}

    render() {

      if(this.props.index === 0)
      {

        return (
          <FadeInView>
            <View style={[style.view,style.firstView]}>
            <View style={{}}>
            {this.iconee(90)}
            <Text style={{marginHorizontal:20, fontSize:35}}>{this.day()} {this.date()}</Text>
            </View>
                <Text style={style.temp}>{Math.round(this.props.day.day.avgtemp_c)} C°</Text>
            </View>
            </FadeInView>
        )

      }
      else {

        return (
          <FadeInView>
            <View style={style.view}>
            <View style={{flex:1,flexDirection : 'row',alignItems:'center'}}>
            {this.iconee()}
            <Text style={{marginHorizontal:20}}>{this.day()} {this.date()}</Text>
            </View>
                <Text style={style.temp}>{Math.round(this.props.day.day.avgtemp_c)} C°</Text>
            </View>
            </FadeInView>
        )
      }
    }
}


const style = StyleSheet.create({
  white:{
    color:'#FFFFFF'
  },
  bold:{
      fontWeight: 'bold'
  },
  firstView:{
    backgroundColor:'#e54b65',
  },
  view:{
    backgroundColor:'#394163',
    borderWidth : 0,
    borderBottomWidth:1,
    borderBottomColor:'#202340',
    paddingHorizontal:20,
    paddingVertical : 10,
    flex:1,
    flexDirection : 'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  temp:
  {
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize:22
  }
})
