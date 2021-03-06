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
import Button from '../button';
import { ButtonList } from '../button-list';
import { Icon } from '../icon';
import ScssVars from '../styles/global/variables.scss';
import Styles from '../styles/segment-term.module.scss';
import ToggleButtons from '../toggle-buttons';
import cn from '../utilities/classnames';
import SegmentWrapper from './segmentWrapper';
export class SegmentTerm extends PureComponent {
    get termControls() {
        const _a = this.props, { editable, editing, onDelete, onConfirm, showConfirm } = _a, attributes = __rest(_a, ["editable", "editing", "onDelete", "onConfirm", "showConfirm"]);
        if (editing) {
            return (onDelete && (React.createElement("a", { className: "btn btn-small btn-trash", style: { cursor: 'pointer', color: ScssVars['slate-60'] }, onClick: onDelete },
                React.createElement(Icon, { type: "trash" }))));
        }
        if (editable) {
            return (React.createElement(Icon, { type: "pencil", className: cn('segment-term-edit', Styles['segment-term-edit']), style: { opacity: 1, color: ScssVars['slate-60'] } }));
        }
        return null;
    }
    render() {
        const _a = this.props, { hasAddButton, hasQueryToggle, queryToggleKey, hasSeparator, editable, editing, label, onAddButtonClick, onEdit, onQueryToggle, queryName, queryToggle, radios, renderAlert, renderInputs, title, onDelete, onConfirm, showConfirm, className } = _a, attributes = __rest(_a, ["hasAddButton", "hasQueryToggle", "queryToggleKey", "hasSeparator", "editable", "editing", "label", "onAddButtonClick", "onEdit", "onQueryToggle", "queryName", "queryToggle", "radios", "renderAlert", "renderInputs", "title", "onDelete", "onConfirm", "showConfirm", "className"]);
        const queryToggleAnd = queryToggle === 'and';
        return (React.createElement("div", Object.assign({ className: cn('segment-term-wrap', Styles['segment-term-wrap'], className, {
                'is-collapsed': !queryToggleAnd,
                [Styles['is-collapsed']]: !queryToggleAnd,
            }) }, attributes),
            title && (React.createElement("p", { className: cn('segment-term-title', Styles['segment-term-title']) }, title)),
            React.createElement("div", { className: cn('segment-term', Styles['segment-term'], {
                    // Double class names to keep unhashed classes for styleguide
                    [Styles['has-alert']]: !!renderAlert,
                    'has-alert': !!renderAlert,
                    [Styles['has-radios']]: radios,
                    'has-radios': radios,
                    [Styles['has-separator']]: hasSeparator,
                    'has-separator': hasSeparator,
                    [Styles['is-editable']]: editing,
                    'is-editable': editing,
                    [Styles['is-live']]: !editable,
                    'is-live': !editable,
                }), onClick: editable && !editing ? onEdit : undefined },
                editing && renderInputs && renderInputs(),
                !editing && (React.createElement("p", { className: Styles['segment-term-text'] },
                    `${label} `,
                    React.createElement("strong", null, queryName))),
                this.termControls,
                renderAlert && renderAlert()),
            hasQueryToggle && (React.createElement("div", { className: cn('segment-term-switch', Styles['segment-term-switch']), key: queryToggleKey },
                React.createElement(ToggleButtons, { keys: ['and', 'or'], selectedKey: queryToggle, onChange: (event, key) => onQueryToggle(key) }, (and, or) => (React.createElement(React.Fragment, null,
                    React.createElement(Button, Object.assign({}, and, { small: true, type: "group-item" }), "AND"),
                    React.createElement(Button, Object.assign({}, or, { small: true, type: "group-item" }), "OR")))))),
            hasAddButton && (React.createElement(ButtonList, null,
                React.createElement(Button, { type: "secondary", icon: "plus", onClick: onAddButtonClick }, "Add Condition")))));
    }
}
SegmentTerm.defaultProps = {
    editable: false,
    editing: false,
    hasAddButton: false,
    hasQueryToggle: false,
    hasSeparator: false,
    queryToggle: 'and',
    radios: false,
};
export { SegmentWrapper };
