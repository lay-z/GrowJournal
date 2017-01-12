// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/index.js'

export default StyleSheet.create({
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  } as React.ViewStyle,
  icon: {
    width: Metrics.icons.medium,
    height: Metrics.icons.medium
  } as React.ImageStyle,
  iconText: {
    textAlign: 'center',
    textAlignVertical: 'center'
  } as React.TextStyle,
  iconRow: {
    margin: Metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between'
  } as React.ViewStyle

})
