// @flow
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Metrics, Colors, Fonts } from '../../Themes/index.js';
export default {
    text: __assign({}, Fonts.style.h5, { color: Colors.snow, marginVertical: Metrics.baseMargin })
};
//# sourceMappingURL=DrawerButtonStyles.js.map