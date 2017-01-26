// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/index'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
    justifyContent: 'space-around'
  } as React.ViewStyle,
  card: Object.assign({}, ApplicationStyles.card, {
    // flex: 2
    flex: 0,
    height: 200,
    justifyContent: 'space-around',
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0
  }) as React.ViewStyle,
  touchableCard: {
    marginRight: Metrics.baseMargin * 3,
    marginLeft: Metrics.baseMargin * 3
  } as React.ViewStyle,
  plantTypeIcon: {
    height: Metrics.icons.large,
    alignSelf: "center"
  } as React.ImageStyle,
  description: {
    ...Fonts.style.h3,
    textAlign: "center",
    textAlignVertical: "center"
  } as React.TextStyle
})
