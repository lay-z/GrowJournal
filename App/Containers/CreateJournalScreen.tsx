// @flow

import React from 'react'
import { ScrollView, Text, View, TextInput, Picker, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Extra dependencies
import Moment from 'moment'

// Styles
import styles, { buttonColour } from './Styles/CreateJournalScreenStyle'


// Global Types
import { GJ } from '../Types/globals'

interface CreateJournalScreenProps {
  
}

interface CreateJournalScreenState extends GJ.Journal {
  disableSubmit?: Boolean
}

class CreateJournalScreen extends React.Component<CreateJournalScreenProps, CreateJournalScreenState> {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      startDate: Moment(),
      plantMethod: '',
      medium: '',
      comments: '',
      disableSubmit: true
    }
  }

  handleInput(fieldName: string, value: any) {
    const disableSubmit = this.anySectionEmpty()
    console.log("disabledSubmit", disableSubmit)
    this.setState({[fieldName]: value, disableSubmit})
  }

  handleSubmit(e: Event) {
    alert(e.timeStamp)
  }

  anySectionEmpty() {
    return Object.getOwnPropertyNames(this.state).reduce((prev, name) => {
      // If we have found an empty section, keep passing it on
      if(prev) return prev;

      // Check that the member is a string and empty
      if (typeof this.state[name] === 'string') {
        return this.state[name] === ''
      } else {
        return prev
      }

    }, false)
  }

  render () {
    const {name, startDate, plantMethod, medium, comments, disableSubmit} = this.state
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
            <Text style={styles.label}>{"Nick Name:"}</Text>
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
            <Button title="Submit" onPress={this.handleSubmit} color={buttonColour} disabled={this.anySectionEmpty()}/>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJournalScreen)
