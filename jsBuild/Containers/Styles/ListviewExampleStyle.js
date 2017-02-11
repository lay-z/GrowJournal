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
        flex: 1,
        backgroundColor: Colors.fire,
        marginVertical: Metrics.smallMargin,
        justifyContent: 'center'
    }, boldLabel: {
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Colors.snow,
        textAlign: 'center',
        marginVertical: Metrics.smallMargin
    }, label: {
        textAlign: 'center',
        color: Colors.snow,
        marginBottom: Metrics.smallMargin
    }, listContent: {
        marginTop: Metrics.baseMargin
    } }));
//# sourceMappingURL=ListviewExampleStyle.js.map