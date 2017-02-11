// @flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/RoundedButtonStyle';
import ExamplesRegistry from '../Services/ExamplesRegistry';
// Example
ExamplesRegistry.add('Rounded Button', () => React.createElement(RoundedButton, { text: 'real buttons have curves', onPress: () => window.alert('Rounded Button Pressed!') }));
export default class RoundedButton extends React.Component {
    getText() {
        const buttonText = this.props.text || this.props.children || '';
        return buttonText.toUpperCase();
    }
    render() {
        return (React.createElement(TouchableOpacity, { style: styles.button, onPress: this.props.onPress },
            React.createElement(Text, { style: styles.buttonText }, this.getText())));
    }
}
//# sourceMappingURL=RoundedButton.js.map