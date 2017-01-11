// @flow

import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/JournalEntryScreenStyle'

class JournalEntryScreen extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  renderHeader(plantName) {
    <Text>{plantName}</Text>
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.props.card.name}</Text>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(JournalEntryScreen)
