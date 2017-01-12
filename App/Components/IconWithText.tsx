// @flow

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/IconWithTextStyle'

export type IconWithTextProps = {
  imageSrc: React.Image,
  info: string
}

export default class IconWithText extends React.Component<IconWithTextProps, any> {

 

// Row with Icon view
  render() {
    // console.log(info)
    return (
      <View style={styles.iconView} key={this.props.info}>
        <Image source={this.props.imageSrc} style={styles.icon}/>
        <Text style={styles.iconText}> {this.props.info} </Text>
      </View>
    )
  }
}

// // Prop type warnings
// IconWithText.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// IconWithText.defaultProps = {
//   someSetting: false
// }
