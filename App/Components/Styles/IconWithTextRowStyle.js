// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  icon: {
    width: Metrics.icons.medium,
    height: Metrics.icons.medium
  },
  iconText: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  iconRow: {
    margin: Metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})
