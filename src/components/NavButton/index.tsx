import React, { ComponentProps } from 'react';
import { Button } from './styles';
import { NavLink } from 'react-router-dom';
import { colors } from '../../@types/colors';

export interface NavButtonProps extends ComponentProps<typeof NavLink> {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
  color?: keyof colors;
  backgroundcolor: keyof colors;
}

const NavButton = ({ children, ...rest }: NavButtonProps) => {
  return <Button {...rest}>{children}</Button>;
};

export default NavButton;
