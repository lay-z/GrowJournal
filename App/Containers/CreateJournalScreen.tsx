// @flow

import React from 'react'
import { ScrollView, Text, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/CreateJournalScreenStyle'

class CreateJournalScreen extends React.Component<any, any> {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <View style={styles.row}>
            <Text style={styles.label}> </Text>
            <TextInput
              ref='name'
              style={styles.textInput}
              value={name}
              editable={true}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              // onChangeText={this.handleChangeName}
              underlineColorAndroid='transparent'
              // onSubmitEditing={() => this.refs.emailAddress.focus()}
              placeholder={"Type in your name here"} />
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
