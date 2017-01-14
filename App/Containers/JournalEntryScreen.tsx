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



const mockData: JournalEntryScreenPropTypes = {
  journalEntries: [
      {
          actions: ["watered"],
          name: "Og Kush",
          comments: "Looks like growth is going well. Inshalah we shall be flowering soon :D here is exta long comment",
          timestamp: Moment("2016-12-07 09:30"),
          state: plantState.flowering,
          temperature: 25,
          humidity: 90,
          warnings: [],
          ph: 5.6,
          pictures: [Images.weed1, Images.weed2],
          journalID: "123456789"
      },{
          actions: ["watered"],
          name: "Og Kush",
          comments: "Looks like it might be about to flower",
          timestamp: Moment("2016-11-28 16:30"),
          state: plantState.vegetative,
          temperature: 30,
          humidity: 60,
          warnings: [],
          ph: 5.6,
          pictures: [Images.weed6],
          journalID: "123456789"
      }
  ],
  journal: null
}

type JournalEntryDic = {[id: string]: GJ.JournalEntry}

interface JournalEntryScreenPropTypes {
  journalEntryTimeStamp: string
  allJournalEntries: JournalEntryDic
  journalEntries: GJ.JournalEntry[] | null
  journal: GJ.Journal | null
}

interface JournalEntryScreenState {
  dataSource: React.ListViewDataSource
}

// Filters JournalEntries by relation to a Journal
// Returns a sorted array of JournalEntries
const filterJournalEntries = (journal: GJ.Journal, journalEntries: JournalEntryDic) => {

  let filteredJournals = []
  let journalEntry: GJ.JournalEntry;
  // let startDateString = String(journal.startDate.valueOf())
  for (let key in journalEntries) {
    journalEntry = journalEntries[key]
    if (journalEntry.journalID === journal.id) {
      filteredJournals.push(journalEntries[key])
    }
  }

  // And now sort them by timestamp
  return filteredJournals.sort(({timestamp1}, {timestamp2}) => -timestamp1.day.diff(timestamp2.day, 'days'))
}

class JournalEntryScreen extends React.Component<JournalEntryScreenPropTypes, JournalEntryScreenState> {

  public static defaultProps: JournalEntryScreenPropTypes = mockData

  constructor (props) {
    super(props)


    const filteredJournalEntries = filterJournalEntries(props.journal, props.allJournalEntries)
    

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.timestamp !== r2.timestamp})
    this.state = {
      dataSource: dataSource.cloneWithRows(filteredJournalEntries)
    }

    // Javascript bindings to this yo
    this.renderJournal = this.renderJournal.bind(this);

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
        {this.renderImageRow(JournalEntry.pictures)}
      </View>
    )
  }

  render () {
    return (
      <ListView 
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderJournal}
      />
    )
  }
}

// JournalEntryScreen.defaultProps = mockData

const mapStateToProps = (state: GJ.GLOBAL_STATE, {journalID}) => {
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
