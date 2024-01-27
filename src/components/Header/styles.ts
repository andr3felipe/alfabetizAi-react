import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const MobileNavigation = styled.ul`
  padding: 1rem;
`;
