/// <reference types="react" />
import React from 'react';
import IconSizeType from './types/icon-sizes';
import { IconType } from './types/icons';
export interface IconProps {
    type: IconType;
    className?: string;
    onClick?: (event: any) => void;
    onDark?: boolean;
    size?: IconSizeType;
    style?: {
        [key: string]: string;
    };
}
export declare const Icon: React.SFC<IconProps>;
export default Icon;