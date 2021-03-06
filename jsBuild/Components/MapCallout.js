import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import Styles from './Styles/MapCalloutStyle';
import ExamplesRegistry from '../Services/ExamplesRegistry';
// Example
ExamplesRegistry.add('Map Callout', () => React.createElement(MapCallout, { location: {
        title: 'Callout Example'
    }, onPress: () => window.alert('That tickles!') }));
export default class MapCallout extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = this.props.onPress.bind(this, this.props.location);
    }
    render() {
        /* ***********************************************************
        * Customize the appearance of the callout that opens when the user interacts with a marker.
        * Note: if you don't want your callout surrounded by the default tooltip, pass `tooltip={true}` to `MapView.Callout`
        *************************************************************/
        const { location } = this.props;
        return (React.createElement(MapView.Callout, { style: Styles.callout },
            React.createElement(TouchableOpacity, { onPress: this.onPress },
                React.createElement(Text, null, location.title))));
    }
}
//# sourceMappingURL=MapCallout.js.map