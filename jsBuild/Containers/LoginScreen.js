// @flow
import React from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Keyboard, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import Styles from './Styles/LoginScreenStyle';
import { Metrics } from '../Themes/index.js';
import LoginActions from '../Redux/LoginRedux';
import { Actions as NavigationActions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';
class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.keyboardDidShow = (e) => {
            // Animation types easeInEaseOut/linear/spring
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            let newSize = Metrics.screenHeight - e.endCoordinates.height;
            this.setState({
                visibleHeight: newSize,
                topLogo: { width: 100, height: 70 }
            });
        };
        this.keyboardDidHide = (e) => {
            // Animation types easeInEaseOut/linear/spring
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                visibleHeight: Metrics.screenHeight,
                topLogo: { width: Metrics.screenWidth }
            });
        };
        this.handlePressLogin = () => {
            const { username, password } = this.state;
            this.isAttempting = true;
            // attempt a login - a saga is listening to pick it up from here.
            this.props.attemptLogin(username, password);
        };
        this.handleChangeUsername = (text) => {
            this.setState({ username: text });
        };
        this.handleChangePassword = (text) => {
            this.setState({ password: text });
        };
        this.handlePressRegister = () => {
            this.props.changeToRegisterView();
        };
        this.state = {
            username: 'reactnative@infinite.red',
            password: 'password',
            visibleHeight: Metrics.screenHeight,
            topLogo: { width: Metrics.screenWidth }
        };
        this.isAttempting = false;
    }
    componentWillReceiveProps(newProps) {
        this.forceUpdate();
        // Did the login attempt complete?
        if (this.isAttempting && !newProps.fetching) {
            NavigationActions.pop();
        }
    }
    componentWillMount() {
        // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
        // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    render() {
        const { username, password } = this.state;
        const { fetching } = this.props;
        const editable = !fetching;
        const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly;
        return (React.createElement(ScrollView, { contentContainerStyle: { justifyContent: 'center' }, style: [Styles.container, { height: this.state.visibleHeight }], keyboardShouldPersistTaps: true },
            React.createElement(View, { style: Styles.form },
                React.createElement(View, { style: Styles.row },
                    React.createElement(Text, { style: Styles.rowLabel }, I18n.t('emailAddress')),
                    React.createElement(TextInput, { ref: 'username', style: textInputStyle, value: username, editable: editable, keyboardType: 'default', returnKeyType: 'next', autoCapitalize: 'none', autoCorrect: false, onChangeText: this.handleChangeUsername, underlineColorAndroid: 'transparent', onSubmitEditing: () => this.refs.password.focus(), placeholder: I18n.t('username') })),
                React.createElement(View, { style: Styles.row },
                    React.createElement(Text, { style: Styles.rowLabel }, I18n.t('password')),
                    React.createElement(TextInput, { ref: 'password', style: textInputStyle, value: password, editable: editable, keyboardType: 'default', returnKeyType: 'go', autoCapitalize: 'none', autoCorrect: false, secureTextEntry: true, onChangeText: this.handleChangePassword, underlineColorAndroid: 'transparent', onSubmitEditing: this.handlePressLogin, placeholder: I18n.t('password') })),
                React.createElement(View, { style: [Styles.loginRow] },
                    React.createElement(TouchableOpacity, { style: Styles.loginButtonWrapper, onPress: this.handlePressLogin },
                        React.createElement(View, { style: Styles.loginButton },
                            React.createElement(Text, { style: Styles.loginText }, I18n.t('signIn')))))),
            React.createElement(View, null,
                React.createElement(Text, { style: Styles.registerText }, "Don't have an account?"),
                React.createElement(Text, { style: [Styles.registerText, Styles.registerLink], onPress: () => NavigationActions.register({}) }, "Sign up"))));
    }
}
const mapStateToProps = (state) => {
    return {
        fetching: state.login.fetching
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
        changeToRegisterView: () => dispatch()
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
//# sourceMappingURL=LoginScreen.js.map