// @flow

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/IconWithTextRowStyle'

type iconText = {
  imageSrc: string,
  info: string
}

type iconWithTextProps = {
  arrayIconsWithText: Array<iconText>
}

// Row with Icon view
const renderIconView = ({imageSrc, info}: iconText) => {
  // console.log(info)
  return (
    <View style={styles.iconView} key={info}>
      <Image source={imageSrc} style={styles.icon}/>
      <Text style={styles.iconText}> {info} </Text>
    </View>
  )
}

class IconWithTextRow extends React.Component {
  render() {
    // console.log(iconsWithText)
    return (
      <View style={styles.iconRow}>
        {this.props.arrayIconsWithText.map((iconText: iconText) => {
          return renderIconView({ imageSrc: iconText.imageSrc, info: iconText.info})
        })}
      </View>
    )
  }
}

export default IconWithTextRow


// Prop type warnings
IconWithTextRow.propTypes = {
  arrayIconsWithText: React.PropTypes.arrayOf(React.PropTypes.shape({
    imageSrc: React.PropTypes.number,
    info: React.PropTypes.string
  })),
}

// // Defaults for props
// IconWithText.defaultProps = {
//   someSetting: false
// }
