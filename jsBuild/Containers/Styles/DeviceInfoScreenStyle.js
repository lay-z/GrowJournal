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
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes/index.js';
export default StyleSheet.create(__assign({}, ApplicationStyles.screen, { cardTitle: {
        alignSelf: 'center',
        fontSize: Fonts.size.regular,
        fontWeight: 'bold',
        marginVertical: Metrics.baseMargin,
        color: Colors.snow
    }, cardContainer: {
        backgroundColor: Colors.ember,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 2,
        shadowColor: Colors.panther,
        shadowOffset: {
            height: 7,
            width: 7
        },
        shadowRadius: 2,
        paddingBottom: Metrics.baseMargin,
        margin: Metrics.baseMargin
    }, rowContainer: {
        flexDirection: 'row',
        borderColor: Colors.windowTint,
        borderWidth: 0.5,
        borderRadius: 2,
        marginHorizontal: Metrics.baseMargin
    }, rowLabelContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.snow
    }, rowLabel: {
        fontWeight: 'bold',
        fontSize: Fonts.size.medium,
        marginVertical: Metrics.baseMargin,
        marginLeft: Metrics.baseMargin
    }, rowInfoContainer: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: Colors.silver
    }, rowInfo: {
        fontSize: Fonts.size.regular,
        margin: Metrics.baseMargin
    } }));
//# sourceMappingURL=DeviceInfoScreenStyle.js.map