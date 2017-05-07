// @flow
import React from 'react';
import { ScrollView, Text, View, ListView, Image } from 'react-native';
import { connect } from 'react-redux';
// Components
import IconWithTextRow from '../Components/IconWithTextRow';
import IconWithText from '../Components/IconWithText';
// Styles
import styles from './Styles/JournalEntryScreenStyle';
import { Images } from '../Themes/index';
// Filters JournalEntries by relation to a Journal
// Returns a sorted array of JournalEntries
const filterJournalEntries = (journal, journalEntries) => {
    let filteredJournals = [];
    let journalEntry;
    let date;
    // let startDateString = String(journal.startDate.valueOf())
    for (let key in journalEntries) {
        date = Number(key);
        if (date) {
            journalEntry = journalEntries[key];
            if (journalEntry.journalID === journal.id) {
                journalEntry = Object.assign({}, journalEntry, { name: journal.name });
                filteredJournals.push(journalEntry);
            }
        }
    }
    // And now sort them by timestamp
    return filteredJournals.sort((journalEntry1, journalEntry2) => {
        return -journalEntry1.timestamp.diff(journalEntry2.timestamp, 'days');
    });
};
class JournalEntryScreen extends React.Component {
    // public static defaultProps: JournalEntryScreenPropTypes
    constructor(props) {
        super(props);
        this.scollLocation = (width, height) => {
            // Get index where the Currently Located Journal Exists
            const fe = this.state.filteredEntries;
            console.log(this.refs.ListView.scrollProperties);
            const ListViewLenght = this.refs.ListView.scrollProperties.contentLength;
            // Get an average of the rows. Probably not the best but we can work on this later
            const averageRowLength = ListViewLenght / fe.length;
            let index = 0;
            for (var i = 0; i < fe.length; i++) {
                var journalEntry = fe[i];
                if (journalEntry.timestamp == this.props.journalEntryTimeStamp) {
                    index = i;
                    break;
                }
            }
            console.log(index, averageRowLength);
            // Scroll to the relevant row
            setTimeout(() => this.refs.ListView.scrollTo({ y: (index * averageRowLength) }), 500);
        };
        const filteredEntries = filterJournalEntries(props.journal, props.allJournalEntries);
        const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.timestamp !== r2.timestamp });
        this.state = {
            filteredEntries,
            dataSource: dataSource.cloneWithRows(filteredEntries)
        };
        // Javascript bindings to this yo
        this.renderJournal = this.renderJournal.bind(this);
    }
    renderHeader(plantName, timestamp) {
        return (React.createElement(View, { style: styles.header },
            React.createElement(Text, { style: styles.headerText }, plantName),
            React.createElement(IconWithText, { style: styles.time, imageSrc: Images.clock, info: timestamp.fromNow() })));
    }
    renderComments(comments) {
        return (React.createElement(View, { style: styles.section },
            React.createElement(Text, { style: styles.sectionHeader }, "Comments:"),
            React.createElement(Text, { style: styles.actions }, comments)));
    }
    renderActionsTaken(actions) {
        return (React.createElement(View, { style: styles.section },
            React.createElement(Text, { style: styles.sectionHeader }, "Actions taken:"),
            actions.map((action, index) => React.createElement(Text, { style: styles.actions, key: index }, action))));
    }
    renderImageRow(images) {
        return (React.createElement(ScrollView, { horizontal: true, style: styles.plantRow }, images.map((image, index) => {
            return (React.createElement(Image, { source: image, style: styles.plantPics, key: index, resizeMode: Image.resizeMode["contain"] }));
        })));
    }
    renderJournal(JournalEntry) {
        return (React.createElement(View, { style: styles.journal },
            this.renderHeader(JournalEntry.name, JournalEntry.timestamp),
            React.createElement(IconWithTextRow, { temperature: JournalEntry.temperature, ph: JournalEntry.ph, humidity: JournalEntry.humidity, warnings: JournalEntry.warnings, style: styles.iconRow }),
            this.renderActionsTaken(JournalEntry.actions),
            this.renderComments(JournalEntry.comments),
            JournalEntry.pictures ? this.renderImageRow(JournalEntry.pictures) : null));
    }
    render() {
        return (React.createElement(ListView, { ref: 'ListView', style: styles.container, dataSource: this.state.dataSource, renderRow: this.renderJournal, onContentSizeChange: this.scollLocation }));
    }
}
// JournalEntryScreen.defaultProps = mockData
const mapStateToProps = (state, { journalID }) => {
    console.log("JournalEntry JournalID", journalID);
    return {
        allJournalEntries: state.journalEntries,
        journal: state.journals[journalID]
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(JournalEntryScreen);
//# sourceMappingURL=JournalEntryScreen.js.map