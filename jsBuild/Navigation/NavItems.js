// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './Styles/NavItemsStyle';
import { Actions as NavigationActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Metrics } from '../Themes/index.js';
const openDrawer = () => {
    NavigationActions.refresh({
        key: 'drawer',
        open: true
    });
};
const newPlant = () => {
    NavigationActions.newPlantScreen();
};
export default {
    backButton() {
        return (React.createElement(TouchableOpacity, { onPress: NavigationActions.pop },
            React.createElement(Icon, { name: 'angle-left', size: Metrics.icons.large, color: Colors.snow, style: styles.backButton })));
    },
    hamburgerButton() {
        return (React.createElement(TouchableOpacity, { onPress: openDrawer },
            React.createElement(Icon, { name: 'bars', size: Metrics.icons.medium, color: Colors.snow, style: styles.navButtonLeft })));
    },
    newPlant() {
        return (React.createElement(TouchableOpacity, { onPress: newPlant },
            React.createElement(Icon, { name: 'plus', size: Metrics.icons.medium, color: Colors.snow, style: styles.navButton })));
    },
    newJournal() {
        return (React.createElement(TouchableOpacity, { onPress: () => alert("pressed") },
            React.createElement(Icon, { name: 'plus', size: Metrics.icons.medium, color: Colors.snow, style: styles.navButton })));
    },
    searchButton(callback) {
        return (React.createElement(TouchableOpacity, { onPress: callback },
            React.createElement(Icon, { name: 'search', size: Metrics.icons.small, color: Colors.snow, style: styles.searchButton })));
    }
};
//# sourceMappingURL=NavItems.js.map