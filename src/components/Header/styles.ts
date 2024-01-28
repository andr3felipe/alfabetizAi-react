import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Button } from '../Button/styles';

export const Header = styled.header`
  background-color: ${(props) => props.theme['blue-light']};
`;

export const Container = styled.div`
  width: min(100% - 60px, 1440px);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media (max-width: 767px) {
    img {
      width: 45vw;
      max-width: 220px;
    }
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    gap: 0.75rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
  color: ${(props) => props.theme['red-dark']};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme['purple-light']};
  }
`;

export const LoginButton = styled(Button)`
  margin: 0 auto;
`;

export const MobileNavigation = styled.ul`
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
`;

export const NavLoginContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1.25rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CloseModalButton = styled.button`
  z-index: 1;
  position: absolute;
  top: -25px;
  right: -25px;
  cursor: pointer;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['red-dark']};
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavLogin = styled(NavLink)`
  background-color: ${(props) => props.theme['blue-light']};
  padding: 1.25rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
  max-width: 250px;

  img {
    width: 200px;
  }

  h5 {
    font-size: 1.5rem;
    margin-top: 1.25rem;
    color: ${(props) => props.theme['blue-dark']};
  }

  &:hover {
    opacity: 0.8;
  }
`;
