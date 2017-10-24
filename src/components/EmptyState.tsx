import * as cn from 'classnames';
import * as React from 'react';

import { IconType } from '../types/icons';
import Icon from './Icon';

export interface EmptyStateProps {
  children?:
  | string
  | React.ReactElement<any>
  | Array<React.ReactElement<any>>;
  icon?: IconType;
  buttons?: Array<React.ReactElement<any>>;
  header?: string;
}

const EmptyState: React.SFC<EmptyStateProps> = ({
  children,
  icon,
  buttons,
  header,
}) => (
  <div className='table-state is-empty'>
    { icon && <Icon type={icon}></Icon> }
    { header && <h2>{header}</h2> }
    {children}
  </div>
);

export default EmptyState;