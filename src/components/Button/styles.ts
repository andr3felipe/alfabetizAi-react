import styled from "styled-components";
import { ButtonProps as Props } from ".";

type ButtonProps = Pick<Props, "color" | "backgroundcolor">;

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: block;
  background-color: ${(props) => props.theme[props["backgroundcolor"]]};
  color: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  border: none;

  &:hover {
    opacity: 0.9;
    color: ${(props) => props.theme["blue-dark"]};
  }
`;
