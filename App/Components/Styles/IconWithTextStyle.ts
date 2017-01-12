// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/index'

export default StyleSheet.create({
  iconView: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center'
  } as React.ViewStyle,
  icon: {
    width: Metrics.icons.medium,
    height: Metrics.icons.medium
  } as React.ImageStyle,
  iconText: {
    // textAlign: 'center',
    // textAlignVertical: 'center'
  } as React.TextStyle
})
