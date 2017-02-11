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
import { ApplicationStyles } from '../../Themes/index.js';
export default StyleSheet.create(__assign({}, ApplicationStyles.screen, { container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }, map: {
        // For Android :/
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    } }));
//# sourceMappingURL=MapviewExampleStyle.js.map