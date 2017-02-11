// @flow
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';
// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android
const ApplicationStyles = {
    screen: {
        mainContainer: {
            flex: 1,
            marginTop: Metrics.navBarHeight,
            backgroundColor: Colors.transparent
        },
        backgroundImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        container: {
            flex: 1,
            paddingTop: Metrics.baseMargin
        },
        section: {
            margin: Metrics.section,
            padding: Metrics.baseMargin,
            borderTopColor: Colors.frost,
            borderTopWidth: 0.5,
            borderBottomColor: Colors.frost,
            borderBottomWidth: 1
        },
        sectionText: {
            color: Colors.snow,
            marginVertical: Metrics.smallMargin,
            textAlign: 'center',
            fontWeight: 'bold'
        },
        subtitle: {
            color: Colors.snow,
            padding: Metrics.smallMargin,
            marginBottom: Metrics.smallMargin,
            marginHorizontal: Metrics.smallMargin
        }
    },
    darkLabelContainer: {
        backgroundColor: Colors.cloud,
        padding: Metrics.smallMargin
    },
    darkLabel: {
        fontFamily: Fonts.type.bold,
        color: Colors.snow
    },
    groupContainer: {
        margin: Metrics.smallMargin,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    sectionTitle: __assign({}, Fonts.style.h4, { color: Colors.coal, backgroundColor: Colors.ricePaper, padding: Metrics.smallMargin, marginTop: Metrics.smallMargin, marginHorizontal: Metrics.baseMargin, borderWidth: 1, borderColor: Colors.ember, alignItems: 'center', textAlign: 'center' }),
    card: {
        flex: 1,
        backgroundColor: Colors.snow,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 0,
        marginBottom: 0,
        marginRight: Metrics.doubleBaseMargin,
        marginLeft: Metrics.doubleBaseMargin,
        elevation: 10
    },
};
export default ApplicationStyles;
//# sourceMappingURL=ApplicationStyles.js.map