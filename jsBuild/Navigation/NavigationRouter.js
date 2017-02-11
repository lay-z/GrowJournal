// @flow
import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Styles from './Styles/NavigationContainerStyle';
import NavItems from './NavItems';
import CustomNavBar, { renderTitle } from '../Navigation/CustomNavBar';
// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen';
import AllComponentsScreen from '../Containers/AllComponentsScreen';
import UsageExamplesScreen from '../Containers/UsageExamplesScreen';
import LoginScreen from '../Containers/LoginScreen';
import RegisterScreen from '../Containers/RegisterScreen';
import Dashboard from '../Containers/Dashboard';
import ListviewExample from '../Containers/ListviewExample';
import ListviewGridExample from '../Containers/ListviewGridExample';
import ListviewSectionsExample from '../Containers/ListviewSectionsExample';
import ListviewSearchingExample from '../Containers/ListviewSearchingExample';
import MapviewExample from '../Containers/MapviewExample';
import APITestingScreen from '../Containers/APITestingScreen';
import ThemeScreen from '../Containers/ThemeScreen';
import DeviceInfoScreen from '../Containers/DeviceInfoScreen';
import JournalEntryScreen from '../Containers/JournalEntryScreen';
import NewPlantScreen from '../Containers/NewPlantScreen';
import CreateJournalScreen from '../Containers/CreateJournalScreen';
import CreateJournalEntryScreen from '../Containers/CreateJournalEntryScreen';
/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/
// navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}
class NavigationRouter extends Component {
    render() {
        return (React.createElement(Router, null,
            React.createElement(Scene, { key: 'drawerChildrenWrapper', renderTitle: renderTitle, navigationBarStyle: Styles.navBar, leftButtonIconStyle: Styles.leftButton, rightButtonTextStyle: Styles.rightButton },
                React.createElement(Scene, { key: 'login', component: LoginScreen, title: 'Login' }),
                React.createElement(Scene, { key: 'dashboard', component: Dashboard, title: 'Dashboard', renderLeftButton: NavItems.newPlant }),
                React.createElement(Scene, { key: 'newPlantScreen', component: NewPlantScreen, title: 'New Plant' }),
                React.createElement(Scene, { key: 'createJournalScreen', component: CreateJournalScreen, title: 'Create Plant' }),
                React.createElement(Scene, { initial: true, key: 'createJournalEntryScreen', component: CreateJournalEntryScreen, title: 'New Entry' }),
                React.createElement(Scene, { key: 'register', component: RegisterScreen, title: 'Register' }),
                React.createElement(Scene, { key: 'journalEntry', component: JournalEntryScreen, title: 'Journal Entry', renderRightButton: NavItems.newJournal }),
                React.createElement(Scene, { key: 'presentationScreen', component: PresentationScreen, title: 'Ignite', renderLeftButton: NavItems.hamburgerButton }),
                React.createElement(Scene, { key: 'componentExamples', component: AllComponentsScreen, title: 'Components' }),
                React.createElement(Scene, { key: 'usageExamples', component: UsageExamplesScreen, title: 'Usage', rightTitle: 'Example', onRight: () => window.alert('Example Pressed') }),
                React.createElement(Scene, { key: 'listviewExample', component: ListviewExample, title: 'Listview Example' }),
                React.createElement(Scene, { key: 'listviewGridExample', component: ListviewGridExample, title: 'Listview Grid' }),
                React.createElement(Scene, { key: 'listviewSectionsExample', component: ListviewSectionsExample, title: 'Listview Sections' }),
                React.createElement(Scene, { key: 'listviewSearchingExample', component: ListviewSearchingExample, title: 'Listview Searching', navBar: CustomNavBar }),
                React.createElement(Scene, { key: 'mapviewExample', component: MapviewExample, title: 'Mapview Example' }),
                React.createElement(Scene, { key: 'apiTesting', component: APITestingScreen, title: 'API Testing' }),
                React.createElement(Scene, { key: 'theme', component: ThemeScreen, title: 'Theme' }),
                React.createElement(Scene, { key: 'deviceInfo', component: DeviceInfoScreen, title: 'Device Info' }))));
    }
}
export default NavigationRouter;
//# sourceMappingURL=NavigationRouter.js.map