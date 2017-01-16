import Moment from 'moment'

import {GJ} from '../Types/globals'
import {plantState} from '../Types/enums'

import { Images } from '../Themes/index'

let journals: GJ.Journal[] = require('../Fixtures/journals.json')
let journalEntries: GJ.JournalEntry[] = require('../Fixtures/journalEntries')

const journalsDict = journals.reduce((prev, cur) => {
    // Convert dates
    cur.startDate = Moment(cur.startDate)
    prev[cur.id] = cur
    return prev
}, {})

const journalEntriesDict = journalEntries.reduce((prev, cur) => {
    // Convert dates
    cur.timestamp = Moment(cur.timestamp)
    // Convert images :P
    cur.pictures = cur.pictures.map((p) => Images[p])
    
    prev[String(cur.timestamp.valueOf())] = cur
    return prev
}, {})

console.log("journalEntries", journalEntriesDict)
console.log("journals", journalsDict)

export const state = {journals: journalsDict, journalEntries: journalEntriesDict}

// journalEntries.forEach((journal) => {
//     journal.name = journalsDict[journal.journalID].name
// })