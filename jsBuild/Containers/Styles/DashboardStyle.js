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
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/index.js';
export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Metrics.navBarHeight,
        backgroundColor: Colors.background
    },
    card: Object.assign({}, ApplicationStyles.card, {
        justifyContent: "space-between",
        marginRight: 0,
        marginLeft: 0,
        elevation: 10
    }),
    touchableCard: {
        margin: Metrics.baseMargin,
        marginRight: Metrics.doubleBaseMargin,
        marginLeft: Metrics.doubleBaseMargin
    },
    cardHeading: __assign({ fontWeight: 'bold' }, Fonts.style.h5, { flex: 4, 
        // textAlign: 'center',
        textAlignVertical: 'center' }),
    cardHeadingTime: {
        textAlignVertical: 'center'
    },
    cardHeadingPlantState: {
        height: Metrics.icons.small,
        width: Metrics.icons.small,
        alignSelf: 'center'
    },
    cardHeaderRow: {
        height: 200 / 3,
        margin: Metrics.baseMargin,
        // flex:1, 
        flexDirection: 'row',
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    icon: {
        width: Metrics.icons.medium,
        height: Metrics.icons.medium
    },
    iconText: {
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    comments: __assign({ margin: Metrics.baseMargin }, Fonts.style.normal),
    day: {
        marginTop: Metrics.baseMargin
    },
    dayDate: __assign({ marginLeft: Metrics.doubleBaseMargin, color: Colors.snow }, Fonts.style.normal)
});
//# sourceMappingURL=DashboardStyle.js.map