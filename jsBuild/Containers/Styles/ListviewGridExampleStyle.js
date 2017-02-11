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
import { ApplicationStyles, Metrics, Colors } from '../../Themes/index.js';
export default StyleSheet.create(__assign({}, ApplicationStyles.screen, { container: {
        flex: 1,
        marginTop: Metrics.navBarHeight,
        backgroundColor: Colors.background
    }, row: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: Metrics.baseMargin,
        backgroundColor: Colors.fire,
        borderRadius: Metrics.smallMargin
    }, boldLabel: {
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Colors.snow,
        textAlign: 'center',
        marginBottom: Metrics.smallMargin
    }, label: {
        alignSelf: 'center',
        color: Colors.snow,
        textAlign: 'center'
    }, listContent: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    } }));
//# sourceMappingURL=ListviewGridExampleStyle.js.map