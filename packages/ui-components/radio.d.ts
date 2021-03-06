import React from 'react';
export interface RadioGroupProps {
    children: React.ReactNode;
    name: string;
    onChange: (event: any) => void;
}
export declare const RadioGroup: React.SFC<RadioGroupProps>;
export interface RadioProps {
    checked: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    label: React.ReactNode | string;
    name?: string;
    onChange?: (event: any) => void;
    value: string;
}
export declare const Radio: React.SFC<RadioProps>;
export declare class StatefulRadio extends React.Component<RadioProps, {
    checked: boolean;
}> {
    readonly state: {
        checked: boolean;
    };
    constructor(props: RadioProps);
    handleChange(event: any): void;
    render(): JSX.Element;
}
export default Radio;
