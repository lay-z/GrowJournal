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
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1 
  } as React.ViewStyle,
  commentRow: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flex: 2,
    flexDirection: 'column',
    alignItems: 'stretch'
  } as React.ViewStyle,
  label: {
    flex: 1,
    color: Colors.ironBlue
  } as React.TextStyle,
  textInput: {
    flex: 2,
    paddingRight: 30,
    backgroundColor: Colors.snow,
    height: 40,
    color: Colors.coal
  } as React.TextStyle,
  picker: {
    flex: 2,
    paddingRight: 30,
    backgroundColor: Colors.snow,
    height: 40,
    color: Colors.coal
  } as React.ViewStyle,
  buttonContainer: {
    flex: 1,
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    // backgroundColor: Colors.snow,
    // height: 40,
    // color: Colors.ironBlue
  } as React.ViewStyle,

})

export const buttonColour = Colors.ironBlue
