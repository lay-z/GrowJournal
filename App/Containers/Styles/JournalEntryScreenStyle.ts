// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/index.js'


const journalHeight = (Metrics.screenHeight-Metrics.navBarHeight)-(Metrics.quadBaseMargin*2+Metrics.baseMargin)

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  } as React.ViewStyle,
  journal: {
    // height: journalHeight,
    flex:1,
    marginTop: Metrics.baseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginLeft: Metrics.doubleBaseMargin,
    backgroundColor: Colors.snow,
    elevation: 10,
    padding: Metrics.doubleBaseMargin,
    paddingBottom: 0
  } as React.ViewStyle,

  // Header
  header: {
    // margin: Metrics.doubleBaseMargin,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
  } as React.ViewStyle,
  headerText: {
    fontWeight: "bold",
    ...Fonts.style.h5,
    flex: 1
  } as React.TextStyle,
  time: {
    flex: 1
  } as React.ViewStyle,

  // Icon Row
  iconRow: {
    marginTop: Metrics.baseMargin,
    flex:1,
    margin: 0
  } as React.ViewStyle, 

  // Actions and Comments sections
  section: {
    marginTop: Metrics.baseMargin,
    flex: 2
  } as React.ViewStyle,
  sectionHeader: {
    fontWeight: "bold",
    ...Fonts.style.h6
  } as React.TextStyle,
  actions: {
    paddingRight: Metrics.doubleBaseMargin,
    ...Fonts.style.normal
  } as React.TextStyle,

  // Plan Rows
  plantPics: {
    flex: 1,
    // width: 100,
    height: 150
    // resizeMode: 
  } as React.ImageStyle,
  plantRow: {
    // height: 150,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
    flexBasis: 2,
    flex: 2,
    padding: 0,
    marginLeft: -40,
    marginRight: -40
  } as React.ViewStyle

})
