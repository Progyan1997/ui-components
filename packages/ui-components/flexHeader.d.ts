import React, { Component } from 'react';
import { TooltipDirection, TooltipLength } from './tooltip';
import { IconType } from './types/icons';
export interface FlexHeaderProps {
    className?: string;
    creditsCount?: string;
    headerActions?: React.ReactNode;
    headerTabs?: React.ReactNode;
    title: string;
    tooltipText?: string;
    tooltipLength?: TooltipLength;
    tooltipDirection?: TooltipDirection;
    onClose?: (event: any) => void;
    iconType?: 'x' | 'mc-return';
    isDark?: boolean;
}
export declare class FlexHeader extends Component<FlexHeaderProps> {
    render(): JSX.Element;
}
export default FlexHeader;
export declare const FlexHeaderTabs: React.SFC<{}>;
export interface FlexHeaderTabProps {
    iconType?: IconType;
    isActive?: boolean;
    text: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const FlexHeaderTab: React.SFC<FlexHeaderTabProps>;
