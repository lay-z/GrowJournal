import { Colors, Metrics } from '../../Themes/index.js'

export default {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.navBarBackground,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  } as React.ViewStyle,
  leftButton: {
    paddingTop: Metrics.baseMargin
  },
  logo: {
    height: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    width: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    resizeMode: 'contain'
  } as React.ImageStyle,
  rightButton: {
    paddingTop: Metrics.baseMargin
  }
}
