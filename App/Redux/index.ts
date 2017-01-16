// @flow

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

import {reducer as journalEntryReducer} from './JournalEntriesRedux'
import {reducer as journalReducer} from './JournalsRedux'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    journalEntries: journalEntryReducer,
    journals: journalReducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
