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
  margin-top: 3rem;
  padding: 1rem;
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap-reverse;
  gap: 2rem;

  div:first-of-type {
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

export const Heading = styled.h2<Heading>`
  font-size: 2.25rem;
  color: ${(props) => props.theme[props.color]};
`;

export const Paragraph = styled.p<Paragraph>`
  color: ${(props) => props.theme[props.color || "blue-dark"]};
  font-weight: 500;
`;
