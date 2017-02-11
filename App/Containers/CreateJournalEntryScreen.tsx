// @flow

import React from 'react'
import { ScrollView, Text, View, TextInput, Picker, Button } from 'react-native'
import MultipleChoice from 'react-native-multiple-choice'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import JournalActions from '../Redux/JournalsRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Extra dependencies
import Moment from 'moment'

// Styles
import styles, { buttonColour } from './Styles/CreateJournalEntryScreenStyle'


// Global Types
import { GJ } from '../Types/globals'
import { plantState } from '../Types/enums'

const journals: GJ.Journal[] = require('../Fixtures/journals')

interface CreateJournalEntryScreenProps {
  createJournalEntry: (journalEntry: GJ.JournalEntry) => null
  parentJournal: GJ.Journal
}

interface CreateJournalEntryScreenState extends GJ.JournalEntry {
  disableSubmit?: Boolean,
}

class CreateJournalEntryScreen extends React.Component<CreateJournalEntryScreenProps, CreateJournalEntryScreenState> {

  constructor (props) {
    super(props)
    const startDate = Moment()
    this.state = {
      timestamp: Moment(),
      ph: 0,
      humidity: 0,
      temperature: 0,
      warnings: [],
      disableSubmit: true, 
      actions: [],
      journalID: this.props.parentJournal.id,
      comments: '',
      state: this.props.parentJournal.state
    }

  }

  handleInput(fieldName: string, value: any) {
    const disableSubmit = this.anySectionEmpty()
    this.setState({[fieldName]: value, disableSubmit})
  }

  handleNumberInput(fieldName: string, value: string) {
    console.log(value)
    if (Number(value + 1)) {
      this.handleInput(fieldName, Number(value))
    } else {
      alert("You have typed in a non number in number field")
    }
  }

  handleSubmit(e: Event) {
    console.log("state in handleSubmit", this.state)
    const JournalEtnryMembers = [
      "timestamp", "ph", "humidity", "temperature", "warnings",
      "disableSubmit", "actions", "journalID", "comments", "state"
    ]

    let journalEntry: GJ.JournalEntry = {};
    JournalEtnryMembers.forEach(((name) => journalEntry[name] = this.state[name]))

    console.log(journalEntry)

    this.props.createJournalEntry(journalEntry)
  }

  anySectionEmpty() {
    return Object.getOwnPropertyNames(this.state).reduce((prev, name) => {
      // If we have found an empty section, keep passing it on
      if(prev) return prev;

      // Check that the member is a string and empty
      if (typeof this.state[name] === 'string' && name !== 'comments') {
        return this.state[name] === ''
      } else {
        return prev
      }

    }, false)
  }

  render () {

    function*generatePhValues() { 
      let cur = 0;
      while(cur < 14){ 
        cur = cur + 0.1
        cur = Number(cur.toFixed(1))
        yield cur
      }
      return
    }

    const possibleActions: GJ.actions[] = ["watered","topped","transplanted","changedReservoir","pruned"]

    let phValues = generatePhValues()
    
    
    const {
      timestamp,ph,humidity,temperature,warnings,
      disableSubmit,actions,journalID,comments,state 
    } = this.state

    return (
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <View style={styles.row}>
            <Text style={styles.label}>{"Start Date:"}</Text>
            <TextInput
              ref='date'
              style={styles.textInput}
              value={timestamp.format('DD/MM/YYYY HH:mm')}
              editable={false}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              // onChangeText={(text) => this.handleInput("name", text)}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.emailAddress.focus()}
              placeholder={"This is todays date"} />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{"Nickname"}</Text>
            <TextInput
              ref='name'
              style={styles.textInput}
              value={this.props.parentJournal.name}
              editable={false}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(text) => this.handleInput("name", text)}
              // onSubmitEditing={() => this.refs.emailAddress.focus()}
              underlineColorAndroid='transparent'/>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{"Ph:"}</Text>
            <Picker
              ref='ph'
              style={styles.picker}
              selectedValue={this.state.ph}
              onValueChange={(ph) => this.handleInput("ph", ph)}
              mode="dropdown"
            >
              {[...phValues].map(ph => (<Picker.Item label={String(ph)} value={ph} key={ph}/>))}
            </Picker>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{`Temperature`}</Text>
            <TextInput
              ref='temperature'
              style={styles.textInput}
              value={String(temperature)}
              editable={true}
              keyboardType='numeric'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(temperature) => this.handleNumberInput("temperature", temperature)}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.emailAddress.focus()}
              placeholder={"Type in your name here"} />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{`Humidity`}</Text>
            <TextInput
              ref='humidity'
              style={styles.textInput}
              value={String(humidity)}
              editable={true}
              keyboardType='numeric'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(humidity) => this.handleNumberInput("humidity", humidity)}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.emailAddress.focus()}
              placeholder={"Type in your name here"} />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{"Actions Taken:"}</Text>
            <MultipleChoice
              options={[
              'Lorem ipsum dolor sit',
              'Lorem ipsum',
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
              'Lorem ipsum dolor sit amet, consetetur',
              'Lorem ipsum dolor'
              ]}
              selectedOptions={['Lorem ipsum']}
              maxSelectedOptions={2}
              onSelection={(option)=>alert(option + ' was selected!')}
            />
          </View>
          <View style={styles.commentRow}>
            <Text style={[styles.label, {marginBottom: 10}]}>{"Additional Comments:"}</Text>
            <TextInput
              ref='comments'
              style={[styles.textInput]}
              value={comments}
              editable={true}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={true}
              multiline
              onChangeText={(text) => this.handleInput("comments", text)}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.emailAddress.focus()}
              placeholder={"Type in your comments here"} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={this.handleSubmit.bind(this)} color={buttonColour} disabled={this.anySectionEmpty()}/>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    parentJournal: journals[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createJournalEntry: (journalEntry: GJ.JournalEntry) => {
      // console.log("Added journal to state!")
      // dispatch(JournalActions.addJournalEntry(journal))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJournalEntryScreen)