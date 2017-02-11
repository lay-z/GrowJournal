// @flow
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles/IconWithTextStyle';
export default class IconWithText extends React.Component {
    render() {
        return (React.createElement(View, { style: [styles.iconView, this.props.style], key: this.props.info },
            React.createElement(Image, { source: this.props.imageSrc, style: styles.icon }),
            React.createElement(Text, { style: styles.iconText },
                " ",
                this.props.info,
                " ")));
    }
}
//# sourceMappingURL=IconWithText.js.map