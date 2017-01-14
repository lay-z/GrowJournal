import React from 'react'
import { ScrollView, Text , View, Image, ListView, TouchableHighlight} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Bringing in them Components
import IconWithTextRow from '../Components/IconWithTextRow'

// Styles
import styles from './Styles/DashboardStyle'
import { Images } from '../Themes/index.js'

import { GJ } from '../Types/globals'

import Moment from 'moment';

interface card extends GJ.JournalEntry{
  key: number,
  startDate: Moment.Moment
}


enum plantState {
    flowering,
    vegetative,
}

type actions = 
    | "watered"
    | "topped" 
    | "transplanted" 
    | "changedReservoir"
    | "pruned"

type cards = Array<card>

const Cards: cards = [
      {
        key: 1,
        actions: ["watered"],
        name: "Og Kush",
        comments: "Looks like growth is going well. Inshalah we shall be flowering soon :D here is exta long comment",
        timestamp: Moment("2016-12-07 09:30"),
        state: GJ.plantState.flowering,
        temperature: 25,
        humidity: 90,
        warnings: [],
        ph: 5.6,
        startDate: Moment("2016-10-08 08:00"),
        pictures: [Images.weed1, Images.weed2]
      },{
        key: 2,
        actions: ["pruned"],
        name: "Purple Haze",
        comments: "Needs to be careful with temperatures",
        timestamp: Moment("2016-12-08 10:10"),
        state: GJ.plantState.vegetative,
        temperature: 56,
        humidity: 50,
        warnings: ["Super hot!"],
        ph: 6.7,
        startDate: Moment("2016-11-13 08:00"),
        pictures: [Images.weed3]
      },
      {
        key: 3,
        actions: ["watered"],
        name: "Purple Haze",
        comments: "Might need more sunlight",
        timestamp: Moment("2016-12-08 11:10"),
        state: GJ.plantState.vegetative,
        temperature: 56,
        humidity: 45,
        warnings: [],
        ph: 4.5,
        startDate: Moment("2016-11-13 08:00"),
        pictures: [Images.weed4, Images.weed5]
      },{
        key: 4,
        actions: ["watered"],
        name: "Og Kush",
        comments: "Looks like it might be about to flower",
        timestamp: Moment("2016-11-28 16:30"),
        state: GJ.plantState.vegetative,
        temperature: 30,
        humidity: 60,
        warnings: [],
        ph: 5.6,
        startDate: Moment("2016-10-08 08:00"),
        pictures: [Images.weed6]
      }
    ]

class Dashboard extends React.Component<any,any> {

  constructor (props) {
    super(props)

    const cards = Dashboard.mapAndSortCards(Cards);

    const dstore = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.day !== r2.day})
    this.state = {
      dataSource: dstore.cloneWithRows(cards)
    }

    this.renderDay = this.renderDay.bind(this);

  }

  static mapAndSortCards(cards: card[]) {
    const cardMap = Dashboard.createCardMap(cards);
    
    // now turn them into an Array
    const cardMapArray = Object.keys(cardMap).map((day) => {
      return {
        day: Moment(day),
        cards: cardMap[day]
      }
    })

    // Sort the cardMapArray so that the most recent day is first
    return cardMapArray.sort((day1, day2) => -day1.day.diff(day2.day, 'days'))
  }

  static createCardMap(cards: card[]) {
    return cards.reduce((previousObject, currentCard) => {
      const dateString = currentCard.timestamp.format("YYYY-MM-DD")
      if(previousObject[dateString]) previousObject[dateString].push(currentCard)
      else previousObject[dateString] = [currentCard]
      return previousObject
    }, {})
  }

  addLeadingZero(period: any) {
    if (period < 10) {
      period = "0" + period
    }
    return period
  }

  getDateString(timestamp: Moment.Moment) {
    let seperator = "-"
    let day = this.addLeadingZero(timestamp.date())
    let month = this.addLeadingZero(timestamp.month() + 1)
    let year = timestamp.year()
  
    return String(day) + seperator + String(month) + seperator + String(year)
  }

  getTimeString(timestamp: Moment.Moment) {
    let minutes = this.addLeadingZero(timestamp.minutes())
    let hours = this.addLeadingZero(timestamp.hours())

    return hours + ":" + minutes
  }

  renderIconView(imageSrc: string, info: string) {
    return (
      <View style={styles.iconView}>
        <Image source={imageSrc} style={styles.icon}/>
        <Text style={styles.iconText}> {info} </Text>
      </View>
    )
  }

  renderCardHeader(heading: String, timestamp: Moment.Moment) {
    return (
      <View style={styles.cardHeaderRow}>
        <Text style={styles.cardHeading}> {heading} </Text>
        <Text style={styles.cardHeadingTime}> {this.getTimeString(timestamp)} </Text>
      </View>
    )

  }

  renderCard(card: card) {
    const timeSinceStart = card.startDate.fromNow(true);
    const heading: string = card.name +  ' - ' + timeSinceStart + ' ' + card.state

    const details = {
      humitiy: card.humidity,
      temperature: card.temperature,
      ph: card.ph,
      warnings: card.warnings,
    }

    return (
        <TouchableHighlight key={card.key} style={styles.touchableCard} onPress={() => NavigationActions.journalEntry({card})}>
          <View style={styles.card}>
            {this.renderCardHeader(heading, card.timestamp)}
            <IconWithTextRow humidity={card.humidity} temperature={card.temperature} ph={card.ph} warnings={card.warnings} />
            <Text style={styles.comments}>
              {card.comments}
            </Text>
          </View>
          </TouchableHighlight>
      )
    }


    renderDay({day, cards}: {day: Moment.Moment, cards: card[]}) {
      return (
        <View style={styles.day}>
          <Text style={styles.dayDate}>{this.getDateString(day)}</Text>
          {cards.map((card) => this.renderCard(card))}
        </View>
    )
  }

  render () {
    return (
      <ListView 
        style={styles.container}
        dataSource={this.state.dataSource} 
        renderRow={this.renderDay}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export { card, actions, plantState }
