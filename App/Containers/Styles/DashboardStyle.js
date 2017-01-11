// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/'




export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  card: {
    height: 200,
    backgroundColor: Colors.snow,
    flexDirection: 'column',
    // justifyContent: 'space'
    // marginRight: Metrics.doubleBaseMargin,
    // marginLeft: Metrics.doubleBaseMargin,
    elevation: 10
  },
  touchableCard: {
    margin: Metrics.baseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginLeft: Metrics.doubleBaseMargin
  },
  cardHeading: {
    fontWeight: 'bold',
    ...Fonts.style.h5,
    flex: 4,
    // textAlign: 'center',
    textAlignVertical: 'center'
  },
  cardHeadingTime: {
    textAlignVertical: 'center'
  },
  cardHeaderRow: {
    height: 200/3,
    margin: Metrics.baseMargin,
    // flex:1, 
    flexDirection:'row',
  },
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  comments: {
    margin: Metrics.baseMargin,
    ...Fonts.style.normal   
  },
  day: {
    marginTop: Metrics.baseMargin
  },
  dayDate: {
    marginLeft: Metrics.doubleBaseMargin,
    color: Colors.snow,
    ...Fonts.style.normal
  }
})
