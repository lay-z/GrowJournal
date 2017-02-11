// @flow
import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/AlertMessageStyle';
import * as Animatable from 'react-native-animatable';
import { Metrics } from '../Themes/index.js';
import Icon from 'react-native-vector-icons/Ionicons';
import ExamplesRegistry from '../Services/ExamplesRegistry';
// Example
ExamplesRegistry.add('Alert Message', () => React.createElement(View, null,
    React.createElement(AlertMessage, { title: 'Alert Message with animation' }),
    React.createElement(AlertMessage, { title: 'Never see me', show: false })));
export default class AlertMessage extends React.Component {
    render() {
        let messageComponent = null;
        if (this.props.show) {
            const { title } = this.props;
            return (React.createElement(Animatable.View, { style: [styles.container, this.props.style], delay: 800, animation: 'bounceIn' },
                React.createElement(View, { style: styles.contentContainer },
                    React.createElement(Icon, { name: this.props.icon || 'ios-alert', size: Metrics.icons.large, style: styles.icon }),
                    React.createElement(Text, { allowFontScaling: false, style: styles.message }, title && title.toUpperCase()))));
        }
        return messageComponent;
    }
}
AlertMessage.defaultProps = {
    show: true
};
//# sourceMappingURL=AlertMessage.js.map