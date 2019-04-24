import { Component } from 'react';
export interface SearchableSelectState {
    isOpen: boolean;
    value: string;
}
declare class SearchableSelect extends Component<any> {
    state: {
        isOpen: boolean;
        value: any;
    };
    toggleOpen(): void;
    onSelectChange(value: any, callback?: (value: any) => void): void;
    render(): JSX.Element;
}
export default SearchableSelect;
export { SearchableSelect };
