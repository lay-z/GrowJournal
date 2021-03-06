// @flow
import React from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';
// For empty lists
import AlertMessage from '../Components/AlertMessage';
// Styles
import styles from './Styles/ListviewExampleStyle';
class ListviewSectionsExample extends React.Component {
    constructor(props) {
        super(props);
        /* ***********************************************************
        * STEP 1
        * This is an array of objects with the properties you desire
        * Usually this should come from Redux mapStateToProps
        *************************************************************/
        const dataObjects = {
            first: [
                { title: 'First Title', description: 'First Description' },
                { title: 'Second Title', description: 'Second Description' },
                { title: 'Third Title', description: 'Third Description' },
                { title: 'Fourth Title', description: 'Fourth Description' },
                { title: 'Fifth Title', description: 'Fifth Description' },
                { title: 'Sixth Title', description: 'Sixth Description' },
                { title: 'Seventh Title', description: 'Seventh Description' },
                { title: 'Eighth Title', description: 'Eighth Description' },
                { title: 'Ninth Title', description: 'Ninth Description' },
                { title: 'Tenth Title', description: 'Tenth Description' }
            ],
            second: [
                { title: 'Eleventh Title', description: 'Eleventh Description' },
                { title: '12th Title', description: '12th Description' },
                { title: '13th Title', description: '13th Description' },
                { title: '14th Title', description: '14th Description' },
                { title: '15th Title', description: '15th Description' },
                { title: '16th Title', description: '16th Description' },
                { title: '17th Title', description: '17th Description' },
                { title: '18th Title', description: '18th Description' },
                { title: '19th Title', description: '19th Description' },
                { title: '20th Title', description: '20th Description' },
                { title: 'BLACKJACK!', description: 'BLACKJACK! Description' }
            ]
        };
        /* ***********************************************************
        * STEP 2
        * Teach datasource how to detect if rows are different
        * Make this function fast!  Perhaps something like:
        *   (r1, r2) => r1.id !== r2.id}
        *   The same goes for sectionHeaderHasChanged
        *************************************************************/
        const rowHasChanged = (r1, r2) => r1 !== r2;
        const sectionHeaderHasChanged = (s1, s2) => s1 !== s2;
        // DataSource configured
        const ds = new ListView.DataSource({ rowHasChanged, sectionHeaderHasChanged });
        // Datasource is always in state
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(dataObjects)
        };
    }
    /* ***********************************************************
    * STEP 3
    * `renderRow` function -How each cell/row should be rendered
    * It's our best practice to place a single component here:
    *
    * e.g.
      return <MyCustomCell title={rowData.title} description={rowData.description} />
    *************************************************************/
    renderRow(rowData, sectionID) {
        // You can condition on sectionID (key as string), for different cells
        // in different sections
        return (React.createElement(View, { style: styles.row },
            React.createElement(Text, { style: styles.boldLabel },
                "Section ",
                sectionID,
                " - ",
                rowData.title),
            React.createElement(Text, { style: styles.label }, rowData.description)));
    }
    /* ***********************************************************
    * STEP 4
    * If your datasource is driven by Redux, you'll need to
    * reset it when new data arrives.
    * DO NOT! place `cloneWithRowsAndSections` inside of render, since render
    * is called very often, and should remain fast!  Just replace
    * state's datasource on newProps.
    *
    * e.g.
      componentWillReceiveProps (newProps) {
        if (newProps.someData) {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(newProps.someData)
          })
        }
      }
    *************************************************************/
    // Used for friendly AlertMessage
    // returns true if the dataSource is empty
    noRowData() {
        return this.state.dataSource.getRowCount() === 0;
    }
    renderHeader(data, sectionID) {
        switch (sectionID) {
            case 'first':
                return React.createElement(Text, { style: styles.boldLabel }, "First Section");
            default:
                return React.createElement(Text, { style: styles.boldLabel }, "Second Section");
        }
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(AlertMessage, { title: 'Nothing to See Here, Move Along', show: this.noRowData() }),
            React.createElement(ListView, { renderSectionHeader: this.renderHeader, contentContainerStyle: styles.listContent, dataSource: this.state.dataSource, renderRow: this.renderRow, enableEmptySections: true })));
    }
}
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ListviewSectionsExample);
//# sourceMappingURL=ListviewSectionsExample.js.map