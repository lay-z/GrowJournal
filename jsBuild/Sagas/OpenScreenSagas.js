var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { call } from 'redux-saga/effects';
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux';
// Process OPEN_SCREEN actions
export function* openScreen(action) {
    const { screen, options = {} } = action;
    // Always reset the nav stack when opening a screen by default
    // You can override the RESET type in the options passed to the OPEN_SCREEN dispatch
    const mergedOptions = __assign({ type: ActionConst.RESET }, options);
    yield call(NavigationActions[screen], mergedOptions);
}
//# sourceMappingURL=OpenScreenSagas.js.map