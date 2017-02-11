// @flow

import React, { Component } from 'react'
import {Text} from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar, { renderTitle } from '../Navigation/CustomNavBar'
import NavBarStyles from './Styles/CustomNavBarStyle'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import Dashboard from '../Containers/Dashboard'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import ListviewSearchingExample from '../Containers/ListviewSearchingExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'
import JournalEntryScreen from '../Containers/JournalEntryScreen'
import NewPlantScreen from '../Containers/NewPlantScreen'
import CreateJournalScreen from '../Containers/CreateJournalScreen'
import CreateJournalEntryScreen from '../Containers/CreateJournalEntryScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/
// navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}
class NavigationRouter extends Component<any, any> {
  render () {
    return (
      <Router>
        {/*<Scene key='drawer' component={NavigationDrawer} open={false}>*/}
          <Scene key='drawerChildrenWrapper'
            renderTitle={renderTitle}
            navigationBarStyle={Styles.navBar}
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton}
          >
            <Scene key='login' component={LoginScreen} title='Login'/>
            <Scene key='dashboard' component={Dashboard} title='Dashboard' renderLeftButton={NavItems.newPlant}/>
            <Scene key='newPlantScreen' component={NewPlantScreen} title='New Plant'/>
            <Scene key='createJournalScreen' component={CreateJournalScreen} title='Create Plant'/>
            <Scene initial key='createJournalEntryScreen' component={CreateJournalEntryScreen} title='New Entry'/>
            <Scene key='register' component={RegisterScreen} title='Register' />
            <Scene key='journalEntry' component={JournalEntryScreen} title='Journal Entry' renderRightButton={NavItems.newJournal}/>
            <Scene key='presentationScreen' component={PresentationScreen} title='Ignite' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='componentExamples' component={AllComponentsScreen} title='Components' />
            <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
            <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
            <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='Listview Sections' />
            <Scene key='listviewSearchingExample' component={ListviewSearchingExample} title='Listview Searching' navBar={CustomNavBar} />
            <Scene key='mapviewExample' component={MapviewExample} title='Mapview Example' />
            <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
            <Scene key='theme' component={ThemeScreen} title='Theme' />

            {/* Custom navigation bar example */}
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />
          </Scene>
        {/*</Scene>*/}
      </Router>
    )
  }
}

export default NavigationRouter
