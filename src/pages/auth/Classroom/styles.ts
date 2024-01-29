import styled from 'styled-components';

import classroomBackground from '../../../assets/classroom_bg.webp';
import { Button } from '../../../components/Button/styles';

export const Container = styled.main`
  background: url(${classroomBackground}) no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  gap: 2rem;

  @media (max-width: 767px) {
    padding: 1rem 2rem;
  }
`;

export const Display = styled.div`
  position: relative;
  min-height: 90vh;
  flex: 1;
  background: rgba(0, 0, 0, 0.8);
  border: 12px solid ${(props) => props.theme.yellow};
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.white};
    margin: auto;
  }

  ${Button} {
    width: 200px;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  @media (max-width: 767px) {
    border-width: 6px;

    ${Button} {
      position: initial;
      margin: 0 auto 20px;
    }
  }
`;
