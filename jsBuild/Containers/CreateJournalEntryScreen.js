// @flow
import React from 'react';
import { ScrollView, Text, View, TextInput, Picker, Button } from 'react-native';
import MultipleChoice from 'react-native-multiple-choice';
import { connect } from 'react-redux';
// Extra dependencies
import Moment from 'moment';
// Styles
import styles, { buttonColour } from './Styles/CreateJournalEntryScreenStyle';
const journals = require('../Fixtures/journals');
class CreateJournalEntryScreen extends React.Component {
    constructor(props) {
        super(props);
        const startDate = Moment();
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
        };
        this.actions = ["watered", "topped", "transplanted", "changedReservoir", "pruned"];
    }
    handleInput(fieldName, value) {
        const disableSubmit = this.anySectionEmpty();
        this.setState({ [fieldName]: value, disableSubmit });
    }
    handleNumberInput(fieldName, value) {
        console.log(value);
        if (Number(value + 1)) {
            this.handleInput(fieldName, Number(value));
        }
        else {
            alert("You have typed in a non number in number field");
        }
    }
    handleSubmit(e) {
        console.log("state in handleSubmit", this.state);
        const JournalEtnryMembers = [
            "timestamp", "ph", "humidity", "temperature", "warnings",
            "disableSubmit", "actions", "journalID", "comments", "state"
        ];
        let journalEntry = {};
        JournalEtnryMembers.forEach(((name) => journalEntry[name] = this.state[name]));
        console.log(journalEntry);
        this.props.createJournalEntry(journalEntry);
    }
    anySectionEmpty() {
        return Object.getOwnPropertyNames(this.state).reduce((prev, name) => {
            // If we have found an empty section, keep passing it on
            if (prev)
                return prev;
            // Check that the member is a string and empty
            if (typeof this.state[name] === 'string' && name !== 'comments') {
                return this.state[name] === '';
            }
            else {
                return prev;
            }
        }, false);
    }
    render() {
        function* generatePhValues() {
            let cur = 0;
            while (cur < 14) {
                cur = cur + 0.1;
                cur = Number(cur.toFixed(1));
                yield cur;
            }
            return;
        }
        const possibleActions = ["watered", "topped", "transplanted", "changedReservoir", "pruned"];
        let phValues = generatePhValues();
        const { timestamp, ph, humidity, temperature, warnings, disableSubmit, actions, journalID, comments, state } = this.state;
        return (React.createElement(ScrollView, { style: styles.container },
            React.createElement(View, { style: styles.form },
                React.createElement(View, { style: styles.row },
                    React.createElement(Text, { style: styles.label }, "Start Date:"),
                    React.createElement(TextInput, { ref: 'date', style: styles.textInput, value: timestamp.format('DD/MM/YYYY HH:mm'), editable: false, keyboardType: 'default', returnKeyType: 'next', autoCapitalize: 'none', autoCorrect: false, 
                        // onChangeText={(text) => this.handleInput("name", text)}
                        underlineColorAndroid: 'transparent', 
                        // onSubmitEditing={() => this.refs.emailAddress.focus()}
                        placeholder: "This is todays date" })),
                React.createElement(View, { style: styles.row },
                    React.createElement(Text, { style: styles.label }, "Nickname"),
                    React.createElement(TextInput, { ref: 'name', style: styles.textInput, value: this.props.parentJournal.name, editable: false, keyboardType: 'default', returnKeyType: 'next', autoCapitalize: 'none', autoCorrect: false, onChangeText: (text) => this.handleInput("name", text), 
                        // onSubmitEditing={() => this.refs.emailAddress.focus()}
                        underlineColorAndroid: 'transparent' })),
                React.createElement(View, { style: styles.row },
                    React.createElement(Text, { style: styles.label }, "Ph:"),
                    React.createElement(Picker, { ref: 'ph', style: styles.picker, selectedValue: this.state.ph, onValueChange: (ph) => this.handleInput("ph", ph), mode: "dropdown" }, [...phValues].map(ph => (React.createElement(Picker.Item, { label: String(ph), value: ph, key: ph }))))),
                React.createElement(View, { style: styles.row },
                    React.createElement(Text, { style: styles.label }, `Temperature`),
                    React.createElement(TextInput, { ref: 'temperature', style: styles.textInput, value: String(temperature), editable: true, keyboardType: 'numeric', returnKeyType: 'next', autoCapitalize: 'none', autoCorrect: false, onChangeText: (temperature) => this.handleNumberInput("temperature", temperature), underlineColorAndroid: 'transparent', 
                        // onSubmitEditing={() => this.refs.emailAddress.focus()}
                        placeholder: "Type in your name here" })),
                React.createElement(View, { style: styles.row },
                    React.createElement(Text, { style: styles.label }, `Humidity`),
                    React.createElement(TextInput, { ref: 'humidity', style: styles.textInput, value: String(humidity), editable: true, keyboardType: 'numeric', returnKeyType: 'next', autoCapitalize: 'none', autoCorrect: false, onChangeText: (humidity) => this.handleNumberInput("humidity", humidity), underlineColorAndroid: 'transparent', 
                        // onSubmitEditing={() => this.refs.emailAddress.focus()}
                        placeholder: "Type in your name here" })),
                React.createElement(View, { style: styles.row },
                    React.createElement(Text, { style: styles.label }, "Actions Taken:"),
                    React.createElement(MultipleChoice, { options: this.actions, selectedOptions: ['Lorem ipsum'], maxSelectedOptions: 2, onSelection: (option) => alert(option + ' was selected!') })),
                React.createElement(View, { style: styles.commentRow },
                    React.createElement(Text, { style: [styles.label, { marginBottom: 10 }] }, "Additional Comments:"),
                    React.createElement(TextInput, { ref: 'comments', style: [styles.textInput], value: comments, editable: true, keyboardType: 'default', returnKeyType: 'next', autoCapitalize: 'none', autoCorrect: true, multiline: true, onChangeText: (text) => this.handleInput("comments", text), underlineColorAndroid: 'transparent', 
                        // onSubmitEditing={() => this.refs.emailAddress.focus()}
                        placeholder: "Type in your comments here" })),
                React.createElement(View, { style: styles.buttonContainer },
                    React.createElement(Button, { title: "Submit", onPress: this.handleSubmit.bind(this), color: buttonColour, disabled: this.anySectionEmpty() })))));
    }
}
const mapStateToProps = (state) => {
    return {
        parentJournal: journals[0]
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        createJournalEntry: (journalEntry) => {
            // console.log("Added journal to state!")
            // dispatch(JournalActions.addJournalEntry(journal))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateJournalEntryScreen);
//# sourceMappingURL=CreateJournalEntryScreen.js.map