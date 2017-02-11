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
import { Metrics, Colors } from '../../Themes/index.js';
const navButton = {
    backgroundColor: Colors.transparent,
    justifyContent: 'center'
};
export default StyleSheet.create({
    backButton: __assign({}, navButton, { marginTop: Metrics.baseMargin, marginLeft: Metrics.baseMargin }),
    searchButton: __assign({}, navButton, { marginTop: Metrics.section, marginRight: Metrics.baseMargin, alignItems: 'center' }),
    navButton: __assign({}, navButton)
});
//# sourceMappingURL=NavItemsStyle.js.map