// @flow
import React, { PropTypes } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import LoginActions, { isLoggedIn } from '../Redux/LoginRedux';
import TemperatureActions from '../Redux/TemperatureRedux';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { Colors, Images, Metrics } from '../Themes/index.js';
import RoundedButton from '../Components/RoundedButton';
// external libs
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
// Enable when you have configured Xcode
// import PushNotification from 'react-native-push-notification'
import I18n from 'react-native-i18n';
// Styles
import styles from './Styles/UsageExamplesScreenStyle';
class UsageExamplesScreen extends React.Component {
    constructor() {
        super(...arguments);
        // fires when we tap the rocket!
        this.handlePressRocket = () => {
            this.props.requestTemperature('Boise');
        };
        // fires when tap send
        this.handlePressSend = () => {
            this.props.requestTemperature('Toronto');
        };
        // fires when tap star
        this.handlePressStar = () => {
            this.props.requestTemperature('New Orleans');
        };
    }
    componentWillReceiveProps(nextProps) {
        // Request push premissions only if the user has logged in.
        const { loggedIn } = nextProps;
        if (loggedIn) {
        }
    }
    renderLoginButton() {
        return (React.createElement(RoundedButton, { onPress: NavigationActions.login }, I18n.t('signIn')));
    }
    renderLogoutButton() {
        return (React.createElement(RoundedButton, { onPress: this.props.logout }, I18n.t('logOut')));
    }
    renderHeader(title) {
        return (React.createElement(View, { style: styles.componentLabelContainer },
            React.createElement(Text, { style: styles.componentLabel }, title)));
    }
    renderUsageExamples() {
        const { loggedIn, temperature, city } = this.props;
        return (React.createElement(View, null,
            this.renderHeader(I18n.t('loginLogoutExampleTitle')),
            loggedIn ? this.renderLogoutButton() : this.renderLoginButton(),
            this.renderHeader('I18n Locale'),
            React.createElement(View, { style: styles.groupContainer },
                React.createElement(Text, { style: styles.locale }, I18n.locale)),
            this.renderHeader(I18n.t('api') + `: ${city}`),
            React.createElement(View, { style: [styles.groupContainer, { height: 50 }] },
                React.createElement(Text, { style: styles.temperature }, temperature && `${temperature} ${I18n.t('tempIndicator')}`)),
            this.renderHeader(I18n.t('rnVectorIcons')),
            React.createElement(View, { style: styles.groupContainer },
                React.createElement(TouchableOpacity, { onPress: this.handlePressRocket },
                    React.createElement(Icon, { name: 'rocket', size: Metrics.icons.medium, color: Colors.ember })),
                React.createElement(TouchableOpacity, { onPress: this.handlePressSend },
                    React.createElement(Icon, { name: 'send', size: Metrics.icons.medium, color: Colors.error })),
                React.createElement(TouchableOpacity, { onPress: this.handlePressStar },
                    React.createElement(Icon, { name: 'star', size: Metrics.icons.medium, color: Colors.snow })),
                React.createElement(Icon, { name: 'trophy', size: Metrics.icons.medium, color: Colors.error }),
                React.createElement(Icon, { name: 'warning', size: Metrics.icons.medium, color: Colors.ember })),
            React.createElement(View, { style: styles.groupContainer },
                React.createElement(Icon.Button, { name: 'facebook', style: styles.facebookButton, backgroundColor: Colors.facebook, onPress: () => window.alert('Facebook') }, I18n.t('loginWithFacebook'))),
            this.renderHeader(I18n.t('rnAnimatable')),
            React.createElement(View, { style: styles.groupContainer },
                React.createElement(Animatable.Text, { animation: 'fadeIn', iterationCount: 'infinite', direction: 'alternate', style: styles.subtitle }, I18n.t('rnAnimatable')),
                React.createElement(Animatable.Image, { animation: 'pulse', iterationCount: 'infinite', source: Images.logo }),
                React.createElement(Animatable.View, { animation: 'jello', iterationCount: 'infinite' },
                    React.createElement(Icon, { name: 'cab', size: Metrics.icons.medium, color: Colors.snow }))),
            this.renderHeader(I18n.t('igniteGenerated')),
            React.createElement(RoundedButton, { text: 'Listview', onPress: NavigationActions.listviewExample }),
            React.createElement(RoundedButton, { text: 'Listview Grid', onPress: NavigationActions.listviewGridExample }),
            React.createElement(RoundedButton, { text: 'Listview Sections', onPress: NavigationActions.listviewSectionsExample }),
            React.createElement(RoundedButton, { text: 'Listview Searching', onPress: NavigationActions.listviewSearchingExample }),
            React.createElement(RoundedButton, { text: 'Mapview', onPress: NavigationActions.mapviewExample })));
    }
    render() {
        return (React.createElement(View, { style: styles.mainContainer },
            React.createElement(Image, { source: Images.background, style: styles.backgroundImage, resizeMode: 'stretch' }),
            React.createElement(ScrollView, { style: styles.container },
                React.createElement(View, { style: styles.section },
                    React.createElement(Text, { style: styles.sectionText }, "The Usage Examples screen is a playground for 3rd party libs and logic proofs." + " " + "Items on this screen can be composed of multiple components working in concert.  Functionality demos of libs and practices")),
                this.renderUsageExamples())));
    }
}
UsageExamplesScreen.propTypes = {
    loggedIn: PropTypes.bool,
    temperature: PropTypes.number,
    city: PropTypes.string,
    logout: PropTypes.func,
    requestTemperature: PropTypes.func
};
const mapStateToProps = (state) => {
    return {
        loggedIn: isLoggedIn(state.login),
        temperature: state.temperature.temperature,
        city: state.temperature.city
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(LoginActions.logout()),
        requestTemperature: (city) => dispatch(TemperatureActions.temperatureRequest(city))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsageExamplesScreen);
//# sourceMappingURL=UsageExamplesScreen.js.map