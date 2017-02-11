// @flow
import React, { Component } from 'react';
import { ScrollView, Image, BackAndroid } from 'react-native';
import styles from './Styles/DrawerContentStyle';
import { Images } from '../Themes/index.js';
import DrawerButton from '../Components/DrawerButton';
import { Actions as NavigationActions } from 'react-native-router-flux';
class DrawerContent extends Component {
    constructor() {
        super(...arguments);
        this.handlePressComponents = () => {
            this.toggleDrawer();
            NavigationActions.componentExamples();
        };
        this.handlePressUsage = () => {
            this.toggleDrawer();
            NavigationActions.usageExamples();
        };
        this.handlePressAPI = () => {
            this.toggleDrawer();
            NavigationActions.apiTesting();
        };
        this.handlePressTheme = () => {
            this.toggleDrawer();
            NavigationActions.theme();
        };
        this.handlePressDevice = () => {
            this.toggleDrawer();
            NavigationActions.deviceInfo();
        };
    }
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.context.drawer.props.open) {
                this.toggleDrawer();
                return true;
            }
            return false;
        });
    }
    toggleDrawer() {
        this.context.drawer.toggle();
    }
    render() {
        return (React.createElement(ScrollView, { style: styles.container },
            React.createElement(Image, { source: Images.logo, style: styles.logo }),
            React.createElement(DrawerButton, { text: 'Component Examples', onPress: this.handlePressComponents }),
            React.createElement(DrawerButton, { text: 'Usage Examples', onPress: this.handlePressUsage }),
            React.createElement(DrawerButton, { text: 'API Testing', onPress: this.handlePressAPI }),
            React.createElement(DrawerButton, { text: 'Themes', onPress: this.handlePressTheme }),
            React.createElement(DrawerButton, { text: 'Device Info', onPress: this.handlePressDevice })));
    }
}
DrawerContent.contextTypes = {
    drawer: React.PropTypes.object
};
export default DrawerContent;
//# sourceMappingURL=DrawerContent.js.map