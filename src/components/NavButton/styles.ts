import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(NavLink)`
  cursor: pointer;
  display: block;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme['blue-light']};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
`;
