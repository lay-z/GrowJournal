import React, { PropTypes } from 'react';
import { View, Image, LayoutAnimation, Text } from 'react-native';
import NavItems from './NavItems';
import styles from './Styles/CustomNavBarStyle';
import SearchBar from '../Components/SearchBar';
import { connect } from 'react-redux';
import { Metrics, Images } from '../Themes/index.js';
import SearchActions from '../Redux/SearchRedux';
class CustomNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.showSearchBar = () => {
            this.setState({ showSearchBar: true });
        };
        this.cancelSearch = () => {
            this.setState({ showSearchBar: false });
            this.props.cancelSearch();
        };
        this.onSearch = (searchTerm) => {
            this.props.performSearch(searchTerm);
        };
        this.state = {
            showSearchBar: false
        };
    }
    renderMiddle() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        if (this.state.showSearchBar) {
            return React.createElement(SearchBar, { onSearch: this.props.performSearch, searchTerm: this.props.searchTerm, onCancel: this.cancelSearch });
        }
        else {
            return (React.createElement(View, null,
                React.createElement(Image, { resizeMode: 'center', style: styles.logo, source: Images.growJournalLogo }),
                React.createElement(Text, { style: styles.title }, this.props.title)));
        }
    }
    renderRightButtons() {
        if (this.state.showSearchBar) {
            return React.createElement(View, { style: { width: Metrics.icons.medium } });
        }
        else {
            return (React.createElement(View, { style: styles.rightButtons }, NavItems.searchButton(this.showSearchBar)));
        }
    }
    renderLeftButtons() {
        if (this.state.showSearchBar) {
            return null;
        }
        else {
            return (React.createElement(View, { style: styles.leftButtons }, NavItems.backButton()));
        }
    }
    render() {
        let state = this.props.navigationState;
        let selected = state.children[state.index];
        while (selected.hasOwnProperty('children')) {
            state = selected;
            selected = selected.children[selected.index];
        }
        const containerStyle = [
            styles.container,
            this.props.navigationBarStyle,
            state.navigationBarStyle,
            selected.navigationBarStyle
        ];
        return (React.createElement(View, { style: containerStyle },
            this.renderLeftButtons(),
            this.renderMiddle(),
            this.renderRightButtons()));
    }
}
CustomNavBar.propTypes = {
    navigationState: PropTypes.object,
    navigationBarStyle: View.propTypes.style
};
const mapStateToProps = (state) => {
    return {
        searchTerm: state.search.searchTerm
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        performSearch: (searchTerm) => dispatch(SearchActions.search(searchTerm)),
        cancelSearch: () => dispatch(SearchActions.cancelSearch())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar);
export const renderTitle = (navBarProps) => {
    return (React.createElement(View, null,
        React.createElement(Image, { resizeMode: 'center', style: styles.logo, source: Images.growJournalLogo }),
        React.createElement(Text, { style: styles.title }, navBarProps.title)));
};
//# sourceMappingURL=CustomNavBar.js.map