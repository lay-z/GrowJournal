// @flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/FullButtonStyle';
import ExamplesRegistry from '../Services/ExamplesRegistry';
// Example
ExamplesRegistry.add('Full Button', () => React.createElement(FullButton, { text: 'Hey there', onPress: () => window.alert('Full Button Pressed!') }));
export default class FullButton extends React.Component {
    render() {
        return (React.createElement(TouchableOpacity, { style: [styles.button, this.props.styles], onPress: this.props.onPress },
            React.createElement(Text, { style: styles.buttonText }, this.props.text && this.props.text.toUpperCase())));
    }
}
//# sourceMappingURL=FullButton.js.map