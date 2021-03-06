import { storiesOf } from '@storybook/react';
import React, { Component, Fragment } from 'react';
import Accordion, { AccordionPanel, AccordionPanelDescription, AccordionPanelIcon, AccordionPanelTitle, TableAccordion, TableAccordionPanel, } from '.';
import Card from '../card';
import Checkbox from '../checkbox';
import Icon from '../icon';
const stories = storiesOf('Accordion', module);
const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vestibulum vehicula semper eleifend. Morbi tincidunt, magna non hendrerit malesuada,
  ex est pulvinar nisi, ac luctus lorem quam vel nibh. Integer at tortor luctus
  dui egestas consequat. Donec ut nibh lorem. Phasellus sed sapien lobortis,
  egestas lacus nec, vehicula lorem. Donec hendrerit nibh sed velit placerat
  aliquet. Morbi tristique pretium lorem, nec pretium turpis mattis vel.`;
const template = {
    name: 'Name',
    updated_at: 'Tue, Mar 13, 2018 10:43 PM EST',
};
stories.add('Accordion - Standard', () => (React.createElement(Accordion, null,
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }), open: true },
        React.createElement("p", null, LOREM_IPSUM)),
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }) },
        React.createElement("p", null, LOREM_IPSUM)),
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }) },
        React.createElement("p", null, LOREM_IPSUM)))));
stories.add('Accordion - Caret Left', () => (React.createElement(Accordion, { caretLeft: true },
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }) },
        React.createElement("p", null, LOREM_IPSUM)),
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }) },
        React.createElement("p", null, LOREM_IPSUM)),
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion Title" }) },
        React.createElement("p", null, LOREM_IPSUM)))));
stories.add('Accordion - Nested', () => {
    return (React.createElement(Accordion, null,
        React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Primary Accordion Title 1" }), noPadding: true, open: true },
            React.createElement(Accordion, null,
                React.createElement(AccordionPanel, { title: React.createElement("h3", null, "Secondary Accordion Title 1") },
                    React.createElement("p", null, LOREM_IPSUM)),
                React.createElement(AccordionPanel, { title: React.createElement("h3", null, "Secondary Accordion Title 2") },
                    React.createElement("p", null, LOREM_IPSUM)))),
        React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Primary Accordion Title 2" }) },
            React.createElement("p", null, LOREM_IPSUM))));
});
stories.add('Accordion - Nested with checkbox', () => {
    class Example extends Component {
        constructor() {
            super(...arguments);
            this.state = { checked: true };
            this.onCheckboxChange = (e) => {
                this.setState(({ checked }) => ({ checked: !checked }));
            };
        }
        render() {
            const { checked } = this.state;
            return (React.createElement(Accordion, null,
                React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Fields" }), open: true },
                    React.createElement(Accordion, null,
                        React.createElement(AccordionPanel, { title: React.createElement(Checkbox, { id: "accordion-checkbox-example", label: "First Name", checked: checked, onChange: this.onCheckboxChange }) },
                            React.createElement("p", null, LOREM_IPSUM))))));
        }
    }
    return React.createElement(Example, null);
});
stories.add('Accordion - Large', () => (React.createElement(Accordion, { large: true },
    React.createElement(AccordionPanel, { title: React.createElement(Fragment, null,
            React.createElement(AccordionPanelIcon, { iconType: "teammate" }),
            React.createElement(AccordionPanelTitle, { text: "Accordion title with icon and intro text" }),
            React.createElement(AccordionPanelDescription, { text: "Accordion title description." })) },
        React.createElement("p", null, LOREM_IPSUM)),
    React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: "Accordion with no icon/text" }) },
        React.createElement("p", null, LOREM_IPSUM)))));
stories.add('Accordion - Large - With Badge', () => (React.createElement(Accordion, { large: true },
    React.createElement(AccordionPanel, { title: React.createElement(Fragment, null,
            React.createElement(AccordionPanelIcon, { iconType: "status-negative" }),
            React.createElement(AccordionPanelTitle, { text: "Accordion title badge", badgeContent: "b2b", badgeColor: "sg-blue" }),
            React.createElement(AccordionPanelDescription, { text: "Accordion title description." })) },
        React.createElement("p", null, LOREM_IPSUM)))));
const CardContent = ({ title, iconType }) => (React.createElement("p", null,
    React.createElement(Icon, { type: iconType }),
    title));
stories.add('Accordion - Editor', () => (React.createElement(Accordion, { editor: true, caretLeft: true },
    React.createElement(AccordionPanel, { open: true, title: React.createElement("h4", null, "Add Modules") },
        React.createElement("div", null,
            React.createElement(Card, { module: true, centered: true },
                React.createElement(CardContent, { title: "Image", iconType: "images" })),
            React.createElement(Card, { module: true, centered: true },
                React.createElement(CardContent, { title: 'Image & Text', iconType: "image-text" })),
            React.createElement(Card, { module: true, centered: true },
                React.createElement(CardContent, { title: "Text", iconType: "text" })),
            React.createElement(Card, { module: true, centered: true },
                React.createElement(CardContent, { title: "Code", iconType: "code" })),
            React.createElement(Card, { module: true, centered: true },
                React.createElement(CardContent, { title: "Columns", iconType: "columns" })),
            React.createElement(Card, { module: true, centered: true },
                React.createElement(CardContent, { title: "Button", iconType: "button" })),
            React.createElement(Card, { module: true, centered: true },
                React.createElement(CardContent, { title: "Divider", iconType: "divider" })),
            React.createElement(Card, { module: true, centered: true },
                React.createElement(CardContent, { title: "Spacer", iconType: "spacer" })),
            React.createElement(Card, { module: true, centered: true },
                React.createElement(CardContent, { title: "Social", iconType: "social" })))))));
stories.add('Accordion - HTML title, no children', () => {
    return (React.createElement(Accordion, null,
        React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: React.createElement("span", null, "HTML Title with no children") }), noPadding: true, open: true })));
});
stories.add('Accordion - HTML title, children, noChange', () => {
    return (React.createElement(Accordion, null,
        React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: React.createElement("span", null, "This is always open") }), noPadding: true, open: true, noChange: true },
            React.createElement("p", null, LOREM_IPSUM)),
        React.createElement(AccordionPanel, { title: React.createElement(AccordionPanelTitle, { text: React.createElement("span", null, "This is always closed") }), noPadding: true, noChange: true })));
});
stories.add('Accordion - Templates', () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(TableAccordion, { col1Header: "Templates", col2Header: "Last Edited" }, [1, 2, 3].map(id => (React.createElement(TableAccordionPanel, { key: id, col1Title: template.name, col2Title: template.updated_at, actions: () => React.createElement("div", null, "Action") },
            React.createElement("p", null, LOREM_IPSUM))))),
        React.createElement(TableAccordion, { col1Header: "Templates", col2Header: "Last Edited" }, [1, 2, 3].map(id => (React.createElement(TableAccordionPanel, { key: id, col1Title: "", col2Title: "", actions: () => null },
            React.createElement("p", null, LOREM_IPSUM)))))));
});
