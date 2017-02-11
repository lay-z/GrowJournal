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
import { Metrics, ApplicationStyles } from '../../Themes/index.js';
export default StyleSheet.create(__assign({}, ApplicationStyles.screen, { logo: {
        height: Metrics.images.logo,
        width: Metrics.images.logo,
        resizeMode: 'contain'
    }, centered: {
        alignItems: 'center'
    } }));
//# sourceMappingURL=PresentationScreenStyle.js.map