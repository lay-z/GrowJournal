import React from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles/SearchBarStyle';
import I18n from 'react-native-i18n';
import { Colors, Metrics } from '../Themes/index.js';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class SearchBar extends React.Component {
    render() {
        const { onSearch, onCancel, searchTerm } = this.props;
        const onSubmitEditing = () => onSearch(searchTerm);
        return (React.createElement(Animatable.View, { animation: 'slideInRight', duration: 250, style: styles.container },
            React.createElement(Icon, { name: 'search', size: Metrics.icons.tiny, style: styles.searchIcon }),
            React.createElement(TextInput, { ref: 'searchText', autoFocus: true, placeholder: I18n.t('search'), placeholderTextColor: Colors.snow, underlineColorAndroid: 'transparent', style: styles.searchInput, value: this.props.searchTerm, onChangeText: onSearch, autoCapitalize: 'none', onSubmitEditing: onSubmitEditing, returnKeyType: 'search', autoCorrect: false, selectionColor: Colors.snow }),
            React.createElement(TouchableOpacity, { onPress: onCancel, style: styles.cancelButton },
                React.createElement(Text, { style: styles.buttonLabel }, I18n.t('cancel')))));
    }
}
//# sourceMappingURL=SearchBar.js.map