// @flow
import React from 'react'
import { ScrollView, Text, View, ListView, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Moment from 'moment'

// Components
import IconWithTextRow from '../Components/IconWithTextRow'
import IconWithText, {IconWithTextProps} from '../Components/IconWithText'

// Styles
import styles from './Styles/JournalEntryScreenStyle'
import {Images} from '../Themes/index'

// Types
import { GJ } from '../Types/globals'
import { plantState } from '../Types/enums'




type JournalEntryDic = {[id: string]: GJ.JournalEntry}

interface JournalEntryScreenPropTypes {
  journalEntryTimeStamp: Moment.Moment
  allJournalEntries: JournalEntryDic
  journalEntries: GJ.JournalEntry[] | null
  journal: GJ.Journal | null
}

interface JournalEntryScreenState {
  dataSource: React.ListViewDataSource
  filteredEntries: GJ.JournalEntry[]
}

// Filters JournalEntries by relation to a Journal
// Returns a sorted array of JournalEntries
const filterJournalEntries = (journal: GJ.Journal, journalEntries: JournalEntryDic) => {

  let filteredJournals = []
  let journalEntry: GJ.JournalEntry;
  let date: number;
  // let startDateString = String(journal.startDate.valueOf())
  for (let key in journalEntries) {
    date = Number(key)
    if (date) {
      journalEntry = journalEntries[key]
      if (journalEntry.journalID === journal.id) {
        journalEntry = Object.assign({}, journalEntry, {name: journal.name})
        filteredJournals.push(journalEntry)
      }
    }
  }

  // And now sort them by timestamp
  return filteredJournals.sort((journalEntry1, journalEntry2) => {
    return -journalEntry1.timestamp.diff(journalEntry2.timestamp, 'days')
  })
}




class JournalEntryScreen extends React.Component<JournalEntryScreenPropTypes, JournalEntryScreenState> {

  // public static defaultProps: JournalEntryScreenPropTypes

  constructor (props) {
    super(props)

    const filteredEntries = filterJournalEntries(props.journal, props.allJournalEntries)
    
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.timestamp !== r2.timestamp})
    this.state = {
      filteredEntries,
      dataSource: dataSource.cloneWithRows(filteredEntries)
    }

    // Javascript bindings to this yo
    this.renderJournal = this.renderJournal.bind(this);

  }

  scollLocation = (width, height) => {
    // Get index where the Currently Located Journal Exists
    const fe = this.state.filteredEntries
    console.log(this.refs.ListView.scrollProperties)
    const ListViewLenght = this.refs.ListView.scrollProperties.contentLength
    // Get an average of the rows. Probably not the best but we can work on this later
    const averageRowLength = ListViewLenght/fe.length

    let index = 0;
    for (var i = 0; i < fe.length; i++) {
      var journalEntry = fe[i];
      if(journalEntry.timestamp == this.props.journalEntryTimeStamp) {
        index = i
        break;
      }
    }

    console.log(index, averageRowLength)

    // Scroll to the relevant row
    setTimeout(() => this.refs.ListView.scrollTo({y:(index*averageRowLength)}), 500)
    
  }

  renderHeader(plantName: string, timestamp: Moment.Moment) {
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
        { JournalEntry.pictures ? this.renderImageRow(JournalEntry.pictures) : null}
      </View>
    )
  }

  render () {
    return (
      <ListView
        ref='ListView'
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderJournal}
        onContentSizeChange={this.scollLocation}
      />
    )
  }
}

// JournalEntryScreen.defaultProps = mockData

const mapStateToProps = (state: GJ.GLOBAL_STATE, {journalID}) => {
  console.log("JournalEntry JournalID", journalID)
  return {
    allJournalEntries: state.journalEntries,
    journal: state.journals[journalID]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalEntryScreen)
