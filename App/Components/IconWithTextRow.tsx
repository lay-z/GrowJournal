// @flow

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/IconWithTextRowStyle'
import Images from '../Themes/Images'

import IconWithText, {IconWithTextProps} from './IconWithText'



type iconWithTextRowProps = {
  humidity: number,
  warnings: string[],
  ph: number,
  temperature: number,
  style?: any
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
      <View style={[styles.iconRow, this.props.style]}>
        {icons.map((iconText: IconWithTextProps, index: Number) => {
          return <IconWithText imageSrc={ iconText.imageSrc} info={iconText.info} key={String(index)}/>
        })}
      </View>
    )
  }
} 

export default IconWithTextRow