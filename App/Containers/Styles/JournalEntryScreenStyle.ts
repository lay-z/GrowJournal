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
    height: journalHeight,
    marginTop: Metrics.baseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginLeft: Metrics.doubleBaseMargin,
    backgroundColor: Colors.snow,
    elevation: 10,
    padding: Metrics.doubleBaseMargin
  } as React.ViewStyle,
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
  section: {
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
  plantPics: {
    flex: 0
  } as React.ImageStyle,
  plantRow: {
    flex: 7
  } as React.ViewStyle

})
