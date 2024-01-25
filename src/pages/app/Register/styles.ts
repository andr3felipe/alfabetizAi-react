import styled from "styled-components";
import { TextField } from "@mui/material";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<typeof TextField> {}

export const Container = styled.main`
  text-align: center;
  padding: 4rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  gap: 1rem;
`;

export const Intro = styled.div`
  h1 {
    margin-bottom: 0.5rem;
  }

  margin-bottom: 2rem;
`;

export const Form = styled.form`
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme["blue-dark"]};
  padding: 4rem;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ErrorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Input = styled(TextField)<InputProps>`
  width: 100%;

  p {
    font-size: 0.75rem;
  }
`;

export const HelperText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin-top: 3px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
  justify-self: flex-start;
  align-self: flex-start;

  position: absolute;
  left: 0;

  @media (max-width: 600px) {
    position: relative;
  }
`;

export const Errors = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme["red-dark"]};
  font-weight: bold;
  margin: 4px 14px;
`;
