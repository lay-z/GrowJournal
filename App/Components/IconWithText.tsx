// @flow

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/IconWithTextStyle'

export interface IconWithTextProps {
  imageSrc: React.Image,
  info: string,
  style ?: React.ViewStyle
}

export default class IconWithText extends React.Component<IconWithTextProps, any> {

  render() {
    return (
      <View style={[styles.iconView, this.props.style]} key={this.props.info}>
        <Image source={this.props.imageSrc} style={styles.icon}/>
        <Text style={styles.iconText}> {this.props.info} </Text>
      </View>
    )
  }
}