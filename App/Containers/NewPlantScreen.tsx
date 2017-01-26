// @flow

import React from 'react'
import { ScrollView, Text, View, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/NewPlantScreenStyle'
import Images from '../Themes/Images'

class NewPlantScreen extends React.Component<any, any> {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  renderCard(type, iconSrc) {
    return (
      <TouchableHighlight
        style={styles.touchableCard}
        onPress={() => NavigationActions.createJournalScreen()}
      >
        <View style={styles.card}>
          <Image source={iconSrc} style={styles.plantTypeIcon} />
          <Text style={styles.description}>{type}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderCard("Individual", Images.handPlanting)}
        {this.renderCard("Batch", Images.pottedPlant)}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlantScreen)
