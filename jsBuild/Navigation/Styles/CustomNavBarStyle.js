import { Colors, Metrics, Fonts } from '../../Themes/index.js';
export default {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: Metrics.navBarHeight,
        paddingTop: 0,
        paddingHorizontal: 5,
        backgroundColor: Colors.ironBlue,
    },
    title: {
        // flex: 0,
        textAlign: 'center',
        color: Colors.snow,
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: Colors.transparent,
        fontWeight: 'bold',
        fontSize: Fonts.size.navBarHeader,
        width: Metrics.screenWidth - 100,
        alignSelf: 'center'
    },
    logo: {
        alignSelf: 'center',
        marginTop: Metrics.smallMargin,
        marginBottom: 0,
        height: Metrics.navBarHeight - 30,
        width: 125
    },
    rightButtons: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    leftButtons: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
};
//# sourceMappingURL=CustomNavBarStyle.js.map