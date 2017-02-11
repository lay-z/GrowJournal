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
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/index';
export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Metrics.navBarHeight,
        backgroundColor: Colors.background,
        justifyContent: 'space-around'
    },
    card: Object.assign({}, ApplicationStyles.card, {
        // flex: 2
        flex: 0,
        height: 200,
        justifyContent: 'space-around',
        marginTop: 0,
        marginBottom: 0,
        marginRight: 0,
        marginLeft: 0
    }),
    touchableCard: {
        marginRight: Metrics.baseMargin * 3,
        marginLeft: Metrics.baseMargin * 3
    },
    plantTypeIcon: {
        height: Metrics.icons.large,
        alignSelf: "center"
    },
    description: __assign({}, Fonts.style.h3, { textAlign: "center", textAlignVertical: "center" })
});
//# sourceMappingURL=NewPlantScreenStyle.js.map