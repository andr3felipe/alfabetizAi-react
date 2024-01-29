import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavButtonProps } from '.';

type ButtonProps = Pick<NavButtonProps, 'color' | 'backgroundcolor'>;

export const Button = styled(NavLink)<ButtonProps>`
  cursor: pointer;
  display: block;
  background-color: ${(props) => props.theme[props['backgroundcolor']]};
  color: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
