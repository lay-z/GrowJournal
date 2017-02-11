// @flow
import React from 'react';
import { ScrollView, Text, View, TextInput, Picker, Button } from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
import JournalActions from '../Redux/JournalsRedux';
// Extra dependencies
import Moment from 'moment';
// Styles
import styles, { buttonColour } from './Styles/CreateJournalScreenStyle';
import { plantState } from '../Types/enums';
class CreateJournalScreen extends React.Component {
    constructor(props) {
        super(props);
        const startDate = Moment();
        this.state = {
            id: String(startDate.valueOf()),
            name: '',
            startDate,
            plantMethod: 'seed',
            medium: 'hydroponic',
            comments: '',
            disableSubmit: true,
            plantCount: 1,
            type: this.props.batch ? "batch" : "individual",
            state: plantState.vegetative
        };
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
        const JournalMembers = ["id", "name", "startDate", "plantCount", "plantMethod", "medium", "comments", "type"];
        let journal = {};
        JournalMembers.forEach(((name) => journal[name] = this.state[name]));
        console.log(journal);
        this.props.createJournal(journal);
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
        const { name, startDate, plantMethod, medium, comments, disableSubmit, plantCount } = this.state;
        const { batch } = this.props;
        console.log("Batch", batch);
        const nameLabel = batch ? "Batch Name" : "Nick Name";
        return (React.createElement(ScrollView, { style: styles.container },
            React.createElement(View, { style: styles.form },
                React.createElement(View, { style: styles.row },
                    React.createElement(Text, { style: styles.label }, "Start Date:"),
                    React.createElement(TextInput, { ref: 'date', style: styles.textInput, value: startDate.format('DD/MM/YYYY HH:mm'), editable: false, keyboardType: 'default', returnKeyType: 'next', autoCapitalize: 'none', autoCorrect: false, 
                        // onChangeText={(text) => this.handleInput("name", text)}
                        underlineColorAndroid: 'transparent', 
                        // onSubmitEditing={() => this.refs.emailAddress.focus()}
                        placeholder: "This is todays date" })),
                React.createElement(View, { style: styles.row },
                    React.createElement(Text, { style: styles.label }, `${nameLabel}:`),
                    React.createElement(TextInput, { ref: 'name', style: styles.textInput, value: name, editable: true, keyboardType: 'default', returnKeyType: 'next', autoCapitalize: 'none', autoCorrect: false, onChangeText: (text) => this.handleInput("name", text), underlineColorAndroid: 'transparent', 
                        // onSubmitEditing={() => this.refs.emailAddress.focus()}
                        placeholder: "Type in your name here" })),
                React.createElement(View, { style: styles.row },
                    React.createElement(Text, { style: styles.label }, "Seed/Cutting:"),
                    React.createElement(Picker, { ref: 'plantMethod', style: styles.picker, selectedValue: this.state.plantMethod, onValueChange: (plantMethod) => this.handleInput("plantMethod", plantMethod), mode: "dropdown" },
                        React.createElement(Picker.Item, { label: "Seed", value: "seed" }),
                        React.createElement(Picker.Item, { label: "Cutting", value: "cutting" }))),
                React.createElement(View, { style: styles.row },
                    React.createElement(Text, { style: styles.label }, "Grow medium:"),
                    React.createElement(Picker, { ref: 'medium', style: styles.picker, selectedValue: this.state.medium, onValueChange: (medium) => this.handleInput("medium", medium), mode: "dropdown" },
                        React.createElement(Picker.Item, { label: "Hydroponic", value: "hydroponic" }),
                        React.createElement(Picker.Item, { label: "Cocoqua", value: "cocoqua" }))),
                (batch) ?
                    React.createElement(View, { style: styles.row },
                        React.createElement(Text, { style: styles.label }, `Number Of plants`),
                        React.createElement(TextInput, { ref: 'plantCount', style: styles.textInput, value: String(plantCount), editable: true, keyboardType: 'numeric', returnKeyType: 'next', autoCapitalize: 'none', autoCorrect: false, onChangeText: (text) => this.handleNumberInput("plantCount", text), underlineColorAndroid: 'transparent', 
                            // onSubmitEditing={() => this.refs.emailAddress.focus()}
                            placeholder: "Type in your name here" }))
                    : null,
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
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        createJournal: (journal) => {
            console.log("Added journal to state!");
            dispatch(JournalActions.addJournal(journal));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateJournalScreen);
//# sourceMappingURL=CreateJournalScreen.js.map