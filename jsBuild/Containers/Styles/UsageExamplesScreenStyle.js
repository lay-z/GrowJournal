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
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/index.js';
export default StyleSheet.create(__assign({}, ApplicationStyles.screen, { loginBox: {
        padding: Metrics.doubleBaseMargin
    }, loginButton: {
        borderWidth: 1,
        borderColor: Colors.charcoal,
        backgroundColor: Colors.panther,
        padding: 6
    }, loginText: {
        textAlign: 'center',
        color: Colors.silver
    }, componentLabelContainer: __assign({}, ApplicationStyles.darkLabelContainer), componentLabel: __assign({}, ApplicationStyles.darkLabel), temperature: __assign({}, Fonts.style.h4, { color: Colors.snow }), locale: __assign({}, Fonts.style.h4, { color: Colors.snow }), groupContainer: __assign({}, ApplicationStyles.groupContainer) }));
//# sourceMappingURL=UsageExamplesScreenStyle.js.map