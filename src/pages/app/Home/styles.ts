import styled from "styled-components";

type Heading = {
  color: "yellow" | "blue-light" | "red-dark" | "orange" | "blue-dark";
};

type Paragraph = {
  color?: "yellow" | "blue-light" | "red-dark" | "orange" | "blue-dark";
};

export const Container = styled.main``;

export const SectionContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 8rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Heading = styled.h2<Heading>`
  font-size: 2.25rem;
  color: ${(props) => props.theme[props.color]};
`;

export const Paragraph = styled.p<Paragraph>`
  color: ${(props) => props.theme[props.color || "blue-dark"]};
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
      color: ${(props) => props.theme["yellow"]};
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  gap: 2rem;
  text-align: center;

  > h2 {
    font-size: 3.5rem;
  }
`;
