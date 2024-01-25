import styled from "styled-components";
import NavButton from "../../../components/NavButton";
import { Button } from "../../../components/NavButton/styles";
import { ComponentProps } from "react";
import { TextField } from "@mui/material";

interface InputProps extends ComponentProps<typeof TextField> {}

export const Main = styled.main`
  background-color: ${(props) => props.theme["purple-light"]};
`;

export const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 8rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${(props) => props.theme.white};
  padding: 4rem 2.5rem;
  border-radius: 24px;
  max-width: 900px;
  text-align: center;

  @media (max-width: 1000px) {
    padding: 2rem;
  }
`;

export const BackToHome = styled(NavButton)`
  max-width: fit-content;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 475px) {
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${(props) => props.theme["blue-dark"]};
  margin-bottom: 0.75rem;

  @media (max-width: 1000px) {
    font-size: 1.75rem;
  }
`;

export const RegisterText = styled.span`
  color: ${(props) => props.theme["blue-dark"]};
  margin-bottom: 1.75rem;

  ${Button} {
    padding: 0;
    display: inline-block;
    width: fit-content;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 5rem;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const Input = styled(TextField)<InputProps>`
  width: 100%;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 6px;
  padding: 1.25rem 0;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme.white};
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap: 0.5rem;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    padding: 0.5rem;
    font-size: 1rem;
    margin-top: 0;
  }
`;

export const Errors = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme["red-dark"]};
  font-weight: bold;
  min-height: 0.9375rem;
  margin-top: 0.5rem;
`;
