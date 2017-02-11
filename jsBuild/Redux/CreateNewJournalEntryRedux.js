import { createReducer, createActions } from 'reduxsauce';
/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    createJournalEntry: ['journalId'],
});
export const CreateJournalEntryTypes = Types;
export default Creators;
export const INITIAL_STATE = {};
/* ------------- Reducers ------------- */
export const addJournal = (state, { journalId }) => {
    return Object.assign({}, state, { id: journalId });
};
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.ADD_JOURNAL]: addJournal
});
//# sourceMappingURL=CreateNewJournalEntryRedux.js.map