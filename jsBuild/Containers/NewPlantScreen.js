// @flow
import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux';
// Styles
import styles from './Styles/NewPlantScreenStyle';
import Images from '../Themes/Images';
class NewPlantScreen extends React.Component {
    // constructor (props) {
    //   super(props)
    //   this.state = {}
    // }
    renderCard(type, iconSrc) {
        const batch = type === "Batch";
        const title = batch ? "New Batch" : "New Plant";
        return (React.createElement(TouchableHighlight, { style: styles.touchableCard, onPress: () => NavigationActions.createJournalScreen({ batch, title }) },
            React.createElement(View, { style: styles.card },
                React.createElement(Image, { source: iconSrc, style: styles.plantTypeIcon }),
                React.createElement(Text, { style: styles.description }, type))));
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            this.renderCard("Individual", Images.handPlanting),
            this.renderCard("Batch", Images.pottedPlant)));
    }
}
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(NewPlantScreen);
//# sourceMappingURL=NewPlantScreen.js.map