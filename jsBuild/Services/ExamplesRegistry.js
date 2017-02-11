// @flow
import React from 'react';
import { Text, View } from 'react-native';
import R from 'ramda';
import { ApplicationStyles } from '../Themes/index.js';
import DebugSettings from '../Config/DebugSettings';
let globalExamplesRegistry = [];
export const addExample = (title, usage) => { if (DebugSettings.includeExamples)
    globalExamplesRegistry.push({ title, usage }); };
const renderExample = (example) => {
    return (React.createElement(View, { key: example.title },
        React.createElement(View, { style: ApplicationStyles.darkLabelContainer },
            React.createElement(Text, { style: ApplicationStyles.darkLabel }, example.title)),
        example.usage.call()));
};
export const renderExamples = () => R.map(renderExample, globalExamplesRegistry);
// Default for readability
export default {
    render: renderExamples,
    add: addExample
};
//# sourceMappingURL=ExamplesRegistry.js.map