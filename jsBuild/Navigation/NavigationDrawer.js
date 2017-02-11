// @flow
import React, { PropTypes, Component } from 'react';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux';
import DrawerContent from '../Containers/DrawerContent';
import { connect } from 'react-redux';
import Styles from './Styles/NavigationDrawerStyle';
/* *******************
* Documentation: https://github.com/root-two/react-native-drawer
********************/
class NavigationDrawer extends Component {
    render() {
        const state = this.props.navigationState;
        const children = state.children;
        return (React.createElement(Drawer, { ref: 'navigation', type: 'displace', open: state.open, onOpen: () => NavigationActions.refresh({ key: state.key, open: true }), onClose: () => NavigationActions.refresh({ key: state.key, open: false }), content: React.createElement(DrawerContent, null), styles: Styles, tapToClose: true, openDrawerOffset: 0.2, panCloseMask: 0.2, negotiatePan: true, tweenHandler: (ratio) => ({
                main: { opacity: Math.max(0.54, 1 - ratio) }
            }) },
            React.createElement(DefaultRenderer, { navigationState: children[0], onNavigate: this.props.onNavigate })));
    }
}
NavigationDrawer.propTypes = {
    navigationState: PropTypes.object
};
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer);
//# sourceMappingURL=NavigationDrawer.js.map