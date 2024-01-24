import styled from "styled-components";

type IconProps = {
  backgroundColor: "yellow" | "red-dark" | "orange" | "purple-dark";
};

export const Container = styled.footer`
  background-color: ${({ theme }) => theme["blue-light"]};
  color: ${({ theme }) => theme.white};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;
    max-width: 1440px;
    margin: 0 auto;
    padding: 3rem 20px;
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
  background-color: ${({ backgroundColor, theme }) => theme[backgroundColor]};
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
    font-weight: bold;
  }

  > form {
    position: relative;
  }

  > form > input {
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    border-radius: 8px;
    border: none;
    background-color: white;
  }

  > form > button {
    position: absolute;
    border: none;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme["blue-light"]};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: transparent;

    > svg {
      font-size: 1rem;
    }
  }
`;
