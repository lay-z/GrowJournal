import { GJ } from "../Types/globals"
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createJournalEntry: ['journalId'],
})

export const CreateJournalEntryTypes = Types
export default Creators

/* ------------- Initial State ------------- */

type journalState = GJ.JournalEntry 

export const INITIAL_STATE: journalState = { }

/* ------------- Reducers ------------- */

export const addJournal = (state: journalState, { journalId }: { journalId: GJ.JournalID }) => {
  return Object.assign({}, state, {id: journalId})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_JOURNAL]: addJournal
})