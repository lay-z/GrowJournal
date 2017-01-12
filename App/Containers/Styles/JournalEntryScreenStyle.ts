// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/index.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  } as React.ViewStyle,
  journal: {
    height: (Metrics.screenHeight - Metrics.navBarHeight) - (Metrics.quadBaseMargin + Metrics.doubleBaseMargin + Metrics.baseMargin),
    marginTop: Metrics.baseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginLeft: Metrics.doubleBaseMargin,
    backgroundColor: Colors.snow,
    elevation: 10
  } as React.ViewStyle
})
