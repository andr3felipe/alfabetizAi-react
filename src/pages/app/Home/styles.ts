import styled from 'styled-components';
import { Button } from '../../../components/NavButton/styles';

type Heading = {
  color: 'yellow' | 'blue-light' | 'red-dark' | 'orange' | 'blue-dark';
};

type Paragraph = {
  color?: 'yellow' | 'blue-light' | 'red-dark' | 'orange' | 'blue-dark';
};

type DataProps = {
  color: 'purple-light' | 'yellow';
};

export const Container = styled.main``;

export const SectionContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 8rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

export const Heading = styled.h2<Heading>`
  font-size: 2.25rem;
  color: ${(props) => props.theme[props.color]};
`;

export const Paragraph = styled.p<Paragraph>`
  color: ${(props) => props.theme[props.color || 'blue-dark']};
  font-weight: 500;
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap-reverse;
  gap: 2rem;

  div:first-of-type {
    flex: 1;
    flex-basis: 25rem;

    > h1 {
      color: ${(props) => props.theme['yellow']};
      font-size: 2.25rem;
    }

    > p {
      margin-top: 1rem;
    }

    > a {
      margin-top: 2.5rem;
      display: inline-block;
    }
  }

  div:nth-of-type(2) {
    > img {
      max-width: 100%;
    }
  }
`;

export const OurCommitment = styled.section`
  background-color: ${(props) => props.theme['blue-light']};
  padding: 2.5rem 0;
`;

export const CommitmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 4rem;
  margin-bottom: 4rem;

  h2 {
    margin-bottom: 1rem;
  }

  img {
    margin: 0 auto;
    width: min(100%, 400px);
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  flex-basis: 25rem;
  p {
    margin-bottom: 2rem;
  }

  ${Button} {
    display: inline-block;
  }
`;

export const DataContainer = styled(CommitmentContainer)`
  gap: 4rem;
`;

export const DataTitle = styled.div`
  flex: 1;
  flex-basis: 25rem;

  span {
    color: ${(props) => props.theme['purple-light']};
  }
`;

export const DataInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 0 auto;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Data = styled.div<DataProps>`
  display: flex;
  gap: 1rem;
  color: ${(props) => props.theme[props.color]};

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Quantity = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2.25rem;
`;

export const Name = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const FacilityAndSecurity = styled.section`
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap-reverse;
    gap: 2rem;
  }

  background-color: ${(props) => props.theme.background};

  div:first-of-type {
    flex: 1;
    flex-basis: 25rem;

    > p {
      margin-top: 1rem;
      max-width: 37.5rem;
    }
  }

  div:nth-of-type(2) {
    > img {
      max-width: 100%;
    }
  }
`;

export const AdvanceTowardsYourGrowth = styled.section`
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 2rem;

    > h2 {
      font-size: 2.5rem;
    }
  }
`;
