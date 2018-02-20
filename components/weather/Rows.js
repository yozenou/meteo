import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator, AppRegistry, Image, Button, ListView} from 'react-native'
import moment from 'moment'


export default class Rows extends React.Component {

    /*static propTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number
    }*/



day(){

let day = moment(this.props.day.dt * 1000).format('ddd')
return (
  <Text>{day.toUpperCase()}</Text>
)

}


date(){

let day = moment(this.props.day.dt * 1000).format('DD/MM')
return (
  <Text>{day}</Text>
)

}



    render() {
        return (
            <View>
            <Text>{this.day()} {this.date()}</Text>
                <Text>{this.props.day.main.temp}c°</Text>
            </View>

        )
    }
}
