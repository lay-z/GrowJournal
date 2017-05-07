// @flow
import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes/index';
export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Metrics.navBarHeight,
        backgroundColor: Colors.background
    },
    form: {
        flex: 1,
        margin: Metrics.baseMargin
    },
    row: {
        paddingVertical: Metrics.doubleBaseMargin,
        paddingHorizontal: Metrics.doubleBaseMargin,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    commentRow: {
        paddingVertical: Metrics.doubleBaseMargin,
        paddingHorizontal: Metrics.doubleBaseMargin,
        flex: 2,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    label: {
        flex: 1,
        color: Colors.ironBlue,
        paddingBottom: Metrics.baseMargin
    },
    textInput: {
        flex: 2,
        paddingRight: 30,
        backgroundColor: Colors.snow,
        height: 40,
        color: Colors.coal
    },
    picker: {
        flex: 2,
        paddingRight: 30,
        backgroundColor: Colors.snow,
        height: 40,
        color: Colors.coal
    },
    buttonContainer: {
        flex: 1,
        paddingVertical: Metrics.doubleBaseMargin,
        paddingHorizontal: Metrics.doubleBaseMargin,
    },
    choiceList: {
        backgroundColor: Colors.snow,
        paddingRight: 10
    },
    numberInput: {
        padding: Metrics.baseMargin,
        flex: 1
    }
});
export const buttonColour = Colors.ironBlue;
//# sourceMappingURL=CreateJournalEntryScreenStyle.js.map