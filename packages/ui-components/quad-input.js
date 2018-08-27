var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { PureComponent } from 'react';
import { Column } from './grid/column';
import { Row } from './grid/row';
import { TextInput } from './text-input';
const inputs = ['top', 'right', 'bottom', 'left'];
export class QuadInput extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = (e, value) => {
            const inputName = e.target.name;
            this.props.onChange(e, Object.assign({}, this.props.values, { [inputName]: value }));
        };
    }
    render() {
        const _a = this.props, { id, units, values } = _a, attributes = __rest(_a, ["id", "units", "values"]);
        return (React.createElement(Row, null, inputs.map(inputName => (React.createElement(Column, { key: `quad-input-column-${inputName}`, width: 1 },
            React.createElement(TextInput, Object.assign({}, attributes, { id: `${id}-${inputName}`, type: "number", name: inputName, onChange: this.handleChange, icon: inputName, units: units, value: values[inputName] })))))));
    }
}
export default QuadInput;
//# sourceMappingURL=quad-input.js.map