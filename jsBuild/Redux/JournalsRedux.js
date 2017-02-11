import { createReducer, createActions } from 'reduxsauce';
/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    addJournal: ['journal'],
    journalSaved: [null]
});
export const JournalTypes = Types;
export default Creators;
export const INITIAL_STATE = {};
/* ------------- Reducers ------------- */
export const addJournal = (state, { journal }) => {
    return Object.assign({}, state, { [journal.id]: journal });
};
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.ADD_JOURNAL]: addJournal
});
//# sourceMappingURL=JournalsRedux.js.map