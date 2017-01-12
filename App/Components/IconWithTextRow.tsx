// @flow

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/IconWithTextRowStyle'
import Images from '../Themes/Images'

type iconText = {
  imageSrc: React.Image,
  info: string
}

// Row with Icon view
const renderIconView = ({imageSrc, info}: iconText) => {
  // console.log(info)
  return (
    <View style={styles.iconView} key={info}>
      <Image source={imageSrc} style={styles.icon}/>
      <Text style={styles.iconText}> {info} </Text>
    </View>
  )
}

type iconWithTextRowProps = {
  humidity: number,
  warnings: string[],
  ph: number,
  temperature: number
}

class IconWithTextRow extends React.Component<iconWithTextRowProps, null> {
  render() {

    const warningShield = this.props.warnings.length ? Images.redWarningShield : Images.warningShield


    const icons = [
      {imageSrc: Images.temperature, info: String(this.props.temperature)},
      {imageSrc: Images.humidity, info: String(this.props.humidity) + "%"},
      {imageSrc: warningShield, info: String(this.props.warnings.length)},
      {imageSrc: Images.ph, info: String(this.props.ph)}
    ]
    // console.log(iconsWithText)
    return (
      <View style={styles.iconRow}>
        {icons.map((iconText: iconText) => {
          return renderIconView({ imageSrc: iconText.imageSrc, info: iconText.info})
        })}
      </View>
    )
  }
} 

export default IconWithTextRow