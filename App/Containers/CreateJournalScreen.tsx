// @flow

import React from 'react'
import { ScrollView, Text, View, TextInput, Picker, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import JournalActions from '../Redux/JournalsRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Extra dependencies
import Moment from 'moment'

// Styles
import styles, { buttonColour } from './Styles/CreateJournalScreenStyle'


// Global Types
import { GJ } from '../Types/globals'

interface CreateJournalScreenProps {
  batch?: Boolean // is this a batch or not
  createJournal: (journal: GJ.Journal) => null
}

interface CreateJournalScreenState extends GJ.Journal {
  disableSubmit?: Boolean,
}

class CreateJournalScreen extends React.Component<CreateJournalScreenProps, CreateJournalScreenState> {

  constructor (props) {
    super(props)
    const startDate = Moment()
    this.state = {
      id: String(startDate.valueOf()),
      name: '',
      startDate,
      plantMethod: 'seed',
      medium: 'hydroponic',
      comments: '',
      disableSubmit: true, 
      plantCount: 1,
      type: this.props.batch ? "batch" : "individual"
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
    const JournalMembers = ["id", "name", "startDate", "plantCount", "plantMethod", "medium", "comments", "type"]
    let journal: GJ.Journal = {};
    JournalMembers.forEach(((name) => journal[name] = this.state[name]))

    console.log(journal)

    this.props.createJournal(journal)
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
    const {name, startDate, plantMethod, medium, comments, disableSubmit, plantCount} = this.state
    const {batch} = this.props
    console.log("Batch", batch)
    const nameLabel = batch ? "Batch Name" : "Nick Name"
    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <View style={styles.row}>
            <Text style={styles.label}>{"Start Date:"}</Text>
            <TextInput
              ref='date'
              style={styles.textInput}
              value={startDate.format('DD/MM/YYYY HH:mm')}
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
            <Text style={styles.label}>{`${nameLabel}:`}</Text>
            <TextInput
              ref='name'
              style={styles.textInput}
              value={name}
              editable={true}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(text) => this.handleInput("name", text)}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.emailAddress.focus()}
              placeholder={"Type in your name here"} />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{"Seed/Cutting:"}</Text>
            <Picker
              ref='plantMethod'
              style={styles.picker}
              selectedValue={this.state.plantMethod}
              onValueChange={(plantMethod) => this.handleInput("plantMethod", plantMethod)}
              mode="dropdown"
            >
              <Picker.Item label="Seed" value="seed" />
              <Picker.Item label="Cutting" value="cutting" />
            </Picker>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>{"Grow medium:"}</Text>
            <Picker
              ref='medium'
              style={styles.picker}
              selectedValue={this.state.medium}
              onValueChange={(medium) => this.handleInput("medium", medium)}
              mode="dropdown"
            >
              <Picker.Item label="Hydroponic" value="hydroponic" />
              <Picker.Item label="Cocoqua" value="cocoqua" />
            </Picker>
          </View>
          {(batch) ?
          <View style={styles.row}>
            <Text style={styles.label}>{`Number Of plants`}</Text>
            <TextInput
              ref='plantCount'
              style={styles.textInput}
              value={String(plantCount)}
              editable={true}
              keyboardType='numeric'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(text) => this.handleNumberInput("plantCount", text)}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.emailAddress.focus()}
              placeholder={"Type in your name here"} />
          </View>
            : null}
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createJournal: (journal: GJ.Journal) => {
      console.log("Added journal to state!")
      dispatch(JournalActions.addJournal(journal))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJournalScreen)
