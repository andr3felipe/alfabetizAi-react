import styled from 'styled-components';
import { colors } from '../../@types/colors';

type IconProps = {
  backgroundcolor: keyof colors;
};

export const Container = styled.footer`
  background-color: ${({ theme }) => theme['blue-light']};
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 3rem 20px 2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
    max-width: 1440px;
    margin: 0 auto;

    gap: 2rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 1rem;
  }
`;

export const Icon = styled.a<IconProps>`
  background-color: ${(props) => props.theme[props['backgroundcolor']]};
  border-radius: 50%;
  padding: 0.35rem;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Newsletter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  > p {
    color: ${(props) => props.theme['purple-light']};
    font-weight: bold;
  }

  > form {
    position: relative;
  }

  > form > input {
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.white};

    &::placeholder {
      color: ${(props) => props.theme.white};
    }
  }

  > form > button {
    position: absolute;
    border: none;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme['blue-light']};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: transparent;

    > svg {
      font-size: 1rem;
    }
  }
`;

export const Copyright = styled.p`
  margin-top: 2rem;
  color: ${(props) => props.theme['purple-dark']};
`;
