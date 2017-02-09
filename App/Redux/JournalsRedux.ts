import { GJ } from "../Types/globals"
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addJournal: ['journal'],
  journalSaved: [null]
})

export const JournalTypes = Types
export default Creators

/* ------------- Initial State ------------- */

type journalState = {[id: string]: GJ.Journal}

export const INITIAL_STATE: journalState = {}

/* ------------- Reducers ------------- */

export const addJournal = (state: journalState, { journal }: { journal: GJ.Journal }) => {
  return Object.assign({}, state, {[journal.id]: journal})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_JOURNAL]: addJournal
})