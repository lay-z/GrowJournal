// @flow

import {Colors, Fonts, Metrics} from '../../Themes/index.js'

export default {
  container: {
    flex: 1
  },
  navBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Metrics.navBarHeight,
    paddingTop: 0,
    paddingHorizontal: 5,
    backgroundColor: Colors.navBarBackground
  } as React.ViewStyle,
  title: {
    textAlign: 'center',
    color: Colors.snow,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: Colors.transparent,
    fontWeight: 'bold',
    fontSize: Fonts.size.navBarHeader,
    width: 0,
    alignSelf: 'center'
  } as React.ViewStyle,
  leftButton: {
    tintColor: Colors.snow
  },
  rightButton: {
    color: Colors.snow
  }
}
  