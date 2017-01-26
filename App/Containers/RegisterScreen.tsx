import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import {Images, Metrics} from '../Themes/index.js'
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'

interface RegisterScreenProps {
  dispatch: () => any,
  fetching: boolean,
  attemptLogin: () => void
}

interface RegisterScreenState {
  emailAddress: string,
  password: string,
  confirmPassword: string,
  name: string,

  visibleHeight: number,
  topLogo: {
    width: number
  }
}

class RegisterScreen extends React.Component<RegisterScreenProps, RegisterScreenState> {

  props: RegisterScreenProps

  state: {
    emailAddress: string,
    password: string,
    confirmPassword: string,
    name: string,

    visibleHeight: number,
    topLogo: {
      width: number
    }
  }

  isAttempting: boolean
  keyboardDidShowListener: Object
  keyboardDidHideListener: Object

  constructor (props: RegisterScreenProps) {
    super(props)
    this.state = {
      emailAddress: 'reactnative@infinite.red',
      password: 'password',
      confirmPassword: '',
      name: '',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
    this.isAttempting = false
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      NavigationActions.pop()
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e: Event) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth}
    })
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
  }

  handleChangeName = (text, field) => {
    this.setState({ name: text })
  }

  handleChangeEmail = (text, field) => {
    this.setState({ email: text })
  }

  handleChangeConfirmPassword = (text, field) => {
    this.setState({ confirmPassword: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  handlePressRegister = () => {
    this.props.changeToRegisterView()
  }

  render () {
    const { emailAddress, password, name, confirmPassword } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps>
        <View style={Styles.form}>
          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>{"Name"}</Text>
            <TextInput
              ref='name'
              style={textInputStyle}
              value={name}
              editable={editable}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={this.handleChangeName}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.emailAddress.focus()}
              placeholder={"Type in your name here"} />
          </View>
          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>{I18n.t('emailAddress')}</Text>
            <TextInput
              ref='emailAddress'
              style={textInputStyle}
              value={emailAddress}
              editable={editable}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={this.handleChangeUsername}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.password.focus()}
              placeholder={I18n.t('emailAddress')} />
          </View>

          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>{I18n.t('password')}</Text>
            <TextInput
              ref='password'
              style={textInputStyle}
              value={password}
              editable={editable}
              keyboardType='default'
              returnKeyType='go'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              onChangeText={this.handleChangePassword}
              underlineColorAndroid='transparent'
              onSubmitEditing={this.handlePressLogin}
              placeholder={I18n.t('password')} />
          </View>
          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>{"Confirm your password"}</Text>
            <TextInput
              ref='confirmPassword'
              style={textInputStyle}
              value={confirmPassword}
              editable={editable}
              keyboardType='default'
              returnKeyType='go'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              onChangeText={this.handleChangeConfirmPassword}
              underlineColorAndroid='transparent'
              onSubmitEditing={this.handlePressLogin}
              placeholder={I18n.t('password')} />
          </View>

          <View style={[Styles.loginRow]}>
            <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.handlePressLogin}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>{"Signup"}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    changeToRegisterView: () => dispatch()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
