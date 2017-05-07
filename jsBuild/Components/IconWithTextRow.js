// @flow
import React from 'react';
import { View } from 'react-native';
import styles from './Styles/IconWithTextRowStyle';
import Images from '../Themes/Images';
import IconWithText from './IconWithText';
class IconWithTextRow extends React.Component {
    render() {
        const warningShield = this.props.warnings.length ? Images.redWarningShield : Images.warningShield;
        const icons = [
            { imageSrc: Images.temperature, info: String(this.props.temperature) },
            { imageSrc: Images.humidity, info: String(this.props.humidity) + "%" },
            { imageSrc: warningShield, info: String(this.props.warnings.length) },
            { imageSrc: Images.ph, info: String(this.props.ph) }
        ];
        // console.log(iconsWithText)
        return (React.createElement(View, { style: [styles.iconRow, this.props.style] }, icons.map((iconText, index) => {
            return React.createElement(IconWithText, { imageSrc: iconText.imageSrc, info: iconText.info, key: String(index) });
        })));
    }
}
export default IconWithTextRow;
//# sourceMappingURL=IconWithTextRow.js.map