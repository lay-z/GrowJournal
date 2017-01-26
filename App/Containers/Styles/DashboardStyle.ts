// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/index.js'




export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  } as React.ViewStyle,
  card: Object.assign({}, ApplicationStyles.card, {
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 0,
    elevation: 10
  } as React.ViewStyle) as React.ViewStyle,
  touchableCard: {
    margin: Metrics.baseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginLeft: Metrics.doubleBaseMargin
  } as React.ViewStyle,
  cardHeading: {
    fontWeight: 'bold',
    ...Fonts.style.h5,
    flex: 4,
    // textAlign: 'center',
    textAlignVertical: 'center'
  } as React.TextStyle,
  cardHeadingTime: {
    textAlignVertical: 'center'
  } as React.TextStyle,
  cardHeadingPlantState: {
    height: Metrics.icons.small,
    width: Metrics.icons.small,
    alignSelf: 'center'
  } as React.ImageStyle,
  cardHeaderRow: {
    height: 200/3,
    margin: Metrics.baseMargin,
    // flex:1, 
    flexDirection:'row',
  } as React.ViewStyle,
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  } as React.ViewStyle,
  comments: {
    margin: Metrics.baseMargin,
    ...Fonts.style.normal   
  } as React.TextStyle,
  day: {
    marginTop: Metrics.baseMargin
  } as React.ViewStyle,
  dayDate: {
    marginLeft: Metrics.doubleBaseMargin,
    color: Colors.snow,
    ...Fonts.style.normal
  } as React.TextStyle
})
