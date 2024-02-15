import styled from 'styled-components';
import { Button } from '../../../components/NavButton/styles';
import { colors } from '../../../@types/colors';

type Heading = {
  color: keyof colors;
};

type Paragraph = {
  color?: keyof colors;
};

type DataProps = {
  color: keyof colors;
};

type CardProps = {
  color: keyof colors;
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
      color: ${(props) => props.theme['purple-light']};
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
    position: relative;

    > img {
      aspect-ratio: 445/485;
      width: 100%;
      max-width: 445px;
      object-fit: cover;
      max-height: 400px;
    }
  }
`;

export const OurCommitment = styled.section`
  background-color: ${(props) => props.theme['blue-light']};
`;

export const CommitmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem 4rem;
  margin-bottom: 4rem;

  h2 {
    margin-bottom: 1rem;
  }

  img {
    margin: 0 auto;
    width: min(100%, 400px);
    aspect-ratio: 400/401;
    object-fit: cover;
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
    display: block;
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
  font-weight: 600;
`;

export const FacilityAndSecurity = styled.section`
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap-reverse;
    gap: 2rem;
  }

  background-color: ${(props) => props.theme.white};

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
      aspect-ratio: 442/435;
      object-fit: cover;
    }
  }
`;

export const AdvantagesAndBenefits = styled.section`
  margin: 0 auto;
  text-align: center;
  background-color: ${(props) => props.theme['blue-light']};

  h2 {
    margin-bottom: 2.5rem;
  }
`;

export const CardsContainer = styled.div`
  margin: 0 auto;
  border-radius: 48px;
  padding: 5rem;
  background-color: ${(props) => props.theme.white};
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 220px);
  gap: 5rem 2.5rem;
  max-width: 900px;
  box-shadow: 12px 12px 20px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    padding: 4rem 2rem;
  }
`;

export const Card = styled.div<CardProps>`
  color: ${(props) => props.theme[props.color]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const AdvanceTowardsYourGrowth = styled.section`
  padding: 4rem 0;
  text-align: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 2rem;

    > h2 {
      font-size: 4rem;

      @media (max-width: 767px) {
        font-size: 2.5rem;
      }
    }
  }
`;
