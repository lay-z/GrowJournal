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
import { GJ } from '../Types/globals'


type JournalEntryScreenPropTypes = {
  card: GJ.JournalEntry
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

  renderActionsTaken(actions: GJ.actions[]): JSX.Element {
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
              resizeMode={Image.resizeMode["contain"]}
            />
          )
        })}
      </ScrollView>
    )
  }

  renderJournal(JournalEntry: GJ.JournalEntry): JSX.Element {
    return (
      <View style={styles.journal}>
        {this.renderHeader(JournalEntry.name, JournalEntry.timestamp)}
        <IconWithTextRow
          temperature={JournalEntry.temperature}
          ph={JournalEntry.ph}
          humidity={JournalEntry.humidity}
          warnings={JournalEntry.warnings}
          style={styles.iconRow}
        />
        {this.renderActionsTaken(JournalEntry.actions)}
        {this.renderComments(JournalEntry.comments)}
        {this.renderImageRow(JournalEntry.pictures)}
      </View>
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        {console.log(this.props.card)}
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
