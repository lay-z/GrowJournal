import Moment from 'moment';
import { Images } from '../Themes/index';
let journals = require('../Fixtures/journals.json');
let journalEntries = require('../Fixtures/journalEntries');
const journalsDict = journals.reduce((prev, cur) => {
    // Convert dates
    cur.startDate = Moment(cur.startDate);
    prev[cur.id] = cur;
    return prev;
}, {});
const journalEntriesDict = journalEntries.reduce((prev, cur) => {
    // Convert dates
    cur.timestamp = Moment(cur.timestamp);
    // Convert images :P
    cur.pictures = cur.pictures.map((p) => Images[p]);
    prev[String(cur.timestamp.valueOf())] = cur;
    return prev;
}, {});
// console.log("journalEntries", journalEntriesDict)
// console.log("journals", journalsDict)
export const state = { journals: journalsDict, journalEntries: journalEntriesDict };
// journalEntries.forEach((journal) => {
//     journal.name = journalsDict[journal.journalID].name
// }) 
//# sourceMappingURL=importFixtures.js.map