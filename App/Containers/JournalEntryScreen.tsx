// @flow
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Components
import IconWithTextRow from '../Components/IconWithTextRow'

// Styles
import styles from './Styles/JournalEntryScreenStyle'

// Types
import { card, actions, plantState } from './Dashboard'


type JournalEntryScreenPropTypes = {
  card: card
}

class JournalEntryScreen extends React.Component<any, any> {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  renderHeader(plantName: string) {
    <View style={styles.header}>
      <Text style={styles.header.text}>{plantName}</Text>
    </View>
  }

  renderJournal(card: card): JSX.Element {
    return (
      <View style={styles.journal}>
        <IconWithTextRow
          temperature={this.props.card.temperature}
          ph={this.props.card.ph}
          humidity={this.props.card.humidity}
          warnings={this.props.card.warnings}
        />
      </View>
    )
  }

  renderComments(comments: string): JSX.Element {
    return (
      <View>Comments </View>
    )
  }

  renderActionsTaken(actions: actions[]): JSX.Element {
    return (
      <View>Actions</View>
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        {this.renderJournal(this.props.card)}
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
