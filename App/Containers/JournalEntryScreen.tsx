// @flow
import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Components
import IconWithTextRow from '../Components/IconWithTextRow'

// Styles
import styles from './Styles/JournalEntryScreenStyle'

// Types
import { GJ } from '../Types/globals'


type JournalEntryScreenPropTypes = {
  card: GJ.card
}

class JournalEntryScreen extends React.Component<any, any> {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  renderHeader(plantName: string) {
    <Text>{plantName}</Text>
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.props.card.name}</Text>
        <Text>This works!</Text>
        <IconWithTextRow
          temperature={this.props.card.temperature}
          ph={this.props.card.ph}
          humidity={this.props.card.humidity}
          warnings={this.props.card.warnings}
        />
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
