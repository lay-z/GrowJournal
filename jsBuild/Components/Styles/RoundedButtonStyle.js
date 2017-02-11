// @flow
import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from '../../Themes/index.js';
export default StyleSheet.create({
    button: {
        height: 45,
        borderRadius: 5,
        marginHorizontal: Metrics.section,
        marginVertical: Metrics.baseMargin,
        backgroundColor: Colors.fire,
        justifyContent: 'center'
    },
    buttonText: {
        color: Colors.snow,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: Fonts.size.medium,
        marginVertical: Metrics.baseMargin
    }
});
//# sourceMappingURL=RoundedButtonStyle.js.map