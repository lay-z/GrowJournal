import React from 'react';
import { View, Image, Animated, TouchableOpacity } from 'react-native';
import { Images, Colors } from '../Themes/index.js';
import Styles from './Styles/CustomNavBarStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions as NavigationActions } from 'react-native-router-flux';
export default class CustomNavBar extends React.Component {
    render() {
        return (React.createElement(Animated.View, { style: Styles.container },
            React.createElement(TouchableOpacity, { style: Styles.leftButton, onPress: NavigationActions.pop },
                React.createElement(Icon, { name: 'ios-arrow-back', size: 34, color: Colors.snow })),
            "this is text",
            React.createElement(Image, { style: Styles.logo, source: Images.growJournalLogo }),
            React.createElement(View, { style: Styles.rightButton })));
    }
}
//# sourceMappingURL=CustomNavBar.js.map