import { createReducer, createActions } from 'reduxsauce';
/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    addJournalEntry: ['journalID'],
    stopViewJournal: null
});
export const JournalEntryTypes = Types;
export default Creators;
export const INITIAL_STATE = {};
/* ------------- Reducers ------------- */
export const addJournalEntry = (state, { journalEntry }) => {
    return Object.assign({}, state, { [String(journalEntry.timestamp.valueOf())]: journalEntry });
};
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.ADD_JOURNAL_ENTRY]: addJournalEntry
});
//# sourceMappingURL=JournalEntriesRedux.js.map