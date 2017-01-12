// @flow
import React from 'react'
import { ScrollView, Text, View, ListView, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import * as moment from 'moment'

// Components
import IconWithTextRow from '../Components/IconWithTextRow'
import IconWithText, {IconWithTextProps} from '../Components/IconWithText'

// Styles
import styles from './Styles/JournalEntryScreenStyle'
import {Images} from '../Themes/index'

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

  renderHeader(plantName: string, timestamp: moment.Moment) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{plantName}</Text>
        <IconWithText style={styles.time} imageSrc={Images.clock} info={timestamp.fromNow()} />
      </View>
    )
  }

  renderComments(comments: string): JSX.Element {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Comments:</Text>
        <Text style={styles.actions}>{comments}</Text>
      </View>
    )
  }

  renderActionsTaken(actions: actions[]): JSX.Element {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Actions taken:</Text>
        {actions.map((action, index) => <Text style={styles.actions} key={index}>{action}</Text> ) }
      </View>
    )
  }

  renderImageRow(images: React.Image[]) {
    return(
      <ScrollView horizontal style={styles.plantRow}>
        {images.map((image, index) => {
          return (
            <Image
              source={image}
              style={styles.plantPics}
              key={index}
              resizeMode="contain"
            />
          )
        })}
      </ScrollView>
    )
  }

  renderJournal(card: card): JSX.Element {
    return (
      <View style={styles.journal}>
        {this.renderHeader(card.name, card.timestamp)}
        <IconWithTextRow
          temperature={this.props.card.temperature}
          ph={this.props.card.ph}
          humidity={this.props.card.humidity}
          warnings={this.props.card.warnings}
          style={{flex:1, margin: 0}}
        />
        {this.renderActionsTaken(card.actions)}
        {this.renderComments(card.comments)}
        {this.renderImageRow(card.pictures)}
      </View>
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
