import React from 'react'
import { View, Image, Animated, TouchableOpacity } from 'react-native'
import { Images, Colors } from '../Themes/index.js'
import Styles from './Styles/CustomNavBarStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class CustomNavBar extends React.Component<any, any> {
  render () {
    return (
      <Animated.View style={Styles.container}>
        <TouchableOpacity style={Styles.leftButton} onPress={NavigationActions.pop}>
          <Icon name='ios-arrow-back' size={34} color={Colors.snow} />
        </TouchableOpacity>
        this is text
        <Image style={Styles.logo} source={Images.growJournalLogo} />
        <View style={Styles.rightButton} />
      </Animated.View>
    )
  }
}

