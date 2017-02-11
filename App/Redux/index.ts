// @flow

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/index'

import {reducer as journalEntryReducer} from './JournalEntriesRedux'
import {reducer as journalReducer} from './JournalsRedux'
import {reducer as createNewJournalEntryRedux} from './CreateNewJournalEntryRedux'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    journalEntries: journalEntryReducer,
    journals: journalReducer,
    viewingJournal: createNewJournalEntryRedux,
    temperature: require('./TemperatureRedux').reducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
