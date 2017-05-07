import { GJ } from "../Types/globals"
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addJournalEntry: ['journalEntry'],
  stopViewJournal: null
})

export const JournalEntryTypes = Types
export default Creators

/* ------------- Initial State ------------- */

type journalEntryState = {[id: string]: GJ.JournalEntry}

export const INITIAL_STATE: journalEntryState = {}

/* ------------- Reducers ------------- */

export const addJournalEntry = (state: journalEntryState, { journalEntry }: { journalEntry: GJ.JournalEntry } ) => {
  console.log('lakdjfakldjf;aksdjf;aksdjf', journalEntry.journalID)
  return Object.assign({}, state, {[String(journalEntry.timestamp.valueOf())]: journalEntry})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_JOURNAL_ENTRY]: addJournalEntry
})