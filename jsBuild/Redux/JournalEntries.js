import { createReducer, createActions } from 'reduxsauce';
/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    viewJournal: ['journalID'],
    stopViewJournal: null
});
export const JournalEntryTypes = Types;
export default Creators;
export const INITIAL_STATE = {
    journalID: null,
    entries: null
};
/* ------------- Reducers ------------- */
export const viewJournal = (state, { journalID }) => {
    return state;
};
export const cancelSearch = (state) => INITIAL_STATE;
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.SEARCH]: performSearch,
    [Types.CANCEL_SEARCH]: cancelSearch
});
//# sourceMappingURL=JournalEntries.js.map