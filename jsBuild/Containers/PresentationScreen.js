// @flow
import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../Themes/index.js';
import RoundedButton from '../Components/RoundedButton';
import { Actions as NavigationActions } from 'react-native-router-flux';
// Styles
import styles from './Styles/PresentationScreenStyle';
export default class PresentationScreen extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.mainContainer },
            React.createElement(Image, { source: Images.background, style: styles.backgroundImage, resizeMode: 'stretch' }),
            React.createElement(ScrollView, { style: styles.container },
                React.createElement(View, { style: styles.centered },
                    React.createElement(Image, { source: Images.clearLogo, style: styles.logo })),
                React.createElement(View, { style: styles.section },
                    React.createElement(Text, { style: styles.sectionText }, "Default screens for development, debugging, and alpha testing" + " " + "are available below.")),
                React.createElement(RoundedButton, { onPress: NavigationActions.componentExamples }, "Component Examples Screen"),
                React.createElement(RoundedButton, { onPress: NavigationActions.usageExamples }, "Usage Examples Screen"),
                React.createElement(RoundedButton, { onPress: NavigationActions.apiTesting }, "API Testing Screen"),
                React.createElement(RoundedButton, { onPress: NavigationActions.theme }, "Theme Screen"),
                React.createElement(RoundedButton, { onPress: NavigationActions.deviceInfo }, "Device Info Screen"),
                React.createElement(View, { style: styles.centered },
                    React.createElement(Text, { style: styles.subtitle }, "Made with \u2764\uFE0F by Infinite Red")))));
    }
}
//# sourceMappingURL=PresentationScreen.js.map