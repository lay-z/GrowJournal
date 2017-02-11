import React from 'react';
import { Text, View, Image, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux';
// Bringing in them Components
import IconWithTextRow from '../Components/IconWithTextRow';
// Styles
import styles from './Styles/DashboardStyle';
import { Images } from '../Themes/index.js';
import { plantState } from '../Types/enums';
import Moment from 'moment';
const sortOutProps = (journalEntries, journals) => {
    const cards = [];
    let entry = null;
    let tea = null;
    for (let key in journalEntries) {
        tea = Number(key);
        if (tea) {
            console.log("key", tea);
            entry = Object.assign({}, journalEntries[key]);
            console.log(entry);
            entry.name = journals[entry.journalID].name;
            entry.startDate = journals[entry.journalID].startDate;
            cards.push(entry);
        }
    }
    return cards;
};
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        let cards = sortOutProps(props.journalEntries, props.journals);
        cards = Dashboard.mapAndSortCards(cards);
        const dstore = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.day !== r2.day });
        this.state = {
            dataSource: dstore.cloneWithRows(cards)
        };
        this.renderDay = this.renderDay.bind(this);
    }
    static mapAndSortCards(cards) {
        const cardMap = Dashboard.createCardMap(cards);
        // now turn them into an Array
        const cardMapArray = Object.keys(cardMap).map((day) => {
            return {
                day: Moment(day),
                cards: cardMap[day]
            };
        });
        // Sort the cardMapArray so that the most recent day is first
        return cardMapArray.sort((day1, day2) => -day1.day.diff(day2.day, 'days'));
    }
    static createCardMap(cards) {
        return cards.reduce((previousObject, currentCard) => {
            const dateString = currentCard.timestamp.format("YYYY-MM-DD");
            if (previousObject[dateString])
                previousObject[dateString].push(currentCard);
            else
                previousObject[dateString] = [currentCard];
            return previousObject;
        }, {});
    }
    addLeadingZero(period) {
        if (period < 10) {
            period = "0" + period;
        }
        return period;
    }
    getDateString(timestamp) {
        let seperator = "-";
        let day = this.addLeadingZero(timestamp.date());
        let month = this.addLeadingZero(timestamp.month() + 1);
        let year = timestamp.year();
        return String(day) + seperator + String(month) + seperator + String(year);
    }
    getTimeString(timestamp) {
        let minutes = this.addLeadingZero(timestamp.minutes());
        let hours = this.addLeadingZero(timestamp.hours());
        return hours + ":" + minutes;
    }
    renderIconView(imageSrc, info) {
        return (React.createElement(View, { style: styles.iconView },
            React.createElement(Image, { source: imageSrc, style: styles.icon }),
            React.createElement(Text, { style: styles.iconText },
                " ",
                info,
                " ")));
    }
    renderCardHeader(name, state, startDate, timestamp) {
        const timeSinceStart = startDate.from(timestamp, true);
        const heading = name + ' - ' + timeSinceStart;
        let src;
        if (state == plantState.flowering) {
            src = Images.flowerFilled;
        }
        else {
            src = Images.leafFilled;
        }
        return (React.createElement(View, { style: styles.cardHeaderRow },
            React.createElement(Text, { style: styles.cardHeading }, heading),
            React.createElement(Image, { source: src, style: styles.cardHeadingPlantState }),
            React.createElement(Text, { style: styles.cardHeadingTime },
                " ",
                this.getTimeString(timestamp),
                " ")));
    }
    renderCard(card) {
        const details = {
            humitiy: card.humidity,
            temperature: card.temperature,
            ph: card.ph,
            warnings: card.warnings,
        };
        return (React.createElement(TouchableHighlight, { key: card.timestamp.valueOf(), style: styles.touchableCard, onPress: () => NavigationActions.journalEntry({ journalID: card.journalID, journalEntryTimeStamp: card.timestamp }) },
            React.createElement(View, { style: styles.card },
                this.renderCardHeader(card.name, card.state, card.startDate, card.timestamp),
                React.createElement(IconWithTextRow, { humidity: card.humidity, temperature: card.temperature, ph: card.ph, warnings: card.warnings }),
                React.createElement(Text, { style: styles.comments }, card.comments))));
    }
    renderDay({ day, cards }) {
        return (React.createElement(View, { style: styles.day },
            React.createElement(Text, { style: styles.dayDate }, this.getDateString(day)),
            cards.map((card) => this.renderCard(card))));
    }
    render() {
        return (React.createElement(ListView, { style: styles.container, dataSource: this.state.dataSource, renderRow: this.renderDay }));
    }
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
//# sourceMappingURL=Dashboard.js.map