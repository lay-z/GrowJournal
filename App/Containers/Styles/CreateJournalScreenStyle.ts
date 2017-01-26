// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/index'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  form: {
    flex: 1,
    margin: Metrics.baseMargin
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row'
  } as React.ViewStyle,
  label: {
    color: Colors.charcoal
  } as React.TextStyle,
  textInput: {
    height: 40,
    color: Colors.coal
  } as React.TextStyle,
})
