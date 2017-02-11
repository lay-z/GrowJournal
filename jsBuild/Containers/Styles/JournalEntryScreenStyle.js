// @flow
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes/index.js';
const journalHeight = (Metrics.screenHeight - Metrics.navBarHeight) - (Metrics.quadBaseMargin * 2 + Metrics.baseMargin);
export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Metrics.navBarHeight,
        backgroundColor: Colors.background
    },
    journal: {
        // height: journalHeight,
        flex: 1,
        marginTop: Metrics.baseMargin,
        marginRight: Metrics.doubleBaseMargin,
        marginLeft: Metrics.doubleBaseMargin,
        backgroundColor: Colors.snow,
        elevation: 10,
        padding: Metrics.doubleBaseMargin,
        paddingBottom: 0
    },
    // Header
    header: {
        // margin: Metrics.doubleBaseMargin,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1
    },
    headerText: __assign({ fontWeight: "bold" }, Fonts.style.h5, { flex: 1 }),
    time: {
        flex: 1
    },
    // Icon Row
    iconRow: {
        marginTop: Metrics.baseMargin,
        flex: 1,
        margin: 0
    },
    // Actions and Comments sections
    section: {
        marginTop: Metrics.baseMargin,
        flex: 2
    },
    sectionHeader: __assign({ fontWeight: "bold" }, Fonts.style.h6),
    actions: __assign({ paddingRight: Metrics.doubleBaseMargin }, Fonts.style.normal),
    // Plan Rows
    plantPics: {
        flex: 1,
        // width: 100,
        height: 150
    },
    plantRow: {
        // height: 150,
        paddingTop: Metrics.baseMargin,
        paddingBottom: Metrics.baseMargin,
        flexBasis: 2,
        flex: 2,
        padding: 0,
        marginLeft: -40,
        marginRight: -40
    }
});
//# sourceMappingURL=JournalEntryScreenStyle.js.map