// @flow
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Styles/DrawerButtonStyles';
import ExamplesRegistry from '../Services/ExamplesRegistry';
// Example
ExamplesRegistry.add('Drawer Button', () => React.createElement(DrawerButton, { text: 'Example left drawer button', onPress: () => window.alert('Your drawers are showing') }));
class DrawerButton extends Component {
    render() {
        return (React.createElement(TouchableOpacity, { onPress: this.props.onPress },
            React.createElement(Text, { style: styles.text }, this.props.text)));
    }
}
export default DrawerButton;
//# sourceMappingURL=DrawerButton.js.map